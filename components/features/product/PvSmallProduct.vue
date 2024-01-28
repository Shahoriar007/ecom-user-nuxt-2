<template>
	<div class="product-default left-details product-widget">
		<figure>
			<nuxt-link :to="'/product/default/' + product.slug">
				<template v-if="isLazy">
					<img
						:v-lazy="`${baseUrl}${item.url}`"
						v-for="(item,index) in product.small_pictures.slice(0,2)"
						:key="'small-product' + index"
						:width="item.width"
						:height="item.height"
						alt="small-product-image"
					/>
				</template>

				<template v-else>
					<img
						:src="`${baseUrl}${item.url}`"
						v-for="(item,index) in product.small_pictures.slice(0,2)"
						:key="'small-product' + index"
						:width="item.width"
						:height="item.height"
						alt="small-product-image"
					/>
				</template>
			</nuxt-link>
		</figure>

		<div class="product-details">
			<h2 class="product-title">
				<nuxt-link :to="'/product/default/' + product.slug">{{ product.name }}</nuxt-link>
			</h2>

			<div class="ratings-container">
				<div class="product-ratings">
					<span
						class="ratings"
						:style="{width: product.ratings * 20 + '%'}"
					></span>
					<span class="tooltiptext tooltip-top">{{ product.ratings | priceFormat }}</span>
				</div>
			</div>

			<div
				class="price-box"
				v-if="product.price"
				key="singlePrice"
			>
				<template v-if="!product.is_sale">
					<span class="product-price">${{ product.price | priceFormat }}</span>
				</template>

				<template v-else>
					<span class="product-price">${{ product.sale_price | priceFormat }}</span>
					<span class="old-price">${{ product.price | priceFormat }}</span>
				</template>
			</div>

			<div
				class="price-box"
				v-else
			>
				<span
					class="product-price"
					v-if="minPrice !== maxPrice"
				>${{ minPrice | priceFormat }} &ndash; ${{ maxPrice | priceFormat }}</span>

				<span
					class="product-price"
					v-else
				>${{ minPrice | priceFormat }}</span>
			</div>
		</div>
	</div>
</template>

<script>
import { baseUrl } from '~/api/index';

export default {
	props: {
		product: Object,
		isLazy: {
			type: Boolean,
			default: true
		}
	},
	data: function() {
		return {
			baseUrl: baseUrl,
			minPrice: 0,
			maxPrice: 0
		};
	},
	mounted: function() {
		if (this.product.is_sale) {
			this.discount =
				((this.product.price - this.product.sale_price) /
					this.product.price) *
				100;
			this.discount = parseInt(this.discount);
		}

		if (this.product.variants.length > 0 && !this.product.price) {
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