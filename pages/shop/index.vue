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
					<pv-product-list-two></pv-product-list-two>
				</div>
			</div>
		</div>

		<div class="mb-2 mb-lg-5"></div>
	</main>
</template>

<script>
import { VueTreeList, Tree } from 'vue-tree-list';
import PvSidebarFilterOne from '~/components/partials/shop/sidebar-filter/PvSidebarFilterOne';
import PvProductListTwo from '~/components/partials/shop/product-list/PvProductListTwo';
import PvShopBanner from '~/components/partials/shop/PvShopBanner';
import Api, { baseUrl, currentDemo } from '~/api';

export default {
	components: {
		PvSidebarFilterOne,
		PvProductListTwo,
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
			Api.get(`https://d-themes.com/vue/porto/server/shop/sidebar-list`, {
				params: { demo: currentDemo }
			})
				.then(response => {
					this.categoryList = response.data.sidebarList;
					this.featuredProducts = response.data.featuredProducts;
				})
				.catch(error => ({ error: JSON.stringify(error) }));
		}
	}
};
</script>