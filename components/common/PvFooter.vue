<template>
	<footer class="footer font2">
		<div class="container">
			<div class="widget-newsletter d-flex align-items-center align-items-sm-start flex-column flex-lg-row  justify-content-lg-between">
				<!-- <div class="widget-newsletter-info text-center text-sm-left d-flex flex-column flex-sm-row align-items-center mb-1 mb-xl-0">
					<i class="icon-envolope"></i>
					<div class="widget-info-content">
						<h5 class="widget-newsletter-title mb-0">
							Subscribe To Our Newsletter</h5>
						<p class="widget-newsletter-content mb-0">Get all the latest information
							on Events, Sales and Offers.
						</p>
					</div>
				</div> -->
				<form
					action="#"
					class="mb-0 w-lg-max mt-2 mt-md-0"
				>
					<div class="footer-submit-wrapper d-flex align-items-center">
						<input
							type="email"
							class="form-control mb-0"
							placeholder="Your E-mail Address"
							size="40"
							required
						>
						<button
							type="submit"
							class="btn btn-primary btn-sm"
						>Subscribe Now!</button>
					</div>
				</form>
			</div>

			<div class="footer-top">
				<div class="row">
					<div class="col-md-6 col-lg-3">
						<div class="widget">
							<h3 class="widget-title">Customer Service</h3>
							<div class="widget-content">
								<ul>
									<li><a href="javascript:;">Help & FAQs</a></li>
									<li><a href="javascript:;">Order Tracking</a></li>
									<!-- <li><a href="javascript:;">Shipping & Delivery</a></li>
									<li><a href="javascript:;">Orders History</a></li>
									<li><a href="javascript:;">Advanced Search</a></li>
									<li>
										<nuxt-link to="/pages/login">Login</nuxt-link>
									</li> -->
								</ul>
							</div>
						</div>
					</div>
					<div class="col-md-6 col-lg-3">
						<div class="widget">
							<h3 class="widget-title">About Us</h3>
							<div class="widget-content">
								<ul>
									<li>
										<nuxt-link to="/pages/about-us">About Us</nuxt-link>
									</li>
									<!-- <li><a href="javascript:;">Careers</a></li>
									<li><a href="javascript:;">Our Stores</a></li>
									<li><a href="javascript:;">Corporate Sales</a></li>
									<li><a href="javascript:;">Careers</a></li> -->
								</ul>
							</div>
						</div>
					</div>
					<!-- <div class="col-md-6 col-lg-3">
						<div class="widget">
							<h3 class="widget-title">More Information</h3>
							<div class="widget-content">
								<ul>
									<li><a href="javascript:;">Affiliates</a></li>
									<li><a href="javascript:;">Refer a Friend</a></li>
									<li><a href="javascript:;">Student Beans Offers</a></li>
									<li><a href="javascript:;">Gift Vouchers</a></li>
								</ul>
							</div>
						</div>
					</div> -->
					<div class="col-md-6 col-lg-3">
						<div class="widget">
							<h3 class="widget-title">Social Media</h3>
							<div class="widget-content">
								<div class="social-icons">
									<a
										href="https://www.facebook.com/people/Flare-Brand/100064835408819/?mibextid=ZbWKwL"
										class="social-icon social-facebook icon-facebook"
										
										title="Facebook"
									></a>
									<a
										href="javascript:;"
										class="social-icon social-twitter icon-twitter"
										
										title="Twitter"
									></a>
									<a
										href="javascript:;"
										class="social-icon social-instagram icon-instagram"
										
										title="Instagram"
									></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- <div class="footer-middle">
				<div class="row">
					<div class="col-md-12 col-lg-8 mb-3 mb-lg-0">
						<ul class="footer-category-list mb-0">
							<li>
								<h4 class="d-inline-block">Fashion:</h4>
								<nuxt-link to="/shop">Tops
									&amp; Blouses</nuxt-link> | <nuxt-link to="/shop">Accessories</nuxt-link>
								| <nuxt-link to="/shop">Dresses
									&amp; Skirts</nuxt-link> | <nuxt-link to="/shop">Shoes
									&amp; Boots</nuxt-link> | <nuxt-link
									class="view-all"
									to="/shop"
								>View
									All<i class="fas fa-long-arrow-alt-right ml-1"></i></nuxt-link>
							</li>
							<li>
								<h4 class="d-inline-block">Electronics:</h4>
								<nuxt-link to="/shop">Cables
									&amp; Adapters</nuxt-link> | <nuxt-link to="/shop">Electronic
									Cigarettes</nuxt-link> | <nuxt-link to="/shop">Batteries</nuxt-link>
								| <nuxt-link to="/shop">Chargers</nuxt-link>
								| <nuxt-link to="/shop">Home Electronic</nuxt-link> | <nuxt-link to="/shop">Bags &amp; Cases</nuxt-link> | <nuxt-link
									class="view-all"
									to="/shop"
								>View All<i class="fas fa-long-arrow-alt-right ml-1"></i></nuxt-link>
							</li>
							<li>
								<h4 class="d-inline-block">Gifts:</h4>
								<nuxt-link to="/shop">Gifts for Boyfriend</nuxt-link> | <nuxt-link to="/shop">Gifts for Husband</nuxt-link> | <nuxt-link to="/shop">Gifts for Dad</nuxt-link> | <nuxt-link to="/shop">Gifts for Grandpa</nuxt-link> | <nuxt-link
									class="view-all"
									to="/shop"
								>View
									All<i class="fas fa-long-arrow-alt-right ml-1"></i></nuxt-link>
							</li>
							<li>
								<h4 class="d-inline-block">Home &amp; Garden:</h4>
								<nuxt-link to="/shop">Sofas &amp;
									Couches</nuxt-link> | <nuxt-link to="/shop">Armchairs</nuxt-link> | <nuxt-link to="/shop">Bed Frames</nuxt-link> | <nuxt-link to="/shop">Bedside Tables</nuxt-link> | <nuxt-link to="/shop">Dressing Tables</nuxt-link> | <nuxt-link to="/shop">Chest of Drawers</nuxt-link> | <nuxt-link
									class="view-all"
									to="/shop"
								>View All<i class="fas fa-long-arrow-alt-right ml-1"></i></nuxt-link>
							</li>
							<li>
								<h4 class="d-inline-block">Music:</h4>
								<nuxt-link to="/shop">Guitar</nuxt-link> | <nuxt-link to="/shop">Drums
									Sets</nuxt-link> | <nuxt-link to="/shop">Percussions</nuxt-link> | <nuxt-link to="/shop">Pedals &amp; Effects</nuxt-link> |
								<nuxt-link to="/shop">Sound Cards</nuxt-link> | <nuxt-link to="/shop">Studio Equipments</nuxt-link> | <nuxt-link to="/shop">Piano &amp; Keyboards</nuxt-link> | <nuxt-link
									to="/shop"
									class="view-all"
								>View All<i class="fas fa-long-arrow-alt-right ml-1"></i></nuxt-link>
							</li>
							<li>
								<h4 class="d-inline-block">Sports:</h4>
								<nuxt-link to="/shop">Sports &amp; Fitness</nuxt-link> | <nuxt-link to="/shop">Boating &amp; Sailing</nuxt-link> | <nuxt-link to="/shop">Clothing</nuxt-link> | <nuxt-link to="/shop">Exercise
									&amp; Fitness</nuxt-link> | <nuxt-link to="/shop">Golf</nuxt-link> | <nuxt-link to="/shop">Hunting
									&amp; Fishing</nuxt-link> | <nuxt-link to="/shop">Leisure Sports</nuxt-link> | <nuxt-link to="/shop">Running</nuxt-link> |
								<nuxt-link
									class="view-all"
									to="/shop"
								>View All<i class="fas fa-long-arrow-alt-right ml-1"></i></nuxt-link>
							</li>
						</ul>
					</div>

					<div class="col-md-12 offset-lg-1 col-lg-3">
						<div class="widget widget-payment">
							<h3 class="widget-title ls-0">PAYMENT METHODS</h3>

							<div class="widget-content">
								<div class="payment-icons mr-0">
									<span
										class="payment-icon visa"
										v-lazy:background-image="'./images/payments/payment-visa.svg'"
									></span>
									<span
										class="payment-icon paypal"
										v-lazy:background-image="'./images/payments/payment-paypal.svg'"
									></span>
									<span
										class="payment-icon stripe"
										v-lazy:background-image="'./images/payments/payment-stripe.png'"
									></span>
									<span
										class="payment-icon verisign"
										v-lazy:background-image="'./images/payments/payment-verisign.svg'"
									></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> -->
			<div class="footer-bottom d-sm-flex align-items-center justify-content-center">
				<span class="footer-copyright">Flare-Brand. © 2024. All Rights
					Reserved</span>
			</div>
		</div>
	</footer>
</template>

<script>
export default {};
</script>