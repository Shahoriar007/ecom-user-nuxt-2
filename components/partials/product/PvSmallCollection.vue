<template>
	<div :class="isFeatured ? 'product-widgets-container row pb-2' : 'row products-widgets'">
		<div
			:class="isFeatured ? 'col-lg-3 col-sm-6 pb-5 pb-md-0' : 'col-sm-6 col-md-4 pb-4 pb-md-0 appear-animate'"
			data-animation-name="fadeInLeftShorter"
			data-animation-delay="200"
			v-animate
			v-if="isFeatured"
		>
			<h4 class="section-sub-title ls-n-20">Featured Products</h4>

			<div v-if="!featuredProducts">
				<div
					class="skel-product-col skel-pro mb-2"
					v-for="(item,index) in [0,1,2]"
					:key="'featured' + index"
				></div>
			</div>

			<pv-small-product
				:product="product"
				v-for="(product,index) in featuredProducts"
				:key="'featured-product' + index"
				:is-lazy="false"
			></pv-small-product>
		</div>

		<div
			:class="isFeatured ? 'col-lg-3 col-sm-6 pb-5 pb-md-0' : 'col-sm-6 col-md-4 pb-4 pb-md-0 appear-animate'"
			data-animation-name="fadeInLeftShorter"
			data-animation-delay="200"
			v-animate
		>
			<h4 class="section-sub-title ls-n-20">Top Rated Products</h4>

			<div v-if="!topRatedProducts">
				<div
					class="skel-product-col skel-pro mb-2"
					v-for="(item,index) in [0,1,2]"
					:key="'top' + index"
				></div>
			</div>

			<pv-small-product
				:product="product"
				v-for="(product,index) in topRatedProducts"
				:key="'top-rated-product' + index"
				:is-lazy="false"
			></pv-small-product>
		</div>

		<div
			:class="isFeatured ? 'col-lg-3 col-sm-6 pb-5 pb-md-0' : 'col-sm-6 col-md-4 pb-4 pb-md-0 appear-animate'"
			data-animation-name="fadeInLeftShorter"
			data-animation-delay="500"
			v-animate
		>
			<h4 class="section-sub-title ls-n-20">Best Selling Products</h4>

			<div v-if="!bestProducts">
				<div
					class="skel-product-col skel-pro mb-2"
					v-for="(item,index) in [0,1,2]"
					:key="'best' + index"
				></div>
			</div>

			<pv-small-product
				:product="product"
				v-for="(product,index) in bestProducts"
				:key="'best-product' + index"
				:is-lazy="false"
			></pv-small-product>
		</div>

		<div
			:class="isFeatured ? 'col-lg-3 col-sm-6 pb-5 pb-md-0' : 'col-sm-6 col-md-4 pb-4 pb-md-0 appear-animate'"
			data-animation-name="fadeInLeftShorter"
			data-animation-delay="800"
			v-animate
		>
			<h4 class="section-sub-title ls-n-20">Latest Products</h4>

			<div v-if="!latestProducts">
				<div
					class="skel-product-col skel-pro mb-2"
					v-for="(item,index) in [0,1,2]"
					:key="'latest' + index"
				></div>
			</div>

			<pv-small-product
				:product="product"
				v-for="(product,index) in latestProducts"
				:key="'latest-product' + index"
				:is-lazy="false"
			></pv-small-product>
		</div>
	</div>
</template>

<script>
import PvSmallProduct from '~/components/features/product/PvSmallProduct';

export default {
	components: {
		PvSmallProduct
	},
	props: {
		featuredProducts: Array,
		bestProducts: Array,
		latestProducts: Array,
		topRatedProducts: Array,
		isFeatured: {
			type: Boolean,
			default: true
		}
	}
};
</script>