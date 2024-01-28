<template>
	<div
		class="categories-container categories-container-two bg-white appear-animate"
		data-animation-name="fadeIn"
		data-animation-delay="100"
		v-animate
	>
		<h4 class="section-title text-transform-none">Gift & Gadgets</h4>

		<div class="row">
			<div class="col-lg-3 col-6">
				<div class="shop-list p-0 d-flex align-items-sm-center flex-sm-row flex-column">
					<a href="javascript:;"><i class="icon-boy-broad-smile"></i></a>
					<div>
						<nuxt-link
							to="/shop"
							class="sub-title"
						>For Him</nuxt-link>
						<ul>
							<li>
								<nuxt-link to="/shop">Gifts for Boyfriend</nuxt-link>
							</li>
							<li>
								<nuxt-link to="/shop">Gifts for Dad</nuxt-link>
							</li>
							<li>
								<nuxt-link to="/shop">Gifts for Husband</nuxt-link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="col-lg-3 col-6">
				<div class="shop-list p-0 d-flex align-items-sm-center flex-sm-row flex-column">
					<a href="javascript:;"><i class="icon-smiling-girl"></i></a>

					<div>
						<nuxt-link
							to="/shop"
							class="sub-title"
						>For Her</nuxt-link>
						<ul>
							<li>
								<nuxt-link to="/shop">Gifts for Girlfriend</nuxt-link>
							</li>
							<li>
								<nuxt-link to="/shop">Gifts for Mom</nuxt-link>
							</li>
							<li>
								<nuxt-link to="/shop">Gifts for Wife</nuxt-link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="col-lg-3 col-6">
				<div class="shop-list p-0 d-flex align-items-sm-center flex-sm-row flex-column">
					<a href="javascript:;"><i class="icon-smiling-baby"></i></a>
					<div>
						<nuxt-link
							to="/shop"
							class="sub-title"
						>For Kids</nuxt-link>
						<ul>
							<li>
								<nuxt-link to="/shop">Gifts for Boys</nuxt-link>
							</li>
							<li>
								<nuxt-link to="/shop">Gifts for Girls</nuxt-link>
							</li>
							<li>
								<nuxt-link to="/shop">Gifts for Tween Boys</nuxt-link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="col-lg-3 col-6">
				<div class="shop-list p-0 d-flex align-items-sm-center flex-sm-row flex-column">
					<a href="javascript:;"><i class="icon-gift-2"></i></a>
					<div>
						<nuxt-link
							to="/shop"
							class="sub-title"
						>Birthday</nuxt-link>
						<ul>
							<li>
								<nuxt-link to="/shop">Birthday for Her</nuxt-link>
							</li>
							<li>
								<nuxt-link to="/shop">Birthday for Him</nuxt-link>
							</li>
							<li>
								<nuxt-link to="/shop">Boyfriend Gifts</nuxt-link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>