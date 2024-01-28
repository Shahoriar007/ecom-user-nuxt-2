<template>
	<div class="product-default">
		<figure>
			<h5 v-if="isDeal">FLASH DEALS</h5>
			<nuxt-link :to="`/product/default/${product.slug}`">
				<img
					v-for="(item,index) in product.large_pictures.slice(0, 1)"
					:key="`related-large-${index}`"
					:src="`${baseUrl}${item.url}`"
					alt="large-picture"
					:width="item.width"
					:height="item.height"
				/>
			</nuxt-link>
		</figure>

		<div class="product-details">
			<h3 class="product-title">
				<nuxt-link :to="'/product/default/' + product.slug">{{ product.name }}</nuxt-link>
			</h3>

			<div class="ratings-container">
				<div class="product-ratings">
					<span
						class="ratings"
						:style="{width: product.ratings * 20 + '%'}"
					></span>
					<span class="tooltiptext tooltip-top">{{ product.ratings.toFixed(2) }}</span>
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
					<span class="old-price">${{ product.price | priceFormat }}</span>
					<span class="product-price">${{ product.sale_price | priceFormat }}</span>
				</template>
			</div>

			<div
				class="price-box"
				v-else
			>
				<template v-if="minPrice !== maxPrice">
					<span class="product-price">${{ minPrice | priceFormat }} &ndash; ${{ maxPrice | priceFormat }}</span>
				</template>

				<template v-else>
					<span class="product-price">${{ minPrice | priceFormat }}</span>
				</template>
			</div>

			<div
				class="product-countdown-container"
				v-if="product.until"
			>
				<span class="product-countdown-title">offer ends in:</span>
				<pv-count-down
					class="product-countdown countdown-compact"
					:until="product.until"
					:compact="true"
				></pv-count-down>
			</div>
		</div>
	</div>
</template>

<script>
import PvCountDown from '~/components/features/PvCountDown';
import { mapGetters, mapActions } from 'vuex';
import { baseUrl } from '~/api/index';

export default {
	components: {
		PvCountDown
	},
	props: {
		product: Object,
		adClass: String,
		isActions: {
			type: Boolean,
			default: true
		},
		isDeal: false
	},
	data: function() {
		return {
			baseUrl: baseUrl,
			minPrice: 0,
			maxPrice: 0,
			discount: 0
		};
	},
	computed: {
		...mapGetters('wishlist', ['wishList']),
		isWishlisted: function() {
			if (
				this.wishList.findIndex(
					item => item.name === this.product.name
				) > -1
			)
				return true;
			return false;
		}
	},
	mounted: function() {
		if (this.product.is_sale && this.product.price) {
			this.discount =
				((this.product.price - this.product.sale_price) /
					this.product.price) *
				100;
			this.discount = parseInt(this.discount);
		}

		if (!this.product.price) {
			this.minPrice = this.product.variants[0].price;
			this.product.variants.forEach(item => {
				let itemPrice = item.is_sale ? item.sale_price : item.price;
				if (this.minPrice > itemPrice) this.minPrice = itemPrice;
				if (this.maxPrice < itemPrice) this.maxPrice = itemPrice;
			});
		}
	},
	methods: {
		...mapActions('wishlist', ['addToWishlist']),
		...mapActions('cart', ['addToCart']),
		openQuickview: function() {
			this.$modal.show(
				() => import('~/components/features/product/PvQuickview'),
				{ slug: this.product.slug },
				{
					width: '931',
					height: 'auto',
					adaptive: true,
					class: 'quickview-modal'
				}
			);
		},
		addWishlist: function(e) {
			e.currentTarget.classList.add('load-more-overlay', 'loading');

			setTimeout(() => {
				this.addToWishlist({ product: this.product });
				document
					.querySelector('.wishlist-popup')
					.classList.add('active');

				setTimeout(() => {
					document
						.querySelector('.wishlist-popup')
						.classList.remove('active');
				}, 1000);
			}, 1000);
		},
		addCart: function() {
			if (this.product.stock > 0) {
				let saledProduct = { ...this.product };
				if (this.product.is_sale) {
					saledProduct.price = this.product.sale_price;
				}

				this.addToCart({ product: saledProduct });
			}
		}
	}
};
</script>