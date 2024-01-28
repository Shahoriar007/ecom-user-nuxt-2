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
				class="product-single-container product-single-default product-center-vertical"
				v-if="product"
			>
				<div class="row">
					<div
						class="col-lg-3 order-1 order-lg-0"
						sticky-container
					>
						<div
							class="sidebar-wrapper mt-4 mt-lg-0"
							v-sticky="isSticky"
							sticky-offset="{top: 80}"
						>
							<pv-detail-left
								:product="product"
								:prev-product="prevProduct"
								:next-product="nextProduct"
							></pv-detail-left>
						</div>
					</div>

					<div class="col-lg-6 product-single-gallery order-0 order-lg-0">
						<pv-media-six :product="product"></pv-media-six>
					</div>

					<div
						class="col-lg-3 order-2 order-lg-0"
						sticky-container
					>
						<div
							class="sidebar-wrapper mt-2 mt-lg-0"
							v-sticky="isSticky"
							sticky-offset="{top: 80}"
						>
							<div class="product-single-details">
								<pv-detail-right :product="product"></pv-detail-right>

								<div class="product-single-share custom-product-single-share">
									<label class="sr-only">Share:</label>

									<div class="social-icons mt-0">
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
				</div>
			</div>
		</div>

		<div
			class="container mb-4"
			v-if="!product"
		>
			<div class="skel-group skel-center">
				<div class="summary entry-summary col-lg-3 order-1 order-lg-0"></div>
				<div class="summary-before col-lg-6 overflow-hidden order-0 order-lg-0"></div>
				<div class="summary entry-summary col-lg-3 order-2 order-lg-0"></div>
			</div>
		</div>

		<pv-desc-three
			:product="product"
			v-else
		></pv-desc-three>

		<div class="container">
			<div
				class="skel-group mb-4"
				v-if="!product"
			>
				<div class="tab-content col-lg-12 mb-7"></div>
			</div>
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
import PvMediaSix from '~/components/partials/product/media/PvMediaSix';
import PvDetailLeft from '~/components/partials/product/detail/PvDetailLeft';
import PvDetailRight from '~/components/partials/product/detail/PvDetailRight';
import PvDescThree from '~/components/partials/product/description/PvDescThree';
import PvRelatedProducts from '~/components/partials/product/PvRelatedProducts';
import PvSmallCollection from '~/components/partials/product/PvSmallCollection';

export default {
	directives: {
		Sticky
	},
	components: {
		PvMediaSix,
		PvDetailLeft,
		PvDetailRight,
		PvDescThree,
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
			productCategory: [],
			isSticky: false,
			isProductNav: {
				type: Boolean,
				default: true
			}
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