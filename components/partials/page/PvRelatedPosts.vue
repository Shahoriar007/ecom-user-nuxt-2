<template>
    <div class="related-posts">
        <h4>
            Related
            <strong>Posts</strong>
        </h4>

        <div class="skeleton-body">
            <pv-carousel class="skel-carousel" :options="baseSlider5" v-if="!posts">
                <div v-for="item in [1,2,3,4]" :key="item" class="swiper-slide skel-pro"></div>
            </pv-carousel>
        </div>

        <pv-carousel class="related-posts-carousel" :options="baseSlider5" v-if="posts">
            <pv-post-three
                :post="post"
                v-for="(post,index) in posts"
                :key="'related-post' + index"
                class="swiper-slide"
                :adClass="'zoom-effect'"
            ></pv-post-three>
        </pv-carousel>
    </div>
</template>

<script>
import PvPostThree from '~/components/features/post/PvPostThree';
import PvCarousel from '~/components/features/PvCarousel';
import { baseSlider5 } from '~/utils/data/carousel';

export default {
	components: {
		PvPostThree,
		PvCarousel
	},
	data: function() {
		return {
			baseSlider5: baseSlider5
		};
	},
	props: {
		posts: Array
	}
};
</script>