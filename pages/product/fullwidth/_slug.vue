<template>
	<main class="main skeleton-body">
		<nav
			aria-label="breadcrumb"
			class="breadcrumb-nav mb-3"
		>
			<div class="container">
				<ol class="breadcrumb">
					<li class="breadcrumb-item">
						<nuxt-link to="/">
							<i class="icon-home"></i>
						</nuxt-link>
					</li>

					<li class="breadcrumb-item">
						<nuxt-link to="/shop">Shop</nuxt-link>
					</li>
					<li
						class="breadcrumb-item"
						v-if="loaded"
					>
						<nuxt-link
							:to="{path: '/shop', query: {category: category.slug}}"
							v-for="(category, index) in productCategory"
							:key="`product-category-${index}`"
						>{{index === productCategory.length - 1 ? category.name : category.name + ', '}}</nuxt-link>
					</li>
					<li
						class="breadcrumb-item active"
						aria-current="page"
						v-if="loaded"
					>{{product.name}}</li>
				</ol>
			</div>
		</nav>

		<div
			class="product-single-container product-single-default product-full-width"
			v-if="product"
		>
			<div class="container-fluid pl-lg-0 padding-right-lg">
				<div class="row">
					<div
						class="col-lg-6 product-single-gallery"
						sticky-container
					>
						<div
							v-sticky="isSticky"
							sticky-offset="{top: 58}"
						>
							<pv-media-two :product="product"></pv-media-two>
						</div>
					</div>

					<div class="col-lg-6 pb-1">
						<pv-detail-three
							:product="product"
							:prev-product="prevProduct"
							:next-product="nextProduct"
						></pv-detail-three>
					</div>
				</div>
			</div>
		</div>

		<div
			class="skel-group"
			v-else
		>
			<div class="summary-before col-lg-6"></div>
			<div class="summary entry-summary col-lg-6"></div>
			<div class="tab-content col-lg-12 mb-7"></div>
		</div>

		<div class="container-fluid">
			<pv-related-products
				:products="relatedProducts"
				class="mb-1"
			></pv-related-products>

			<hr class="mt-0 m-b-5" />
		</div>

		<div class="container">
			<div class="skeleton-body">
				<pv-small-collection
					:featured-products="featuredProducts"
					:best-products="bestProducts"
					:latest-products="latestProducts"
					:top-rated-products="topRatedProducts"
				></pv-small-collection>
			</div>
		</div>
	</main>
</template>
    
<script>
import { VueTreeList, Tree } from 'vue-tree-list';
import Sticky from 'vue-sticky-directive';
import Api, { baseUrl, currentDemo } from '~/api';
import PvMediaTwo from '~/components/partials/product/media/PvMediaTwo';
import PvDetailThree from '~/components/partials/product/detail/PvDetailThree';
import PvRelatedProducts from '~/components/partials/product/PvRelatedProducts';
import PvSmallCollection from '~/components/partials/product/PvSmallCollection';

export default {
	directives: {
		Sticky
	},
	components: {
		PvMediaTwo,
		PvDetailThree,
		PvRelatedProducts,
		PvSmallCollection
	},
	data: function() {
		return {
			isSticky: false,
			product: null,
			relatedProducts: null,
			featuredProducts: null,
			bestProducts: null,
			latestProducts: null,
			topRatedProducts: null,
			nextProduct: null,
			prevProduct: null,
			baseUrl: baseUrl,
			loaded: false,
			categoryList: [],
			productCategory: []
		};
	},
	created: function() {
		this.getProduct();
	},
	mounted: function() {
		this.resizeHandler();
		window.addEventListener('resize', this.resizeHandler, {
			passive: true
		});
	},
	destroyed: function() {
		window.removeEventListener('resize', this.resizeHandler);
	},
	methods: {
		getProduct: function() {
			this.loaded = false;

			Api.get(`${baseUrl}/products/${this.$route.params.slug}`, {
				params: { demo: currentDemo }
			})
				.then(response => {
					this.product = response.data.product;
					this.relatedProducts = response.data.relatedProducts;
					this.featuredProducts = response.data.featuredProducts;
					this.bestProducts = response.data.bestSellingProducts;
					this.latestProducts = response.data.latestProducts;
					this.topRatedProducts = response.data.topRatedProducts;
					this.prevProduct = response.data.prevProduct;
					this.nextProduct = response.data.nextProduct;

					this.product.product_categories.map(item => {
						this.productCategory.push(item);
					});

					this.loaded = true;
				})
				.catch(error => ({ error: JSON.stringify(error) }));
		},
		resizeHandler: function() {
			this.isSticky = window.innerWidth > 991 ? true : false;
		}
	}
};
</script>