<template>
	<div
		class="top-notice bg-dark text-white  top-notice-bg appear-animate"
		data-animation-name="fadeIn"
		data-animation-delay="100"
		v-animate
	>
		<div class="container text-center d-flex align-items-center justify-content-center flex-column flex-xl-row ">
			<img
				src="~/static/images/home/shop-logo.png"
				width="116"
				height="23"
				alt="logo"
			/>
			<h5 class="d-inline-block mb-0 pl-3 pr-3 pt-1 pb-1">The Lowest Prices Once A Month! Hurry To
				Snap Up
			</h5>
			<nuxt-link
				to="/shop"
				class="btn btn-darkcategory ls-n-0 mt-xl-0 mt-1"
			>SHOP NOW!</nuxt-link>
		</div>
	</div>
</template>