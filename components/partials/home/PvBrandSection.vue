<template>
	<div
		class="brands-section mt-2 mb-3 appear-animate"
		data-animation-delay="200"
		data-animation-name="fadeIn"
		data-animation-duration="1000"
		v-animate
	>
		<div class="headding">
			<h4 class="section-title text-transform-none">Featured Brands</h4>
		</div>

		<pv-carousel
			class="brands-slider swiper-carousel bg-white swiper-theme nav-circle images-center"
			:options="brandSlider"
		>
			<div class="swiper-slide">
				<figure>
					<img
						:src="'./images/brands/small/brand1.png'"
						width="140"
						height="60"
						alt="brand"
					/>
				</figure>
			</div>

			<div class="swiper-slide">
				<figure>
					<img
						:src="'./images/brands/small/brand2.png'"
						width="140"
						height="60"
						alt="brand"
					/>
				</figure>
			</div>

			<div class="swiper-slide">
				<figure>
					<img
						:src="'./images/brands/small/brand3.png'"
						width="140"
						height="60"
						alt="brand"
					/>
				</figure>
			</div>

			<div class="swiper-slide">
				<figure>
					<img
						:src="'./images/brands/small/brand4.png'"
						width="140"
						height="60"
						alt="brand"
					/>
				</figure>
			</div>

			<div class="swiper-slide">
				<figure>
					<img
						:src="'./images/brands/small/brand5.png'"
						width="140"
						height="60"
						alt="brand"
					/>
				</figure>
			</div>

			<div class="swiper-slide">
				<figure>
					<img
						:src="'./images/brands/small/brand6.png'"
						width="140"
						height="60"
						alt="brand"
					/>
				</figure>
			</div>

			<div class="swiper-slide">
				<figure>
					<img
						:src="'./images/brands/small/brand1.png'"
						width="140"
						height="60"
						alt="brand"
					/>
				</figure>
			</div>
		</pv-carousel>
	</div>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import { brandSlider } from '~/utils/data/carousel';

export default {
	components: {
		PvCarousel
	},
	data: function() {
		return {
			brandSlider: brandSlider
		};
	}
};
</script>