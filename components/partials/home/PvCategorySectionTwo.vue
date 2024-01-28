<template>
	<div
		class="categories-container bg-white appear-animate"
		data-animation-name="fadeIn"
		data-animation-delay="100"
		v-animate
	>
		<h4 class="section-title text-transform-none">Electronics</h4>
		<div class="row">
			<div class="col-md-6 mb-2 mb-md-0">
				<div
					class="banner banner4 bg-image"
					style="background-color: #efeeec; background-position: left;"
					v-lazy:background-image="'./images/home/banners/banner4.jpg'"
				>
					<div class="banner-layer d-flex align-items-center flex-column flex-sm-row justify-content-end">
						<div class="content-left">
							<div class="coupon-sale-content">
								<h4 class="custom-coupon-sale-text text-white bg-dark d-block ext-transform-none mr-0 ls-0">
									Exclusive
									COUPON</h4>
								<h5 class="custom-coupon-sale-text text-dark  ls-0 p-0"><i class="ls-0">UP
										TO</i><b class="text-white bg-dark">$100</b><sub>OFF</sub></h5>
							</div>
						</div>
						<div class="content-right">
							<h3 class="text-dark mb-0 text-sm-right text-left">DRONE & CAMERAS</h3>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div
					class="banner banner5 bg-image"
					style="background-color: #22252a; background-position: left;"
					v-lazy:background-image="'./images/home/banners/banner5.jpg'"
				>
					<div class="banner-layer d-flex align-items-center flex-column flex-sm-row justify-content-end">
						<div class="content-left">
							<h3 class="text-white text-center mb-0">ELECTRONIC DEALS
							</h3>
						</div>

						<div class="content-right">
							<div class="coupon-sale-content pt-1">
								<h4 class="custom-coupon-sale-text text-dark bg-white d-block ext-transform-none mr-0 ls-0">
									Exclusive COUPON</h4>
								<h5 class="custom-coupon-sale-text text-white mb-0 ls-0 p-0"><i class="ls-0">UP TO</i><b class="text-white bg-secondary">$100</b><sub>OFF</sub>
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-xl-3 col-sm-6">
				<div class="shop-list p-0">
					<nuxt-link
						to="/shop"
						class="sub-title"
					>Accessories</nuxt-link>
					<ul class="d-flex flex-wrap">
						<li>
							<nuxt-link to="/shop">Bags & Cases</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/shop">Batteries</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/shop">Cables & Adapters</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/shop">Chargers</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/shop">Electronic Cigarettes</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/shop">Home Electronic</nuxt-link>
						</li>
					</ul>
					<nuxt-link
						class="view-all"
						to="/shop"
					>View All<i class="fas fa-long-arrow-alt-right"></i></nuxt-link>
				</div>
			</div>
			<div class="col-xl-3 col-sm-6">
				<div class="shop-list p-0">
					<nuxt-link
						to="/shop"
						class="sub-title"
					>Audio & Video</nuxt-link>
					<ul class="d-flex flex-wrap">
						<li>
							<nuxt-link to="/shop">Audio Amplifier</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/shop">HDMI Projectors</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/shop">Projectors</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/shop">Televisions</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/shop">TV Receivers</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/shop">TV Sticks</nuxt-link>
						</li>
					</ul>
					<nuxt-link
						class="view-all"
						to="/shop"
					>View All<i class="fas fa-long-arrow-alt-right"></i></nuxt-link>
				</div>
			</div>
			<div class="col-xl-3 col-sm-6">
				<div class="shop-list p-0">
					<a
						href="demo36-shop.html"
						class="sub-title"
					>Camera & Photo</a>
					<ul class="d-flex flex-wrap">
						<li>
							<nuxt-link to="/shop">Action Cameras</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/shop">Camcorders</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/shop">Camera & Photo</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/shop">Camera Drones</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/shop">Digital Cameras</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/shop">Photo Supplies</nuxt-link>
						</li>
					</ul>
					<nuxt-link
						class="view-all"
						to="/shop"
					>View All<i class="fas fa-long-arrow-alt-right"></i></nuxt-link>
				</div>
			</div>
			<div class="col-xl-3 col-sm-6">
				<div class="shop-list p-0">
					<nuxt-link
						to="/shop"
						class="sub-title"
					>Laptops</nuxt-link>
					<ul class="d-flex flex-wrap">
						<li>
							<nuxt-link to="/shop">Gaming Laptops</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/shop">Laptop Accessories</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/shop">Laptop Bags & Cases</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/shop">Tablet Accessories</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/shop">Tablets</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/shop">Ultraslim Laptops</nuxt-link>
						</li>
					</ul>
					<nuxt-link
						class="view-all"
						to="/shop"
					>View All<i class="fas fa-long-arrow-alt-right"></i></nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>