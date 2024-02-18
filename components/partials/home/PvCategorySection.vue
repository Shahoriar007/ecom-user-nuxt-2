<template>
    <div
        class="categories-section appear-animate"
        data-animation-name="fadeIn"
        data-animation-delay="100"
        v-animate
    >
        <pv-carousel
            class="categories-slider swiper-carousel swiper-theme show-nav-hover nav-outer appear-animate"
            :options="categorySlider"
            data-animation-name="fadeInUpShorter"
            data-animation-delay="200"
            data-animation-duration="1000"
            v-animate
        >

		<template >
			<div
                class="product-category swiper-slide"
                data-animation-name="fadeInUpShorter"
                v-animate

				v-for="(item, index) in categories" :key="index"
            >
                <nuxt-link
                    :to="{ path: '/shop', query: { category: 'fashion' } }"
                >
                    <figure>
                        <img
                            v-lazy="item.category_image"
                            alt="category"
                            width="280"
                            height="240"
                            style="background: #f4f4f4"
                        />
                    </figure>
                    <div class="category-content">
                        <h3>{{ item?.name }}</h3>
                    </div>
                </nuxt-link>
            </div>

		</template>
            
        </pv-carousel>
    </div>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import { categorySlider } from '~/utils/data/carousel';
import Api, { baseUrl } from '~/api';

export default {
    components: {
        PvCarousel,
    },
    data: function () {
        return {
			categories: [],
            categorySlider: categorySlider,
        };
    },
    mounted: function () {
        Api.get(
            `http://project-ecom-laravel-api.test/api/categories/active-all`
        )
            .then((response) => {
				this.categories = response?.data?.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
    },
};
</script>