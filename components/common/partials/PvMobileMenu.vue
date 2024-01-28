<template>
	<div>
		<div
			class="mobile-menu-overlay"
			@click="hideMobileMenu"
		></div>

		<div class="mobile-menu-container">
			<div class="mobile-menu-wrapper">
				<span
					class="mobile-menu-close"
					@click="hideMobileMenu"
				>
					<i class="fa fa-times"></i>
				</span>

				<nav class="mobile-nav">
					<ul class="mobile-menu">
						<li>
							<nuxt-link to="/">Home</nuxt-link>
						</li>

						<li :class="{open: catOpened}">
							<nuxt-link
								to="/shop"
								class="sub-menu-link menu-with-ul"
							>
								Categories
								<span
									class="mmenu-btn"
									@click.prevent="catOpened = !catOpened"
								></span>
							</nuxt-link>

							<vue-slide-toggle :open="catOpened">
								<ul :class="{open: var1Opened}">
									<li
										class="sub-menu-link menu-with-ul"
										@click="var1Opened = !var1Opened"
										:class="{open: var1Opened}"
									>
										<a href="javascript:;">
											Variations1
											<span class="mmenu-btn"></span>
										</a>
									</li>

									<li class="border-0">
										<vue-slide-toggle
											tag="ul"
											:open="var1Opened"
											class="ml-4"
										>
									<li
										v-for="(item,index) in mainMenu.shop.variation1"
										:key="'shop1' + index"
									>
										<nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
									</li>
							</vue-slide-toggle>
						</li>
					</ul>

					<ul :class="{open: var2Opened}">
						<li
							class="sub-menu-link menu-with-ul"
							@click="var2Opened = !var2Opened"
							:class="{open: var2Opened}"
						>
							<a href="javascript:;">
								Variations2
								<span class="mmenu-btn"></span>
							</a>
						</li>

						<li class="border-0">
							<vue-slide-toggle
								tag="ul"
								:open="var2Opened"
								class="ml-4"
							>
						<li
							v-for="(item,index) in mainMenu.shop.variation2"
							:key="'shop2' + index"
						>
							<nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
						</li>
						</vue-slide-toggle>
						</li>
					</ul>
					</vue-slide-toggle>
					</li>

					<li :class="{open: prodOpened}">
						<nuxt-link
							to="/product/default/beats-solo-hd-drenched-one"
							class="sub-menu-link menu-with-ul"
						>
							Products
							<span
								class="mmenu-btn"
								@click.prevent="prodOpened = !prodOpened"
							></span>
						</nuxt-link>

						<vue-slide-toggle :open="prodOpened">
							<ul :class="{open: prod1Opened}">
								<li
									class="sub-menu-link menu-with-ul"
									@click="prod1Opened = !prod1Opened"
									:class="{open: prod1Opened}"
								>
									<a href="javascript:;">
										Product Pages
										<span class="mmenu-btn"></span>
									</a>
								</li>

								<li class="border-0">
									<vue-slide-toggle
										tag="ul"
										:open="prod1Opened"
										class="ml-4"
									>
								<li
									v-for="(item,index) in mainMenu.product.pages"
									:key="'product1' + index"
								>
									<nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
								</li>
						</vue-slide-toggle>
					</li>
					</ul>

					<ul :class="{open: prod2Opened}">
						<li
							class="sub-menu-link menu-with-ul"
							@click="prod2Opened = !prod2Opened"
							:class="{open: prod2Opened}"
						>
							<a href="javascript:;">
								Product Layouts
								<span class="mmenu-btn"></span>
							</a>
						</li>

						<li class="border-0">
							<vue-slide-toggle
								tag="ul"
								:open="prod2Opened"
								class="ml-4"
							>
						<li
							v-for="(item,index) in mainMenu.product.layout"
							:key="'product2' + index"
						>
							<nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
						</li>
						</vue-slide-toggle>
						</li>
					</ul>
					</vue-slide-toggle>
					</li>

					<li :class="{open: pageOpened}">
						<nuxt-link
							to="/pages/about-us"
							class="sub-menu-link"
						>
							Pages
							<span class="tip tip-hot">Hot!</span>
							<span
								class="mmenu-btn"
								@click.prevent="pageOpened = !pageOpened"
							></span>
						</nuxt-link>

						<vue-slide-toggle :open="pageOpened">
							<ul>
								<li
									v-for="item in mainMenu.other"
									:key="item.title"
								>
									<nuxt-link
										:to="item.url"
										:class="{'sub-menu-link': item.subPages}"
									>{{ item.title }}</nuxt-link>

									<ul v-if="item.subPages">
										<li
											v-for="subItem in item.subPages"
											:key="subItem.title"
										>
											<nuxt-link :to="subItem.url">{{ subItem.title }}</nuxt-link>
										</li>
									</ul>
								</li>
							</ul>
						</vue-slide-toggle>
					</li>

					<li>
						<nuxt-link to="/pages/blog">Blog</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/pages/about-us">About Us</nuxt-link>
					</li>
					</ul>

					<ul class="mobile-menu mt-2 mb-2">
						<li class="border-0">
							<a href="javascript:;">Special Offer!</a>
						</li>
						<li class="border-0">
							<a
								href="/https://1.envato.market/DdLk5"
								target="_blank"
							>Buy Porto!<span class="tip tip-hot">Hot</span></a>
						</li>
					</ul>

					<ul class="mobile-menu">
						<li>
							<nuxt-link to="/pages/dashboard">My Account</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/pages/contact-us">Contact Us</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/pages/blog">Blog</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/pages/wishlist">My Wishlist</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/pages/cart">Cart</nuxt-link>
						</li>
						<li>
							<nuxt-link
								to="/pages/login"
								class="login-link"
							>Log In</nuxt-link>
						</li>
					</ul>
				</nav>

				<form
					class="search-wrapper mb-2"
					action="#"
				>
					<input
						type="text"
						class="form-control mb-0"
						placeholder="Search..."
						v-model="search_term"
						required
					/>
					<button
						class="btn icon-search text-white bg-transparent p-0"
						type="submit"
						@click="submitSearchForm"
					></button>
				</form>

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
</template>

<script>
import { VueSlideToggle } from 'vue-slide-toggle';
import { mainMenu } from '~/utils/data/menu';

export default {
	components: {
		VueSlideToggle
	},
	data: function() {
		return {
			search_term: '',
			mainMenu: mainMenu,
			catOpened: false,
			var1Opened: false,
			var2Opened: false,
			prodOpened: false,
			prod1Opened: false,
			prod2Opened: false,
			pageOpened: false
		};
	},
	methods: {
		hideMobileMenu: function() {
			document.querySelector('body').classList.remove('mmenu-active');
		},
		submitSearchForm: function(e) {
			this.$router.push({
				path: '/shop',
				query: {
					search_term: this.search_term
				}
			});
			this.search_term = '';
		}
	}
};
</script>