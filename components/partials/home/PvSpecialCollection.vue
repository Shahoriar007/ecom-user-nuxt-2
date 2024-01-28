<template>
	<section class="deal-products-section">
		<h2 class="section-title d-flex align-items-center text-transform-none">
			<i class="icon-percent-shape"></i>Special Offers
		</h2>

		<div
			class="row appear-animate"
			data-animation-name="fadeInUpShorter"
			data-animation-delay="200"
			v-animate
		>
			<div class="col-md-4 mb-2 mb-md-0">
				<div
					class="product-loading-overlay"
					v-if="!products || (products && products.length === 0)"
				></div>

				<pv-product-five
					:product="products[8]"
					v-else
				></pv-product-five>
			</div>
			<div class="col-md-8">
				<div class="products-with-divide">
					<div
						class="row row-joined"
						v-if="products.length === 0"
					>
						<div
							class="col-xl-3 col-sm-4 col-6 mb-2"
							v-for="(item) in [1,2,3,4,5,6,7,8]"
							:key="'featured' + item"
						>
							<div class="product-loading-overlay"></div>
						</div>
					</div>

					<div class="row row-joined">
						<div
							class="col-xl-3 col-sm-4 col-6"
							v-for="(product,index) in products.slice(0, 8)"
							:key="'special' + index"
						>
							<pv-product-three :product="product"></pv-product-three>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import PvProductFive from '~/components/features/product/PvProductFive';
import PvProductThree from '~/components/features/product/PvProductThree';

export default {
	components: {
		PvProductFive,
		PvProductThree
	},
	props: {
		products: Array
	}
};
</script>