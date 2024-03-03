<template>
	<main class="main">
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

		<div class="container skeleton-body product-layout-grid">
			<div
				class="product-single-container product-single-grid"
				v-if="product"
			>
				<div class="row">
					<div class="col-lg-8 product-single-gallery">
						<pv-media-seven :product="product"></pv-media-seven>
					</div>

					<div class="col-lg-4 product-single-details">
						<pv-detail-one
							:product="product"
							:prev-product="prevProduct"
							:next-product="nextProduct"
						></pv-detail-one>
					</div>
				</div>
			</div>

			<div
				class="skel-group"
				v-else
			>
				<div class="summary-before col-lg-8"></div>
				<div class="summary entry-summary col-lg-4"></div>
				<div class="tab-content col-lg-12 mb-7"></div>
			</div>

			<pv-desc-one
				:product="product"
				v-if="product"
			></pv-desc-one>

			<pv-related-products
				:products="relatedProducts"
				class="mb-1"
			></pv-related-products>

			<hr class="mt-0 m-b-5" />

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
import Api, { baseUrl, currentDemo } from '~/api';
import PvMediaSeven from '~/components/partials/product/media/PvMediaSeven';
import PvDetailOne from '~/components/partials/product/detail/PvDetailOne';
import PvDescOne from '~/components/partials/product/description/PvDescOne';
import PvRelatedProducts from '~/components/partials/product/PvRelatedProducts';
import PvSmallCollection from '~/components/partials/product/PvSmallCollection';

export default {
	components: {
		PvMediaSeven,
		PvDetailOne,
		PvDescOne,
		PvRelatedProducts,
		PvSmallCollection
	},
	data: function() {
		return {
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
	methods: {
		getProduct: function() {
			this.loaded = false;



			Api.get(`${baseUrl}/products/${this.$route.params.slug}`, {
				params: { demo: currentDemo }
			})
				.then(response => {
					this.product = response.data.product;
					console.log(this.product);



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
		}
	}
};
</script>