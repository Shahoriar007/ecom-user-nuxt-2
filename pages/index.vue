<template>

    <main class="main home skeleton-body">

        

        <div class="bg-gray pb-5">
            <div class="container pb-3">
                <pv-intro-section></pv-intro-section>

                <pv-category-section></pv-category-section>
            </div>
        </div>

        <!-- <div class="container">
            <pv-service-section></pv-service-section>
        </div> -->

        <div class="bg-gray" v-if="products && products.length > 0">
            <div class="container">
                <pv-products-collection-four
                    :products="newArrivalProducts"
                    :tags = "['New Arrival']"
                ></pv-products-collection-four>

                <pv-products-collection-four
                    :products="flashSaleProducts"
                    :tags = "['Flash Sale']"
                ></pv-products-collection-four>

                    <pv-feature-section></pv-feature-section>
                    
                    <pv-products-collection-four
                    :products="hotDealProducts"
                    :tags = "['Hot Deals']"
                ></pv-products-collection-four>

                <!-- <pv-products-collection-four
                    :products="isForYouProducts"
                    :tags = "['For You']"
                    ></pv-products-collection-four> -->

                <pv-products-filter-one
                    :products="isForYouProducts"
                    :tags = "['For You']"
                    >
                </pv-products-filter-one>
            </div>
        </div>
        

        <template>
			<pv-sticky-footer></pv-sticky-footer>
		</template>

      

       
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
import PvStickyFooter from '~/components/common/partials/PvStickyFooter';

import {
    getTopSellingProducts,
    getTopRatedProducts,

    getProductsByAttri,
    getProductsByAttriSale,
    getProductsByAttriForYou,
    getProductsByAttriNewArrival,
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
		PvStickyFooter,

    },
    data: function () {
        return {
            products: [],
            posts: [],
            hotDealProducts: [],
            flashSaleProducts: [],
            bestProducts: [],
            topRatedProducts: [],
            isForYouProducts: [],
            newArrivalProducts: [],
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

        Api.get(`${baseUrl}/api/active-products`)
            .then((response) => {
                // console.log(
                //     response.data.data
                // );
                this.products = response.data.data;

                this.posts = response.data.posts;

                this.flashSaleProducts = getProductsByAttriSale(
                    response.data.data,
                );
                this.isForYouProducts = getProductsByAttriForYou(
                    response.data.data,
                );
                this.newArrivalProducts = getProductsByAttriNewArrival(
                    response.data.data,
                );
                this.hotDealProducts = getProductsByAttri(
                    response.data.data
                );
                
                
            })
            .catch((error) => ({ error: JSON.stringify(error) }));

        //     Api.get(`http://project-ecom-laravel-api.test/api/categories/active-all`)
		// 	.then((response) => {
		// 		console.log(response?.data?.data);
		// 	})
		// 	.catch((error) => ({ error: JSON.stringify(error) }));

		// console.log("im here3");

        Api.get(`${baseUrl}/api/active-products`)
            .then((response) => {
                console.log('🚀 ~ response.data.products:', response);
                // this.products = response.data.products;
                // this.posts = response.data.posts;
                // this.hotDealProducts = getProductsByAttri(
                //     response.data.products
                // );
                // this.flashSaleProducts = getProductsByAttri(
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
