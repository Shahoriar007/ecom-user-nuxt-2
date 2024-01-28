<template>
	<div class="product-default left-details product-list">
		<figure>
			<nuxt-link :to="`/product/default/${product.slug}`">
				<img
					v-for="(item,index) in product.large_pictures.slice(0,2)"
					:key="`related-large-${index}`"
					v-lazy="`${baseUrl}${item.url}`"
					alt="large-picture"
					:width="item.width"
					:height="item.height"
				/>
			</nuxt-link>

			<div class="label-group">
				<div
					class="product-label label-hot"
					v-if="product.is_hot"
				>HOT</div>
				<div
					class="product-label label-sale"
					v-if="product.is_sale && !product.price"
				>Sale</div>
				<div
					class="product-label label-sale"
					v-if="product.is_sale && product.price"
				>-{{ discount }}%</div>
			</div>
		</figure>

		<div class="product-details">
			<div class="category-list">
				<span
					v-for="(cat,index) in product.product_categories"
					:key="`product-category-${index}`"
				>
					<nuxt-link :to="{ path: '/shop', query: { category: cat.slug }}">{{ cat.name }}</nuxt-link>
					<template v-if="index < product.product_categories.length - 1">,</template>
				</span>
			</div>

			<h3 class="product-title">
				<nuxt-link :to="'/product/default/' + product.slug">{{ product.name }}</nuxt-link>
			</h3>

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
				class="product-description"
				v-if="product.short_description"
			>
				<p class="mb-0">{{ product.short_description }}</p>
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
				<template v-if="minPrice !== maxPrice">
					<span class="product-price">${{ minPrice | priceFormat }} &ndash; ${{ maxPrice | priceFormat }}</span>
				</template>

				<template v-else>
					<span class="product-price">${{ minPrice | priceFormat }}</span>
				</template>
			</div>

			<div class="product-action">
				<nuxt-link
					:to="'/product/default/' + product.slug"
					class="btn-icon btn-add-cart product-type-simple"
					v-if="product.variants.length > 0"
					key="variantProduct"
				>
					<i class="fa fa-arrow-right"></i>
					<span>SELECT OPTIONS</span>
				</nuxt-link>

				<a
					href="javascript:;"
					class="btn-icon btn-add-cart product-type-simple"
					v-else
					@click="addCart"
				>
					<i class="icon-shopping-cart"></i>
					<span>ADD TO CART</span>
				</a>

				<nuxt-link
					to="/pages/wishlist"
					class="btn-icon-wish added-wishlist"
					title="Go to Wishlist"
					v-if="isWishlisted"
				>
					<i class="icon-wishlist-2"></i>
				</nuxt-link>

				<a
					href="javascript:;"
					class="btn-icon-wish"
					title="Add to Wishlist"
					@click="addWishlist($event)"
					v-if="!isWishlisted"
				>
					<i class="icon-wishlist-2"></i>
				</a>

				<a
					href="javascript:;"
					class="btn-quickview"
					title="Quick View"
					@click="openQuickview"
				>
					<i class="fas fa-external-link-alt"></i>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { baseUrl } from '~/api/index';

export default {
	props: {
		product: Object,
		adClass: String
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