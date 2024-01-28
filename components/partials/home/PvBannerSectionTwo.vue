<template>
	<div
		class="sale-banner banner bg-image mb-4 appear-animate"
		data-animation-name="fadeIn"
		data-animation-delay="100"
		v-animate
		v-lazy:background-image="'./images/home/banners/banner6.jpg'"
		style="background-position: 90%;"
	>
		<div class="container banner-content">
			<div class="row no-gutter justify-content-start">
				<div class="col-auto col-lg-5 col-md-6 col-12 d-flex flex-column justify-content-center content-left text-center text-md-right">
					<h4 class="align-left text-white text-uppercase">THE PERFECT GIFT FOR YOUR
						GIRLFRIEND</h4>
					<h3 class="text-white mb-0 align-left text-uppercase">GIFT SELECTION ON SALE</h3>
				</div>
				<div class="col-auto col-md-2 col-12 col-2 justify-content-center content-center mr-md-3 mr-lg-0  ml-md-4 ml-lg-0">
					<h2 class="text-white mb-0 position-relative align-left">
						50<small>%<ins>OFF</ins></small>
					</h2>
				</div>
				<div class="mb-0 col-md-4 col-12 col-3 col-auto justify-content-center justify-content-md-start content-right">
					<nuxt-link
						to="/shop"
						class="btn btn-lg bg-white text-dark font2"
					>Shop Now!</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>
