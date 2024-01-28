<template>
	<div>
		<pv-carousel
			class="products-slider swiper-carousel swiper-theme nav-outer carousel-with-bg show-nav-hover nav-image-center appear-animate"
			:options="productSlider"
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
			class="products-slider swiper-carousel swiper-theme nav-outer carousel-with-bg show-nav-hover nav-image-center appear-animate"
			data-animation-name="fadeIn"
			data-animation-delay="100"
			:options="productSlider"
			v-animate
		>
			<pv-product-three
				v-for="(product,index) in products.slice(0, 6)"
				:key="'fashion' + index"
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