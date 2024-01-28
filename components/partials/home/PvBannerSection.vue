<template>
	<div
		class="banner-section appear-animate"
		data-animation-name="fadeInUpShorter"
		data-animation-delay="200"
		v-animate
	>
		<div class="row">
			<div class="col-md-4 mb-2 mb-md-0">
				<div
					class="banner banner1 d-flex align-items-center justify-content-end"
					v-lazy:background-image="'./images/home/banners/banner1.jpg'"
					style="background-color: #22252a"
				>
					<div class="container d-flex align-items-center justify-content-end">
						<div class="banner-layer text-right">
							<h5 class="coupon-sale-text text-white font1">
								<b class="text-white font1 ml-auto"><i>UP TO</i>50%</b><span class="mr-0 ls-0">OFF</span>
							</h5>
							<h6 class="font1 ls-10">FLASH SALES ON</h6>
							<h4 class="text-white mb-0">NICE SHOES</h4>
						</div>
					</div>
				</div>
			</div>

			<div class="col-md-8">
				<div
					class="banner banner2 d-flex align-items-center justify-content-end"
					v-lazy:background-image="'./images/home/banners/banner2.jpg'"
					style="background-color: #eee"
				>
					<div class="container d-flex align-items-center justify-content-end">
						<div class="banner-layer text-right pt-0">
							<h4 class="text-dark mb-0 pl-3 pr-3 pt-1 pb-1">TOP ELECTRONIC<br />FOR GIFTS
							</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
