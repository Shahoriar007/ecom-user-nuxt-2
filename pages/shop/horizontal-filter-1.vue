<template>
	<main class="main skeleton-body">
		<nav
			aria-label="breadcrumb"
			class="breadcrumb-nav mb-3"
		>
			<div class="container">
				<ol class="breadcrumb">
					<li class="breadcrumb-item">
						<nuxt-link to="/">
							<i class="icon-home"></i>
						</nuxt-link>
					</li>
					<li class="breadcrumb-item active">Shop</li>
				</ol>
			</div>
		</nav>

		<div class="container">
			<div class="row">
				<div class="col-12">
					<pv-product-list-three :category-list="categoryList"></pv-product-list-three>
				</div>
			</div>
		</div>

		<div class="mb-2 mb-lg-5"></div>
	</main>
</template>

<script>
import { VueTreeList, Tree } from 'vue-tree-list';
import PvSidebarFilterOne from '~/components/partials/shop/sidebar-filter/PvSidebarFilterOne';
import PvProductListThree from '~/components/partials/shop/product-list/PvProductListThree';
import PvShopBanner from '~/components/partials/shop/PvShopBanner';
import Api, { baseUrl, currentDemo } from '~/api';

export default {
	components: {
		PvSidebarFilterOne,
		PvProductListThree,
		PvShopBanner
	},
	data: function() {
		return {
			categoryList: [],
			featuredProducts: []
		};
	},
	mounted: function() {
		this.getCategoryLists();
	},
	methods: {
		getCategoryLists: function() {
			Api.get(`${baseUrl}/shop/sidebar-list`, {
				params: { demo: currentDemo }
			})
				.then(response => {
					this.categoryList = response.data.sidebarList;
				})
				.catch(error => ({ error: JSON.stringify(error) }));
		}
	}
};
</script>   