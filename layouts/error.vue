<template>
    <div class="main">
        <nav aria-label="breadcrumb" class="breadcrumb-nav">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <nuxt-link to="/" class="router-link-active">
                            <i class="icon-home"></i>
                        </nuxt-link>
                    </li>
                    <li aria-current="page" class="breadcrumb-item active">404</li>
                </ol>
            </div>
        </nav>
        <div class="container">
            <section class="http-error">
                <div class="row justify-content-center py-3">
                    <div class="col-md-7 text-center">
                        <div class="http-error-main">
                            <h2>
                                404
                                <i class="fas fa-file ml-3"></i>
                            </h2>
                            <p>
                                We're sorry, but the page you were looking for
                                doesn't exist.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4 mt-4 mt-md-0">
                        <h4 class="text-primary">Here are some useful links</h4>
                        <ul class="nav nav-list">
                            <li class="nav-item">
                                <nuxt-link to="/" class="nav-link router-link-active">Home</nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link
                                    to="/pages/account"
                                    class="nav-link router-link-active"
                                >Account</nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link
                                    to="/pages/forgot-password"
                                    class="nav-link"
                                >Forget Password</nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link to="/pages/about-us" class="nav-link">About Us</nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link to="/pages/contact-us" class="nav-link">Contact Us</nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {

}
</script>