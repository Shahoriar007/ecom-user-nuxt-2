<template>
	<aside
		class="sidebar-product col-lg-3 mobile-sidebar"
		sticky-container
	>
		<div
			class="sidebar-wrapper"
			v-sticky="isSticky"
			sticky-offset="{top: 80}"
		>
			<div
				class="sidebar-content skeleton-body"
				v-if="categoryList.length === 0"
			>
				<aside class="widget"></aside>
			</div>

			<div
				class="widget widget-product-categories mb-3"
				v-else
			>
				<vue-slide-toggle :open="catOpened">
					<vue-tree-list
						:model="categoryTree"
						:default-expanded="false"
					>
						<template v-slot:leafNameDisplay="slotProps">
							<nuxt-link :to="{path: '/shop', query: {category: slotProps.model.slug, page: 1}}">{{ slotProps.model.name }}</nuxt-link>
						</template>
						<template v-slot:treeNodeIcon>
							<span></span>
						</template>
					</vue-tree-list>
				</vue-slide-toggle>
			</div>

			<div class="widget">
				<div class="maga-sale-container">
					<figure class="mega-image">
						<img
							v-lazy="'./images/banners/banner-sidebar.jpg'"
							width="280"
							height="355"
							style="background: #edece7"
							class="w-100"
							alt="Banner Desc"
						/>
					</figure>

					<div class="mega-content">
						<div class="mega-price-box">
							<span class="price-big">50</span>
							<span class="price-desc">
								<em>%</em>OFF
							</span>
						</div>

						<div class="mega-desc">
							<h3 class="mega-title mb-0">MEGA SALE</h3>
							<span class="mega-subtitle">MANY ITEM</span>
						</div>
					</div>
				</div>
			</div>

			<div class="widget widget-featured">
				<h3 class="widget-title">Featured</h3>

				<div class="widget-body">
					<pv-carousel
						class="widget-featured-products"
						:options="baseSlider1"
					>
						<div class="featured-col swiper-slide">
							<pv-small-product
								:product="product"
								v-for="(product,index) in featuredProducts"
								:key="'featured' + index"
								:is-lazy="false"
							></pv-small-product>
						</div>
					</pv-carousel>
				</div>
			</div>
		</div>
	</aside>
</template>

<script>
import Api, { baseUrl, currentDemo } from '~/api';
import Sticky from 'vue-sticky-directive';
import { VueSlideToggle } from 'vue-slide-toggle';
import { VueTreeList, Tree } from 'vue-tree-list';
import PvCarousel from '~/components/features/PvCarousel';
import PvSmallProduct from '~/components/features/product/PvSmallProduct';
import { baseSlider1 } from '~/utils/data/carousel';

export default {
	components: {
		VueSlideToggle,
		VueTreeList,
		PvSmallProduct,
		PvCarousel
	},
	directives: {
		Sticky
	},
	props: {
		featuredProducts: Array
	},
	data: function() {
		return {
			categoryList: [],
			catOpened: true,
			isSticky: false,
			baseSlider1: baseSlider1
		};
	},
	computed: {
		categoryTree: function() {
			return new Tree(this.categoryList);
		}
	},
	mounted: function() {
		this.getCategoryLists();
		this.resizeHandler();
		window.addEventListener('resize', this.resizeHandler, {
			passive: true
		});
	},
	destroyed: function() {
		window.removeEventListener('resize', this.resizeHandler);
	},
	methods: {
		getCategoryLists: function() {
			Api.get(`${baseUrl}/products/sidebar-list`, {
				params: { demo: currentDemo }
			})
				.then(response => {
					this.categoryList = response.data.sidebarList;
				})
				.catch(error => ({ error: JSON.stringify(error) }));
		},
		resizeHandler: function() {
			this.isSticky = window.innerWidth > 991 ? true : false;
		}
	}
};
</script>