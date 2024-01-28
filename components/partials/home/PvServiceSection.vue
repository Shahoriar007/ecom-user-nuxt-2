<template>
	<pv-carousel
		class="info-boxes-slider swiper-carousel swiper-theme appear-animate"
		data-animation-name="fadeInUpShorter"
		data-animation-delay="200"
		v-animate
		:options="serviceSlider"
	>
		<div class="info-box info-box-icon-left swiper-slide">
			<i class="icon-shipping text-primary"></i>

			<div class="info-box-content">
				<h4>FREE SHIPPING &amp; RETURN</h4>
				<p class="text-body">Free shipping on all orders over $99.</p>
			</div>
		</div>

		<div class="info-box info-box-icon-left swiper-slide">
			<i class="icon-money text-primary"></i>

			<div class="info-box-content">
				<h4>MONEY BACK GUARANTEE</h4>
				<p class="text-body">100% money back guarantee</p>
			</div>
		</div>

		<div class="info-box info-box-icon-left swiper-slide">
			<i class="icon-support text-primary"></i>

			<div class="info-box-content">
				<h4>ONLINE SUPPORT 24/7</h4>
				<p class="text-body">Lorem ipsum dolor sit amet.</p>
			</div>
		</div>

		<div class="info-box info-box-icon-left swiper-slide">
			<i class="icon-password-lock text-primary"></i>

			<div class="info-box-content">
				<h4>SECURE PAYMENT</h4>
				<p class="text-body">Lorem ipsum dolor sit amet.</p>
			</div>
		</div>
	</pv-carousel>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import { serviceSlider } from '~/utils/data/carousel';

export default {
	components: {
		PvCarousel
	},
	data: function() {
		return {
			serviceSlider: serviceSlider
		};
	}
};
</script>