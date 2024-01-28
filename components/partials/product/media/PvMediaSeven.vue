<template>
    <div class="row">
        <div class="label-group">
            <div class="product-label label-hot" v-if="product.is_hot">HOT</div>
            <div class="product-label label-sale" v-if="product.is_sale">Sale</div>
            <div class="product-label label-sale" v-if="product.is_new">New</div>
        </div>

        <div
            class="product-item col-sm-6"
            v-for="(item, index) in product.large_pictures"
            :key="item.name"
        >
            <div class="inner">
                <img
                    class="product-single-image"
                    v-lazy="`${baseUrl}${item.url}`"
                    :width="item.width"
                    :height="item.height"
                    alt="lgPicture"
                />
            </div>
            <span class="prod-full-screen" @click="openLightBox(index)" v-if="isMagnify">
                <i class="icon-plus"></i>
            </span>
        </div>

        <light-box ref="lightBox" :media="lightBoxMedia" :show-light-box="false" />
    </div>
</template>

<script>
import LightBox from 'vue-image-lightbox';
import { baseUrl } from '~/api/index';
import { baseSlider1, baseSlider2 } from '~/utils/data/carousel';
import 'vue-image-lightbox/dist/vue-image-lightbox.min.css';

export default {
	components: {
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
			baseSlider2: baseSlider2,
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
	methods: {
		openLightBox: function(index) {
			this.$refs.lightBox.showImage(index);
		}
	}
};
</script>