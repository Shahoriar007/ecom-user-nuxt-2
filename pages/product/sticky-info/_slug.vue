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

		<div class="container">
			<div
				class="product-single-container product-single-info"
				v-if="product"
			>
				<div class="row">
					<div class="col-lg-5 col-md-6 product-single-gallery">
						<pv-media-three :product="product"></pv-media-three>
					</div>

					<div
						class="col-lg-7 col-md-6"
						sticky-container
					>
						<div
							class="sidebar-wrapper"
							v-sticky="isSticky"
							sticky-offset="{top: 80}"
						>
							<div class="product-single-details">
								<pv-detail-one
									:product="product"
									:prev-product="prevProduct"
									:next-product="nextProduct"
								></pv-detail-one>
							</div>
						</div>
					</div>
				</div>

				<div class="row align-items-start">
					<div class="widget widget-info col-md-9 col-xl-6 pb-4 pb-md-0">
						<ul class="promote">
							<li>
								<i class="icon-shipped"></i>
								<h4>
									FREE
									<br />SHIPPING
								</h4>
							</li>
							<li>
								<i class="icon-us-dollar"></i>
								<h4>
									100% MONEY
									<br />BACK GUARANTEE
								</h4>
							</li>
							<li>
								<i class="icon-online-support"></i>
								<h4>
									ONLINE
									<br />SUPPORT 24/7
								</h4>
							</li>
						</ul>
					</div>

					<div class="product-single-share col-md-3 col-xl-6 align-items-start justify-content-md-end mt-0">
						<label class="sr-only">Share:</label>

						<div class="social-icons mt-0 pb-5 pb-md-0">
							<a
								href="javascript:;"
								class="social-icon social-facebook icon-facebook"
								
								title="Facebook"
							></a>
							<a
								href="javascript:;"
								class="social-icon social-twitter icon-twitter"
								
								title="Twitter"
							></a>
							<a
								href="javascript:;"
								class="social-icon social-linkedin fab fa-linkedin-in"
								
								title="Linkedin"
							></a>
							<a
								href="javascript:;"
								class="social-icon social-gplus fab fa-google-plus-g"
								
								title="Google +"
							></a>
							<a
								href="javascript:;"
								class="social-icon social-mail icon-mail-alt"
								
								title="Mail"
							></a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div
			class="container"
			v-if="!product"
		>
			<div class="skel-group">
				<div class="summary-info-before col-lg-5 col-md-6"></div>
				<div class="summary entry-summary col-lg-7 col-md-6"></div>
			</div>
		</div>

		<div class="product-single-tabs custom-product-single-tabs bg-gray mb-4">
			<div class="container">
				<div
					class="skel-group"
					v-if="!product"
				>
					<div class="tab-content col-lg-12 mb-7"></div>
				</div>
				<pv-desc-one
					:product="product"
					v-else
				></pv-desc-one>
			</div>
		</div>

		<div class="container">
			<pv-related-products
				:products="relatedProducts"
				class="mb-1"
			></pv-related-products>
		</div>
	</main>
</template>
    
<script>
import { VueTreeList, Tree } from 'vue-tree-list';
import Sticky from 'vue-sticky-directive';
import Api, { baseUrl, currentDemo } from '~/api';
import PvMediaThree from '~/components/partials/product/media/PvMediaThree';
import PvDetailOne from '~/components/partials/product/detail/PvDetailOne';
import PvDescOne from '~/components/partials/product/description/PvDescOne';
import PvRelatedProducts from '~/components/partials/product/PvRelatedProducts';
import PvSmallCollection from '~/components/partials/product/PvSmallCollection';

export default {
	directives: {
		Sticky
	},
	components: {
		PvMediaThree,
		PvDetailOne,
		PvDescOne,
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