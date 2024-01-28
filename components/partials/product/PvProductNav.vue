<template>
    <div class="product-nav">
        <div class="product-prev" :class="{disabled: !prevProduct}">
            <nuxt-link
                :to="`/product/${type}/${prevProduct.slug}`"
                v-if="prevProduct"
                key="toPrevProduct"
            >
                <span class="product-link"></span>

                <span class="product-popup">
                    <span class="box-content">
                        <img
                            alt="product"
                            :width="prevProduct.width"
                            :height="prevProduct.height"
                            :src="`${baseUrl}${prevProduct.pictures[0].url}`"
                            style="padding-top: 0px;"
                        />

                        <span>{{ prevProduct.name }}</span>
                    </span>
                </span>
            </nuxt-link>

            <a href="javascript:;" v-else>
                <span class="product-link"></span>
            </a>
        </div>

        <div class="product-next" :class="{disabled: !nextProduct}">
            <nuxt-link
                :to="`/product/${type}/${nextProduct.slug}`"
                v-if="nextProduct"
                key="toNexProduct"
            >
                <span class="product-link"></span>

                <span class="product-popup">
                    <span class="box-content">
                        <img
                            alt="product"
                            :width="nextProduct.width"
                            :height="nextProduct.height"
                            :src="`${baseUrl}${nextProduct.pictures[0].url}`"
                            style="padding-top: 0px;"
                        />

                        <span>{{ nextProduct.name }}</span>
                    </span>
                </span>
            </nuxt-link>

            <a href="javascript:;" v-else>
                <span class="product-link"></span>
            </a>
        </div>
    </div>
</template>

<script>
import { baseUrl } from '~/api/index';

export default {
	props: {
		prevProduct: Object,
		nextProduct: Object
	},
	data: function() {
		return {
			baseUrl: baseUrl,
			type: 'default'
		};
	},
	mounted: function() {
		let paths = this.$route.path.split('/');
		this.type = paths[paths.length - 2];
		let defaults = ['simple', 'variable', 'sale', 'featured'];
		if (defaults.includes(this.type)) this.type = 'default';
	}
};
</script>