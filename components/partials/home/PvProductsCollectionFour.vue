<template>
	<div
		class="recent-products-section appear-animate"
		data-animation-name="fadeIn"
		data-animation-delay="100"
		v-animate
	>
		<div class="heading shop-list d-flex align-items-center flex-wrap bg-gray mb-0 pl-0 pr-0">
			<h4 class="section-title text-transform-none mb-0 mr-0">Recently Viewed Products</h4>
			<nuxt-link
				class="view-all ml-auto"
				to="/shop"
			>View All<i class="fas fa-long-arrow-alt-right"></i></nuxt-link>
		</div>

		<pv-carousel
			class="products-slider swiper-carousel swiper-theme carousel-with-bg nav-circle pb-0"
			:options="productSlider"
			v-if="!products || (products && products.length === 0)"
		>
			<div
				v-for="item in [1,2,3,4,5,6,7]"
				:key="item"
				class="swiper-slide product-loading-overlay"
			></div>
		</pv-carousel>

		<pv-carousel
			class="products-slider swiper-carousel swiper-theme carousel-with-bg nav-circle pb-0 appear-animate"
			data-animation-name="fadeIn"
			data-animation-delay="100"
			:options="productSlider"
			v-animate
		>
			<pv-product-three
				v-for="(product,index) in products.slice(0, 7)"
				:key="'product' + index"
				:product="product"
				class="swiper-slide"
			></pv-product-three>
		</pv-carousel>
	</div>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import PvProductThree from '~/components/features/product/PvProductThree';
import { productSlider } from '~/utils/data/carousel';

export default {
	components: {
		PvCarousel,
		PvProductThree
	},
	props: {
		products: Array
	},
	data: function() {
		return {
			productSlider: productSlider
		};
	}
};
</script>