<template>
	<div>
		<div
			class="product-filters-container custom-product-filters pt-0 pb-0 mb-0"
			v-if="product.variants.length > 0"
		>
			<div
				class="product-single-filter"
				v-if="vColors.length > 0"
			>
				<label>Color:</label>

				<ul class="config-size-list config-color-list config-filter-list">
					<li
						v-for="(item,index) in vColors"
						:key="'variant-color-' + index"
						@click="toggleColorItem(item)"
						:class="{disabled: isDisabled(item, curSize), active: curColor === item}"
					>
						<a
							href="javascript:;"
							class="filter-thumb p-0"
							:class="{disabled: isDisabled(item,curSize)}"
							v-if="item.image[0]"
							key="thumbForm"
						>
							<img
								:src="`${baseUrl}${item.image[0].url}`"
								:width="item.image[0].width"
								:height="item.image[0].height"
								alt="color thumb"
							/>
						</a>
						<a
							href="javascript:;"
							class="filter-color border-0"
							:style="{backgroundColor: item.text}"
							:class="{disabled: isDisabled(item,curSize)}"
							v-else
							key="colorForm"
						></a>
					</li>
				</ul>
			</div>

			<div
				class="product-single-filter"
				v-if="vSizes.length > 0"
			>
				<label>Size:</label>

				<ul class="config-size-list">
					<li
						v-for="(item,index) in vSizes"
						:key="'variant-size-' + index"
						@click="toggleSizeItem(item)"
						:class="{disabled: isDisabled(curColor, item), active: curSize === item}"
					>
						<a
							href="javascript:;"
							class="filter-thumb p-0"
							:class="{disabled: isDisabled(item,curSize)}"
							v-if="item.image[0]"
							key="thumbSizeForm"
						>
							<img
								:src="`${baseUrl}${item.image[0].url}`"
								:width="item.image[0].width"
								:height="item.image[0].height"
								alt="size thumb"
							/>
						</a>
						<a
							href="javascript:;"
							class="d-flex align-items-center justify-content-center"
							:class="{disabled: isDisabled(curColor,item)}"
							v-else
						>
							<template v-if="item.text">{{ item.text }}</template>
							<img
								v-else
								:src="`${baseUrl}${item.thumbnail[0]}`"
								alt="thumb-image"
							/>
						</a>
					</li>
				</ul>
			</div>

			<div class="product-single-filter">
				<vue-slide-toggle :open="curColor.name !== null || curSize.name !== null">
					<label></label>
					<a
						class="font1 text-uppercase clear-btn"
						href="javascript:;"
						@click="resetValue"
					>Clear</a>
				</vue-slide-toggle>
			</div>
		</div>

		<div class="product-action">
			<vue-slide-toggle
				:open="isPriceShow"
				v-if="product.variants.length > 0"
			>
				<div
					class="price-box product-filtered-price"
					v-if="minPrice === maxPrice || product.price"
					key="samePrice"
				>
					<span class="product-stock">{{ product.stock }} in stock</span>
				</div>

				<div
					class="price-box product-filtered-price"
					v-else
				>
					<template v-if="product.variants[curIndex].sale_price">
						<del class="old-price">
							<span>${{ product.variants[curIndex].price | priceFormat }}</span>
						</del>
						<span class="product-price">${{ product.variants[curIndex].sale_price | priceFormat }}</span>
					</template>

					<template v-else>
						<span class="product-price">${{ product.variants[curIndex].price | priceFormat }}</span>
					</template>
				</div>
			</vue-slide-toggle>

			<div class="product-single-qty d-flex align-items-center mb-1 pb-2 mt-0">
				<label class="mr-3 mb-0">QTY:</label>

				<div class="input-group bootstrap-touchspin bootstrap-touchspin-injected">
					<span class="input-group-btn input-group-prepend">
						<button
							class="btn btn-outline btn-down-icon bootstrap-touchspin-down"
							type="button"
							@click="minusQty"
						></button>
					</span>
					<input
						class="horizontal-quantity form-control bg-transparent"
						type="text"
						v-model.number="qty"
						:max="product.stock"
						@change="changeQty($event)"
					/>
					<span class="input-group-btn input-group-append">
						<button
							class="btn btn-outline btn-up-icon bootstrap-touchspin-up"
							type="button"
							@click="plusQty"
						></button>
					</span>
				</div>
			</div>

			<a
				href="javascript:;"
				class="btn btn-dark add-cart mr-2"
				title="Add to Cart"
				@click="addCart"
				:class="{ disabled: !isCartActive }"
			>Add to Cart</a>

			<nuxt-link
				to="/pages/cart"
				class="btn btn-gray view-cart d-none"
			>View cart</nuxt-link>
		</div>

		<nuxt-link
			to="/pages/wishlist"
			class="btn-icon-wish add-wishlist added-wishlist p-0"
			title="Go to Wishlist"
			v-if="isWishlisted"
		>
			<i class="icon-wishlist-2"></i>
			<span>Go to Wishlist</span>
		</nuxt-link>

		<a
			href="javascript:;"
			class="btn-icon-wish add-wishlist p-0"
			title="Add to Wishlist"
			@click="addWishlist($event)"
			v-if="!isWishlisted"
		>
			<i class="icon-wishlist-2"></i>
			<span>Add to Wishlist</span>
		</a>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { VueSlideToggle } from 'vue-slide-toggle';
import PvProductNav from '~/components/partials/product/PvProductNav';
import { baseUrl } from '~/api/index';

export default {
	components: {
		VueSlideToggle,
		PvProductNav
	},
	props: {
		product: Object
	},
	data: function() {
		return {
			minPrice: 0,
			maxPrice: 0,
			qty: 1,
			currentIndex: 0,
			baseUrl: baseUrl,
			vSizes: [],
			vColors: [],
			curSize: {
				name: null,
				text: null,
				image: null
			},
			curColor: {
				name: null,
				text: null,
				image: null
			},
			tIndex: 0,
			isShare: {
				type: Boolean,
				default: true
			}
		};
	},
	watch: {
		$route: function() {
			this.getFlag();
		}
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
		},
		curIndex: function() {
			if (this.curColor.name !== null && this.vSizes.length === 0) {
				let index = this.product.variants.findIndex(
					item => item.colors[0].color_name === this.curColor.name
				);
				this.tIndex = index;
				return index;
			}
			if (this.curSize.name !== null && this.vColors.length === 0) {
				let index = this.product.variants.findIndex(
					item => item.size[0].size_name === this.curSize.name
				);
				this.tIndex = index;
				return index;
			}
			if (this.curColor.name !== null && this.curSize.name !== null) {
				let index = this.product.variants.findIndex(
					item =>
						item.colors[0].color_name === this.curColor.name &&
						item.size[0].size_name === this.curSize.name
				);
				this.tIndex = index;
				return index;
			} else {
				return this.tIndex;
			}
		},
		isCartActive: function() {
			if (this.product.stock < parseInt(this.qty)) return false;
			if (this.product.variants.length === 0) return true;
			if (this.curSize.name !== null && this.curColor.name !== null)
				return true;
			if (this.curColor.name !== null && this.vSizes.length === 0)
				return true;
			if (this.curSize.name !== null && this.vColors.length === 0)
				return true;
			return false;
		},
		isPriceShow: function() {
			if (this.curSize.name !== null && this.curColor.name !== null)
				return true;
			if (this.curColor.name !== null && this.vSizes.length === 0)
				return true;
			if (this.curSize.name !== null && this.vColors.length === 0)
				return true;
			return false;
		}
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

		if (this.product.variants.length > 0) {
			if (this.product.variants[0].size[0])
				this.product.variants.forEach(item => {
					if (
						this.vSizes.findIndex(
							vsize => vsize.name === item.size[0].size_name
						) === -1
					)
						this.vSizes.push({
							name: item.size[0].size_name,
							text: item.size[0].size,
							image: item.size[0].size_thumbnail
						});
				});

			if (this.product.variants[0].colors[0])
				this.product.variants.forEach(item => {
					if (
						this.vColors.findIndex(
							vColor => vColor.name === item.colors[0].color_name
						) === -1
					)
						this.vColors.push({
							name: item.colors[0].color_name,
							text: item.colors[0].color,
							image: item.colors[0].color_thumbnail
						});
				});
		}
	},
	methods: {
		...mapActions('cart', ['addToCart']),
		...mapActions('wishlist', ['addToWishlist']),
		plusQty: function() {
			if (this.qty < this.product.stock) this.qty++;
		},
		minusQty: function() {
			if (this.qty > 1) this.qty--;
		},
		addCart: function() {
			if (this.isCartActive) {
				let saledProduct;
				if (this.product.variants.length > 0) {
					let saledPrice;
					if (this.product.price)
						saledPrice = this.product.sale_price
							? this.product.sale_price
							: this.product.price;
					else {
						saledPrice = this.product.variants[this.curIndex]
							.sale_price
							? this.product.variants[this.curIndex].sale_price
							: this.product.variants[this.curIndex].price;
					}
					saledProduct = {
						...this.product,
						qty: this.qty,
						name:
							this.product.name +
							' - ' +
							this.curColor.name.charAt(0).toUpperCase() +
							this.curColor.name.slice(1) +
							', ' +
							this.curSize.name,
						price: saledPrice
					};
				} else {
					saledProduct = {
						...this.product,
						qty: this.qty,
						price: this.product.sale_price
							? this.product.sale_price
							: this.product.price
					};
				}

				this.addToCart({ product: saledProduct });
			}
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
		isDisabled: function(color, size) {
			if (!color.name || !size.name) return false;

			if (this.vSizes.length === 0) {
				return (
					this.product.variants.findIndex(
						item => item.colors[0].color_name === color.name
					) === -1
				);
			}

			if (this.vColors.length === 0) {
				return (
					this.product.variants.findIndex(
						item => item.size[0].size_name === size.name
					) === -1
				);
			}

			return (
				this.product.variants.findIndex(
					item =>
						item.colors[0].color_name === color.name &&
						item.size[0].size_name === size.name
				) === -1
			);
		},
		toggleColorItem: function(color) {
			if (!this.isDisabled(color, this.curSize)) {
				if (this.curColor === color) {
					this.curColor = { name: null, text: null, image: null };
				} else {
					this.curColor = color;
				}
			}
		},
		toggleSizeItem: function(size) {
			if (!this.isDisabled(this.curColor, size)) {
				if (this.curSize === size) {
					this.curSize = { name: null, text: null, image: null };
				} else {
					this.curSize = size;
				}
			}
		},
		resetValue() {
			this.curColor = { name: null, text: null, image: null };
			this.curSize = { name: null, text: null, image: null };
		},
		changeQty(e) {}
	}
};
</script>