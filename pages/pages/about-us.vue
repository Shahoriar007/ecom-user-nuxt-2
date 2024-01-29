p<template>
	<main class="main about">
		<div
			class="page-header page-header-bg text-left"
			style="background: 50%/cover #D4E1EA"
			v-lazy:background-image="'./images/page-header-bg.jpg'"
		>
			<div class="container">
				<h1>
					<span>ABOUT US</span>OUR COMPANY
				</h1>
				<nuxt-link
					to="/pages/contact-us"
					class="btn btn-dark"
				>Contact</nuxt-link>
			</div>
		</div>

		<nav
			aria-label="breadcrumb"
			class="breadcrumb-nav"
		>
			<div class="container">
				<ol class="breadcrumb">
					<li class="breadcrumb-item">
						<nuxt-link to="/">
							<i class="icon-home"></i>
						</nuxt-link>
					</li>
					<li
						class="breadcrumb-item active"
						aria-current="page"
					>About Us</li>
				</ol>
			</div>
		</nav>

		<div class="about-section">
			<div class="container">
				<h2 class="subtitle">OUR STORY</h2>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
					the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
					of type and scrambled it to make a type specimen book. It has survived not only five centuries,
					but also the leap into electronic typesetting, remaining essentially unchanged.
				</p>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
					the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
					of type and scrambled it to make a type specimen book.
				</p>
				<p class="lead">
					“ Many desktop publishing packages and web page editors now use Lorem Ipsum as their
					default model search for evolved over sometimes by accident, sometimes on purpose ”
				</p>
			</div>
		</div>

		<div class="features-section bg-gray">
			<div class="container">
				<h2 class="subtitle">WHY CHOOSE US</h2>
				<div class="row">
					<div class="col-lg-4">
						<div class="feature-box bg-white">
							<i class="icon-shipped"></i>

							<div class="feature-box-content p-0">
								<h3>Free Shipping</h3>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industr.
								</p>
							</div>
						</div>
					</div>

					<div class="col-lg-4">
						<div class="feature-box bg-white">
							<i class="icon-us-dollar"></i>

							<div class="feature-box-content p-0">
								<h3>100% Money Back Guarantee</h3>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industr.
								</p>
							</div>
						</div>
					</div>

					<div class="col-lg-4">
						<div class="feature-box bg-white">
							<i class="icon-online-support"></i>

							<div class="feature-box-content p-0">
								<h3>Online Support 24/7</h3>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industr.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		
	</main>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import PvCountTo from '~/components/features/PvCountTo';
import { baseSlider4 } from '~/utils/data/carousel';

export default {
	components: {
		PvCarousel,
		PvCountTo
	},
	data: function() {
		return {
			baseSlider4: baseSlider4
		};
	}
};
</script>