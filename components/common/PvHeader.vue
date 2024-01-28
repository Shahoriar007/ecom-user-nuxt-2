<template>
	<header class="header">
		<div class="header-top">
			<div class="container">
				<!-- <div class="header-left d-none d-sm-block">
					<div class="info-box info-box-icon-left text-primary justify-content-start p-0">
						<i class="icon-shipping"></i>

						<div class="info-box-content">
							<h4 class="text-transform-none">FREE Express Shipping On Orders $99+</h4>
						</div>
					</div>
				</div> -->

				<div class="header-right header-dropdowns ml-0 ml-sm-auto w-sm-100">
					

					

					<div class="header-dropdown dropdown-expanded d-none d-lg-block">
						<a href="javascript:;">Links</a>
						<div class="header-menu">
							<ul>
								
								<li>
									<nuxt-link to="/pages/cart">Cart</nuxt-link>
								</li>
								
							</ul>
						</div>
					</div>

					<div class="social-icons">
						<a
							href="javascript:;"
							class="social-icon social-facebook icon-facebook"
							
						></a>
						<a
							href="javascript:;"
							class="social-icon social-twitter icon-twitter"
							
						></a>
						<a
							href="javascript:;"
							class="social-icon social-instagram icon-instagram"
							
						></a>
					</div>
				</div>
			</div>
		</div>

		<div class="header-middle sticky-header mobile-sticky">
			<div class="container">
				<div class="header-left col-lg-2 w-auto pl-0">
					<button
						class="mobile-menu-toggler text-dark mr-2"
						type="button"
						@click="showMobileMenu"
					>
						<i class="fas fa-bars"></i>
					</button>
					<nuxt-link
						to="/"
						class="logo"
					>
						<img
							src="~/static/images/logo-black.png"
							class="w-100"
							width="101"
							height="40"
							alt="Porto Logo"
						/>
					</nuxt-link>
				</div>

				<div class="header-right w-lg-max">
					<pv-header-search></pv-header-search>

					<a
						href="javascript:;"
						@click="openLoginModal"
						class="d-lg-block d-none"
						title="login"
					>
						<div class="header-user">
							<i class="icon-user-2"></i>
							<div class="header-userinfo">
								<span>Welcome</span>
								<h4 class="mb-0">My Account</h4>
							</div>
						</div>
					</a>

					<nuxt-link
						to="/pages/wishlist"
						class="header-icon position-relative"
						title="wishlist"
					>
						<i class="icon-wishlist-2"></i><span class="wishlist-count badge-circle">{{ wishList.length }}</span>
					</nuxt-link>

					<pv-cart-menu></pv-cart-menu>
				</div>
			</div>
		</div>

		<div class="header-bottom sticky-header d-none d-lg-flex desktop-sticky">
			<div class="container">
				<pv-main-menu></pv-main-menu>
			</div>
		</div>
	</header>
</template>

<script>
import PvMainMenu from '~/components/common/partials/PvMainMenu';
import PvCartMenu from '~/components/common/partials/PvCartMenu';
import PvHeaderSearch from '~/components/common/partials/PvHeaderSearch';
import { mapGetters } from 'vuex';

document.querySelector('body').classList.add('loaded');

export default {
	components: {
		PvMainMenu,
		PvCartMenu,
		PvHeaderSearch
	},
	data: function() {
		return {
			isHome: {
				type: Boolean,
				default: true
			}
		};
	},
	computed: {
		...mapGetters('wishlist', ['wishList'])
	},
	mounted: function() {
		let items = document.querySelectorAll('.menu-vertical > li');
		items.forEach(item => {
			item.addEventListener('mouseenter', this.mouseOverHandler);
			item.addEventListener('mouseleave', this.mouseLeaveHandler);
		});
	},
	destroyed: function() {
		let items = document.querySelectorAll('.menu-vertical > li');
		items.forEach(item => {
			item.removeEventListener('mouseover', this.mouseOverHandler);
			item.removeEventListener('mouseleave', this.mouseLeaveHandler);
		});
	},
	methods: {
		openLoginModal: function() {
			this.$modal.show(
				() => import('~/components/features/modal/PvLoginModal'),
				{},
				{ width: '525', height: 'auto', adaptive: true }
			);
		},
		showMobileMenu: function() {
			document.querySelector('body').classList.add('mmenu-active');
		},
		showMobileSearch: function(e) {
			let headerSearch = e.currentTarget.closest('.header-search');
			headerSearch.classList.add('show');
			headerSearch
				.querySelector('.header-search-wrapper')
				.classList.add('show');
		},
		mouseOverHandler: function(e) {
			e.currentTarget.classList.add('show');
		},
		mouseLeaveHandler: function(e) {
			e.currentTarget.classList.remove('show');
		}
	}
};
</script>