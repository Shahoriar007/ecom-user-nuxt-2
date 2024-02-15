<template>
    <main class="main home skeleton-body">
        <div class="bg-gray pb-5">
            <div class="container pb-3">
                <pv-intro-section></pv-intro-section>

                <pv-category-section></pv-category-section>
            </div>
        </div>

        <div class="container">
            <pv-service-section></pv-service-section>
        </div>

        <div class="bg-gray">
            <div class="container">
                <pv-products-collection-four
                    :products="products"
                ></pv-products-collection-four>

                <pv-products-collection-four
                    :products="products"
                ></pv-products-collection-four>

                <pv-feature-section></pv-feature-section>

                <pv-products-collection-four
                    :products="products"
                ></pv-products-collection-four>

                <pv-products-collection-four
                    :products="products"
                ></pv-products-collection-four>
            </div>
        </div>
    </main>
</template>

<script>
import PvIntroSection from '~/components/partials/home/PvIntroSection';
import PvCategorySection from '~/components/partials/home/PvCategorySection';
import PvFeatureSection from '~/components/partials/home/PvFeatureSection';
import PvPromoSection from '~/components/partials/home/PvPromoSection';
import PvBrandSection from '~/components/partials/home/PvBrandSection';
import PvBannerSection from '~/components/partials/home/PvBannerSection';
import PvBannerSectionTwo from '~/components/partials/home/PvBannerSectionTwo';
import PvServiceSection from '~/components/partials/home/PvServiceSection';
import PvSpecialCollection from '~/components/partials/home/PvSpecialCollection';
import PvProductsFilterOne from '~/components/partials/home/PvProductsFilterOne';
import PvCategorySectionTwo from '~/components/partials/home/PvCategorySectionTwo';
import PvProductsCollectionOne from '~/components/partials/home/PvProductsCollectionOne';
import PvProductsCollectionTwo from '~/components/partials/home/PvProductsCollectionTwo';
import PvProductsCollectionThree from '~/components/partials/home/PvProductsCollectionThree';
import PvProductsCollectionFour from '~/components/partials/home/PvProductsCollectionFour';
import PvCategorySectionThree from '~/components/partials/home/PvCategorySectionThree';
import PvCategorySectionFour from '~/components/partials/home/PvCategorySectionFour';

import {
    getProductsByAttri,
    getTopSellingProducts,
    getTopRatedProducts,
} from '~/utils/service';
import { getCookie } from '~/utils';
import Api, { baseUrl } from '~/api';

export default {
    components: {
        PvIntroSection,
        PvPromoSection,
        PvServiceSection,
        PvBrandSection,
        PvBannerSection,
        PvBannerSectionTwo,
        PvSpecialCollection,
        PvProductsFilterOne,
        PvProductsCollectionOne,
        PvProductsCollectionTwo,
        PvProductsCollectionThree,
        PvProductsCollectionFour,
        PvCategorySection,
        PvCategorySectionTwo,
        PvCategorySectionThree,
        PvCategorySectionFour,
        PvFeatureSection,
    },
    data: function () {
        return {
            products: [],
            posts: [],
            featuredProducts: [],
            newProducts: [],
            bestProducts: [],
            topRatedProducts: [],
        };
    },
    computed: {
        lightBoxMedia: function () {
            let pictures = [];
            for (let i = 0; i < this.posts.length; i++) {
                pictures.push(this.posts[i].picture[0]);
            }
            return pictures.reduce((acc, cur) => {
                return [
                    ...acc,
                    {
                        src: `${baseUrl}${cur.url}`,
                        thumb: `${baseUrl}${cur.url}`,
                    },
                ];
            }, []);
        },
    },
    mounted: function () {
        Api.get(`https://d-themes.com/vue/porto/server/demo36`)
            .then((response) => {
                console.log(
                    '🚀 ~ response.data.products:',
                    response.data.products
                );
                this.products = response.data.products;
                this.posts = response.data.posts;
                this.featuredProducts = getProductsByAttri(
                    response.data.products
                );
                this.newProducts = getProductsByAttri(
                    response.data.products,
                    'is_new'
                );
                this.bestProducts = getTopSellingProducts(
                    response.data.products
                );
                this.topRatedProducts = getTopRatedProducts(
                    response.data.products
                );
            })
            .catch((error) => ({ error: JSON.stringify(error) }));

        Api.get(`${baseUrl}/api/active-products`)
            .then((response) => {
                console.log('🚀 ~ response.data.products:', response);
                // this.products = response.data.products;
                // this.posts = response.data.posts;
                // this.featuredProducts = getProductsByAttri(
                //     response.data.products
                // );
                // this.newProducts = getProductsByAttri(
                //     response.data.products,
                //     'is_new'
                // );
                // this.bestProducts = getTopSellingProducts(
                //     response.data.products
                // );
                // this.topRatedProducts = getTopRatedProducts(
                //     response.data.products
                // );
            })
            .catch((error) => ({ error: JSON.stringify(error) }));

        // this.timerId = setTimeout(() => {
        // 	if (
        // 		this.$route.path === '/' &&
        // 		getCookie('newsletter') !== 'false'
        // 	) {
        // 		this.$modal.show(
        // 			() =>
        // 				import('~/components/features/modal/PvNewsletterModal'),
        // 			{},
        // 			{
        // 				width: '740',
        // 				height: 'auto',
        // 				adaptive: true,
        // 				class: 'newsletter-modal'
        // 			}
        // 		);
        // 	}
        // }, 10000);
    },
    destroyed: function () {
        clearTimeout(this.timerId);
    },
    methods: {
        toggleSidebar: function () {
            let body = document.querySelector('body');
            if (body.classList.contains('sidebar-opened')) {
                body.classList.remove('sidebar-opened');
            } else {
                body.classList.add('sidebar-opened');
            }
        },
    },
};
</script>
