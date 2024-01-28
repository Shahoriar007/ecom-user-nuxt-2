<template>
	<div class="product-single-qty">
		<div class="input-group bootstrap-touchspin bootstrap-touchspin-injected">
			<span class="input-group-btn input-group-prepend">
				<button
					class="btn btn-outline btn-down-icon bootstrap-touchspin-down"
					type="button"
					@click="minusQty"
				></button>
			</span>
			<input
				class="horizontal-quantity form-control"
				type="text"
				:value="currentQty"
				:max="product.stock"
				@change="changeQty($event)"
			/>
			<span class="input-group-btn input-group-append">
				<button
					class="btn btn-outline btn-up-icon bootstrap-touchspin-up"
					type="button"
					@click="plusQty"
				></button>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		qty: Number,
		product: Object
	},
	data: function() {
		return {
			currentQty: this.qty
		};
	},
	watch: {
		qty: function() {
			this.currentQty = this.qty;
		}
	},
	methods: {
		changeQty: function(e) {
			if (e.srcElement.valueAsNumber > parseInt(this.product.stock)) {
				this.currentQty = this.product.stock;
			}
			if (e.srcElement.valueAsNumber < 1) {
				this.currentQty = 1;
			}

			this.$emit('changeQty', this.currentQty, this.product);
		},
		plusQty: function() {
			if (this.currentQty < this.product.stock) this.currentQty++;
			this.$emit('changeQty', this.currentQty, this.product);
		},
		minusQty: function() {
			if (this.currentQty > 1) this.currentQty--;
			this.$emit('changeQty', this.currentQty, this.product);
		}
	}
};
</script>