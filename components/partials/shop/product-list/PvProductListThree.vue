<template>
	<div>
		<nav
			class="toolbox sticky-header horizontal-filter mb-1 mobile-sticky"
			v-if="(!products) || (products && products.length > 0)"
		>
			<div class="toolbox-left">
				<a
					href="javascript:;"
					class="sidebar-toggle"
					@click="toggleSidebar"
				>
					<svg
						data-name="Layer 3"
						id="Layer_3"
						viewBox="0 0 32 32"
						xmlns="http://www.w3.org/2000/svg"
					>
						<line
							x1="15"
							x2="26"
							y1="9"
							y2="9"
							class="cls-1"
						/>
						<line
							x1="6"
							x2="9"
							y1="9"
							y2="9"
							class="cls-1"
						/>
						<line
							x1="23"
							x2="26"
							y1="16"
							y2="16"
							class="cls-1"
						/>
						<line
							x1="6"
							x2="17"
							y1="16"
							y2="16"
							class="cls-1"
						/>
						<line
							x1="17"
							x2="26"
							y1="23"
							y2="23"
							class="cls-1"
						/>
						<line
							x1="6"
							x2="11"
							y1="23"
							y2="23"
							class="cls-1"
						/>
						<path
							d="M14.5,8.92A2.6,2.6,0,0,1,12,11.5,2.6,2.6,0,0,1,9.5,8.92a2.5,2.5,0,0,1,5,0Z"
							class="cls-2"
						/>
						<path
							d="M22.5,15.92a2.5,2.5,0,1,1-5,0,2.5,2.5,0,0,1,5,0Z"
							class="cls-2"
						/>
						<path
							d="M21,16a1,1,0,1,1-2,0,1,1,0,0,1,2,0Z"
							class="cls-3"
						/>
						<path
							d="M16.5,22.92A2.6,2.6,0,0,1,14,25.5a2.6,2.6,0,0,1-2.5-2.58,2.5,2.5,0,0,1,5,0Z"
							class="cls-2"
						/>
					</svg>
					<span>Filter</span>
				</a>

				<div
					class="toolbox-item filter-toggle d-none d-lg-flex"
					:class="{opened: isSidebar}"
				>
					<span>Filters:</span>
					<a
						href="javascript:;"
						@click="toggleSidebar(), isSidebar = !isSidebar"
					>&nbsp;</a>
				</div>
			</div>

			<div class="ml-lg-auto">
				<div
					class="toolbox-item toolbox-sort"
					v-if="totalCount > 0"
				>
					<label>Sort By:</label>

					<div class="select-custom">
						<select
							name="orderby"
							class="form-control"
							v-model="orderBy"
							@change="getProducts"
						>
							<option
								value="default"
								selected="default"
							>Default sorting</option>
							<option value="featured">Sort by popularity</option>
							<option value="rating">Sort by average rating</option>
							<option value="new">Sort by newness</option>
							<option value="price-asc">Sort by price: low to high</option>
							<option value="price-dec">Sort by price: high to low</option>
						</select>
					</div>
				</div>
			</div>

			<div class="toolbox-item toolbox-show ml-auto ml-lg-0">
				<label>Show:</label>

				<div class="select-custom">
					<select
						name="count"
						class="form-control"
						@change="getProducts"
						v-model="itemsPerPage"
					>
						<option :value="12">12</option>
						<option :value="24">24</option>
						<option :value="36">36</option>
					</select>
				</div>
			</div>

			<div class="toolbox-item layout-modes">
				<a
					href="javascript:;"
					class="layout-btn btn-grid active"
					title="Grid"
				>
					<i class="icon-mode-grid"></i>
				</a>
				<nuxt-link
					to="/shop/list"
					class="layout-btn btn-list"
					title="List"
				>
					<i class="icon-mode-list"></i>
				</nuxt-link>
			</div>
		</nav>

		<div class="row main-content-wrap">
			<div class="col-lg-9 main-content">
				<div class="row">
					<template v-if="products && products.length > 0">
						<div
							class="col-6 col-sm-4"
							:class="isSidebar ? '' : 'col-lg-3'"
							v-for="(product,index) in products"
							:key="'shop-product' + index"
						>
							<pv-product-three :product="product"></pv-product-three>
						</div>
					</template>

					<template v-if="products && products.length === 0">
						<div class="info-box with-icon p-0 shop-info mb-2">
							<p>No products were found matching your selection.</p>
						</div>
					</template>

					<template v-if="!products">
						<div
							class="col-6 col-sm-4"
							:class="isSidebar ? '' : 'col-lg-3'"
							v-for="(item,index) in repeatCount.slice(0,12)"
							:key="'skel-shop' + index"
						>
							<div class="skel-pro"></div>
						</div>
					</template>
				</div>

				<nav class="toolbox toolbox-pagination">
					<div class="toolbox-item toolbox-show mb-0">
						<label>Show:</label>

						<div class="select-custom">
							<select
								name="count"
								class="form-control"
								@change="changePerPage"
								v-model="itemsPerPage"
							>
								<option value="12">12</option>
								<option value="24">24</option>
								<option value="36">36</option>
							</select>
						</div>
					</div>

					<pv-pagination
						:totalCount="totalCount"
						:itemsPerPage="itemsPerPage"
						v-if="totalCount"
					></pv-pagination>
				</nav>
			</div>

			<div
				class="sidebar-overlay"
				@click="toggleSidebar"
			></div>
			<aside
				class="sidebar-shop col-lg-3 order-lg-first mobile-sidebar"
				sticky-container
			>
				<div
					v-sticky
					sticky-offset="{top: 80}"
					v-if="isSticky"
				>
					<pv-sidebar-filter-one
						:category-list="categoryList"
						v-if="categoryList.length > 0"
					></pv-sidebar-filter-one>

					<div
						class="sidebar-content skeleton-body"
						v-else
					>
						<aside class="widget"></aside>
						<aside class="widget"></aside>
						<aside class="widget"></aside>
					</div>
				</div>
				<div v-else>
					<pv-sidebar-filter-one
						:category-list="categoryList"
						v-if="categoryList.length > 0"
					></pv-sidebar-filter-one>

					<div
						class="sidebar-content skeleton-body"
						v-else
					>
						<aside class="widget"></aside>
						<aside class="widget"></aside>
						<aside class="widget"></aside>
					</div>
				</div>
			</aside>
		</div>

		<div
			class="sidebar-toggle custom-sidebar-toggle"
			@click="toggleSidebar"
			v-if="products && products.length === 0"
		>
			<i class="fas fa-sliders-h"></i>
		</div>
	</div>
</template>

<script>
import PvProductThree from '~/components/features/product/PvProductThree';
import PvPagination from '~/components/features/PvPagination';
import PvSidebarFilterOne from '~/components/partials/shop/sidebar-filter/PvSidebarFilterOne';
import { scro, scrollTopHandler } from '~/utils';
import Api, { baseUrl, currentDemo } from '~/api';
import Sticky from 'vue-sticky-directive';

export default {
	components: {
		PvProductThree,
		PvPagination,
		PvSidebarFilterOne
	},
	directives: {
		Sticky
	},
	props: {
		categoryList: Array
	},
	data: function() {
		return {
			products: null,
			repeatCount: new Array(100),
			orderBy: 'default',
			itemsPerPage: 12,
			totalCount: 0,
			isSticky: true,
			isSidebar: true
		};
	},
	watch: {
		$route: function() {
			this.getProducts();
		}
	},
	created: function() {
		this.getProducts();
	},
	mounted: function() {
		this.resizeHandler();
		window.addEventListener('resize', this.resizeHandler, {
			passive: true
		});
		this.stickyFilterHandler();
		window.addEventListener('scroll', this.stickyFilterHandler, {
			passive: true
		});
	},
	destroyed: function() {
		window.removeEventListener('resize', this.resizeHandler);
		window.removeEventListener('scroll', this.stickyFilterHandler);
	},
	methods: {
		getProducts: function() {
			document.querySelector('body').classList.add('sidebar-opened');
			this.products = null;
			this.totalCount = 0;
			Api.get(`${baseUrl}/shop`, {
				params: {
					...this.$route.query,
					demo: currentDemo,
					order_by: this.orderBy,
					per_page: this.itemsPerPage
				}
			})
				.then(response => {
					this.products = response.data.products;
					this.totalCount = response.data.totalCount;
					scrollTopHandler();
				})
				.catch(error => ({ error: JSON.stringify(error) }));
		},
		toggleSidebar: function() {
			let body = document.querySelector('body');
			if (body.classList.contains('sidebar-opened')) {
				body.classList.remove('sidebar-opened');
			} else {
				body.classList.add('sidebar-opened');
			}
		},
		resizeHandler: function() {
			this.isSticky = window.innerWidth > 991 ? true : false;
			let body = document.querySelector('body');
			if (this.isSidebar) {
				body.classList.add('sidebar-opened');
			}
		},
		stickyFilterHandler: function() {
			let filter = document.querySelector(
				'.horizontal-filter.sticky-header'
			);
			if (filter) {
				let header = document.querySelector(
					'.header .sticky-header.header-middle'
				);
				let height = header.offsetHeight;
				let top = 600;
				if (window.innerWidth < 992 && window.pageYOffset > top) {
					filter.classList.add('fixed');
					if (!document.querySelector('.sticky-filter-wrapper')) {
						let newNode = document.createElement('div');
						newNode.className = 'sticky-filter-wrapper';
						filter.parentNode.insertBefore(newNode, filter);
						document
							.querySelector('.sticky-filter-wrapper')
							.insertAdjacentElement('beforeend', filter);
					}
					filter.setAttribute('style', 'top: ' + height + 'px');
				} else {
					filter.classList.remove('fixed');
					filter.setAttribute('style', '');
				}
			}
		},
		changePerPage: function() {
			this.$router.push({
				...this.$route,
				query: {
					...this.$route.query,
					per_page: this.itemsPerPage,
					page: 1
				}
			});
		}
	}
};
</script>