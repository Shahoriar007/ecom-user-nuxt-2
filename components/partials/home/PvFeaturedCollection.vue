<template>
	<section class="featured-products-section">
		<h2
			class="section-title ls-n-10 m-b-4 appear-animate"
			data-animation-name="fadeInUpShorter"
			v-animate
		>Featured Products</h2>

		<pv-carousel
			class="products-slider dots-top dots-small m-b-1 pb-1 appear-animate"
			:options="baseSlider3"
			v-animate
			v-if="products.length === 0"
		>
			<div
				v-for="item in [1,2,3,4,5,6]"
				:key="item"
				class="swiper-slide product-loading-overlay"
			></div>
		</pv-carousel>

		<pv-carousel
			class="products-slider dots-top dots-small m-b-1 pb-1 appear-animate"
			:options="baseSlider3"
			v-animate
		>
			<pv-product-three
				v-for="(product,index) in products"
				:key="'featured' + index"
				:product="product"
				class="swiper-slide appear-aniamte"
				data-animation-delay="100"
				data-animation-name="fadeIn"
				v-animate
			></pv-product-three>
		</pv-carousel>
	</section>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import PvProductThree from '~/components/features/product/PvProductThree';
import { baseSlider3 } from '~/utils/data/carousel';

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
			baseSlider3: baseSlider3
		};
	}
};
</script>