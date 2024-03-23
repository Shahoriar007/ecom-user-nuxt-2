<template>
	<div>
		<h1 class="product-title">{{ product.name }}</h1>

		<!-- <pv-product-nav
			v-if="isProductNav"
			:prev-product="prevProduct"
			:next-product="nextProduct"
		></pv-product-nav> -->

		<hr class="short-divider" />

		<div
			class="price-box"
			v-if="product.price"
			key="singlePrice"
		>
			<template v-if="!product.is_sale">
				<span class="new-price">BDT {{ product.price | priceFormat }}</span>
			</template>

			<template v-else>
				<span class="new-price">BDT {{ product.sale_price | priceFormat }}</span>
				<span class="old-price">BDT {{ product.price | priceFormat }}</span>
			</template>
		</div>

		<div
			class="price-box"
			v-else
		>
			<template v-if="minPrice !== maxPrice">
				<span class="new-price">BDT {{ minPrice | priceFormat }} &ndash; BDT {{ maxPrice | priceFormat }}</span>
			</template>

			<template v-else>
				<span class="new-price">BDT {{ minPrice | priceFormat }}</span>
			</template>
		</div>

	
			<a
					:href="product.video_link"
					class="btn btn-video add-cart mr-2 mt-2"
					title="Watch Video"
					target="_blank"
				>
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-play-btn mr-2" viewBox="0 0 16 16">
  <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
</svg>
Video</a>

			<br>
			<br>

		<div
			class="product-desc"
			v-if="product.short_description"
		>
			<p v-html="product.short_description"></p>
		</div>

		

		<ul class="single-info-list">
			<!-- <li v-if="product.stock">
				AVAILABLE IN STOCK:
				<strong>{{ product.stock }}</strong>
			</li> -->

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

			<!-- No need -->
			<!-- <li v-if="product.product_tags.length > 0">
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
			</li> -->
		</ul>

		<!-- <div
			class="product-filters-container"
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
		</div> -->

		<div class="product-action">
			<!-- <vue-slide-toggle
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
			</vue-slide-toggle> -->

			<!-- <div class="product-single-qty">
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
			</div> -->

			<a
				href="javascript:;"
				class="btn btn-dark add-cart mr-2 mt-2"
				title="Add to Cart"
				@click="addCart"
				
			><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  fill="currentColor" class="bi bi-bag mr-2" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg>  Add to Cart</a>

			<v-row>
				<a
				href="javascript:;" 
				class="btn btn-buy-now  add-cart mr-2 mt-2"
				title="Buy Now"
				@click="buyNow"

			> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2 mr-2" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
</svg>Buy Now</a>
			<a
				href="https://wa.me/01994635351" 
				class="btn btn-whatsapp add-cart mr-2 mt-2"
				title="Buy Now"
				target="_blank"
			>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp mr-2" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg>
Whatsapp</a>
			
		</v-row>

			
			<b-row>
				<a
					href="https://m.me/100064835408819"  
					class="btn btn-messenger add-cart mr-2 mt-2"
					title="Buy Now"
					target="_blank"
				>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat mr-2" viewBox="0 0 16 16">
  <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
</svg>
Messenger</a>
			</b-row>

			<nuxt-link
				to="/pages/cart"
				class="btn btn-gray view-cart d-none"
			>View cart</nuxt-link>
		</div>

		
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { VueSlideToggle } from 'vue-slide-toggle';
import PvProductNav from '~/components/partials/product/PvProductNav';
import { baseUrl } from '~/api/index';
import PvCountDown from '~/components/features/PvCountDown';

export default {
	components: {
		
		VueSlideToggle,
		PvProductNav,
		PvCountDown
	},
	props: {
		product: Object,
		// prevProduct: Object,
		// nextProduct: Object,
		isProductNav: {
			type: Boolean,
			default: true
		}
	},
	data: function() {
		return {
			minPrice: 0,
			maxPrice: 0,
			qty: 1,
			currentIndex: 0,
			baseUrl: `${baseUrl}`,
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
		// curIndex: function() {
		// 	if (this.curColor.name !== null && this.vSizes.length === 0) {
		// 		let index = this.product.variants.findIndex(
		// 			item => item.colors[0].color_name === this.curColor.name
		// 		);
		// 		this.tIndex = index;
		// 		return index;
		// 	}
		// 	if (this.curSize.name !== null && this.vColors.length === 0) {
		// 		let index = this.product.variants.findIndex(
		// 			item => item.size[0].size_name === this.curSize.name
		// 		);
		// 		this.tIndex = index;
		// 		return index;
		// 	}
		// 	if (this.curColor.name !== null && this.curSize.name !== null) {
		// 		let index = this.product.variants.findIndex(
		// 			item =>
		// 				item.colors[0].color_name === this.curColor.name &&
		// 				item.size[0].size_name === this.curSize.name
		// 		);
		// 		this.tIndex = index;
		// 		return index;
		// 	} else {
		// 		return this.tIndex;
		// 	}
		// },
		isCartActive: function() {
			if (this.product.stock < parseInt(this.qty)) return false;
			if (this.product.length === 0) return true;
			// if (this.curSize.name !== null && this.curColor.name !== null)
			// 	return true;
			// if (this.curColor.name !== null && this.vSizes.length === 0)
			// 	return true;
			// if (this.curSize.name !== null && this.vColors.length === 0)
			// 	return true;
			return false;
		},
		// isWishlisted: function() {
		// 	if (
		// 		this.wishList.findIndex(
		// 			item => item.name === this.product.name
		// 		) > -1
		// 	)
		// 		return true;
		// 	return false;
		// },
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
	created: function() {
		this.getFlag();
	},
	mounted: function() {

		console.log(this.product);

		if (this.product.variants && !this.product.price) {
			this.minPrice = this.product.variants[0].price;

			this.product.variants.forEach(item => {
				let itemPrice = item.sale_price ? item.sale_price : item.price;
				if (this.minPrice > itemPrice) this.minPrice = itemPrice;
				if (this.maxPrice < itemPrice) this.maxPrice = itemPrice;
			});
		}

		// if (this.product.variants.length > 0) {
		// 	if (this.product.variants[0].size[0])
		// 		this.product.variants.forEach(item => {
		// 			if (
		// 				this.vSizes.findIndex(
		// 					vsize => vsize.name === item.size[0].size_name
		// 				) === -1
		// 			)
		// 				this.vSizes.push({
		// 					name: item.size[0].size_name,
		// 					text: item.size[0].size,
		// 					image: item.size[0].size_thumbnail
		// 				});
		// 		});

		// 	if (this.product.variants[0].colors[0])
		// 		this.product.variants.forEach(item => {
		// 			if (
		// 				this.vColors.findIndex(
		// 					vColor => vColor.name === item.colors[0].color_name
		// 				) === -1
		// 			)
		// 				this.vColors.push({
		// 					name: item.colors[0].color_name,
		// 					text: item.colors[0].color,
		// 					image: item.colors[0].color_thumbnail
		// 				});
		// 		});
		// }
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
			if (this.product.stock > 0) {
				let saledProduct = { ...this.product };
				if (this.product.is_sale) {
					saledProduct.price = this.product.sale_price;
				}

				this.addToCart({ product: saledProduct });
			}
		},

		buyNow: function() {
			if (this.product.stock > 0) {
				let saledProduct = { ...this.product };
				if (this.product.is_sale) {
					saledProduct.price = this.product.sale_price;
				}

				this.addToCart({ product: saledProduct });
			}

			this.$router.push('/pages/checkout');
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
		changeQty(e) {},
		getFlag: function() {
			if (this.$route.path.includes('sticky-info')) this.isShare = false;
		}
	}
};
</script>
<style>

.buy-now:before{
	content: "\F83F";
    margin-top: -2px;
    font-family: "Porto";
    font-weight: 600;
    font-size: 1.8rem;
    margin-right: 7px;
}

.btn-video{
	background-color: #ff0000;
	color: #fff !important;
}
.btn-video:hover{
	background-color: #ff0000;
	color: #000 !important;
}

.btn-buy-now{
	background-color: #eb9544;
	color: #fff;
}

.btn-messenger{
	background-color: #0084ff;
	color: #fff;
}

.btn-whatsapp{
	background-color: #25d366;
	color: #fff;
}
	
</style>