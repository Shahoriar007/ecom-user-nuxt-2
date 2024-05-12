<template>
    <main class="main">
        <div
			class="page-header page-header-bg text-left"
			style="background: 50%/cover #D4E1EA"
			v-lazy:background-image="'./images/page-header-bg.jpg'"
		>
			<div class="container">
				<h1>
					<span>CONTACT US</span>OUR COMPANY
				</h1>
				<nuxt-link
					to="/"
					class="btn btn-dark"
				>Home</nuxt-link>
			</div>
		</div>

        <nav aria-label="breadcrumb" class="breadcrumb-nav">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <nuxt-link to="/">
                            <i class="icon-home"></i>
                        </nuxt-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
                </ol>
            </div>
        </nav>

              

        <div class="container contact-us-container">
            <div class="contact-info">
                <div class="row">
                    <div class="col-12">
                        <h2 class="ls-n-25 m-b-1">Contact Info</h2>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed imperdiet libero id nisi euismod, sed
                            porta est consectetur. Vestibulum auctor felis eget
                            orci semper vestibulum. Pellentesque ultricies nibh
                            gravida, accumsan libero luctus, molestie nunc.L
                            orem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </div>

                    <div class="col-sm-6 col-lg-3">
                        <div class="feature-box text-center">
                            <i class="sicon-location-pin"></i>
                            <div class="feature-box-content">
                                <h3>Address</h3>
                                <h5>Amirun Srity Cricket Academy Sports Ground (Inside Lalmatia Housing Society School & College), Block B, Lalmatia, Dhaka</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="feature-box text-center">
                            <i class="fa fa-mobile-alt"></i>
                            <div class="feature-box-content">
                                <h3>Phone Number</h3>
                                <h5>+8801716479663
</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="feature-box text-center">
                            <i class="far fa-envelope"></i>
                            <div class="feature-box-content">
                                <h3>E-mail Address</h3>
                                <h5>info@amirunsritycricketacademy.com</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="feature-box text-center">
                            <i class="fa fa-globe"></i>
                            <div class="feature-box-content">
                                <h3>Website</h3>
                                <a href="https://www.amirunsritycricketacademy.com">
        <h5>https://www.amirunsritycricketacademy.com</h5>
    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6">
                    <h2 class="mt-6 mb-2">Send Us a Message</h2>

                    <form class="mb-0" action="#">
                        <div class="form-group">
                            <label class="mb-1" for="contact-name">
                                Your Name
                                <span class="required">*</span>
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="contact-name"
                                name="contact-name"
                                required
                            />
                        </div>

                        <div class="form-group">
                            <label class="mb-1" for="contact-email">
                                Your E-mail
                                <span class="required">*</span>
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                id="contact-email"
                                name="contact-email"
                                required
                            />
                        </div>

                        <div class="form-group">
                            <label class="mb-1" for="contact-message">
                                Your Message
                                <span class="required">*</span>
                            </label>
                            <textarea
                                cols="30"
                                rows="1"
                                id="contact-message"
                                class="form-control"
                                name="contact-message"
                                required
                            ></textarea>
                        </div>

                        <div class="form-footer mb-0">
                            <button
                                type="submit"
                                class="btn btn-dark font-weight-normal"
                            >Send Message</button>
                        </div>
                    </form>
                </div>

                <!-- <div class="col-lg-6">
                    <h2 class="mt-6 mb-1">Frequently Asked Questions</h2>
                    <div id="accordion">
                        <div class="card card-accordion">
                            <a
                                href="#"
                                class="card-header"
                                :class="{expanded: toggleState[0], collapsed: !toggleState[0]}"
                                @click.prevent="changeToggle(0)"
                            >
                                Curabitur eget leo at velit imperdiet viaculis
                                vitaes?
                            </a>

                            <vue-slide-toggle :open="toggleState[0]">
                                <div class="card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Curabitur eget leo at velit
                                        imperdiet varius. In eu ipsum vitae velit
                                        congue iaculis vitae at risus. Nullam tortor
                                        nunc, bibendum vitae semper a, volutpat eget
                                        massa.
                                    </p>
                                </div>
                            </vue-slide-toggle>
                        </div>

                        <div class="card card-accordion">
                            <a
                                href="#"
                                class="card-header"
                                :class="{expanded: toggleState[1], collapsed: !toggleState[1]}"
                                @click.prevent="changeToggle(1)"
                            >
                                Curabitur eget leo at velit imperdiet vague
                                iaculis vitaes?
                            </a>

                            <vue-slide-toggle :open="toggleState[1]">
                                <div class="card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Curabitur eget leo at velit
                                        imperdiet varius. In eu ipsum vitae velit
                                        congue iaculis vitae at risus. Nullam tortor
                                        nunc, bibendum vitae semper a, volutpat eget
                                        massa. Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Integer
                                        fringilla, orci sit amet posuere auctor,
                                        orci eros pellentesque odio, nec
                                        pellentesque erat ligula nec massa. Aenean
                                        consequat lorem ut felis ullamcorper posuere
                                        gravida tellus faucibus. Maecenas dolor
                                        elit, pulvinar eu vehicula eu, consequat et
                                        lacus. Duis et purus ipsum. In auctor mattis
                                        ipsum id molestie. Donec risus nulla,
                                        fringilla a rhoncus vitae, semper a massa.
                                        Vivamus ullamcorper, enim sit amet consequat
                                        laoreet, tortor tortor dictum urna, ut
                                        egestas urna ipsum nec libero. Nulla justo
                                        leo, molestie vel tempor nec, egestas at
                                        massa. Aenean pulvinar, felis porttitor
                                        iaculis pulvinar, odio orci sodales odio, ac
                                        pulvinar felis quam sit.
                                    </p>
                                </div>
                            </vue-slide-toggle>
                        </div>

                        <div class="card card-accordion">
                            <a
                                href="#"
                                class="card-header"
                                :class="{expanded: toggleState[2], collapsed: !toggleState[2]}"
                                @click.prevent="changeToggle(2)"
                            >
                                Curabitur eget leo at velit imperdiet viaculis
                                vitaes?
                            </a>

                            <vue-slide-toggle :open="toggleState[2]">
                                <div class="card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Curabitur eget leo at velit
                                        imperdiet varius. In eu ipsum vitae velit
                                        congue iaculis vitae at risus. Nullam tortor
                                        nunc, bibendum vitae semper a, volutpat eget
                                        massa.
                                    </p>
                                </div>
                            </vue-slide-toggle>
                        </div>

                        <div class="card card-accordion">
                            <a
                                href="#"
                                class="card-header"
                                :class="{expanded: toggleState[3], collapsed: !toggleState[3]}"
                                @click.prevent="changeToggle(3)"
                            >
                                Curabitur eget leo at velit imperdiet vague
                                iaculis vitaes?
                            </a>

                            <vue-slide-toggle :open="toggleState[3]">
                                <div class="card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Curabitur eget leo at velit
                                        imperdiet varius. In eu ipsum vitae velit
                                        congue iaculis vitae at risus. Nullam tortor
                                        nunc, bibendum vitae semper a, volutpat eget
                                        massa. Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Integer
                                        fringilla, orci sit amet posuere auctor,
                                        orci eros pellentesque odio, nec
                                        pellentesque erat ligula nec massa. Aenean
                                        consequat lorem ut felis ullamcorper posuere
                                        gravida tellus faucibus. Maecenas dolor
                                        elit, pulvinar eu vehicula eu, consequat et
                                        lacus. Duis et purus ipsum. In auctor mattis
                                        ipsum id molestie. Donec risus nulla,
                                        fringilla a rhoncus vitae, semper a massa.
                                        Vivamus ullamcorper, enim sit amet consequat
                                        laoreet, tortor tortor dictum urna, ut
                                        egestas urna ipsum nec libero. Nulla justo
                                        leo, molestie vel tempor nec, egestas at
                                        massa. Aenean pulvinar, felis porttitor
                                        iaculis pulvinar, odio orci sodales odio, ac
                                        pulvinar felis quam sit.
                                    </p>
                                </div>
                            </vue-slide-toggle>
                        </div>

                        <div class="card card-accordion">
                            <a
                                href="#"
                                class="card-header"
                                :class="{expanded: toggleState[4], collapsed: !toggleState[4]}"
                                @click.prevent="changeToggle(4)"
                            >
                                Curabitur eget leo at velit imperdiet varius
                                iaculis vitaes?
                            </a>

                            <vue-slide-toggle :open="toggleState[4]">
                                <div class="card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Curabitur eget leo at velit
                                        imperdiet varius. In eu ipsum vitae velit
                                        congue iaculis vitae at risus. Nullam tortor
                                        nunc, bibendum vitae semper a, volutpat eget
                                        massa. Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Integer
                                        fringilla, orci sit amet posuere auctor,
                                        orci eros pellentesque odio, nec
                                        pellentesque erat ligula nec massa. Aenean
                                        consequat lorem ut felis ullamcorper posuere
                                        gravida tellus faucibus. Maecenas dolor
                                        elit, pulvinar eu vehicula eu, consequat et
                                        lacus. Duis et purus ipsum. In auctor mattis
                                        ipsum id molestie. Donec risus nulla,
                                        fringilla a rhoncus vitae, semper a massa.
                                        Vivamus ullamcorper, enim sit amet consequat
                                        laoreet, tortor tortor dictum urna, ut
                                        egestas urna ipsum nec libero. Nulla justo
                                        leo, molestie vel tempor nec, egestas at
                                        massa. Aenean pulvinar, felis porttitor
                                        iaculis pulvinar, odio orci sodales odio, ac
                                        pulvinar felis quam sit.
                                    </p>
                                </div>
                            </vue-slide-toggle>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>

        <div class="mb-8"></div>

        <template>
			<pv-sticky-footer></pv-sticky-footer>
		</template>

    </main>
</template>

<script>
import Vue from 'vue';
import { VueSlideToggle } from 'vue-slide-toggle';
import * as VueGoogleMaps from 'vue2-google-maps'
import PvStickyFooter from '~/components/common/partials/PvStickyFooter';



Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBzlLYISGjL_ovJwAehh6ydhB56fCCpPQw',
    libraries: 'places'
  }
})

export default {
	components: {
		VueSlideToggle,
		PvStickyFooter,

	},
	data: function() {
		return {
			toggleState: [true, false, false, false, false]
		};
	},
	methods: {
		changeToggle: function(index) {
			let tmp = this.toggleState[index];
			this.toggleState.fill(false);
			this.toggleState[index] = !tmp;
			this.toggleState = [...this.toggleState];
		}
	}
};
</script>