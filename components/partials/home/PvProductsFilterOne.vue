<template>
	<div
		class="category-filter-section bg-gray appear-animate"
		data-aniamtion-name="fadeInUpShorter"
		data-animation-delay="200"
		v-animate
	>
		<div class="container">
			<pv-tabs>
				<div class="row">
					<div class="col-lg-3 pr-lg-3 pr-sm-0 col-sm-6 order-1 order-sm-0">
						<div class="shop-list h-100">
							<h4>Sort By</h4>

							<ul
								class="nav nav-tabs flex-sm-column border-0"
								role="tablist"
							>
								<li
									@click="setFilterRoute"
									class="nav-item"
									data-category="kids-fashion"
								>
									<a
										href="javascript:;"
										class="nav-link active"
									>Kids Fashion</a>
								</li>

								<li
									@click="setFilterRoute"
									class="nav-item"
									data-category="casual-shoes"
								>
									<a
										href="javascript:;"
										class="nav-link"
									>Casual Shoes</a>
								</li>

								<li
									@click="setFilterRoute"
									class="nav-item"
									data-category="spring-and-autumn"
								>
									<a
										href="javascript:;"
										class="nav-link"
									>Spring & Autumn</a>
								</li>

								<li
									@click="setFilterRoute"
									class="nav-item"
									data-category="man"
								>
									<a
										href="javascript:;"
										class="nav-link"
									>Man</a>
								</li>

								<li
									@click="setFilterRoute"
									class="nav-item"
									data-category="accessories-2"
								>
									<a
										href="javascript:;"
										class="nav-link"
									>Accessories</a>
								</li>

								<li
									@click="setFilterRoute"
									class="nav-item"
									data-category="pants-and-polos"
								>
									<a
										href="javascript:;"
										class="nav-link"
									>Pants & Denim</a>
								</li>

								<li
									@click="setFilterRoute"
									class="nav-item"
									data-category="tees-knit-and-polos"
								>
									<a
										href="javascript:;"
										class="nav-link"
									>Tees, Knits & Polos</a>
								</li>

								<li
									@click="setFilterRoute"
									class="nav-item"
									data-category="watch-fashion"
								>
									<a
										href="javascript:;"
										class="nav-link"
									>Watch Fashion</a>
								</li>

								<li
									@click="setFilterRoute"
									class="nav-item"
									data-category="woman"
								>
									<a
										href="javascript:;"
										class="nav-link"
									>Woman</a>
								</li>

								<li
									@click="setFilterRoute"
									class="nav-item"
									data-category="accessories-3"
								>
									<a
										href="javascript:;"
										class="nav-link"
									>Accessories</a>
								</li>

								<li
									@click="setFilterRoute"
									class="nav-item"
									data-category="dresses-and-skirts"
								>
									<a
										href="javascript:;"
										class="nav-link"
									>Dresses & Skirts</a>
								</li>

								<li
									@click="setFilterRoute"
									class="nav-item"
									data-category="shoes-and-boots"
								>
									<a
										href="javascript:;"
										class="nav-link"
									>Shoes & Boots</a>
								</li>

								<li
									@click="setFilterRoute"
									class="nav-item"
									data-category="top-and-blouses"
								>
									<a
										href="javascript:;"
										class="nav-link"
									>Top & Blouses</a>
								</li>
							</ul>

							<nuxt-link
								class="view-all"
								:to="{path: '/shop', query: {category: 'fashion'}}"
							>View All<i class="fas fa-long-arrow-alt-right"></i></nuxt-link>
						</div>
					</div>

					<div class="col-lg-3 col-sm-6 pl-lg-3 pl-sm-0 order-0">
						<div
							class="banner banner3"
							style="background-color: #efeeec"
							v-lazy:background-image="'./images/home/banners/banner3.jpg'"
						>
							<div class="container d-flex justify-content-center">
								<div class="banner-layer text-center">
									<h4 class="font1"><i class="font2">Find the Boundaries. Push Through!</i>
									</h4>

									<h3 class="text-dark mb-0">MEGA SALE</h3>
									<h2 class="text-dark">70% OFF</h2>
									<h5 class="coupon-sale-text justify-content-end">
										<span class="text-dark">STARTING AT</span>
										<b class="text-white align-middle"><sup>$</sup><em class="align-text-top">199</em><sup>99</sup></b>
									</h5>
								</div>
							</div>
						</div>
					</div>

					<div class="col-lg-6 tab-content mt-2 mt-lg-0 order-2 order-sm-0">
						<div class="product-content products-with-divide">
							<div
								class="row row-joined h-100"
								v-if="products.length === 0"
							>
								<div
									class="col-6 col-sm-4 mb-2"
									v-for="(item) in [1,2,3,4,5,6]"
									:key="'product' + item"
								>
									<div class="swiper-slide product-loading-overlay"></div>
								</div>
							</div>

							<div class="row row-joined h-100">
								<div
									class="col-6 col-sm-4 appear-animate"
									v-for="(product,index) in products.slice(0, 6)"
									:key="'product-' + index"
									data-animation-name="fadeIn"
									data-animation-duration="1000"
									:data-animation-delay="200"
									v-animate
								>
									<pv-product-three :product="product"></pv-product-three>
								</div>
							</div>
						</div>
					</div>
				</div>
			</pv-tabs>
		</div>
	</div>
</template>

<script>
import PvProductThree from '~/components/features/product/PvProductThree';
import PvTabs from '~/components/features/PvTabs';
import Api, { baseUrl, currentDemo } from '~/api';

export default {
	components: {
		PvTabs,
		PvProductThree
	},
	data: function() {
		return {
			products: [],
			category: ''
		};
	},
	mounted: function() {
		this.setFilterRoute();
	},
	methods: {
		setFilterRoute: function(e) {
			this.products = [];
			if (e) {
				this.category = e.currentTarget.getAttribute('data-category');

				e.currentTarget.parentNode
					.querySelector('.active')
					.classList.remove('active');
				e.currentTarget.querySelector('a').classList.add('active');
			}

			Api.get(`${baseUrl}/shop`, {
				params: { category: this.category, demo: currentDemo }
			})
				.then(response => {
					this.products = response.data.products;
				})
				.catch(error => ({ error: JSON.stringify(error) }));
		}
	}
};
</script>