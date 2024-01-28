<template>
	<div class="product-single-details">
		<div v-if="isTitle">
			<h1 class="product-title mb-1">{{product.name}}</h1>

			<div class="product-nav pt-2 ml-5 top-0 float-right">
				<pv-product-nav
					v-if="isProductNav"
					:prev-product="prevProduct"
					:next-product="nextProduct"
				></pv-product-nav>
			</div>
		</div>
		<div
			class="ratings-container"
			v-if="isTitle"
		>
			<div class="product-ratings">
				<span
					class="ratings"
					:style="'width:' + product.ratings * 20 + '%'"
				></span>
				<span class="tooltiptext tooltip-top">{{ product.ratings | priceFormat }}</span>
			</div>
			<a
				href="javascript:;"
				class="rating-link"
				v-if="product.reviews > 0"
			>( {{ product.reviews }} Reviews )</a>
			<a
				href="javascript:;"
				class="rating-link"
				v-else
			>( There is no review yet. )</a>
		</div>

		<hr
			class="short-divider"
			v-if="isTitle"
		/>

		<div
			class="price-box pt-1"
			v-if="product.price"
			key="singlePrice"
		>
			<template v-if="!product.is_sale">
				<span class="new-price">${{ product.price | priceFormat }}</span>
			</template>

			<template v-else>
				<span class="new-price">${{ product.sale_price | priceFormat }}</span>
				<span class="old-price">${{ product.price | priceFormat }}</span>
			</template>
		</div>

		<div
			class="price-box pt-1"
			v-else
		>
			<template v-if="minPrice !== maxPrice">
				<span class="new-price">${{ minPrice | priceFormat }} &ndash; ${{ maxPrice | priceFormat }}</span>
			</template>

			<template v-else>
				<span class="new-price">${{ minPrice | priceFormat }}</span>
			</template>
		</div>

		<div
			class="product-desc"
			v-if="product.short_description"
		>
			<p>{{ product.short_description }}</p>
		</div>

		<ul class="single-info-list">
			<li v-if="product.sku">
				SKU:
				<strong>{{ product.sku }}</strong>
			</li>

			<li>
				CATEGORY:
				<strong>
					<nuxt-link
						:to="{path: '/shop', query: {category: item.slug}}"
						class="product-category"
						v-for="(item,index) in product.product_categories"
						:key="'product-category-' + index"
					>
						{{ item.name }}
						<template v-if="index < product.product_categories.length - 1">,</template>
					</nuxt-link>
				</strong>
			</li>

			<li v-if="product.product_tags.length > 0">
				TAGS:
				<strong>
					<nuxt-link
						:to="{path: '/shop', query: {tag: item.slug}}"
						class="product-category"
						v-for="(item,index) in product.product_tags"
						:key="'product-category-' + index"
					>
						{{ item.name }}
						<template v-if="index < product.product_tags.length - 1">,</template>
					</nuxt-link>
				</strong>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import PvProductNav from '~/components/partials/product/PvProductNav';

export default {
	components: {
		PvProductNav
	},
	props: {
		product: Object,
		prevProduct: Object,
		nextProduct: Object,
		isTitle: {
			type: Boolean,
			default: true
		},
		isProductNav: {
			type: Boolean,
			default: true
		}
	},
	data: function() {
		return {
			minPrice: 0,
			maxPrice: 0
		};
	},
	mounted: function() {
		if (this.product.variants && !this.product.price) {
			this.minPrice = this.product.variants[0].price;

			this.product.variants.forEach(item => {
				let itemPrice = item.sale_price ? item.sale_price : item.price;
				if (this.minPrice > itemPrice) this.minPrice = itemPrice;
				if (this.maxPrice < itemPrice) this.maxPrice = itemPrice;
			});
		}
	}
};
</script>