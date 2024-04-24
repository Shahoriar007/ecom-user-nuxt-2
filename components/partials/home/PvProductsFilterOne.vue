<template>
	<div
		class="category-filter-section bg-gray appear-animate"
		data-aniamtion-name="fadeInUpShorter"
		data-animation-delay="200"
		v-animate
	>
	<div class="heading shop-list d-flex align-items-center flex-wrap bg-gray mb-0 pl-0 pr-0">
			<h4 class="section-title text-transform-none mb-0 mr-0">{{ tags[0] }}</h4>
			<nuxt-link
				class="view-all ml-auto"
				to="/shop"
			>View All<i class="fas fa-long-arrow-alt-right"></i></nuxt-link>
		</div>
		
		<!-- <div class="container"> -->
			<pv-tabs>
				<div class="row">
					

					<div class="col-lg-12 tab-content mt-2 mt-lg-0 order-2 order-sm-0">
						<div class="product-content products-with-divide">
							<div
								class="row row-joined h-100"
								v-if="products.length === 0"
							>
								<div
									class="col-2 mb-2"
									v-for="(item) in [1,2,3,4,5,6]"
									:key="'product' + item"
								>
									<div class="swiper-slide product-loading-overlay"></div>
								</div>
							</div>

							<div class="row row-joined h-100" ref="specificSection">
								<div
									class="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 mb-2 appear-animate"
									v-for="(product,index) in products.slice(0, productCount)"
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
		<!-- </div> -->
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
	props: {
		products: Array,
		tags: "",
	},
	data: function() {
		return {
			products: [],
			category: '',
			productCount: 6,
			valueToIncrease: 0,
			lastScrollTop: 0
		};
	},
	mounted: function() {
		this.setFilterRoute();
		window.addEventListener('scroll', this.handleScroll);
	},
	beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  watch: {
	valueToIncrease(newVal, oldVal) {
	  if (newVal > oldVal) {
		this.productCount += 6;
	  }
	}
  },
	methods: {
		handleScroll() {
      const specificSection = this.$refs.specificSection;
      const bounding = specificSection.getBoundingClientRect();
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Check if the specific section is in view
      if (bounding.top <= window.innerHeight && bounding.bottom >= 0) {
        // Increment or decrement the value based on scroll direction
        if (currentScrollTop > this.lastScrollTop) {
          // Scrolling down
          this.valueToIncrease++;
        } else {
          // Scrolling up
          this.valueToIncrease--;
        }
      }


      this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    },

		setFilterRoute: function(e) {
			// this.products = [];
			// if (e) {
			// 	this.category = e.currentTarget.getAttribute('data-category');

			// 	e.currentTarget.parentNode
			// 		.querySelector('.active')
			// 		.classList.remove('active');
			// 	e.currentTarget.querySelector('a').classList.add('active');
			// }

			// Api.get(`${baseUrl}/shop`, {
			// 	params: { category: this.category, demo: currentDemo }
			// })
			// 	.then(response => {
			// 		this.products = response.data.products;
			// 	})
			// 	.catch(error => ({ error: JSON.stringify(error) }));
		}
	}
};
</script>