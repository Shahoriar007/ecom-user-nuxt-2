<template>
	<div class="dropdown cart-dropdown">
		<a
			href="javascript:;"
			title="Cart"
			class="dropdown-toggle dropdown-arrow cart-toggle"
			role="button"
			@click="showCartMenu"
		>
			<i class="icon-cart-thick"></i>
			<span class="cart-count badge-circle">{{ totalCount }}</span>
		</a>

		<div
			class="cart-overlay"
			@click="hideCartMenu"
		></div>

		<div class="dropdown-menu mobile-cart">
			<a
				href="javascript:;"
				title="Close (Esc)"
				class="btn-close"
				@click="hideCartMenu"
			>×</a>

			<div class="dropdownmenu-wrapper custom-scrollbar">
				<div class="dropdown-cart-header">Shopping Cart</div>

				<template v-if="cartList.length > 0">
					<div class="dropdown-cart-products">
						<div
							class="product"
							v-for="(product,index) in cartList"
							:key="'cart-product-' + index"
						>
							<div class="product-details">
								<h4 class="product-title">
									<nuxt-link :to="'/product/default/' + product.slug">{{ product.name }}</nuxt-link>
								</h4>

								<span class="cart-product-info">
									<span class="cart-product-qty">{{ product.qty }}</span>
									× ${{ product.price | priceFormat }}
								</span>
							</div>

							<figure class="product-image-container">
								<nuxt-link :to="'/product/default/' + product.slug">
									<img
										v-lazy="`${product.small_pictures[0].original_url}`"
										alt="product"
										:width="product.small_pictures[0].width"
										:height="product.small_pictures[0].height"
									/>
								</nuxt-link>

								<a
									href="javascript:;"
									class="btn-remove"
									title="Remove Product"
									@click="removeCart( product.name )"
								>
									<span>×</span>
								</a>
							</figure>
						</div>
					</div>

					<div class="dropdown-cart-total">
						<span>SUBTOTAL:</span>

						<span class="cart-total-price float-right">${{ totalPrice | priceFormat }}</span>
					</div>

					<div class="dropdown-cart-action">
						<nuxt-link
							to="/pages/cart"
							class="btn btn-gray btn-block view-cart"
						>View Cart</nuxt-link>
						<nuxt-link
							to="/pages/checkout"
							class="btn btn-dark btn-block"
						>Checkout</nuxt-link>
					</div>
				</template>

				<p
					v-else
					class="cart-empty-text"
				>No products in the cart.</p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { baseUrl } from '~/api/index';

export default {
	data: function() {
		return {
			baseUrl: baseUrl
		};
	},
	computed: {
		...mapGetters('cart', ['cartList', 'totalCount', 'totalPrice'])
	},
	methods: {
		...mapActions('cart', ['removeFromCart']),
		showCartMenu: function() {
			document.querySelector('body').classList.add('cart-opened');
		},
		hideCartMenu: function() {
			document.querySelector('body').classList.remove('cart-opened');
		},
		removeCart: function(name) {
			this.removeFromCart({ name: name });
		}
	}
};
</script>