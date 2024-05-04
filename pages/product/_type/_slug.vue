<template>
	<main class="main skeleton-body">

		<head>
            <!-- Google Tag Manager -->
            <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TZ7FH7BK');</script>
        <!-- End Google Tag Manager -->
        </head>

		<nav
			aria-label="breadcrumb"
			class="breadcrumb-nav mb-3"
		>
			<div class="container">
				<ol class="breadcrumb">
					<li class="breadcrumb-item">
						<nuxt-link to="/">
							<i class="icon-home"></i>
						</nuxt-link>
					</li>
					<li class="breadcrumb-item">
						<nuxt-link to="/shop">Shop</nuxt-link>
					</li>
					<li
						class="breadcrumb-item"
						v-if="loaded"
					>
						{{ productCategory }}
					</li>
					<li
						class="breadcrumb-item active"
						aria-current="page"
						v-if="loaded"
					>{{product.name}}</li>
				</ol>
			</div>
		</nav>

		<div class="container pt-2">
			<div class="product-single-container product-single-default">
				<div
					class="row"
					v-if="product"
				>
					<div class="col-lg-5 col-md-6 product-single-gallery">
						<pv-media-one :product="product"></pv-media-one>
					</div>

					<div class="col-lg-7 col-md-6 product-single-details">
						
						<pv-detail-one
							:product="product"
						></pv-detail-one>

					</div>
				</div>
			</div>

			<div
				class="skel-group"
				v-if="!product"
			>
				<div class="summary-before col-lg-5 col-md-6"></div>
				<div class="summary entry-summary col-lg-7 col-md-6"></div>
				<div class="tab-content col-lg-12 mb-7"></div>
			</div>

			<pv-desc-one
				:product="product"
				v-if="product"
			></pv-desc-one>

			<pv-related-products
				:products="relatedProducts"
			>
			</pv-related-products>

			
		</div>

		<body>
            <!-- Google Tag Manager (noscript) -->
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TZ7FH7BK"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            <!-- End Google Tag Manager (noscript) -->
        </body>
	</main>
</template>

<script>
import PvMediaOne from '~/components/partials/product/media/PvMediaOne';
import PvDetailOne from '~/components/partials/product/detail/PvDetailOne';
import PvDescOne from '~/components/partials/product/description/PvDescOne';
import PvRelatedProducts from '~/components/partials/product/PvRelatedProducts';
import PvSmallCollection from '~/components/partials/product/PvSmallCollection';
import Api, { baseUrl, currentDemo } from '~/api';

export default {
	components: {
		PvMediaOne,
		PvDetailOne,
		PvDescOne,
		PvRelatedProducts,
		PvSmallCollection
	},
	data: function() {
		return {
			product: null,
			relatedProducts: null,
			featuredProducts: null,
			bestProducts: null,
			latestProducts: null,
			topRatedProducts: null,
			nextProduct: null,
			prevProduct: null,
			loaded: false,
			productCategory: ""
		};
	},
	created: function() {
		this.getProduct();

	},
	methods: {
		getProduct: function() {
			this.loaded = false;

			Api.get(`${baseUrl}/api/products/${this.$route.params.slug}`)
				.then(response => {
					this.product = response.data.data;

					// this.relatedProducts = response.data.relatedProducts;
					// this.featuredProducts = response.data.featuredProducts;
					// this.bestProducts = response.data.bestSellingProducts;
					// this.latestProducts = response.data.latestProducts;
					// this.topRatedProducts = response.data.topRatedProducts;
					this.prevProduct = response.data.data;
					this.nextProduct = response.data.data;

					this.productCategory = this.product.category.name;



					this.getRelatedProducts();

					this.loaded = true;



				})
				.catch(error => ({ error: JSON.stringify(error) }));
		},

		getRelatedProducts: function() {

			Api.get(`${baseUrl}/api/related-products/${this.product.category.id}` , { params: { avoid_product_id: this.product.id } })
				.then(response => {
					this.relatedProducts = response.data.data;
				})
				.catch(error => ({ error: JSON.stringify(error) }));

		}

		
	}
};
</script>