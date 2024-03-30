<template>
	<nav class="main-nav w-100">
		<ul class="menu main-menu sf-arrows w-100">
			<li
				class="menu-item"
				:class="{show: isDepart}"
			>
				<a
					href="javascript:;"
					class="d-inline-flex align-items-center sf-with-ul text-white"
					@click.prevent="mmenuAddHandler"
				>
					<i class="custom-icon-toggle-menu d-inline-table"></i><span>ALL CATEGORIES</span></a>
				<div
					class="menu-depart-overlay"
					@click.stop="mmenuRemoveHandler"
				></div>
				<div
					class="menu-depart"
					:class="{opened: isDepart}"
				>
					<ul class="menu menu-vertical sf-arrows d-block no-superfish">
						<li v-for="product in products" :key="product">
							<nuxt-link
								:to="`/shop?category=${product.id}`"
								class="sf-with-ul"
							>{{ product.name }}</nuxt-link>

							<div class="megamenu megamenu-fixed-width megamenu-one" v-if="product.sub_categories.length > 0">
								<div class="row">
									<div class="col-lg-3 mb-1 pb-2" v-for="subCategory in product.sub_categories" :key="subCategory">
										<nuxt-link
											:to="`/shop?subCategory=${subCategory.id}`"
											class="nolink pl-0"
										>{{ subCategory.name }}</nuxt-link>
										<ul class="submenu">
											<li v-for="childCategory in subCategory.child_categories" :key="childCategory">
												<nuxt-link 
													:to="`/shop?childCategory=${childCategory.id}`">
													{{ childCategory.name }}
												</nuxt-link>
											</li>
										</ul>

										
									</div>
									<div class="col-lg-4">
										

										
									</div>
									
									
								</div>
							</div>
						</li>
						
					</ul>
				</div>
			</li>

			<li>
				<nuxt-link to="/">Home</nuxt-link>
			</li>

			<li>
				<nuxt-link
					to="/shop"
					class="sub-menu-link sf-with-ul"
					:class="{active: $route.path.indexOf('/shop') > -1}"
				>Shop</nuxt-link>

			</li>

			<!-- <li>
				<nuxt-link
					to="/product/default/beats-solo-hd-drenched-one"
					class="sub-menu-link sf-with-ul"
					:class="{active: $route.path.indexOf('/product') > -1}"
				>Products</nuxt-link>

				<div class="megamenu megamenu-fixed-width megamenu-3cols">
					<div class="row">
						<div class="col-lg-4">
							<a
								href="javascript:;"
								class="nolink"
							>PRODUCT PAGES</a>

							<ul class="submenu">
								<li
									v-for="item in mainMenu.product.pages"
									:key="item.title"
								>
									<nuxt-link :to="item.url">
										{{ item.title }}
										<span
											class="tip tip-hot"
											v-if="item.hot"
										>Hot</span>
									</nuxt-link>
								</li>
							</ul>
						</div>

						<div class="col-lg-4">
							<a
								href="javascript:;"
								class="nolink"
							>PRODUCT LAYOUTS</a>

							<ul class="submenu">
								<li
									v-for="item in mainMenu.product.layout"
									:key="item.title"
								>
									<nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
								</li>

								<li>
									<a href="javascript:;">Build your own</a>
								</li>
							</ul>
						</div>

						<div class="col-lg-4 p-0">
							<div class="menu-banner menu-banner-2 position-relative">
								<figure>
									<img
										src="~/static/images/menu-banner-1.jpg"
										alt="Menu banner"
										class="product-promo"
										width="380"
										height="790"
									/>
								</figure>
								<i>OFF</i>
								<div class="banner-content">
									<h4>
										<span class>UP TO</span>
										<br />
										<b class>50%</b>
									</h4>
								</div>
								<nuxt-link
									to="/shop"
									class="btn btn-sm btn-dark"
								>SHOP NOW</nuxt-link>
							</div>
						</div>
					</div>
				</div>
			</li> -->

			<li>
				<nuxt-link
					to="/pages/about-us"
					class="sub-menu-link sf-with-ul"
				>About Us</nuxt-link>

			</li>

			<li>
				<nuxt-link
					to="/pages/contact-us"
					class="sub-menu-link sf-with-ul"
				>Contact</nuxt-link>

			</li>

			<!-- <li>
				<nuxt-link
					to="/pages/account"
					class="sub-menu-link sf-with-ul"
				>Orders</nuxt-link>

			</li> -->

			<!-- <li>
				<a
					href="javascript:;"
					class="sub-menu-link sf-with-ul"
					:class="{active: isPageItemActived}"
				>Pages</a>

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
			</li> -->

			<!-- <li>
				<a
					href="/https://1.envato.market/DdLk5"
					target="_blank"
				>Buy Porto</a>
			</li> -->

			<li class="float-right phone"><a
					href="javascript:;"
					class="d-flex align-items-center"
				><i class="icon-phone-1"></i>019-94635351</a>
			</li>
			<!-- <li class="float-right">
				<a
					href="https://1.envato.market/DdLk5"
					target="_blank"
				>NEW ARRIVALS</a></li>
			<li class="float-right"><a href="javascript:;">FLASH DEALS</a></li> -->
		</ul>
	</nav>
</template>
<script>
import { mainMenu } from '~/utils/data/menu';
import Api, { baseUrl } from '~/api';
import PvSmallProduct from '~/components/features/product/PvSmallProduct';
import PvCarousel from '~/components/features/PvCarousel';
import PvProductFour from '~/components/features/product/PvProductFour';
import { homeSidebarSlider } from '~/utils/data/carousel';

export default {
	components: {
		PvCarousel,
		PvSmallProduct,
		PvProductFour
	},
	data: function() {
		return {
			mainMenu,
			isDepart: false,
			products: [],
			homeSidebarSlider: homeSidebarSlider
		};
	},
	computed: {
		isPageItemActived: function() {
			let exItems = ['blog', 'about-us', 'contact-us'];

			if (
				this.$route.path.includes('/pages') &&
				exItems.findIndex(item => this.$route.path.includes(item)) ===
					-1
			) {
				return true;
			}

			return false;
		}
	},
	watch: {
		$route: function() {
			if (
				document
					.querySelector('body')
					.classList.contains('mmenu-depart-active')
			)
				document
					.querySelector('body')
					.classList.remove('mmenu-depart-active');
			this.isDepart = false;
		}
	},
	mounted: function() {
		Api.get(`${baseUrl}/api/categories/active-all`)
			.then(response => {
				this.products = response.data.data;
				
			})
			.catch(error => ({ error: JSON.stringify(error) }));
	},
	methods: {
		mmenuAddHandler: function(e) {
			this.isDepart = !this.isDepart;
			if (
				document
					.querySelector('body')
					.classList.contains('mmenu-depart-active')
			)
				document
					.querySelector('body')
					.classList.remove('mmenu-depart-active');
			else
				document
					.querySelector('body')
					.classList.add('mmenu-depart-active');
		},
		mmenuRemoveHandler: function(e) {
			this.isDepart = false;
			document
				.querySelector('body')
				.classList.remove('mmenu-depart-active');
		}
	}
};
</script>