<template>
	<div>
		<nav
			class="toolbox sticky-header mobile-sticky"
			v-if="(!products) || ( products && products.length > 0 )"
		>
			<div class="toolbox-left">
				<a
					href="javascript:;"
					class="sidebar-toggle"
					@click="showSidebarFilter"
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

				<div class="toolbox-item toolbox-sort">
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

			<div class="toolbox-right">
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
			</div>
		</nav>

		<div
			class="row row-joined divide-line"
			v-infinite-scroll="loadMore"
			infinite-scroll-disabled="noMore"
			infinite-scroll-distance="-300"
			infinite-scroll-throttle-delay="500"
		>
			<template v-if="products && products.length > 0">
				<div
					:class="gridClass"
					v-for="(product,index) in products.slice(0, loadedCount)"
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
					:class="gridClass"
					v-for="(item,index) in repeatCount.slice(0,12)"
					:key="'skel-shop' + index"
				>
					<div class="skel-pro"></div>
				</div>
			</template>
		</div>

		<div
			class="sidebar-toggle custom-sidebar-toggle"
			@click="showSidebarFilter"
			v-if="products && products.length === 0"
		>
			<i class="fas fa-sliders-h"></i>
		</div>

		<div class="bounce-loader">
			<div class="bounce1"></div>
			<div class="bounce2"></div>
			<div class="bounce3"></div>
		</div>
	</div>
</template>

<script>
import infiniteScroll from 'vue-infinite-scroll';
import PvProductThree from '~/components/features/product/PvProductThree';
import PvProductTwo from '~/components/features/product/PvProductTwo';
import PvPagination from '~/components/features/PvPagination';
import { scrollTopHandler } from '~/utils';
import Api, { baseUrl, currentDemo } from '~/api';

export default {
	components: {
		PvProductThree,
		PvProductTwo,
		PvPagination
	},
	directives: {
		infiniteScroll
	},
	props: {
		gridClass: {
			type: String,
			default: 'col-6 col-sm-4 col-lg-3'
		}
	},
	data: function() {
		return {
			products: null,
			repeatCount: new Array(100),
			orderBy: 'default',
			loadedCount: 8,
			totalCount: 0
		};
	},
	computed: {
		noMore: function() {
			if (this.loadedCount + 4 >= this.totalCount) {
				return true;
			} else {
				return false;
			}
		}
	},
	watch: {
		$route: function() {
			this.getProducts();
		}
	},
	created: function() {
		this.getProducts();
	},
	methods: {
		getProducts: function() {
			this.products = null;
			this.loadedCount = 8;
			Api.get(`${baseUrl}/shop`, {
				params: {
					...this.$route.query,
					demo: currentDemo,
					order_by: this.orderBy
				}
			})
				.then(response => {
					this.products = response.data.products;
					this.totalCount = response.data.totalCount;

					scrollTopHandler();
				})
				.catch(error => ({ error: JSON.stringify(error) }));
		},
		showSidebarFilter: function() {
			document.querySelector('body').classList.toggle('sidebar-opened');
		},
		loadMore: function() {
			document.querySelector('.bounce-loader').style.display = 'block';

			setTimeout(() => {
				this.loadedCount += 4;

				document.querySelector('.bounce-loader').style.display = 'none';
			}, 1500);
		}
	}
};
</script>