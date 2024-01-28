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
				class="product-single-container product-both-info"
				v-if="product"
			>
				<div class="product-single-details">
					<div class="d-md-flex">
						<div class="d-flex align-items-start">
							<h1 class="product-title w-auto">{{product.name}}</h1>

							<div
								class="product-nav pt-2 ml-5 position-relative top-0 float-right"
								v-if="isProductNav"
							>
								<div
									class="product-prev"
									:class="{disabled: !prevProduct}"
								>
									<nuxt-link
										:to="'/product/sticky-both/' + prevProduct.slug"
										v-if="prevProduct"
										key="toPrevProduct"
									>
										<span class="product-link"></span>

										<span class="product-popup">
											<span class="box-content">
												<img
													alt="product"
													:width="prevProduct.width"
													:height="prevProduct.height"
													:src="`${baseUrl}${prevProduct.pictures[0].url}`"
													style="padding-top: 0px;"
												/>

												<span>{{ prevProduct.name }}</span>
											</span>
										</span>
									</nuxt-link>

									<a
										href="javascript:;"
										v-else
									>
										<span class="product-link"></span>
									</a>
								</div>

								<div
									class="product-next"
									:class="{disabled: !nextProduct}"
								>
									<nuxt-link
										:to="'/product/sticky-both/' + nextProduct.slug"
										v-if="nextProduct"
										key="toNexProduct"
									>
										<span class="product-link"></span>

										<span class="product-popup">
											<span class="box-content">
												<img
													alt="product"
													:width="nextProduct.width"
													:height="nextProduct.height"
													:src="`${baseUrl}${nextProduct.pictures[0].url}`"
													style="padding-top: 0px;"
												/>

												<span>{{ nextProduct.name }}</span>
											</span>
										</span>
									</nuxt-link>

									<a
										href="javascript:;"
										v-else
									>
										<span class="product-link"></span>
									</a>
								</div>
							</div>
						</div>

						<div class="product-single-share ml-sm-auto">
							<label class="sr-only">Share:</label>

							<div class="social-icons mr-2 pr-2 pb-5 pb-md-0">
								<a
									href="#"
									class="social-icon social-facebook icon-facebook"
									
									title="Facebook"
								></a>
								<a
									href="#"
									class="social-icon social-twitter icon-twitter"
									
									title="Twitter"
								></a>
								<a
									href="#"
									class="social-icon social-linkedin fab fa-linkedin-in"
									
									title="Linkedin"
								></a>
								<a
									href="#"
									class="social-icon social-gplus fab fa-google-plus-g"
									
									title="Google +"
								></a>
								<a
									href="#"
									class="social-icon social-mail icon-mail-alt"
									
									title="Mail"
								></a>
							</div>
						</div>
					</div>
					<div class="ratings-container">
						<div class="product-ratings">
							<span
								class="ratings"
								:style="'width:' + product.ratings * 20 + '%'"
							></span>
							<span class="tooltiptext tooltip-top">{{ product.ratings | priceFormat }}</span>
						</div>
						<a
							href="javascript:;"
							class="rating-link"
						>( {{ product.reviews }} Reviews )</a>
					</div>

					<hr class="short-divider" />
				</div>

				<div class="row mb-lg-3">
					<div
						class="col-lg-3"
						sticky-container
					>
						<div
							class="sidebar-wrapper"
							v-sticky="isSticky"
							sticky-offset="{top: 80}"
						>
							<pv-detail-left
								:product="product"
								:prev-product="prevProduct"
								:next-product="nextProduct"
								:is-title="false"
							></pv-detail-left>
						</div>
					</div>

					<div class="col-lg-6 product-single-gallery mb-lg-0">
						<pv-media-three :product="product"></pv-media-three>
					</div>

					<div
						class="col-lg-3"
						sticky-container
					>
						<div
							class="sidebar-wrapper"
							v-sticky="isSticky"
							sticky-offset="{top: 80}"
						>
							<div class="product-single-details">
								<pv-detail-right :product="product"></pv-detail-right>
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
			<div class="skel-group">
				<div class="summary entry-summary col-lg-3"></div>
				<div class="summary-info-before col-lg-6 overflow-hidden"></div>
				<div class="summary entry-summary col-lg-3"></div>
			</div>
		</div>

		<div class="product-single-tabs custom-product-single-tabs pt-2 mb-0 mt-6 pb-3">
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

		<div class="product-both-info-bottom bg-gray">
			<div class="container">
				<div class="align-items-center row mb-0">
					<div class="col-md-4 col-sm-6">
						<h3 class="heading">
							<strong>INCREDIBLE QUALITY</strong>
						</h3>

						<p>
							Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
							minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo
						</p>

						<h3 class="heading">
							<strong>ADVANCED SOUND</strong>
						</h3>

						<p>
							Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
							minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo
						</p>
					</div>

					<div class="col-md-4 d-md-block d-none"></div>

					<div class="col-md-4 col-sm-6">
						<h3 class="heading text-right">
							<strong>ULTRA BOOST</strong>
						</h3>

						<p class="text-md-right">
							Sed do eiusmod tempor incididunt ut labore et dolore magna
							aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
							ut aliquip ex ea commodo
						</p>

						<h3 class="heading text-right">
							<strong>NOISE REDUCTION</strong>
						</h3>

						<p class="text-md-right">
							Sed do eiusmod tempor incididunt ut labore et dolore magna
							aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
							ut aliquip ex ea commodo
						</p>
					</div>
				</div>
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
import PvDetailLeft from '~/components/partials/product/detail/PvDetailLeft';
import PvDetailRight from '~/components/partials/product/detail/PvDetailRight';
import PvDescOne from '~/components/partials/product/description/PvDescOne';
import PvRelatedProducts from '~/components/partials/product/PvRelatedProducts';
import PvSmallCollection from '~/components/partials/product/PvSmallCollection';

export default {
	directives: {
		Sticky
	},
	components: {
		PvMediaThree,
		PvDetailLeft,
		PvDetailRight,
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
			productCategory: [],
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