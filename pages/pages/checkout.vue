<template>
    <main class="main main-test">

        <head>
            <!-- Google Tag Manager -->
            <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TZ7FH7BK');</script>
        <!-- End Google Tag Manager -->
        </head>

        <div class="container checkout-container">
            <ul
                class="checkout-progress-bar d-flex justify-content-center flex-wrap"
            >
                <li>
                    <nuxt-link to="/pages/cart">Shopping Cart</nuxt-link>
                </li>
                <li class="active">
                    <nuxt-link to="/pages/checkout">Checkout</nuxt-link>
                </li>
                <li class="disabled">
                    <a href="javascript:;">Order Complete</a>
                </li>
            </ul>

            <template v-if="cartList.length > 0">
                <div class="login-form-container">
                    <!-- <h4>
						Returning customer?
						<button
							data-toggle="collapse"
							data-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
							class="btn btn-link btn-toggle"
							@click="loginOpened = !loginOpened"
						>Login</button>
					</h4> -->

                    <!-- <vue-slide-toggle :open="loginOpened">
						<div class="login-section feature-box">
							<div class="feature-box-content">
								<form
									action="#"
									id="login-form"
								>
									<p>
										If you have shopped with us before, please enter your details below. If you are
										a new customer, please proceed to the Billing & Shipping section.
									</p>

									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label class="mb-0 pb-1">
													Username or email
													<span class="required">*</span>
												</label>
												<input
													type="email"
													class="form-control"
													required
												/>
											</div>
										</div>

										<div class="col-md-6">
											<div class="form-group">
												<label class="mb-0 pb-1">
													Password
													<span class="required">*</span>
												</label>
												<input
													type="password"
													class="form-control"
													required
												/>
											</div>
										</div>
									</div>

									<button
										type="submit"
										class="btn"
									>LOGIN</button>

									<div class="form-footer mb-1">
										<div class="custom-control custom-checkbox mb-0 mt-0">
											<input
												type="checkbox"
												class="custom-control-input"
												id="lost-password"
											/>
											<label
												class="custom-control-label mb-0"
												for="lost-password"
											>
												Remember
												me
											</label>
										</div>

										<nuxt-link
											to="/pages/forgot-password"
											class="forget-password"
										>Lost your password?</nuxt-link>
									</div>
								</form>
							</div>
						</div>
					</vue-slide-toggle> -->
                </div>

                <div class="checkout-discount">
                    <!-- <h4>
						Have a coupon?
						<button
							data-toggle="collapse"
							data-target="#collapseTwo"
							aria-expanded="true"
							aria-controls="collapseOne"
							class="btn btn-link btn-toggle"
							@click="codeOpened = !codeOpened"
						>ENTER YOUR CODE</button>
					</h4> -->

                    <vue-slide-toggle :open="codeOpened">
                        <div class="feature-box">
                            <div class="feature-box-content">
                                <p>
                                    If you have a coupon code, please apply it
                                    below.
                                </p>

                                <form action="#">
                                    <div class="input-group">
                                        <input
                                            type="text"
                                            class="form-control form-control-sm w-auto"
                                            placeholder="Coupon code"
                                            required
                                        />
                                        <div class="input-group-append">
                                            <button
                                                class="btn btn-sm mt-0"
                                                type="submit"
                                            >
                                                Apply Coupon
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </vue-slide-toggle>
                </div>

                <div class="row">
                    <div class="col-lg-7">
                        <ul class="checkout-steps">
                            <li>
                                <h2 class="step-title">Billing details</h2>

                                <form action="#" id="checkout-form">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>
                                                    Full name
                                                    <abbr
                                                        class="required"
                                                        title="required"
                                                        >*</abbr
                                                    >
                                                </label>
                                                <input
                                                    v-model="fullName"
                                                    type="text"
                                                    class="form-control"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <!-- <div class="col-md-6">
											<div class="form-group">
												<label>
													Last name
													<abbr
														class="required"
														title="required"
													>*</abbr>
												</label>
												<input
													v-model="lastName"
													type="text"
													class="form-control"
													required
												/>
											</div>
										</div> -->
                                    </div>

                                    <!-- <div class="form-group">
										<label>Company name (optional)</label>
										<input
											v-model="companyName"
											type="text"
											class="form-control"
										/>
									</div> -->

                                    <!-- <div class="select-custom">
										<label>
											Country
											<abbr
												class="required"
												title="required"
											>*</abbr>
										</label>
										<input
											v-model="countryName"
											type="text"
											class="form-control"
											required
										/>
									</div> -->

                                    <!-- <div class="form-group">
										<label>
											City
											<abbr
												class="required"
												title="required"
											>*</abbr>
										</label>
										<input
											v-model="cityName"
											type="text"
											class="form-control"
											required
										/>
									</div> -->

                                    <!-- <div class="form-group mb-1 pb-2">
                                        <label>
                                            Detail address
                                            <abbr
                                                class="required"
                                                title="required"
                                                >*</abbr
                                            >
                                        </label>
                                        <input
                                            v-model="detailAddress"
                                            type="text"
                                            class="form-control"
                                            placeholder="House number and street name"
                                            required
                                        />
                                    </div> -->
                                   

                                    <div class="form-group">
                                        <label>
                                            Phone
                                            <abbr
                                                class="required"
                                                title="required"
                                                >*</abbr
                                            >
                                        </label>
                                        <input
                                            v-model="phone"
                                            type="tel"
                                            class="form-control"
                                            required
                                        />
                                    </div>

                                    <div class="form-group mb-1 pb-2">
                                        <label>
                                            Detail address
                                            <abbr
                                                class="required"
                                                title="required"
                                                >*</abbr
                                            >
                                        </label>
                                        <input
                                            v-model="detailAddress"
                                            @input="validateDetailAddress"
                                            type="text"
                                            class="form-control"
                                            placeholder="House number and street name"
                                            required
                                        />
                                        <div
                                            v-if="detailAddressError"
                                            class="text-danger"
                                        >
                                            Minimum 6 characters required
                                        </div>
                                    </div>

                                    <!-- <div class="form-group">
                                        <label>
                                            Email address (optional)
                                        </label>
                                        <input
                                            v-model="email"
                                            type="email"
                                            class="form-control"
                                        />
                                    </div> -->

                                    <!-- <div class="form-group mb-1">
										<div class="custom-control custom-checkbox">
											<input
												type="checkbox"
												class="custom-control-input"
												id="create-account"
											/>
											<label
												class="custom-control-label"
												data-toggle="collapse"
												data-target="#collapseThree"
												aria-controls="collapseThree"
												for="create-account"
												@click="accountOpened = !accountOpened"
											>Create an account?</label>
										</div>
									</div> -->

                                    <!-- <vue-slide-toggle :open="accountOpened">
										<div class="form-group">
											<label>
												Create account password
												<abbr
													class="required"
													title="required"
												>*</abbr>
											</label>
											<input
												type="password"
												placeholder="Password"
												class="form-control"
												required
											/>
										</div>
									</vue-slide-toggle> -->

                                    <!-- <div class="form-group">
										<div class="custom-control custom-checkbox mt-0">
											<input
												type="checkbox"
												class="custom-control-input"
												id="different-shipping"
											/>
											<label
												class="custom-control-label"
												data-toggle="collapse"
												data-target="#collapseFour"
												aria-controls="collapseFour"
												for="different-shipping"
												@click="addressOpened = !addressOpened"
											>
												Ship to a
												different
												address?
											</label>
										</div>
									</div>

									<vue-slide-toggle :open="addressOpened">
										<div class="shipping-info">
											<div class="row">
												<div class="col-md-6">
													<div class="form-group">
														<label>
															First name
															<abbr
																class="required"
																title="required"
															>*</abbr>
														</label>
														<input
															type="text"
															class="form-control"
															required
														/>
													</div>
												</div>

												<div class="col-md-6">
													<div class="form-group">
														<label>
															Last name
															<abbr
																class="required"
																title="required"
															>*</abbr>
														</label>
														<input
															type="text"
															class="form-control"
															required
														/>
													</div>
												</div>
											</div>

											<div class="form-group">
												<label>Company name (optional)</label>
												<input
													type="text"
													class="form-control"
												/>
											</div>

											<div class="select-custom">
												<label>
													Country / Region
													<span class="required">*</span>
												</label>
												<select
													name="orderby"
													class="form-control"
												>
													<option
														value
														selected="selected"
													>Vanuatu</option>
													<option value="1">Brunei</option>
													<option value="2">Bulgaria</option>
													<option value="3">Burkina Faso</option>
													<option value="4">Burundi</option>
													<option value="5">Cameroon</option>
												</select>
											</div>

											<div class="form-group mb-1 pb-2">
												<label>
													Street address
													<abbr
														class="required"
														title="required"
													>*</abbr>
												</label>
												<input
													type="text"
													class="form-control"
													placeholder="House number and street name"
													required
												/>
											</div>

											<div class="form-group">
												<input
													type="text"
													class="form-control"
													placeholder="Apartment, suite, unit, etc. (optional)"
													required
												/>
											</div>

											<div class="form-group">
												<label>
													Town / City
													<abbr
														class="required"
														title="required"
													>*</abbr>
												</label>
												<input
													type="text"
													class="form-control"
													required
												/>
											</div>

											<div class="select-custom">
												<label>
													State / County
													<abbr
														class="required"
														title="required"
													>*</abbr>
												</label>
												<select
													name="orderby"
													class="form-control"
												>
													<option
														value
														selected="selected"
													>NY</option>
													<option value="1">Brunei</option>
													<option value="2">Bulgaria</option>
													<option value="3">Burkina Faso</option>
													<option value="4">Burundi</option>
													<option value="5">Cameroon</option>
												</select>
											</div>

											<div class="form-group">
												<label>
													Postcode / ZIP
													<abbr
														class="required"
														title="required"
													>*</abbr>
												</label>
												<input
													type="text"
													class="form-control"
													required
												/>
											</div>
										</div>
									</vue-slide-toggle> -->

                                    <!-- <div class="form-group">
                                        <label class="order-comments"
                                            >Order notes (optional)</label
                                        >
                                        <textarea
                                            v-model="orderNotes"
                                            class="form-control"
                                            placeholder="Notes about your order, e.g. special notes for delivery."
                                            
                                        ></textarea>
                                    </div> -->
                                </form>
                            </li>
                        </ul>
                    </div>

                    <div class="col-lg-5">
                        <div class="order-summary">
                            <h3>YOUR ORDER</h3>

                            <table class="table table-mini-cart">
                                <thead>
                                    <tr>
                                        <th colspan="2">Product</th>
                                    </tr>
                                </thead>
                                <tbody v-if="cartList.length > 0">
                                    <tr
                                        v-for="(product, index) in cartList"
                                        :key="'cart-product-' + index"
                                    >
                                        <td class="product-col">
                                            <h2 class="product-title">
                                                {{ truncateName(product.name) }} ×
                                                <span class="product-qty">{{
                                                    product.qty
                                                }}</span>
                                            </h2>
                                        </td>

                                        <td class="price-col">
                                            <span
                                                >(BDT)
                                                {{
                                                    product.price | priceFormat
                                                }}</span
                                            >
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody v-else>
                                    <p class="cart-empty-text ml-3">
                                        No products in the cart.
                                    </p>
                                </tbody>
                                <tfoot>
                                    <!-- <tr class="cart-subtotal">
                                        <td>
                                            <h4>Subtotal</h4>
                                            <h6>Delivery Charge</h6>
                                        </td>

                                        <td class="price-col">
                                            <span
                                                >(BDT)
                                                {{
                                                    totalPrice | priceFormat
                                                }}</span
                                            >

                                            <h6>
                                                (BDT)
                                                {{
                                                    deliveryCharge | priceFormat
                                                }}
                                            </h6>
                                        </td>
                                    </tr> -->
                                    <tr class="order-shipping">
                                        <td class="text-left" colspan="2">
                                            <h4 class="m-b-sm">
                                                Delivery Charge
                                            </h4>

                                            <div
                                                class="form-group form-group-custom-control"
                                            >
                                                <div
                                                    class="custom-control custom-radio d-flex"
                                                >
                                                    <input
                                                        type="radio"
                                                        class="custom-control-input"
                                                        name="radio"
                                                        :value=insideDhaka
                                                        v-model="deliveryCharge"
                                                        
                                                    />
                                                    <label
                                                        class="custom-control-label"
                                                        >Inside Dhaka - (BDT) {{ insideDhaka }}</label
                                                    >
                                                </div>
                                            </div>

                                            <div
                                                class="form-group form-group-custom-control mb-0"
                                            >
                                                <div
                                                    class="custom-control custom-radio d-flex mb-0"
                                                >
                                                    <input
                                                        type="radio"
                                                        name="radio"
                                                        class="custom-control-input"
                                                        checked
                                                        :value=outsideDhaka
                                                        v-model="deliveryCharge"
                                                    />
                                                    <label
                                                        class="custom-control-label"
                                                        >Outside Dhaka - (BDT) {{ outsideDhaka }}</label
                                                    >
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr class="order-total">
                                        <td>
                                            <h4>Total</h4>
                                        </td>
                                        <td>
                                            <b class="total-price">
                                                <span
                                                    >(BDT)
                                                    {{
                                                        (Number(totalPrice) +
                                                            Number(
                                                                deliveryCharge
                                                            ))
                                                            | priceFormat
                                                    }}</span
                                                >
                                            </b>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>

                            <!-- <div class="payment-methods">
                                <h4 class>Payment methods</h4>
                                <div class="info-box with-icon p-0">
                                    <p>Cash On Delivery.</p>
                                </div>
                            </div> -->

                            <button
                                class="btn btn-dark btn-place-order"
                                @click="submitOrder"
                                >
                                অর্ডার কনফার্ম করুন
                            </button>
                            <!-- form="checkout-form" -->
                        </div>
                    </div>
                </div>
            </template>

            <div class="box-content" v-else>
                <table
                    class="table-cart"
                    data-pagination="no"
                    data-per-page="5"
                    data-page="1"
                    data-id
                    data-token
                >
                    <thead class="d-none">
                        <tr>
                            <th class="product-thumbnail"></th>

                            <th class="product-name">
                                <span class="nobr">Product</span>
                            </th>

                            <th class="product-price">
                                <span class="nobr">price</span>
                            </th>

                            <th class="product-stock-status">
                                <span class="nobr">Stock status</span>
                            </th>

                            <th class="product-add-to-cart">
                                <span class="nobr">Actions</span>
                            </th>
                        </tr>
                    </thead>

                    <tbody class="cart-items-wrapper">
                        <tr class="border-0 py-0">
                            <td colspan="6" class="px-3 py-2 text-center">
                                <p class="noproduct-msg mb-2">
                                    Checkout is not available while your cart is
                                    empty.
                                </p>
                                <i class="icon-bag-2 cart-empty"></i>
                            </td>
                        </tr>
                        <tr class="border-0 py-0">
                            <td
                                colspan="6"
                                class="px-3 py-2 text-center cart-empty"
                            >
                                No products added to the cart
                            </td>
                        </tr>
                        <tr class="border-0 py-0">
                            <td colspan="6" class="px-3 text-center">
                                <nuxt-link to="/shop" class="btn btn-go-shop"
                                    >RETURN TO SHOP</nuxt-link
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="mb-6"></div>
            </div>
        </div>
        <template>
			
            <div class="sticky-navbar fixed" v-if="cartList.length > 0">
				<div class="container">
					<div class="row">
						
							<button class="btn btn-primary" href="javascript:;"  @click="submitOrder">
								অর্ডার কনফার্ম করুন
											</button>
						
							
						
					</div>
				</div>
			
			</div>

            <div v-else>
                <pv-sticky-footer></pv-sticky-footer>
            </div>

            </template>

            <body>
            <!-- Google Tag Manager (noscript) -->
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TZ7FH7BK"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            <!-- End Google Tag Manager (noscript) -->
        </body>

       
            
    </main>
</template>

<script>
import { VueSlideToggle } from 'vue-slide-toggle';
import { mapGetters } from 'vuex';
import Api, { baseUrl } from '~/api';
import PvStickyFooter from '~/components/common/partials/PvStickyFooter';


export default {
    components: {
        VueSlideToggle,
        PvStickyFooter
    },
    data: function () {
        return {
            loginOpened: false,
            codeOpened: false,
            accountOpened: false,
            addressOpened: false,

            //order
            fullName: '',
            firstName: '',
            lastName: '',
            companyName: '',
            countryName: '',
            cityName: '',
            detailAddress: '',
            phone: '',
            email: '',
            orderNotes: '',

            deliveryCharge: '',

            detailAddressError: false,
            insideDhaka: '',
            outsideDhaka: '',
        };
    },
    computed: {
        ...mapGetters('cart', ['cartList', 'totalCount', 'totalPrice']),
    },

    mounted: function () {
        Api.get(`${baseUrl}/api/order-delivery-charge`).then((response) => {
            this.insideDhaka = response.data.data[0].inside_dhaka;
            this.outsideDhaka = response.data.data[0].outside_dhaka;
            this.deliveryCharge = this.outsideDhaka;
            
        });
    },
    methods: {
        truncateName(name) {
            if (!name) return '';
            const words = name.split(' ');
            if (words.length > 2) {
                return words.slice(0, 2).join(' ') + '...';
            } else {
                return name;
            }
        },

        purchaseConfirmedGTM: function () {
            console.log("testtest");
			window.dataLayer.push({
			event: 'purchase',
			ecommerce: {
                transaction_id: 77,
                affiliation: "rongdhonumart.com",
                value: 1020,
                tax: 0,
                shipping: 120,
                currency: "USD",
                coupon: "null",
                customer: {
                name: "Tofayel",
                phone: "01723735407",
                address: "Rajshahi"
                },
                items: [
                {
                    item_name: "Electric Nail Trimmer for Baby Newborn",
                    item_id: 60,
                    price: 450,
                    item_brand: "Unknown",
                    item_category: "",
                    quantity: 2
                }
                ]
            }
			});

		},

        async submitOrder() {
            try {


                // const value = this.totalPrice + this.deliveryCharge;
                // const shipping = this.deliveryCharge;

                console.log("ami ekhane");
                this.purchaseConfirmedGTM();

                console.log("ami nai");



                if(this.deliveryCharge == this.insideDhaka){
                    this.orderFrom = "Inside Dhaka";
                }else{
                    this.orderFrom = "Outside Dhaka";
                }

                if (this.fullName.length < 1) {
                    alert("Full name is required!");
                    return;
                }

                if (this.phone.length < 1) {
                    alert("Phone number is required!");
                    return;
                }

                if (this.detailAddress.length < 6) {
                    alert("Address must be at least 6 characters long!");
                    return;
                }

                const order = {
                    fullName: this.fullName,
                    firstName: this.fullName,
                    lastName: this.lastName,
                    companyName: this.companyName,
                    countryName: this.countryName,
                    cityName: this.cityName,
                    detailAddress: this.detailAddress,
                    phone: this.phone,
                    email: this.email,
                    orderNotes: this.orderNotes,
                    deliveryCharge: this.deliveryCharge,
                    totalPrice: this.totalPrice + this.deliveryCharge,
                    orderFrom: this.orderFrom,
                    products: this.cartList,
                };

                const response = await Api.post(`${baseUrl}/api/order`, order);

                if (response.status === 200) {

                   this.$router.push('/pages/account');
                } else {
                    alert('Order failed! Please try again.');
                }

                return response;
            } catch (error) {
                alert('Failed! Please try again.');
            
            }
        },

        // async checkout() {
        //     try {
        //         const response = await this.submitOrder();

        //         // if (response.status === 200) {
        //         //     alert('Order placed successfully!');
        //         // } else {
        //         //     alert('Order failed!');
        //         //     this.$router.push('/pages/account');
        //         // }
        //     } catch (error) {
        //         alert('An error occurred while placing the order.');
        //         console.error(error); // Log the error for debugging
        //         this.$router.push('/pages/account');
        //     }
        // },

        validateDetailAddress() {
            if (this.detailAddress.length >= 6) {
                this.detailAddressError = false; // Input is valid, so set detailAddressError to false
            } else {
                this.detailAddressError = true; // Input is invalid, so set detailAddressError to true
            }
        },
    },
};
</script>

<style scoped>
.btn-primary {
    border-color: #222529 !important;
    background-color: #222529 !important;
    width: 100%;
}
</style>