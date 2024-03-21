<template>
	<pv-carousel
		class="home-slider slide-animate swiper-carousel swiper-theme nav-circle mb-2"
		:options="introSlider"
		v-animate
	>
		<div class="home-slide home-slide1 banner swiper-slide">
			<img
				class="slide-bg"
				v-lazy="'./images/home/slider/slide-1.jpg'"
				alt="slider image"
				width="1420"
				height="350"
				image-ratio="24.64"
			/>
			<!-- <div class="container d-flex align-items-sm-center justify-content-sm-between justify-content-center flex-column flex-sm-row">
				<div class="banner-content content-left text-sm-right mb-sm-0 mb-2">
					<h2
						class="text-shadow text-white font1 mb-0 appear-animate"
						data-animation-duration="1200"
						data-animation-name="fadeInUpShorter"
						data-animation-delay="100"
					>TRENDY</h2>
					<h1
						class="text-dark appear-animate"
						data-animation-duration="1200"
						data-animation-name="fadeInUpShorter"
						data-animation-delay="400"
					>GAMING</h1>
					<h3
						class="text-dark mb-0 appear-animate"
						data-animation-duration="1200"
						data-animation-name="fadeInUpShorter"
						data-animation-delay="600"
					>CHAIRS</h3>
					<h2
						class="text-shadow text-white font1 mr-0 mb-0 appear-animate"
						data-animation-duration="1200"
						data-animation-name="fadeInUpShorter"
						data-animation-delay="800"
					>DEALS</h2>
				</div>

				<div
					class="banner-content content-right appear-animate"
					data-animation-duration="1200"
					data-animation-name="fadeInUpShorter"
					data-animation-delay="1000"
				>
					<h4 class="text-transform-none">Porto Game Chair</h4>
					<h5 class="text-price text-transform-none mb-0">from <span>$299.99</span></h5>
					<h5 class="coupon-sale-text">
						<span>to</span>
						<b class="text-white align-middle"><sup>$</sup><em class="align-text-top">199</em><sup>99</sup></b>
					</h5>
					<nuxt-link
						to="/shop"
						class="btn btn-dark btn-lg"
					>Shop Now</nuxt-link>
				</div>
			</div> -->
		</div>

		<div class="home-slide home-slide2 banner swiper-slide">
			<img
				class="slide-bg"
				v-lazy="'./images/home/slider/slide-2.jpg'"
				alt="slider image"
				width="1420"
				height="350"
				image-ratio="24.64"
			/>
			<!-- <div class="container d-flex align-items-sm-center justify-content-center justify-content-sm-between flex-column-reverse flex-sm-row">
				<div
					class="banner-content content-left mt-2 mt-sm-0 appear-animate"
					data-animation-duration="1200"
					data-animation-name="fadeInUpShorter"
					data-animation-delay="1000"
				>
					<h4 class="text-transform-none">Best Gadtets Deals</h4>
					<h5 class="coupon-sale-text">
						<span>from</span>
						<b class="text-white align-middle"><sup>$</sup><em class="align-text-top">1</em><sup>99</sup></b>
					</h5>
					<nuxt-link
						to="/shop"
						class="btn btn-dark btn-lg"
					>Shop Now</nuxt-link>
				</div>

				<div class="banner-content content-right text-sm-right">
					<h2
						class="text-shadow text-white font1 mb-0 appear-animate"
						data-animation-duration="1200"
						data-animation-name="fadeInUpShorter"
						data-animation-delay="100"
					>NEW</h2>
					<h1
						class="text-dark appear-animate"
						data-animation-duration="1200"
						data-animation-name="fadeInUpShorter"
						data-animation-delay="400"
					>SELECTED</h1>
					<h3
						class="text-dark mb-0 appear-animate"
						data-animation-duration="1200"
						data-animation-name="fadeInUpShorter"
						data-animation-delay="600"
					>DEALS</h3>
					<h2
						class="text-shadow text-white font1 mr-0 mb-0 appear-animate"
						data-animation-duration="1200"
						data-animation-name="fadeInUpShorter"
						data-animation-delay="800"
					>RELEASES</h2>
				</div>
			</div> -->
		</div>
	</pv-carousel>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import { introSlider } from '~/utils/data/carousel';

export default {
	components: {
		PvCarousel
	},
	data: function() {
		return {
			introSlider: introSlider
		};
	}
};
</script>