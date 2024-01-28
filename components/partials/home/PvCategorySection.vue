<template>
	<div
		class="categories-section appear-animate"
		data-animation-name="fadeIn"
		data-animation-delay="100"
		v-animate
	>
		<pv-carousel
			class="categories-slider swiper-carousel swiper-theme show-nav-hover nav-outer appear-animate"
			:options="categorySlider"
			data-animation-name="fadeInUpShorter"
			data-animation-delay="200"
			data-animation-duration="1000"
			v-animate
		>
			<div
				class="product-category swiper-slide"
				data-animation-name="fadeInUpShorter"
				v-animate
			>
				<nuxt-link :to="{path: '/shop', query: {category: 'fashion'}}">
					<figure>
						<img
							v-lazy="'./images/home/categories/category-1.jpg'"
							alt="category"
							width="280"
							height="240"
							style="background: #f4f4f4"
						/>
					</figure>
					<div class="category-content">
						<h3>Fashion</h3>
						<span><mark class="count">7</mark> products</span>
					</div>
				</nuxt-link>
			</div>

			<div
				class="product-category swiper-slide"
				data-animation-name="fadeInUpShorter"
				v-animate
			>
				<nuxt-link :to="{path: '/shop', query: {category: 'furniture-2'}}">
					<figure>
						<img
							v-lazy="'./images/home/categories/category-2.jpg'"
							alt="category"
							width="280"
							height="240"
							style="background: #f4f4f4"
						/>
					</figure>
					<div class="category-content">
						<h3>Furniture</h3>
						<span><mark class="count">1</mark> products</span>
					</div>
				</nuxt-link>
			</div>

			<div
				class="product-category swiper-slide"
				data-animation-name="fadeInUpShorter"
				v-animate
			>
				<nuxt-link :to="{path: '/shop', query: {category: 'sports'}}">
					<figure>
						<img
							v-lazy="'./images/home/categories/category-3.jpg'"
							alt="category"
							width="280"
							height="240"
							style="background: #f4f4f4"
						/>
					</figure>
					<div class="category-content">
						<h3>Sports</h3>
						<span><mark class="count">2</mark> products</span>
					</div>
				</nuxt-link>
			</div>

			<div
				class="product-category swiper-slide"
				data-animation-name="fadeInUpShorter"
				v-animate
			>
				<nuxt-link :to="{path: '/shop', query: {category: 'toys-5'}}">
					<figure>
						<img
							v-lazy="'./images/home/categories/category-4.jpg'"
							alt="category"
							width="280"
							height="240"
							style="background: #f4f4f4"
						/>
					</figure>
					<div class="category-content">
						<h3>Toys</h3>
						<span><mark class="count">2</mark> products</span>
					</div>
				</nuxt-link>
			</div>

			<div
				class="product-category swiper-slide"
				data-animation-name="fadeInUpShorter"
				v-animate
			>
				<nuxt-link :to="{path: '/shop', query: {category: 'cameras'}}">
					<figure>
						<img
							v-lazy="'./images/home/categories/category-5.jpg'"
							alt="category"
							width="280"
							height="240"
							style="background: #f4f4f4"
						/>
					</figure>
					<div class="category-content">
						<h3>Cameras</h3>
						<span><mark class="count">1</mark> products</span>
					</div>
				</nuxt-link>
			</div>

			<div
				class="product-category swiper-slide"
				data-animation-name="fadeInUpShorter"
				v-animate
			>
				<nuxt-link :to="{path: '/shop', query: {category: 'gaming'}}">
					<figure>
						<img
							v-lazy="'./images/home/categories/category-6.jpg'"
							alt="category"
							width="280"
							height="240"
							style="background: #f4f4f4"
						/>
					</figure>
					<div class="category-content">
						<h3>Gaming</h3>
						<span><mark class="count">1</mark> products</span>
					</div>
				</nuxt-link>
			</div>

			<div
				class="product-category swiper-slide"
				data-animation-name="fadeInUpShorter"
				v-animate
			>
				<nuxt-link :to="{path: '/shop', query: {category: 'headphone-2'}}">
					<figure>
						<img
							v-lazy="'./images/home/categories/category-7.jpg'"
							alt="category"
							width="280"
							height="240"
							style="background: #f4f4f4"
						/>
					</figure>
					<div class="category-content">
						<h3>Headphones</h3>
						<span><mark class="count">1</mark> products</span>
					</div>
				</nuxt-link>
			</div>

			<div
				class="product-category swiper-slide"
				data-animation-name="fadeInUpShorter"
				v-animate
			>
				<nuxt-link :to="{path: '/shop', query: {category: 'smartphones'}}">
					<figure>
						<img
							v-lazy="'./images/home/categories/category-8.jpg'"
							alt="category"
							width="280"
							height="240"
							style="background: #f4f4f4"
						/>
					</figure>
					<div class="category-content">
						<h3>Smartphones</h3>
						<span><mark class="count">1</mark> products</span>
					</div>
				</nuxt-link>
			</div>
		</pv-carousel>
	</div>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import { categorySlider } from '~/utils/data/carousel';

export default {
	components: {
		PvCarousel
	},
	data: function() {
		return {
			categorySlider: categorySlider
		};
	}
};
</script>