<template>
    <div>
        <div class="mobile-menu-overlay" @click="hideMobileMenu"></div>

        <div class="mobile-menu-container">
            <div class="mobile-menu-wrapper">
                <span class="mobile-menu-close" @click="hideMobileMenu">
                    <i class="fa fa-times"></i>
                </span>

                <nav class="mobile-nav">
                    <ul class="mobile-menu">
                        <li>
                            <nuxt-link to="/">Home</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/shop">Shop</nuxt-link>
                        </li>

                        <template>
                            <li v-for="category in categories" :key="category.id" :class="{ open: isOpened['category_' + category.id] }">
                                <nuxt-link :to="`/shop?category=${category.id}`" class="sub-menu-link menu-with-ul">
                                    {{ category.name }}
                                    <span class="mmenu-btn" @click.prevent="toggleOpen('category', category.id)"></span>
                                </nuxt-link>
                                <vue-slide-toggle :open="isOpened['category_' + category.id]">
                                    <ul v-for="subCategory in category.sub_categories" :key="subCategory.id" :class="{ open: isOpened['subCategory_' + subCategory.id] }">
                                        <li class="sub-menu-link menu-with-ul"  :class="{ open: isOpened['subCategory_' + subCategory.id] }">
                                            <nuxt-link :to="`/shop?subCategory=${subCategory.id}`">
                                                {{ subCategory.name }}
                                                <span class="mmenu-btn" @click="toggleOpen('subCategory', subCategory.id)"></span>
                                            </nuxt-link>
                                        </li>
                                        <li class="border-0">
                                            <vue-slide-toggle tag="ul" :open="isOpened['subCategory_' + subCategory.id]" class="ml-4">
                                                <li v-for="childCategory in subCategory.child_categories" :key="childCategory.id" :class="{ open: isOpened['childCategory_' + childCategory.id] }">
                                                    <nuxt-link :to="`/shop?childCategory=${childCategory.id}`" @click="toggleOpen('childCategory', childCategory.id)" :class="{ open: isOpened['childCategory_' + childCategory.id] }">{{ childCategory.name }}</nuxt-link>
                                                </li>
                                            </vue-slide-toggle>
                                        </li>
                                    </ul>
                                </vue-slide-toggle>
                            </li>
                        </template>

                        <!-- <li :class="{ open: prodOpened }">
                            <nuxt-link
                                to="/product/default/beats-solo-hd-drenched-one"
                                class="sub-menu-link menu-with-ul"
                            >
                                Products
                                <span
                                    class="mmenu-btn"
                                    @click.prevent="prodOpened = !prodOpened"
                                ></span>
                            </nuxt-link>

                            <vue-slide-toggle :open="prodOpened">
                                <ul :class="{ open: prod1Opened }">
                                    <li
                                        class="sub-menu-link menu-with-ul"
                                        @click="prod1Opened = !prod1Opened"
                                        :class="{ open: prod1Opened }"
                                    >
                                        <a href="javascript:;">
                                            Product Pages
                                            <span class="mmenu-btn"></span>
                                        </a>
                                    </li>

                                    <li class="border-0">
                                        <vue-slide-toggle
                                            tag="ul"
                                            :open="prod1Opened"
                                            class="ml-4"
                                        >
                                            <li
                                                v-for="(item, index) in mainMenu
                                                    .product.pages"
                                                :key="'product1' + index"
                                            >
                                                <nuxt-link :to="item.url">{{
                                                    item.title
                                                }}</nuxt-link>
                                            </li>
                                        </vue-slide-toggle>
                                    </li>
                                </ul>

                                <ul :class="{ open: prod2Opened }">
                                    <li
                                        class="sub-menu-link menu-with-ul"
                                        @click="prod2Opened = !prod2Opened"
                                        :class="{ open: prod2Opened }"
                                    >
                                        <a href="javascript:;">
                                            Product Layouts
                                            <span class="mmenu-btn"></span>
                                        </a>
                                    </li>

                                    <li class="border-0">
                                        <vue-slide-toggle
                                            tag="ul"
                                            :open="prod2Opened"
                                            class="ml-4"
                                        >
                                            <li
                                                v-for="(item, index) in mainMenu
                                                    .product.layout"
                                                :key="'product2' + index"
                                            >
                                                <nuxt-link :to="item.url">{{
                                                    item.title
                                                }}</nuxt-link>
                                            </li>
                                        </vue-slide-toggle>
                                    </li>
                                </ul>
                            </vue-slide-toggle>
                        </li> -->

                        <!-- <li :class="{open: pageOpened}">
						<nuxt-link
							to="/pages/about-us"
							class="sub-menu-link"
						>
							Pages
							<span class="tip tip-hot">Hot!</span>
							<span
								class="mmenu-btn"
								@click.prevent="pageOpened = !pageOpened"
							></span>
						</nuxt-link>

						<vue-slide-toggle :open="pageOpened">
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
						</vue-slide-toggle>
					</li> -->

                        <!-- <li>
						<nuxt-link to="/pages/blog">Blog</nuxt-link>
					</li> -->
                        <!-- <li>
						<nuxt-link to="/pages/about-us">About Us</nuxt-link>
					</li> -->
                    </ul>

                    <!-- <ul class="mobile-menu mt-2 mb-2">
						<li class="border-0">
							<a href="javascript:;">Special Offer!</a>
						</li>
						<li class="border-0">
							<a
								href="/https://1.envato.market/DdLk5"
								target="_blank"
							>Buy Porto!<span class="tip tip-hot">Hot</span></a>
						</li>
					</ul> -->

                    <ul class="mobile-menu">
                        <!-- <li>
							<nuxt-link to="/pages/dashboard">My Account</nuxt-link>
						</li> -->
                        <li>
                            <nuxt-link to="/pages/about-us">About Us</nuxt-link>
                        </li>

                        <li>
                            <nuxt-link to="/pages/contact-us"
                                >Contact Us</nuxt-link
                            >
                        </li>
                        <!-- <li>
							<nuxt-link to="/pages/blog">Blog</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/pages/wishlist">My Wishlist</nuxt-link>
						</li> -->
                        <li>
                            <nuxt-link to="/pages/cart">Cart</nuxt-link>
                        </li>
                        <!-- <li>
							<nuxt-link
								to="/pages/login"
								class="login-link"
							>Log In</nuxt-link>
						</li> -->
                    </ul>
                </nav>

                <!-- <form class="search-wrapper mb-2" action="#">
                    <input
                        type="text"
                        class="form-control mb-0"
                        placeholder="Search..."
                        v-model="search_term"
                        required
                    />
                    <button
                        class="btn icon-search text-white bg-transparent p-0"
                        type="submit"
                        @click="submitSearchForm"
                    ></button>
                </form> -->

                <div class="social-icons">
                    <a
                            href="javascript:;"
                            class="d-flex align-items-center ml-2 text-white"
                        ><i class="icon-phone-1"></i> 019-94635351</a>
                </div>
                
<br><br>

                <div class="social-icons">
                    <a
                        href="https://www.facebook.com/p/Flare-Brand-100064835408819/"
                        class="social-icon social-facebook icon-facebook"
                    ></a>

                   
                    
                    <!-- <a
                        href="javascript:;"
                        class="social-icon social-twitter icon-twitter"
                    ></a> -->
                    <a
                        href="javascript:;"
                        class="social-icon social-instagram icon-instagram"
                    ></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { VueSlideToggle } from 'vue-slide-toggle';
// import { mainMenu } from '~/utils/data/menu';
import Api, { baseUrl } from '~/api';


export default {
    components: {
        VueSlideToggle,
    },
    data: function () {
        return {
            search_term: '',
            // mainMenu: mainMenu,
            catOpened: {},
            var1Opened: {},
            var2Opened: false,
            prodOpened: false,
            prod1Opened: false,
            prod2Opened: false,
            pageOpened: false,
            isOpened: {},

			categories: [],
            
        };
    },
	mounted: function() {
		Api.get(`${baseUrl}/api/categories/active-all`)
			.then(response => {
				this.categories = response.data.data;
				console.log(this.categories);
				
			})
			.catch(error => ({ error: JSON.stringify(error) }));
	},
    methods: {
        
        toggleOpen(type, id) {
            const key = type + '_' + id;
            this.$set(this.isOpened, key, !this.isOpened[key]);
        },
        hideMobileMenu: function () {
            document.querySelector('body').classList.remove('mmenu-active');
        },
        submitSearchForm: function (e) {
            this.$router.push({
                path: '/shop',
                query: {
                    search_term: this.search_term,
                },
            });
            this.search_term = '';
        },
    },
};
</script>