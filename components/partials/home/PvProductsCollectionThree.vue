<template>
	<div
		class="product-slider-tab selected-products-section appear-animate bg-white"
		data-animation-name="fadeIn"
		data-animation-delay="100"
		v-animate
	>
		<pv-tabs>
			<div class="heading shop-list d-flex flex-lg-row flex-column align-items-lg-center bg-gray mb-0 pl-0 pr-0 pt-2">
				<h4 class="section-title text-transform-none mb-0 ml-0">Selected Products</h4>
				<ul
					class="nav justify-content-lg-center mb-0"
					id="myTab-two"
					role="tablist"
				>
					<li class="nav-item">
						<a
							class="nav-link active"
							id="seller-two-tab"
							data-toggle="tab"
							href="#seller-two"
							role="tab"
							aria-controls="seller-two"
							aria-selected="true"
						>Best Sellers</a>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							id="new-two-tab"
							data-toggle="tab"
							href="#new-two"
							role="tab"
							aria-controls="new-two"
							aria-selected="false"
						>New Arrivals</a>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							id="best-two-tab"
							data-toggle="tab"
							href="#best-two"
							role="tab"
							aria-controls="best-two"
							aria-selected="false"
						>Best Ratings</a>
					</li>
				</ul>
				<nuxt-link
					class="view-all ml-auto"
					to="/shop"
				>View All<i class="fas fa-long-arrow-alt-right"></i></nuxt-link>
			</div>

			<div class="tab-content">
				<div
					class="tab-pane fade show active"
					id="seller-two"
					role="tabpanel"
					aria-labelledby="seller-tab"
				>
					<pv-carousel
						class="products-slider swiper-carousel nav-circle carousel-with-bg swiper-theme pb-0"
						:options="productSlider"
						v-if="!bestProducts || ( bestProducts && bestProducts.length === 0)"
					>
						<div
							v-for="item in [1,2,3,4,5,6,7]"
							:key="item"
							class="swiper-slide product-loading-overlay"
						></div>
					</pv-carousel>

					<pv-carousel
						class="products-slider swiper-carousel nav-circle carousel-with-bg swiper-theme pb-0 appear-animate"
						data-animation-name="fadeIn"
						data-animation-delay="100"
						:options="productSlider"
						v-animate
						v-else
					>
						<pv-product-three
							v-for="(product,index) in bestProducts.slice(0, 7)"
							:key="'product' + index"
							:product="product"
							class="swiper-slide"
						></pv-product-three>
					</pv-carousel>
				</div>
				<div
					class="tab-pane fade"
					id="new-two"
					role="tabpanel"
					aria-labelledby="new-tab"
				>
					<pv-carousel
						class="products-slider swiper-carousel nav-circle carousel-with-bg swiper-theme pb-0"
						:options="productSlider"
						v-if="!newProducts || ( newProducts && newProducts.length === 0)"
					>
						<div
							v-for="item in [1,2,3,4,5,6,7]"
							:key="item"
							class="swiper-slide product-loading-overlay"
						></div>
					</pv-carousel>

					<pv-carousel
						class="products-slider swiper-carousel nav-circle carousel-with-bg swiper-theme pb-0 appear-animate"
						data-animation-name="fadeIn"
						data-animation-delay="100"
						:options="productSlider"
						v-animate
						v-else
					>
						<pv-product-three
							v-for="(product,index) in newProducts.slice(0, 7)"
							:key="'product' + index"
							:product="product"
							class="swiper-slide"
						></pv-product-three>
					</pv-carousel>
				</div>
				<div
					class="tab-pane fade"
					id="best-two"
					role="tabpanel"
					aria-labelledby="best-tab"
				>
					<pv-carousel
						class="products-slider swiper-carousel nav-circle carousel-with-bg swiper-theme pb-0"
						:options="productSlider"
						v-if="!topRatedProducts || ( topRatedProducts && topRatedProducts.length === 0)"
					>
						<div
							v-for="item in [1,2,3,4,5,6,7]"
							:key="item"
							class="swiper-slide product-loading-overlay"
						></div>
					</pv-carousel>

					<pv-carousel
						class="products-slider swiper-carousel nav-circle carousel-with-bg swiper-theme pb-0 appear-animate"
						data-animation-name="fadeIn"
						data-animation-delay="100"
						:options="productSlider"
						v-animate
						v-else
					>
						<pv-product-three
							v-for="(product,index) in topRatedProducts.slice(0, 7)"
							:key="'product' + index"
							:product="product"
							class="swiper-slide"
						></pv-product-three>
					</pv-carousel>
				</div>
			</div>
		</pv-tabs>
	</div>
</template>

<script>
import PvTabs from '~/components/features/PvTabs';
import PvCarousel from '~/components/features/PvCarousel';
import PvProductThree from '~/components/features/product/PvProductThree';
import { productSlider } from '~/utils/data/carousel';

export default {
	components: {
		PvTabs,
		PvCarousel,
		PvProductThree
	},
	props: {
		bestProducts: Array,
		topRatedProducts: Array,
		newProducts: Array
	},
	data: function() {
		return {
			productSlider: productSlider
		};
	}
};
</script>