<template>
    <div class="sticky-navbar fixed">
        <div class="container">
        <div class="row">
            
                <a class="btn btn-primary width-50" href="javascript:;" @click="addCart">
                    Add to Cart
                </a>
            
                <a class="btn btn-warning width-50" href="javascript:;" @click="buyNow">
                    Buy Now
                </a>
            
        </div>
    </div>
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters( 'cart', [ 'totalCount' ] )
	},

    methods: {
        addCart: function() {
			if (this.product.stock > 0) {
				let saledProduct = { ...this.product };
				if (this.product.is_sale) {
					saledProduct.price = this.product.sale_price;
				}

				this.addToCart({ product: saledProduct });
			}
		},

        buyNow: function() {
			if (this.product.stock > 0) {
				let saledProduct = { ...this.product };
				if (this.product.is_sale) {
					saledProduct.price = this.product.sale_price;
				}

				this.addToCart({ product: saledProduct });
			}

			this.$router.push('/pages/checkout');
		},

    }
   
}
</script>

<style scoped>
.button-container {
    display: flex;
    justify-content: space-between;
}
.width-50 {
    width: 50%;
}
.sticky-button {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    top: 100%;
    width: 100%;
    background-color: #fff;
    border-top: 1px solid #e7e7e7;
    opacity: 1;
    visibility: visible;
    transition: all 0.25s;
    z-index: 997;

}
</style>