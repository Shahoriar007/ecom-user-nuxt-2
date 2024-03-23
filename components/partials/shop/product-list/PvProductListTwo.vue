<template>
	<div>
		<!-- <nav class="toolbox sticky-header horizontal-filter filter-sorts">
			<div
				class="sidebar-overlay d-lg-none"
				@click="toggleSidebar"
			></div>

			<a
				href="javascript:;"
				class="sidebar-toggle border-0"
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

			<pv-sidebar-filter-two></pv-sidebar-filter-two>

			<div class="toolbox-item toolbox-sort select-custom">
				<label class="d-none">Sort By:</label>

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

			<div class="toolbox-item toolbox-show ml-auto">
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
		</nav> -->

		<div class="divide-line-wrapper">
			<div class="row row-joined divide-line product-section">
				<template v-if="products && products.length > 0">
					<div
						class="col-6 col-sm-4 col-md-3 col-xl-5col"
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
						class="col-6 col-sm-4 col-md-3 col-xl-5col"
						v-for="(item,index) in repeatCount.slice(0,12)"
						:key="'skel-shop' + index"
					>
						<div class="skel-pro"></div>
					</div>
				</template>
			</div>
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

		<template>
			<pv-sticky-footer></pv-sticky-footer>
		</template>
	</div>
</template>

<script>
import PvProductThree from '~/components/features/product/PvProductThree';
import PvPagination from '~/components/features/PvPagination';
import PvSidebarFilterTwo from '~/components/partials/shop/sidebar-filter/PvSidebarFilterTwo';
import { scro, scrollTopHandler } from '~/utils';
import Api, { baseUrl, currentDemo } from '~/api';
import PvStickyFooter from '~/components/common/partials/PvStickyFooter';


export default {
	components: {
		PvProductThree,
		PvPagination,
		PvSidebarFilterTwo,
		PvStickyFooter
	},
	data: function() {
		return {
			products: null,
			repeatCount: new Array(100),
			orderBy: 'default',
			itemsPerPage: 12,
			totalCount: null
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
	methods: {
		getProducts: function() {
			this.products = null;
			this.totalCount = null;

			Api.get(`${baseUrl}/api/active-products`)
				.then(response => {
					this.products = response.data.data;
					//this.totalCount = response.data.totalCount;
					scrollTopHandler();
				})
				.catch(error => ({ error: JSON.stringify(error) }));

			Api.get(`${baseUrl}/api/total-products`)
				.then(response => {
					this.totalCount = response.data.total_products;
					scrollTopHandler();
				})
				.catch(error => ({ error: JSON.stringify(error) }));
		},


		colorFilterRoute: function(item) {
			let selectedColors = this.$route.query.color
				? this.$route.query.color.split(',')
				: [];
			let index = selectedColors.indexOf(item.name);
			if (index > -1) {
				selectedColors.splice(index, 1);
			} else {
				selectedColors.push(item.name);
			}

			return {
				path: this.$route.path,
				query: {
					...this.$route.query,
					color: selectedColors.toString()
				}
			};
		},
		sizeFilterRoute: function(item) {
			let selectedSizes = this.$route.query.size
				? this.$route.query.size.split(',')
				: [];
			let index = selectedSizes.indexOf(item.size);
			if (index > -1) {
				selectedSizes.splice(index, 1);
			} else {
				selectedSizes.push(item.size);
			}

			return {
				path: this.$route.path,
				query: { ...this.$route.query, size: selectedSizes.toString() }
			};
		},
		isActivedColor: function(item) {
			return (
				this.$route.query.color &&
				this.$route.query.color.split(',').includes(item.name)
			);
		},
		isActivedSize: function(item) {
			return (
				this.$route.query.size &&
				this.$route.query.size.split(',').includes(item.size)
			);
		},
		toggleSidebar: function() {
			let body = document.querySelector('body');
			if (body.classList.contains('sidebar-opened')) {
				body.classList.remove('sidebar-opened');
			} else {
				body.classList.add('sidebar-opened');
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