<template>
    <div>
        <div class="product-slider-container">
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
                        class="product-single-image"
                        v-lazy="item.original_url"
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

        <PvCarousel
            class="prod-thumbnail swiper-dots show-nav-hover"
            ref="thumbRef"
            :options="baseSlider2"
            :useFasIcon="true"
        >
            <div
                class="swiper-dot swiper-slide"
                v-for="(item,index) in product.large_pictures"
                :key="'media-one' + index"
                @click="activeThumbItem(index, $event)"
                :class="{ active : index === 0 }"
            >
                <img
                    v-lazy="item.original_url"
                    :width="item.width"
                    :height="item.height"
                    alt="product-thumbnail"
                />
            </div>
        </PvCarousel>
        <light-box ref="lightBox" :media="lightBoxMedia" :show-light-box="false" />
    </div>
</template>

<script>
import PvCarousel from "~/components/features/PvCarousel";
import LightBox from "vue-image-lightbox";
import { baseUrl } from "~/api";
import { baseSlider1, baseSlider2 } from "~/utils/data/carousel";
import "vue-image-lightbox/dist/vue-image-lightbox.min.css";

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
	data: function () {
		return {
			baseSlider1: baseSlider1,
			baseSlider2: baseSlider2,
			baseUrl: baseUrl
		};
	},
	computed: {
		lightBoxMedia: function () {
			return this.product.large_pictures.reduce( ( acc, cur ) => {
				return [
					...acc,
					{
						src: `${ baseUrl }${ cur.url }`,
						thumb: `${ baseUrl }${ cur.url }`
					}
				];
			}, [] );
		}
	},
	mounted: function () {

		console.log(this.product);

		if ( this.product !== null ) {
			this.$nextTick( () => {
				let self = this;
				this.$refs.mediaRef.swiper.on( "transitionStart", function () {
					let activeIndex = self.$refs.mediaRef.swiper.activeIndex;
					self.$refs.thumbRef.swiper.slideTo( activeIndex );
					self.$refs.thumbRef.swiper.$el.find( ".swiper-wrapper" ).find( ".swiper-dot.active" )[ 0 ].classList.remove( "active" );
					self.$refs.thumbRef.swiper.$el.find( ".swiper-wrapper" ).find( ".swiper-dot" )[ activeIndex ].classList.add( "active" );
				} );
			} );
		}
	},
	methods: {
		activeThumbItem: function ( index, e ) {
			// remove active class from previous active item
			e.currentTarget.parentNode
				.querySelector( ".swiper-dot.active" )
				.classList.remove( "active" );

			// active current selected item
			e.currentTarget.classList.add( "active" );

			// translate thumb carousel
			this.$refs.mediaRef.swiper.slideTo( index );
		},
		openLightBox: function () {
			this.$refs.lightBox.showImage( this.$refs.mediaRef.swiper.activeIndex );
		}
	}
};
</script>