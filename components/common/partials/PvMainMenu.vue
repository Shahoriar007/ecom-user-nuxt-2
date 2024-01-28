<template>
	<nav class="main-nav w-100">
		<ul class="menu main-menu sf-arrows w-100">
			<li
				class="menu-item"
				:class="{show: isDepart}"
			>
				<a
					href="javascript:;"
					class="d-inline-flex align-items-center sf-with-ul text-white"
					@click.prevent="mmenuAddHandler"
				>
					<i class="custom-icon-toggle-menu d-inline-table"></i><span>ALL DEPARTMENTS</span></a>
				<div
					class="menu-depart-overlay"
					@click.stop="mmenuRemoveHandler"
				></div>
				<div
					class="menu-depart"
					:class="{opened: isDepart}"
				>
					<ul class="menu menu-vertical sf-arrows d-block no-superfish">
						<li>
							<a
								href="javascript:;"
								class="sf-with-ul"
							><i class="icon-category-fashion"></i>Fashion</a>

							<div class="megamenu megamenu-fixed-width megamenu-one">
								<div class="row">
									<div class="col-lg-3 mb-1 pb-2">
										<a
											href="javascript:;"
											class="nolink pl-0"
										>WOMAN</a>
										<ul class="submenu">
											<li>
												<nuxt-link to="/shop">Top & Blouses</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Accessories</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Dresses & Skirts</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Shoes & Boots</nuxt-link>
											</li>
										</ul>

										<a
											href="javascript:;"
											class="nolink pl-0"
										>JEWELLERY</a>
										<ul class="submenu">
											<li>
												<nuxt-link to="/shop">Sweaters</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Heels & Sandals</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Jeans & Shorts</nuxt-link>
											</li>
										</ul>
									</div>
									<div class="col-lg-4">
										<a
											href="javascript:;"
											class="nolink pl-0"
										>MAN</a>
										<ul class="submenu">
											<li>
												<nuxt-link to="/shop">Accessories</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Watch Fashion</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Tees, Knits & Polos</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">KOKA</nuxt-link>
											</li>
										</ul>

										<a
											href="javascript:;"
											class="nolink pl-0"
										>KIDS FASHION</a>
										<ul class="submenu">
											<li>
												<nuxt-link to="/shop">Casual Shoes</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Spring & Autumn</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Winter Sneakers</nuxt-link>
											</li>
										</ul>
									</div>
									<div class="col-lg-5 p-0 d-lg-block d-none">
										<div class="menu-banner menu-banner-2">
											<figure>
												<img
													src="~/static/images/home/menu-banner-1.jpg"
													alt="Menu banner"
													class="product-promo w-100"
												>
											</figure>
											<i>OFF</i>
											<div class="banner-content">
												<h4>
													<span class="text-dark">UP TO</span><br />
													<b class="text-dark">50%</b>
												</h4>
											</div>
										</div>
									</div>
									<div class="col-lg-12 d-lg-block d-none">
										<div class="partners-container row">
											<div class="col-xl-5col">
												<div class="partner">
													<img
														src="~/static/images/brands/small/brand1.png"
														alt="logo image"
														width="140"
														height="60"
													></div>
											</div>
											<div class="col-xl-5col">
												<div class="partner">
													<img
														src="~/static/images/brands/small/brand2.png"
														alt="logo image"
														width="140"
														height="60"
													></div>
											</div>
											<div class="col-xl-5col">
												<div class="partner">
													<img
														src="~/static/images/brands/small/brand3.png"
														alt="logo image"
														width="140"
														height="60"
													></div>
											</div>
											<div class="col-xl-5col">
												<div class="partner">
													<img
														src="~/static/images/brands/small/brand4.png"
														alt="logo image"
														width="140"
														height="60"
													></div>
											</div>
											<div class="col-xl-5col">
												<div class="partner">
													<img
														src="~/static/images/brands/small/brand5.png"
														alt="logo image"
														width="140"
														height="60"
													></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<a
								href="javascript:;"
								class="sf-with-ul"
							><i class="icon-category-electronics"></i>Electronics</a>

							<div class="megamenu megamenu-fixed-width megamenu-two">
								<div class="row">
									<div class="col-lg-3">
										<a
											href="javascript:;"
											class="nolink pl-0"
										>ACCESSORIES</a>
										<ul class="submenu">
											<li>
												<nuxt-link to="/shop">Cables & Adaperts</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Electronic Cigarettes</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Batteries</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Chargers</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Home Electronic</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Bags & Cases</nuxt-link>
											</li>
										</ul>
									</div>

									<div class="col-lg-3 pl-xl-2">
										<a
											href="javascript:;"
											class="nolink pl-0"
										>AUDIO & VIDEO</a>
										<ul class="submenu">
											<li>
												<nuxt-link to="/shop">Televisions</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Projectors</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">TV peceivers</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Audio Amplifier</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">TV Sticks</nuxt-link>
											</li>
										</ul>
									</div>

									<div class="col-lg-3 pl-xl-0">
										<a
											href="javascript:;"
											class="nolink pl-0"
										>CAMERA & PHOTO</a>
										<ul class="submenu">
											<li>
												<nuxt-link to="/shop">Digital Cameras</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Camcorders</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Camera Drones</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Action Cameras</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Photo Supplies</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Camera & Photo</nuxt-link>
											</li>
										</ul>
									</div>

									<div class="col-lg-3 pl-xl-0">
										<a
											href="javascript:;"
											class="nolink pl-0"
										>LAPTOPS</a>
										<ul class="submenu">
											<li>
												<nuxt-link to="/shop">Caming Laptops</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Ultraslim Laptops</nuxt-link>
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
										</ul>
									</div>
									<div class="banner-container w-100 pl-3 pr-3 d-lg-block d-none">
										<div class="row">
											<div class="col-md-6">
												<div class="banner banner7 banner-md-vw text-transform-none">
													<figure>
														<img
															src="~/static/images/home/menu-banner-2.jpg"
															alt="banner"
														>
													</figure>

													<div class="banner-layer banner-layer-middle d-flex align-items-center justify-content-end pt-0">
														<div class="content-left">
															<h4 class="banner-layer-circle-item mb-0 ls-0">
																40<sup>%<small class="ls-0">OFF</small></sup>
															</h4>
														</div>
														<div class="content-right text-right">
															<h5 class=" ls-0"><del class="d-block m-b-2 text-secondary">$450</del>$270
															</h5>
															<h4 class="m-b-1 ls-n-25">Watches</h4>
															<h3 class="mb-0">HURRY UP!</h3>
														</div>
													</div>
												</div>
											</div>
											<div class="col-md-6">
												<div class="banner banner8 banner-md-vw">
													<figure>
														<img
															src="~/static/images/home/menu-banner-3.jpg"
															alt="banner"
														>
													</figure>

													<div class="banner-layer banner-layer-middle d-flex align-items-end flex-column">
														<h3 class="text-dark text-right">
															Electronic<br>Deals</h3>

														<div class="coupon-sale-content">
															<h4 class="menu-coupon-sale-text bg-dark text-white d-block font1 text-transform-none">
																Exclusive
																COUPON</h4>
															<h5 class="custom-coupon-sale-text font1 text-dark ls-n-10 p-0">
																<b class="text-dark">$100</b> OFF</h5>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<a
								href="javascript:;"
								class="sf-with-ul"
							><i class="icon-category-gifts"></i>Gifts</a>

							<div class="megamenu megamenu-fixed-width megamenu-three">
								<div class="row">
									<div class="col-lg-3">
										<a
											href="javascript:;"
											class="nolink pl-0 d-flex flex-column align-items-start"
										><i class="icon-boy-broad-smile"></i>FOR HIM</a>
										<ul class="submenu pb-0">
											<li>
												<nuxt-link to="/shop">Gifts for Boyfriend</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Gifts for Husband</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Gifts for Dad</nuxt-link>
											</li>
										</ul>
									</div>

									<div class="col-lg-3 pl-xl-2">
										<a
											href="javascript:;"
											class="nolink pl-0 d-flex flex-column align-items-start"
										><i class="icon-smiling-girl"></i>FOR HER</a>
										<ul class="submenu pb-0">
											<li>
												<nuxt-link to="/shop">Gifts for Girlfriend</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Gifts for Wife</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Gifts for Mom</nuxt-link>
											</li>
										</ul>
									</div>

									<div class="col-lg-3 pl-xl-0">
										<a
											href="javascript:;"
											class="nolink pl-0 d-flex flex-column align-items-start"
										><i class="icon-smiling-baby"></i>FOR KIDS</a>
										<ul class="submenu pb-0">
											<li>
												<nuxt-link to="/shop">Gifts for Boys</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Gifts for Grils</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Gifts for Tween Boys</nuxt-link>
											</li>
										</ul>
									</div>

									<div class="col-lg-3 pl-xl-0">
										<a
											href="javascript:;"
											class="nolink pl-0 d-flex flex-column align-items-start"
										><i class="icon-gift-2"></i>BIRTHDAY</a>
										<ul class="submenu pb-0">
											<li>
												<nuxt-link to="/shop">Birthday for Him</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Birthday for Her</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Boyfriend Gifts</nuxt-link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</li>
						<li>
							<a
								href="javascript:;"
								class="sf-with-ul"
							><i class="icon-category-garden"></i>Home & Garden</a>

							<div class="megamenu megamenu-fixed-width megamenu-four">
								<div class="row">
									<div class="col-lg-4 mb-1 pb-2">
										<a
											href="javascript:;"
											class="nolink pl-0 d-lg-none d-block"
										>VARIATION
											1</a>
										<a
											href="javascript:;"
											class="nolink pl-0"
										>FURNITURE</a>
										<ul class="submenu">
											<li>
												<nuxt-link to="/shop">BEAUTY & PERSONAL CARE</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">SOF & COUCHES</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">ARMCHARIRS</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">BED FRAMES</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">BEDSIDE TABLES</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">BRESSING TABLES</nuxt-link>
											</li>
										</ul>

										<a
											href="javascript:;"
											class="nolink pl-0"
										>HOME ACCESSORIES</a>
										<ul class="submenu pb-0">
											<li>
												<nuxt-link to="/shop">DECORATIVE ACCESSORIES</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">CANDLES & HOLDERS</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">HOME FRAGRANCE</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">MIRRORS</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">CLOCKS</nuxt-link>
											</li>
										</ul>
									</div>
									<div class="col-lg-4">
										<a
											href="javascript:;"
											class="nolink pl-0 d-lg-none d-block"
										>VARIATION
											2</a>
										<a
											href="javascript:;"
											class="nolink pl-0"
										>LIGHTING</a>
										<ul class="submenu">
											<li>
												<nuxt-link to="/shop">LIGHT BULBS</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">LAMPS</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">CEILING LIGHTS</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">WALL LIGHTS</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">BATHROOM LIGHTING</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">OUTDOOR LIGHTING</nuxt-link>
											</li>
										</ul>

										<a
											href="javascript:;"
											class="nolink pl-0"
										>GARDEN & OUTDOORS</a>
										<ul class="submenu pb-0">
											<li>
												<nuxt-link to="/shop">GARDEN FURNITURE</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">LAWN MOWERS</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">PRESSURE WASHERS</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">ALL ARDEN TOOLS & EQUIPMENT</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">BARBECURE & OUTDOOR DINING</nuxt-link>
											</li>
										</ul>
									</div>
									<div class="col-lg-4 d-lg-block d-none">
										<div class="product-widgets-container">
											<pv-small-product
												:product="product"
												v-for="(product,index) in products.slice(0, 5)"
												:key="'megamenu-product' + index"
												:is-lazy="false"
											></pv-small-product>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<a
								href="javascript:;"
								class="sf-with-ul"
							><i class="icon-category-music"></i>Gaming</a>

							<div
								class="megamenu megamenu-fixed-width megamenu-five text-transform-none"
								style="background-image: url(./images/home/menu-banner-4.jpg);"
							>
								<div class="row">
									<div class="col-lg-4 pt-0">
										<a
											href="javascript:;"
											class="nolink pl-0"
										>INSTRUMENTS</a>
										<ul class="submenu bg-transparent">
											<li>
												<nuxt-link to="/shop">Beverages</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Guitar</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Drums Sets</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Percussions</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Pedals & Effects</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Sound Cards</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Studio Equipments</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Piano & Keyboards</nuxt-link>
											</li>
										</ul>

										<a
											href="javascript:;"
											class="nolink pl-0"
										>EXTRA</a>
										<ul class="submenu bg-transparent pb-0">
											<li>
												<nuxt-link to="/shop">Alcohol</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Strings</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Recorders</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Amplifiers</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Accessories</nuxt-link>
											</li>
										</ul>
									</div>
									<div class="col-lg-8 pt-0 d-lg-block d-none">
										<div class="banner banner9 mb-2 h-100 d-flex align-items-center">
											<div class="banner-layer text-right pt-0">
												<h6 class="text-transform-none">
													CHECK NEW
													ARRIVALS</h6>
												<h3 class=" text-white">PROFESSIONAL</h3>
												<h2 class="text-transform-none text-white">
													HEADPHONES</h2>
												<nuxt-link
													to="/shop"
													class="btn btn-dark"
												>VIEW ALL NOW</nuxt-link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<a
								href="javascript:;"
								class="sf-with-ul"
							><i class="icon-cat-sport"></i>Sports</a>

							<div class="megamenu megamenu-fixed-width megamenu-four megamenu-product">
								<div class="row">
									<div class="col-lg-4 mb-0 pb-2">
										<a
											href="javascript:;"
											class="nolink pl-0"
										>SPORTS</a>
										<ul class="submenu pb-0">
											<li>
												<nuxt-link to="/shop">Sports & Fitness</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Boating & Sailing</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Clothing</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Exercise & Fitness</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Golf</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Hunting & Fishing</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Leisure Sports</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Running</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Swiming</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Team Sports</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Tennis</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Other Sports</nuxt-link>
											</li>
										</ul>
									</div>
									<div class="col-lg-3">
										<a
											href="javascript:;"
											class="nolink pl-0 pt-2"
										>SHOP BY PRICE</a>
										<ul class="submenu mb-1">
											<li>
												<nuxt-link to="/shop">Under $25</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">$25 to $50</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">$50 to $100</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">$100 to $200</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">$250 $ Above</nuxt-link>
											</li>
										</ul>

										<a
											href="javascript:;"
											class="nolink pl-0"
										>SHOP BY NRAND</a>
										<ul class="submenu pb-0">
											<li>
												<nuxt-link to="/shop">Brooks</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Adidas</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Nike</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Asics</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/shop">Puma</nuxt-link>
											</li>
										</ul>
									</div>
									<div class="col-lg-5 d-lg-block d-none menu-product">
										<pv-carousel
											class="swiper-carousel swiper-theme show-nav-hover nav-outer dots-small"
											:options="homeSidebarSlider"
											v-if="products && products.length > 0"
										>
											<pv-product-four
												:product="products[7]"
												class="swiper-slide"
												:isDeal="true"
											></pv-product-four>
											<pv-product-four
												:product="products[12]"
												class="swiper-slide"
											></pv-product-four>
										</pv-carousel>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</li>

			<li>
				<nuxt-link to="/">Home</nuxt-link>
			</li>

			<li>
				<nuxt-link
					to="/shop"
					class="sub-menu-link sf-with-ul"
					:class="{active: $route.path.indexOf('/shop') > -1}"
				>Shop</nuxt-link>

				<div class="megamenu megamenu-fixed-width megamenu-3cols">
					<div class="row">
						<div class="col-lg-4">
							<a
								href="javascript:;"
								class="nolink"
							>VARIATION 1</a>

							<ul class="submenu">
								<li
									v-for="item in mainMenu.shop.variation1"
									:key="item.id"
								>
									<nuxt-link :to="item.url">
										{{ item.title }}
										<span
											class="tip tip-hot"
											v-if="item.hot"
										>Hot</span>
									</nuxt-link>
								</li>
							</ul>
						</div>

						<div class="col-lg-4">
							<a
								href="javascript:;"
								class="nolink"
							>VARIATION 2</a>

							<ul class="submenu">
								<li
									v-for="item in mainMenu.shop.variation2"
									:key="item.id"
								>
									<nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
								</li>
							</ul>
						</div>

						<div class="col-lg-4 p-0">
							<div class="menu-banner">
								<figure>
									<img
										src="~/static/images/menu-banner.jpg"
										alt="Menu banner"
										width="300"
										height="300"
									/>
								</figure>
								<div class="banner-content">
									<h4>
										<span class>UP TO</span>
										<br />
										<b class>50%</b>
										<i>OFF</i>
									</h4>
									<nuxt-link
										to="/shop"
										class="btn btn-sm btn-dark"
									>SHOP NOW</nuxt-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</li>

			<li>
				<nuxt-link
					to="/product/default/beats-solo-hd-drenched-one"
					class="sub-menu-link sf-with-ul"
					:class="{active: $route.path.indexOf('/product') > -1}"
				>Products</nuxt-link>

				<div class="megamenu megamenu-fixed-width megamenu-3cols">
					<div class="row">
						<div class="col-lg-4">
							<a
								href="javascript:;"
								class="nolink"
							>PRODUCT PAGES</a>

							<ul class="submenu">
								<li
									v-for="item in mainMenu.product.pages"
									:key="item.title"
								>
									<nuxt-link :to="item.url">
										{{ item.title }}
										<span
											class="tip tip-hot"
											v-if="item.hot"
										>Hot</span>
									</nuxt-link>
								</li>
							</ul>
						</div>

						<div class="col-lg-4">
							<a
								href="javascript:;"
								class="nolink"
							>PRODUCT LAYOUTS</a>

							<ul class="submenu">
								<li
									v-for="item in mainMenu.product.layout"
									:key="item.title"
								>
									<nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
								</li>

								<li>
									<a href="javascript:;">Build your own</a>
								</li>
							</ul>
						</div>

						<div class="col-lg-4 p-0">
							<div class="menu-banner menu-banner-2 position-relative">
								<figure>
									<img
										src="~/static/images/menu-banner-1.jpg"
										alt="Menu banner"
										class="product-promo"
										width="380"
										height="790"
									/>
								</figure>
								<i>OFF</i>
								<div class="banner-content">
									<h4>
										<span class>UP TO</span>
										<br />
										<b class>50%</b>
									</h4>
								</div>
								<nuxt-link
									to="/shop"
									class="btn btn-sm btn-dark"
								>SHOP NOW</nuxt-link>
							</div>
						</div>
					</div>
				</div>
			</li>

			<li>
				<a
					href="javascript:;"
					class="sub-menu-link sf-with-ul"
					:class="{active: isPageItemActived}"
				>Pages</a>

				<ul>
					<li
						v-for="item in mainMenu.other"
						:key="item.title"
					>
						<nuxt-link
							:to="item.url"
							:class="{'sub-menu-link': item.subPages}"
						>{{ item.title }}</nuxt-link>

						<ul v-if="item.subPages">
							<li
								v-for="subItem in item.subPages"
								:key="subItem.title"
							>
								<nuxt-link :to="subItem.url">{{ subItem.title }}</nuxt-link>
							</li>
						</ul>
					</li>
				</ul>
			</li>

			<li>
				<a
					href="/https://1.envato.market/DdLk5"
					target="_blank"
				>Buy Porto</a>
			</li>

			<li class="float-right phone"><a
					href="javascript:;"
					class="d-flex align-items-center"
				><i class="icon-phone-1"></i>1-800-234-5678</a>
			</li>
			<li class="float-right">
				<a
					href="https://1.envato.market/DdLk5"
					target="_blank"
				>NEW ARRIVALS</a></li>
			<li class="float-right"><a href="javascript:;">FLASH DEALS</a></li>
		</ul>
	</nav>
</template>
<script>
import { mainMenu } from '~/utils/data/menu';
import Api, { baseUrl } from '~/api';
import PvSmallProduct from '~/components/features/product/PvSmallProduct';
import PvCarousel from '~/components/features/PvCarousel';
import PvProductFour from '~/components/features/product/PvProductFour';
import { homeSidebarSlider } from '~/utils/data/carousel';

export default {
	components: {
		PvCarousel,
		PvSmallProduct,
		PvProductFour
	},
	data: function() {
		return {
			mainMenu,
			isDepart: false,
			products: [],
			homeSidebarSlider: homeSidebarSlider
		};
	},
	computed: {
		isPageItemActived: function() {
			let exItems = ['blog', 'about-us', 'contact-us'];

			if (
				this.$route.path.includes('/pages') &&
				exItems.findIndex(item => this.$route.path.includes(item)) ===
					-1
			) {
				return true;
			}

			return false;
		}
	},
	watch: {
		$route: function() {
			if (
				document
					.querySelector('body')
					.classList.contains('mmenu-depart-active')
			)
				document
					.querySelector('body')
					.classList.remove('mmenu-depart-active');
			this.isDepart = false;
		}
	},
	mounted: function() {
		Api.get(`${baseUrl}/demo36`)
			.then(response => {
				this.products = response.data.products;
				this.posts = response.data.posts;
				this.featuredProducts = getProductsByAttri(
					response.data.products
				);
			})
			.catch(error => ({ error: JSON.stringify(error) }));
	},
	methods: {
		mmenuAddHandler: function(e) {
			this.isDepart = !this.isDepart;
			if (
				document
					.querySelector('body')
					.classList.contains('mmenu-depart-active')
			)
				document
					.querySelector('body')
					.classList.remove('mmenu-depart-active');
			else
				document
					.querySelector('body')
					.classList.add('mmenu-depart-active');
		},
		mmenuRemoveHandler: function(e) {
			this.isDepart = false;
			document
				.querySelector('body')
				.classList.remove('mmenu-depart-active');
		}
	}
};
</script>