<template>
    <div class="d-lg-flex">
        <div class="product-slider-container mb-auto">
            <div class="label-group">
                <div class="product-label label-hot" v-if="product.is_hot">HOT</div>
                <div class="product-label label-sale" v-if="product.is_sale">Sale</div>
            </div>

            <PvCarousel
                ref="mediaRef"
                class="product-single-carousel show-nav-hover"
                :options="baseSlider1"
            >
                <div class="swiper-slide" v-for="item in product.large_pictures" :key="item.name">
                    <img
                        class="product-single-image w-100"
                        v-lazy="`${baseUrl}${item.url}`"
                        :width="item.width"
                        :height="item.height"
                        alt="lgPicture"
                    />
                </div>
            </PvCarousel>

            <span class="prod-full-screen" @click="openLightBox" v-if="isMagnify">
                <i class="icon-plus"></i>
            </span>
        </div>

        <div class="prod-thumbnail thumbnail-vertical d-lg-block order-lg-first" ref="thumbRef">
            <div
                class="custom-dot"
                v-for="(item, index) in product.pictures"
                :key="'meida-two' + index"
                @click="activeThumbItem(index, $event)"
                :class="{active:index === 0 }"
            >
                <img
                    v-lazy="`${baseUrl}${item.url}`"
                    :width="item.width"
                    :height="item.height"
                    alt="product-thumbnail"
                />
            </div>
        </div>

        <light-box ref="lightBox" :media="lightBoxMedia" :show-light-box="false" />
    </div>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import LightBox from 'vue-image-lightbox';
import { baseUrl } from '~/api/index';
import { baseSlider1 } from '~/utils/data/carousel';
import 'vue-image-lightbox/dist/vue-image-lightbox.min.css';

export default {
	components: {
		PvCarousel,
		LightBox
	},
	props: {
		product: Object,
		isMagnify: {
			type: Boolean,
			default: true
		}
	},
	data: function() {
		return {
			baseSlider1: baseSlider1,
			baseUrl: baseUrl
		};
	},
	computed: {
		lightBoxMedia: function() {
			return this.product.large_pictures.reduce((acc, cur) => {
				return [
					...acc,
					{
						src: `${baseUrl}${cur.url}`,
						thumb: `${baseUrl}${cur.url}`
					}
				];
			}, []);
		}
	},
	mounted: function() {
		if (this.product !== null) {
			this.$nextTick(() => {
				let self = this;
				this.$refs.mediaRef.swiper.on('transitionStart', function() {
					let activeIndex = self.$refs.mediaRef.swiper.activeIndex;
					self.$refs.thumbRef
						.querySelectorAll('.custom-dot.active')[0]
						.classList.remove('active');
					self.$refs.thumbRef
						.querySelectorAll('.custom-dot')
						[activeIndex].classList.add('active');
				});
			});
		}
	},
	methods: {
		activeThumbItem: function(index, e) {
			e.currentTarget.parentNode
				.querySelector('.custom-dot.active')
				.classList.remove('active');

			e.currentTarget.classList.add('active');

			this.$refs.mediaRef.swiper.slideTo(index);
		},
		openLightBox: function() {
			this.$refs.lightBox.showImage(
				this.$refs.mediaRef.swiper.activeIndex
			);
		}
	}
};
</script>