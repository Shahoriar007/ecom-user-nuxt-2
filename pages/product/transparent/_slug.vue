<template>
	<main class="main skeleton-body product-layout-transparent">
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
			class="container"
			v-if="!product"
		>
			<div class="skel-group">
				<div class="summary-before col-lg-7"></div>
				<div class="summary entry-summary col-lg-5"></div>
				<div class="tab-content col-lg-12 mb-7"></div>
			</div>
		</div>

		<div
			class="product-single-container product-single-default product-transparent-image"
			:class="{'bg-gray' : product}"
		>
			<div class="container">
				<div
					class="row"
					v-if="product"
				>
					<div class="col-xl-7">
						<pv-media-five :product="product"></pv-media-five>
					</div>

					<div class="col-xl-5 product-single-details pt-3">
						<pv-detail-one
							:product="product"
							:prev-product="prevProduct"
							:next-product="nextProduct"
						></pv-detail-one>
					</div>
				</div>
			</div>
		</div>

		<div class="container">
			<pv-desc-two
				:product="product"
				v-if="product"
			></pv-desc-two>

			<pv-related-products :products="relatedProducts"></pv-related-products>
		</div>
	</main>
</template>

<script>
import PvMediaFive from '~/components/partials/product/media/PvMediaFive';
import PvDetailOne from '~/components/partials/product/detail/PvDetailOne';
import PvDescTwo from '~/components/partials/product/description/PvDescTwo';
import PvRelatedProducts from '~/components/partials/product/PvRelatedProducts';
import PvSmallCollection from '~/components/partials/product/PvSmallCollection';
import Api, { baseUrl, currentDemo } from '~/api';

export default {
	components: {
		PvMediaFive,
		PvDetailOne,
		PvDescTwo,
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
			loaded: false,
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