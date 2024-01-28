<template>
    <aside class="toolbox-left sidebar-shop mobile-sidebar">
        <div class="toolbox-item toolbox-sort select-custom" :class="{opened: isSizeOpened}">
            <a
                class="sort-menu-trigger"
                href="javascript:;"
                @click.prevent="isSizeOpened = !isSizeOpened, isColorOpened = false, isPriceOpened = false"
            >Size</a>
            <ul class="sort-list">
                <li
                    v-for="(item,index) in shopSizes"
                    :key="'size-filter' + index"
                    :class="{active: isActivedSize(item)}"
                >
                    <nuxt-link :to="sizeFilterRoute(item)">{{ item.name }}</nuxt-link>
                </li>
            </ul>
        </div>

        <div class="toolbox-item toolbox-sort select-custom" :class="{opened: isColorOpened}">
            <a
                class="sort-menu-trigger"
                href="javascript:;"
                @click.prevent="isColorOpened = !isColorOpened, isSizeOpened = false, isPriceOpened = false"
            >Color</a>
            <ul class="sort-list">
                <li
                    v-for="(item,index) in shopColors"
                    :key="'color-filter' + index"
                    :class="{active: isActivedColor(item)}"
                >
                    <nuxt-link :to="colorFilterRoute(item)">{{ item.name }}</nuxt-link>
                </li>
            </ul>
        </div>

        <div
            class="toolbox-item toolbox-sort price-sort select-custom"
            :class="{opened: isPriceOpened}"
        >
            <a
                class="sort-menu-trigger"
                href="javascript:;"
                @click.prevent="isPriceOpened = !isPriceOpened, isSizeOpened = false, isColorOpened = false"
            >Price</a>
            <div class="sort-list">
                <form class="filter-price-form d-flex align-items-center m-0">
                    <input
                        class="input-price mr-2"
                        name="min_price"
                        placeholder="0"
                        v-model="prices[0]"
                    /> -
                    <input
                        class="input-price mx-2"
                        name="max_price"
                        placeholder="1000"
                        v-model="prices[1]"
                    />
                    <nuxt-link
                        type="submit"
                        class="btn btn-primary ml-3"
                        :to="priceFilterRoute"
                    >Filter</nuxt-link>
                </form>
            </div>
        </div>
    </aside>
</template>

<script>
import { shopColors, shopSizes } from '~/utils/data/shop';

export default {
	components: {},
	data: function() {
		return {
			shopColors: shopColors,
			shopSizes: shopSizes,
			isSizeOpened: false,
			isColorOpened: false,
			isPriceOpened: false,
			prices: [0, 1000]
		};
	},
	watch: {},
	created: function() {},
	mounted: function() {
		window.addEventListener('click', this.removeOpenHandler);
	},
	destroyed: function() {
		window.removeEventListener('click', this.removeOpenHandler);
	},
	computed: {
		priceFilterRoute: function() {
			return {
				path: this.$route.path,
				query: {
					...this.$route.query,
					page: 1,
					max_price: this.prices[1],
					min_price: this.prices[0]
				}
			};
		}
	},
	methods: {
		colorFilterRoute: function(item) {
			let selectedColors = this.$route.query.color
				? this.$route.query.color.split(',')
				: [];
			let index = selectedColors.indexOf(item.name);
			if (index > -1) {
				selectedColors.splice(index, 1);
			} else {
				selectedColors.push(item.name);
			}

			return {
				path: this.$route.path,
				query: {
					...this.$route.query,
					page: 1,
					color: selectedColors.toString()
				}
			};
		},
		sizeFilterRoute: function(item) {
			let selectedSizes = this.$route.query.size
				? this.$route.query.size.split(',')
				: [];
			let index = selectedSizes.indexOf(item.size);
			if (index > -1) {
				selectedSizes.splice(index, 1);
			} else {
				selectedSizes.push(item.size);
			}

			return {
				path: this.$route.path,
				query: {
					...this.$route.query,
					page: 1,
					size: selectedSizes.toString()
				}
			};
		},
		isActivedColor: function(item) {
			return (
				this.$route.query.color &&
				this.$route.query.color.split(',').includes(item.name)
			);
		},
		isActivedSize: function(item) {
			return (
				this.$route.query.size &&
				this.$route.query.size.split(',').includes(item.size)
			);
		},
		removeOpenHandler: function(e) {
			if (
				!e.target.closest('.select-custom') ||
				e.target.classList.contains('form-control')
			) {
				let item = document.querySelector('.select-custom.opened');
				if (item) {
					item.classList.remove('opened');
				}
			}
		}
	}
};
</script>