<template>
	<main class="main">
		<div class="page-header">
			<div class="container">
				<div class="d-flex flex-column align-items-center">
					<nav
						aria-label="breadcrumb"
						class="breadcrumb-nav border-0"
					>
						<div class="container">
							<ol class="breadcrumb">
								<li class="breadcrumb-item">
									<nuxt-link to="/">Home</nuxt-link>
								</li>
								<li
									class="breadcrumb-item active"
									aria-current="page"
								>Wishlist</li>
							</ol>
						</div>
					</nav>

					<h1>Wishlist</h1>
				</div>
			</div>
		</div>

		<div class="container">
			<div
				class="cart-message carted"
				style="display: none"
			>
				<strong
					class="single-cart-notice"
					v-if="currentProduct"
				>“{{ currentProduct.name }}”</strong>
				<span>has been added to cart successfully.</span>
			</div>

			<div
				class="cart-message removed"
				style="display: none"
			>
				<strong
					class="single-cart-notice"
					v-if="currentProduct"
				>“{{ currentProduct.name }}”</strong>
				<span>has been successfully removed.</span>
			</div>

			<div class="wishlist-title">
				<h2 class="p-2">My wishlist on Porto Shop {{ currentDemo }}</h2>
			</div>
			<div
				class="wishlist-table-container"
				v-if="wishItems.length > 0"
				key="noEmpty"
			>
				<table class="table table-wishlist mb-0">
					<thead>
						<tr>
							<th class="thumbnail-col"></th>
							<th class="product-col">Product</th>
							<th class="price-col">Price</th>
							<th class="status-col">Stock Status</th>
							<th class="action-col">Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr
							class="product-row"
							v-for="(product,index) in wishItems"
							:key="'wishlist-' +index"
						>
							<td>
								<figure class="product-image-container">
									<nuxt-link
										:to="'/product/default/' + product.slug"
										class="product-image"
									>
										<img
											:src="`${baseUrl}${product.small_pictures[0].url}`"
											alt="product"
											:width="product.small_pictures[0].width"
											:height="product.small_pictures[0].height"
										/>
									</nuxt-link>

									<a
										href="javascript:;"
										class="btn-remove icon-cancel"
										title="Remove Product"
										@click="removeWishlist(product)"
									></a>
								</figure>
							</td>
							<td>
								<h5 class="product-title">
									<nuxt-link :to="'/product/default/' + product.slug">{{ product.name }}</nuxt-link>
								</h5>
							</td>

							<td
								class="price-box"
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
							</td>

							<td
								class="price-box"
								v-else
							>
								<template v-if="product.minPrice !== product.maxPrice">
									<span class="new-price">${{ product.minPrice | priceFormat }} &ndash; ${{ product.maxPrice | priceFormat }}</span>
								</template>

								<template v-else>
									<span class="new-price">${{ product.minPrice | priceFormat }}</span>
								</template>
							</td>

							<td>
								<span class="stock-status">In stock</span>
							</td>
							<td class="action">
								<a
									href="javascript:;"
									class="btn btn-quickview mt-1 mt-md-0"
									@click="openQuickview(product)"
									title="Quick View"
									key="singleCart"
								>Quick View</a>

								<button
									class="btn btn-dark btn-add-cart product-type-simple btn-shop"
									@click="addCart( product )"
									v-if="product.variants.length === 0"
								>ADD TO CART</button>

								<nuxt-link
									:to="'/product/default/' + product.slug"
									class="btn btn-dark btn-add-cart btn-shop"
									v-else
								>SELECT OPTION</nuxt-link>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div
				class="box-content"
				v-else
			>
				<div class="wishlist-table-container">
					<table
						class="table-wishlist"
						data-pagination="no"
						data-per-page="5"
						data-page="1"
						data-id
						data-token
					>
						<thead class="d-none">
							<tr>
								<th class="product-thumbnail"></th>

								<th class="product-name">
									<span class="nobr">Product</span>
								</th>

								<th class="product-price">
									<span class="nobr">price</span>
								</th>

								<th class="product-stock-status">
									<span class="nobr">Stock status</span>
								</th>

								<th class="product-add-to-cart">
									<span class="nobr">Actions</span>
								</th>
							</tr>
						</thead>

						<tbody class="wishlist-items-wrapper">
							<tr class="border-0 py-0">
								<td
									colspan="6"
									class="px-3 py-2 text-center"
								>
									<i class="far fa-heart wishlist-empty"></i>
								</td>
							</tr>
							<tr class="border-0 py-0">
								<td
									colspan="6"
									class="px-3 py-2 wishlist-empty wishlist-text"
								>No products added to the wishlist</td>
							</tr>
							<tr class="border-0 py-0">
								<td
									colspan="6"
									class="px-3 text-center"
								>
									<nuxt-link
										to="/shop"
										class="btn btn-go-shop"
									>GO SHOP</nuxt-link>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { baseUrl, currentDemo } from '~/api';

export default {
	data: function() {
		return {
			baseUrl: baseUrl,
			currentDemo: currentDemo,
			wishItems: [],
			currentProduct: null
		};
	},
	computed: {
		...mapGetters('wishlist', ['wishList'])
	},
	watch: {
		wishList: function() {
			this.makeCartItems();
		}
	},
	mounted: function() {
		this.makeCartItems();
	},
	methods: {
		...mapActions('wishlist', ['removeFromWishlist']),
		...mapActions('cart', ['addToCart']),
		makeCartItems: function() {
			this.wishItems = this.wishList;
			this.wishItems = this.wishList.reduce((acc, product) => {
				let minPrice = 0,
					maxPrice = 0;

				if (!product.price) {
					minPrice = product.variants[0].price;
					product.variants.forEach(item => {
						let itemPrice = item.is_sale
							? item.sale_price
							: item.price;
						if (minPrice > itemPrice) minPrice = itemPrice;
						if (maxPrice < itemPrice) maxPrice = itemPrice;
					});
				}

				return [
					...acc,
					{
						...product,
						minPrice: minPrice,
						maxPrice: maxPrice
					}
				];
			}, []);
		},
		openQuickview: function(product) {
			this.$modal.show(
				() => import('~/components/features/product/PvQuickview'),
				{ slug: product.slug },
				{
					width: '931',
					height: 'auto',
					adaptive: true,
					class: 'quickview-modal'
				}
			);
		},
		addCart: function(product) {
			this.currentProduct = product;
			document.querySelector('.cart-message.removed').style.display =
				'none';
			document.querySelector('.cart-message.carted').style.display =
				'block';
			this.addToCart({ product: product });
			this.removeFromWishlist({ id: product.id });
		},
		removeWishlist: function(product) {
			this.currentProduct = product;
			document.querySelector('.cart-message.carted').style.display =
				'none';
			document.querySelector('.cart-message.removed').style.display =
				'block';
			this.removeFromWishlist({ id: product.id });
		}
	}
};
</script>