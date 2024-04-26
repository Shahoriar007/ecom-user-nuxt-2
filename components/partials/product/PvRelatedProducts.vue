<template>
	<div class="products-section pt-0 pb-0">
		<h2
			class="section-title"
			v-if="products"
		>Related Products</h2>

		<pv-carousel
			class="skel-carousel dots-top dots-small"
			:options="productSliderThree"
			v-if="!products"
		>
			<div
				v-for="item in [1,2,3,4]"
				:key="item"
				class="swiper-slide skel-pro"
			></div>
		</pv-carousel>

		<pv-carousel
			class="products-slider swiper-carousel swiper-theme carousel-with-bg nav-circle pb-0 appear-animate"
			data-animation-name="fadeIn"
			data-animation-delay="100"
			:options="productSliderThree"
			v-animate
			v-if="products && products.length > 0"
		>
			<pv-product-three
				:product="item"
				v-for="(item,index) in products"
				:key="'related-product' + index"
				class="swiper-slide"
			></pv-product-three>
		</pv-carousel>


		<div
			class="info-box with-icon p-0 mb-3"
			v-if="products && products.length === 0"
		>
			<p>No products were found matching your selection.</p>
		</div>
	</div>
</template>

<script>
import PvProductThree from '~/components/features/product/PvProductThree';
import PvCarousel from '~/components/features/PvCarousel';
import { productSliderThree } from '~/utils/data/carousel';

export default {
	components: {
		PvProductThree,
		PvCarousel
	},
	data: function() {
		return {
			productSliderThree: productSliderThree
		};
	},
	props: {
		products: Array
	}
};
</script>