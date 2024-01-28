<template>
    <div class="product-single-gallery">
        <pv-carousel
            class="product-single-carousel owl-carousel owl-theme show-nav-hover"
            :options="baseSlider7"
        >
            <div
                class="swiper-slide"
                v-for="(item,index) in product.large_pictures"
                :key="'picture' + index"
            >
                <img
                    class="product-single-image"
                    :src="`${baseUrl}${item.url}`"
                    :width="item.width"
                    :height="item.height"
                    alt="product-single-image"
                />
            </div>
        </pv-carousel>
    </div>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import { baseSlider7 } from '~/utils/data/carousel';
import { baseUrl } from '~/api/index';

export default {
	components: {
		PvCarousel
	},
	data: function () {
		return {
			baseSlider7: baseSlider7,
			baseUrl: baseUrl
		};
	},
	props: {
		product: Object
	}
};
</script>