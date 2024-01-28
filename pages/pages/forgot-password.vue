<template>
	<main class="main">
		<div class="page-header">
			<div class="container d-flex flex-column align-items-center">
				<nav
					aria-label="breadcrumb"
					class="breadcrumb-nav border-0"
				>
					<div class="container">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								<nuxt-link to="/">Home</nuxt-link>
							</li>
							<li class="breadcrumb-item">
								<nuxt-link to="/shop">Shop</nuxt-link>
							</li>
							<li
								class="breadcrumb-item active"
								aria-current="page"
							>My Account</li>
						</ol>
					</div>
				</nav>

				<h1>My Account</h1>
			</div>
		</div>

		<div class="container reset-password-container">
			<div class="row">
				<div class="col-lg-6 offset-lg-3">
					<div class="feature-box border-top-primary">
						<div class="feature-box-content">
							<form
								class="mb-0"
								action="#"
							>
								<p>
									Lost your password? Please enter your
									username or email address. You will receive
									a link to create a new password via email.
								</p>
								<div class="form-group mb-0">
									<label
										for="reset-email"
										class="font-weight-normal"
									>Username or email</label>
									<input
										type="email"
										class="form-control"
										id="reset-email"
										name="reset-email"
										required
									/>
								</div>

								<div class="form-footer mb-0">
									<nuxt-link to="/pages/login">Click here to login</nuxt-link>

									<button
										type="submit"
										class="btn btn-md btn-primary form-footer-right font-weight-normal text-transform-none mr-0"
									>Reset Password</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {};
</script>