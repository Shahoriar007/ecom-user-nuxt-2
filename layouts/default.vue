<template>
	<div @click="hideMobileSearch">
		<div class="page-wrapper">
			

			<pv-header></pv-header>
			<nuxt></nuxt>
			<pv-footer></pv-footer>

			<div class="wishlist-popup">
				<div class="wishlist-popup-msg">Product added!</div>
			</div>
		</div>

		<!-- <pv-cart-popup class="minipopup-area"></pv-cart-popup> -->

		<a
			id="scroll-top"
			href="javascript:;"
			title="Top"
			role="button"
			@click="scrollToTop"
		>
			<i class="icon-angle-up"></i>
		</a>

		<pv-mobile-menu></pv-mobile-menu>

		<template>
			<div class="whatsapp-logo">
				<a href="https://wa.me/+8801994635351" target="_blank">
					<img src="~/static/images/whatsapp2.png" alt="whatsapp-logo" />
				</a>
			</div>
		</template>

		<template>
			<div class="messenger-logo">
				<a href="https://m.me/100064835408819" target="_blank">
					<img src="~/static/images/messenger.png" alt="messenger-logo" />
				</a>
			</div>
		</template>


		<!-- <template>
			<pv-sticky-footer v-if="isHideStickyFooter" :isHideStickyFooter="isHideStickyFooter"></pv-sticky-footer>
		</template> -->
	</div>
</template>

<script>
import PvHeader from '~/components/common/PvHeader';
import PvFooter from '~/components/common/PvFooter';
import PvCartPopup from '~/components/common/partials/PvCartPopup';
import PvMobileMenu from '~/components/common/partials/PvMobileMenu';
import PvStickyFooter from '~/components/common/partials/PvStickyFooter';
import {
	scrollTop,
	stickyHeaderHandler,
	resizeHandler,
	showScrollTopHandler,
	setCookie,
	getCookie
} from '~/utils';

export default {
	components: {
		PvHeader,
		PvFooter,
		PvCartPopup,
		PvMobileMenu,
		PvStickyFooter
	},
	data: function() {
		return {
			isHide: false,
			isHideStickyFooter: true,
			categories: [],
		};
	},
	watch: {
		$route: function() {
			resizeHandler();
			this.$modal.hideAll();
			this.isHide = getCookie('topNotice');
		}
	},
	created: function() {
		this.isHide = getCookie('topNotice');
		this.getCurrentUrl();
	},
	mounted: function() {
		window.addEventListener('scroll', stickyHeaderHandler, {
			passive: true
		});
		window.addEventListener('scroll', showScrollTopHandler, {
			passive: true
		});
		window.addEventListener('resize', stickyHeaderHandler);
		window.addEventListener('resize', resizeHandler);

	},
	destroyed: function() {
		window.removeEventListener('scroll', showScrollTopHandler, {
			passive: true
		});
		window.removeEventListener('scroll', stickyHeaderHandler, {
			passive: true
		});
		window.removeEventListener('resize', stickyHeaderHandler);
		window.removeEventListener('resize', resizeHandler);
	},
	methods: {

		getCurrentUrl: function() {
			const url = window.location.href;
    		if (url.includes('/product/default/')) {

				this.isHideStickyFooter = false;
				// console.log('true', this.isHideStickyFooter)
			}else{
				this.isHideStickyFooter = true;
				// console.log('false', this.isHideStickyFooter)
			}

    },
		

		scrollToTop: function() {
			scrollTop(false);
		},
		hideTopNotice: function() {
			this.isHide = true;
			setCookie('topNotice', false);
		},
		hideMobileSearch: function() {
			if (document.querySelector('.header-search.header-search-inline')) {
				let headerSearch = document.querySelector(
					'.header-search.header-search-inline'
				);
				headerSearch.classList.remove('show');
				headerSearch
					.querySelector('.header-search-wrapper')
					.classList.remove('show');
			}
			if (document.querySelector('.search-suggests')) {
				document
					.querySelector('.search-suggests')
					.setAttribute('style', 'display: none');
			}
		}
	}
};
</script>

<style scoped>

.whatsapp-logo {
    position: fixed;
    left: -15px;
    bottom: 80px;
    z-index: 1000;
	width: 100px;
}
.messenger-logo {
    position: fixed;
    right: 10px; 
    bottom: 80px; 
    z-index: 9999; 
	width: 60px;
  }
</style>