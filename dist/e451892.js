(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{359:function(t,e,r){"use strict";r(43),r(19),r(25),r(22),r(34),r(35),r(28);var c=r(7),o=(r(95),r(12),r(44),r(23),r(45),r(55),r(148)),l=r(18),n=r(13);function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){Object(c.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var m={components:{PvCountDown:o.a},props:{product:Object,adClass:String,isActions:{type:Boolean,default:!0}},data:function(){return{baseUrl:n.a,minPrice:0,maxPrice:0,discount:0}},computed:v(v({},Object(l.c)("wishlist",["wishList"])),{},{isWishlisted:function(){var t=this;return this.wishList.findIndex((function(e){return e.name===t.product.name}))>-1}}),mounted:function(){var t=this;console.log(this.product),this.product.is_sale&&this.product.price&&(this.discount=(this.product.price-this.product.sale_price)/this.product.price*100,this.discount=parseInt(this.discount)),this.product.price||(this.minPrice=this.product.variants[0].price,this.product.variants.forEach((function(e){var r=e.is_sale?e.sale_price:e.price;t.minPrice>r&&(t.minPrice=r),t.maxPrice<r&&(t.maxPrice=r)})))},methods:v(v(v({},Object(l.b)("wishlist",["addToWishlist"])),Object(l.b)("cart",["addToCart"])),{},{openQuickview:function(){this.$modal.show((function(){return Promise.all([r.e(1),r.e(4)]).then(r.bind(null,462))}),{slug:this.product.slug},{width:"931",height:"auto",adaptive:!0,class:"quickview-modal"})},addWishlist:function(t){var e=this;t.currentTarget.classList.add("load-more-overlay","loading"),setTimeout((function(){e.addToWishlist({product:e.product}),document.querySelector(".wishlist-popup").classList.add("active"),setTimeout((function(){document.querySelector(".wishlist-popup").classList.remove("active")}),1e3)}),1e3)},addCart:function(){if(this.product.stock>0){var t=v({},this.product);this.product.is_sale&&(t.price=this.product.sale_price),this.addToCart({product:t})}},buyNow:function(){if(this.product.stock>0){var t=v({},this.product);this.product.is_sale&&(t.price=this.product.sale_price),this.addToCart({product:t})}this.$router.push("/pages/cart")}})},_=(r(381),r(6)),component=Object(_.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-default inner-quickview inner-icon"},[e("figure",{staticClass:"img-effect"},[e("nuxt-link",{attrs:{to:"/product/default/".concat(t.product.slug)}},t._l(t.product.large_pictures.slice(0,2),(function(t,r){return e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.original_url,expression:"item.original_url"}],key:"related-large-".concat(r),attrs:{alt:"large-picture",width:t.width,height:t.height}})})),0),t._v(" "),e("div",{staticClass:"label-group"},[t.product.is_hot?e("div",{staticClass:"product-label label-hot"},[t._v("HOT")]):t._e(),t._v(" "),t.product.is_sale&&!t.product.price?e("div",{staticClass:"product-label label-sale"},[t._v("Sale")]):t._e(),t._v(" "),t.product.is_sale&&t.product.price?e("div",{staticClass:"product-label label-sale"},[t._v("-"+t._s(t.discount)+"%")]):t._e()]),t._v(" "),e("div",{staticClass:"button-container"},[e("nuxt-link",{staticClass:"button-new",attrs:{to:"/product/default/".concat(t.product.slug),title:"Quick View"},on:{click:t.addCart}},[t._v("\n\t\t\tকার্টে যোগ করুন\n\t\t\t")]),t._v(" "),e("nuxt-link",{staticClass:"button-new-two",attrs:{to:"/product/default/".concat(t.product.slug),title:"Another Button"},on:{click:t.buyNow}},[t._v("\n\t\t\tঅর্ডার করুন\n\t\t\t")])],1)],1),t._v(" "),e("div",{staticClass:"product-details"},[e("div",{staticClass:"category-wrap"},[e("div",{staticClass:"category-list"},t._l(t.product.product_categories,(function(r,c){return e("span",{key:"product-category-".concat(c)},[e("nuxt-link",{attrs:{to:{path:"/shop",query:{category:r.slug}}}},[t._v(t._s(r.name))]),t._v(" "),c<t.product.product_categories.length-1?[t._v(",")]:t._e()],2)})),0)]),t._v(" "),e("h3",{staticClass:"product-title"},[e("nuxt-link",{attrs:{to:"/product/default/"+t.product.slug}},[t._v(t._s(t.product.name))])],1),t._v(" "),t.product.price?e("div",{key:"singlePrice",staticClass:"price-box"},[t.product.is_sale?[e("span",{staticClass:"old-price"},[t._v("BDT "+t._s(t._f("priceFormat")(t.product.price)))]),t._v(" "),e("span",{staticClass:"product-price"},[t._v("BDT "+t._s(t._f("priceFormat")(t.product.sale_price)))])]:[e("span",{staticClass:"product-price"},[t._v("BDT "+t._s(t._f("priceFormat")(t.product.price)))])]],2):e("div",{staticClass:"price-box"},[t.minPrice!==t.maxPrice?[e("span",{staticClass:"product-price"},[t._v("BDT "+t._s(t._f("priceFormat")(t.minPrice))+" – $"+t._s(t._f("priceFormat")(t.maxPrice)))])]:[e("span",{staticClass:"product-price"},[t._v("BDT "+t._s(t._f("priceFormat")(t.minPrice)))])]],2)])])}),[],!1,null,"92ff9312",null);e.a=component.exports},365:function(t,e,r){var content=r(382);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("b3f1de22",content,!0,{sourceMap:!1})},366:function(t,e,r){"use strict";r(42),r(19),r(63);var c=r(13),o={props:{prevProduct:Object,nextProduct:Object},data:function(){return{baseUrl:c.a,type:"default"}},mounted:function(){var t=this.$route.path.split("/");this.type=t[t.length-2];["simple","variable","sale","featured"].includes(this.type)&&(this.type="default")}},l=r(6),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-nav"},[e("div",{staticClass:"product-prev",class:{disabled:!t.prevProduct}},[t.prevProduct?e("nuxt-link",{key:"toPrevProduct",attrs:{to:"/product/".concat(t.type,"/").concat(t.prevProduct.slug)}},[e("span",{staticClass:"product-link"}),t._v(" "),e("span",{staticClass:"product-popup"},[e("span",{staticClass:"box-content"},[e("img",{staticStyle:{"padding-top":"0px"},attrs:{alt:"product",width:t.prevProduct.width,height:t.prevProduct.height,src:"".concat(t.baseUrl).concat(t.prevProduct.pictures[0].url)}}),t._v(" "),e("span",[t._v(t._s(t.prevProduct.name))])])])]):e("a",{attrs:{href:"javascript:;"}},[e("span",{staticClass:"product-link"})])],1),t._v(" "),e("div",{staticClass:"product-next",class:{disabled:!t.nextProduct}},[t.nextProduct?e("nuxt-link",{key:"toNexProduct",attrs:{to:"/product/".concat(t.type,"/").concat(t.nextProduct.slug)}},[e("span",{staticClass:"product-link"}),t._v(" "),e("span",{staticClass:"product-popup"},[e("span",{staticClass:"box-content"},[e("img",{staticStyle:{"padding-top":"0px"},attrs:{alt:"product",width:t.nextProduct.width,height:t.nextProduct.height,src:"".concat(t.baseUrl).concat(t.nextProduct.pictures[0].url)}}),t._v(" "),e("span",[t._v(t._s(t.nextProduct.name))])])])]):e("a",{attrs:{href:"javascript:;"}},[e("span",{staticClass:"product-link"})])],1)])}),[],!1,null,null,null);e.a=component.exports},368:function(t,e,r){"use strict";r(43);var c=r(359),o=r(145),l=r(144),n={components:{PvProductThree:c.a,PvCarousel:o.a},data:function(){return{productSliderThree:l.m}},props:{products:Array}},d=r(6),component=Object(d.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"products-section pt-0 pb-0"},[t.products?e("h2",{staticClass:"section-title"},[t._v("Related Products")]):t._e(),t._v(" "),t.products?t._e():e("pv-carousel",{staticClass:"skel-carousel dots-top dots-small",attrs:{options:t.productSliderThree}},t._l([1,2,3,4,5],(function(t){return e("div",{key:t,staticClass:"swiper-slide skel-pro"})})),0),t._v(" "),t.products&&t.products.length>0?e("pv-carousel",{staticClass:"products-slider dots-top dots-small",attrs:{options:t.productSliderThree}},t._l(t.products.slice(0,5),(function(t,r){return e("pv-product-three",{key:"related-product"+r,staticClass:"swiper-slide",attrs:{product:t}})})),1):t._e(),t._v(" "),t.products&&0===t.products.length?e("div",{staticClass:"info-box with-icon p-0 mb-3"},[e("p",[t._v("No products were found matching your selection.")])]):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},369:function(t,e,r){"use strict";var c={components:{PvSmallProduct:r(150).a},props:{featuredProducts:Array,bestProducts:Array,latestProducts:Array,topRatedProducts:Array,isFeatured:{type:Boolean,default:!0}}},o=r(6),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{class:t.isFeatured?"product-widgets-container row pb-2":"row products-widgets"},[t.isFeatured?e("div",{directives:[{name:"animate",rawName:"v-animate"}],class:t.isFeatured?"col-lg-3 col-sm-6 pb-5 pb-md-0":"col-sm-6 col-md-4 pb-4 pb-md-0 appear-animate",attrs:{"data-animation-name":"fadeInLeftShorter","data-animation-delay":"200"}},[e("h4",{staticClass:"section-sub-title ls-n-20"},[t._v("Featured Products")]),t._v(" "),t.featuredProducts?t._e():e("div",t._l([0,1,2],(function(t,r){return e("div",{key:"featured"+r,staticClass:"skel-product-col skel-pro mb-2"})})),0),t._v(" "),t._l(t.featuredProducts,(function(t,r){return e("pv-small-product",{key:"featured-product"+r,attrs:{product:t,"is-lazy":!1}})}))],2):t._e(),t._v(" "),e("div",{directives:[{name:"animate",rawName:"v-animate"}],class:t.isFeatured?"col-lg-3 col-sm-6 pb-5 pb-md-0":"col-sm-6 col-md-4 pb-4 pb-md-0 appear-animate",attrs:{"data-animation-name":"fadeInLeftShorter","data-animation-delay":"200"}},[e("h4",{staticClass:"section-sub-title ls-n-20"},[t._v("Top Rated Products")]),t._v(" "),t.topRatedProducts?t._e():e("div",t._l([0,1,2],(function(t,r){return e("div",{key:"top"+r,staticClass:"skel-product-col skel-pro mb-2"})})),0),t._v(" "),t._l(t.topRatedProducts,(function(t,r){return e("pv-small-product",{key:"top-rated-product"+r,attrs:{product:t,"is-lazy":!1}})}))],2),t._v(" "),e("div",{directives:[{name:"animate",rawName:"v-animate"}],class:t.isFeatured?"col-lg-3 col-sm-6 pb-5 pb-md-0":"col-sm-6 col-md-4 pb-4 pb-md-0 appear-animate",attrs:{"data-animation-name":"fadeInLeftShorter","data-animation-delay":"500"}},[e("h4",{staticClass:"section-sub-title ls-n-20"},[t._v("Best Selling Products")]),t._v(" "),t.bestProducts?t._e():e("div",t._l([0,1,2],(function(t,r){return e("div",{key:"best"+r,staticClass:"skel-product-col skel-pro mb-2"})})),0),t._v(" "),t._l(t.bestProducts,(function(t,r){return e("pv-small-product",{key:"best-product"+r,attrs:{product:t,"is-lazy":!1}})}))],2),t._v(" "),e("div",{directives:[{name:"animate",rawName:"v-animate"}],class:t.isFeatured?"col-lg-3 col-sm-6 pb-5 pb-md-0":"col-sm-6 col-md-4 pb-4 pb-md-0 appear-animate",attrs:{"data-animation-name":"fadeInLeftShorter","data-animation-delay":"800"}},[e("h4",{staticClass:"section-sub-title ls-n-20"},[t._v("Latest Products")]),t._v(" "),t.latestProducts?t._e():e("div",t._l([0,1,2],(function(t,r){return e("div",{key:"latest"+r,staticClass:"skel-product-col skel-pro mb-2"})})),0),t._v(" "),t._l(t.latestProducts,(function(t,r){return e("pv-small-product",{key:"latest-product"+r,attrs:{product:t,"is-lazy":!1}})}))],2)])}),[],!1,null,null,null);e.a=component.exports},381:function(t,e,r){"use strict";r(365)},382:function(t,e,r){var c=r(38)((function(i){return i[1]}));c.push([t.i,".button-container[data-v-92ff9312]{display:flex;gap:10px}.button-new[data-v-92ff9312]{background-color:rgba(48,80,255,.831);left:0}.button-new[data-v-92ff9312],.button-new-two[data-v-92ff9312]{border:none;bottom:0;color:#fff;font-size:1.3rem;font-weight:400;height:auto;letter-spacing:.025em;line-height:1.82;margin:0;padding:.8rem 1.4rem;position:absolute;text-align:center;text-transform:uppercase;transform:none;width:50%}.button-new-two[data-v-92ff9312]{background-color:rgba(171,19,165,.878);right:0}",""]),c.locals={},t.exports=c},383:function(t,e,r){"use strict";r(55);var c={methods:{tabClicked:function(t){if("tab"===t.target.getAttribute("data-toggle")){t.preventDefault();var e=t.target;e.closest(".nav").querySelector(".nav-link.active").classList.remove("active"),e.classList.add("active");var r=document.querySelector(e.getAttribute("href"));r.parentNode.querySelector(".tab-pane.show").classList.remove("show"),r.classList.add("show"),setTimeout((function(){r.parentNode.querySelector(".tab-pane.active").classList.remove("active"),r.classList.add("active")}),150)}}}},o=r(6),component=Object(o.a)(c,(function(){var t=this;return(0,t._self._c)("div",{on:{click:function(e){return t.tabClicked(e)}}},[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},435:function(t,e,r){"use strict";r.r(e);r(19),r(42),r(56),r(360);var c=r(357),o=r(13),l=r(147),n=(r(12),r(145)),d=r(371),v=r.n(d),m=r(144),_=(r(372),{components:{PvCarousel:n.a,LightBox:v.a},props:{product:Object,isMagnify:{type:Boolean,default:!0}},data:function(){return{baseSlider1:m.a,baseUrl:o.a}},computed:{lightBoxMedia:function(){return this.product.large_pictures.reduce((function(t,e){return[].concat(Object(l.a)(t),[{src:"".concat(o.a).concat(e.url),thumb:"".concat(o.a).concat(e.url)}])}),[])}},mounted:function(){var t=this;null!==this.product&&this.$nextTick((function(){var e=t;t.$refs.mediaRef.swiper.on("transitionStart",(function(){var t=e.$refs.mediaRef.swiper.activeIndex;e.$refs.thumbRef.querySelectorAll(".custom-dot.active")[0].classList.remove("active"),e.$refs.thumbRef.querySelectorAll(".custom-dot")[t].classList.add("active")}))}))},methods:{activeThumbItem:function(t,e){e.currentTarget.parentNode.querySelector(".custom-dot.active").classList.remove("active"),e.currentTarget.classList.add("active"),this.$refs.mediaRef.swiper.slideTo(t)},openLightBox:function(){this.$refs.lightBox.showImage(this.$refs.mediaRef.swiper.activeIndex)}}}),f=r(6),h=Object(f.a)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-lg-flex"},[e("div",{staticClass:"product-slider-container mb-auto"},[e("div",{staticClass:"label-group"},[t.product.is_hot?e("div",{staticClass:"product-label label-hot"},[t._v("HOT")]):t._e(),t._v(" "),t.product.is_sale?e("div",{staticClass:"product-label label-sale"},[t._v("Sale")]):t._e()]),t._v(" "),e("PvCarousel",{ref:"mediaRef",staticClass:"product-single-carousel show-nav-hover",attrs:{options:t.baseSlider1}},t._l(t.product.large_pictures,(function(r){return e("div",{key:r.name,staticClass:"swiper-slide"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"".concat(t.baseUrl).concat(r.url),expression:"`${baseUrl}${item.url}`"}],staticClass:"product-single-image w-100",attrs:{width:r.width,height:r.height,alt:"lgPicture"}})])})),0),t._v(" "),t.isMagnify?e("span",{staticClass:"prod-full-screen",on:{click:t.openLightBox}},[e("i",{staticClass:"icon-plus"})]):t._e()],1),t._v(" "),e("div",{ref:"thumbRef",staticClass:"prod-thumbnail thumbnail-vertical d-lg-block order-lg-first"},t._l(t.product.pictures,(function(r,c){return e("div",{key:"meida-two"+c,staticClass:"custom-dot",class:{active:0===c},on:{click:function(e){return t.activeThumbItem(c,e)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"".concat(t.baseUrl).concat(r.url),expression:"`${baseUrl}${item.url}`"}],attrs:{width:r.width,height:r.height,alt:"product-thumbnail"}})])})),0),t._v(" "),e("light-box",{ref:"lightBox",attrs:{media:t.lightBoxMedia,"show-light-box":!1}})],1)}),[],!1,null,null,null).exports,C=r(401),y=r(402),w=(r(43),{components:{PvTabs:r(383).a},props:{product:Object},methods:{setRating:function(t){t.currentTarget.parentNode.querySelector(".active")&&t.currentTarget.parentNode.querySelector(".active").classList.remove("active"),t.currentTarget.classList.add("active")}}}),P=Object(f.a)(w,(function(){var t=this,e=t._self._c;return e("pv-tabs",{staticClass:"product-single-tabs product-tabs-list pt-3 mb-0 mt-1"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-2"},[e("ul",{staticClass:"nav nav-tabs",attrs:{role:"tablist"}},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link active",attrs:{id:"product-tab-desc","data-toggle":"tab",href:"#product-desc-content",role:"tab","aria-controls":"product-desc-content","aria-selected":"true"}},[t._v("Description")])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{id:"product-tab-size","data-toggle":"tab",href:"#product-size-content",role:"tab","aria-controls":"product-size-content","aria-selected":"true"}},[t._v("Size Guide")])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{id:"product-tab-reviews","data-toggle":"tab",href:"#product-reviews-content",role:"tab","aria-controls":"product-reviews-content","aria-selected":"false"}},[t._v("Reviews ("+t._s(t.product.reviews)+")")])])])]),t._v(" "),e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"tab-content"},[e("div",{staticClass:"tab-pane fade show active",attrs:{id:"product-desc-content",role:"tabpanel","aria-labelledby":"product-tab-desc"}},[e("div",{staticClass:"product-desc-content"},[e("p",[t._v("\n\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n\t\t\t\t\t\t\t\tincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud ipsum\n\t\t\t\t\t\t\t\tconsectetur sed do, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n\t\t\t\t\t\t\t\tcommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t\t\t\t\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.\n\t\t\t\t\t\t\t")]),t._v(" "),e("ul",[e("li",[t._v("\n\t\t\t\t\t\t\t\t\tAny Product types that You want - Simple,\n\t\t\t\t\t\t\t\t\tConfigurable\n\t\t\t\t\t\t\t\t")]),t._v(" "),e("li",[t._v("\n\t\t\t\t\t\t\t\t\tDownloadable/Digital Products, Virtual\n\t\t\t\t\t\t\t\t\tProducts\n\t\t\t\t\t\t\t\t")]),t._v(" "),e("li",[t._v("Inventory Management with Backordered items")])]),t._v(" "),e("p",[t._v("\n\t\t\t\t\t\t\t\tSed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n\t\t\t\t\t\t\t\tveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\t\t\t\t\t\tconsequat.\n\t\t\t\t\t\t\t")])])]),t._v(" "),e("div",{staticClass:"tab-pane fade",attrs:{id:"product-size-content",role:"tabpanel","aria-labelledby":"product-tab-size"}},[e("div",{staticClass:"product-size-content"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("img",{staticClass:"w-auto bg-transparent",attrs:{src:"./images/products/body-shape.png",width:"217",height:"398",alt:"body shape"}})]),t._v(" "),e("div",{staticClass:"col-md-8"},[e("table",{staticClass:"table table-size"},[e("thead",[e("tr",[e("th",[t._v("SIZE")]),t._v(" "),e("th",[t._v("CHEST(in.)")]),t._v(" "),e("th",[t._v("WAIST(in.)")]),t._v(" "),e("th",[t._v("HIPS(in.)")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("XS")]),t._v(" "),e("td",[t._v("34-36")]),t._v(" "),e("td",[t._v("27-29")]),t._v(" "),e("td",[t._v("34.5-36.5")])]),t._v(" "),e("tr",[e("td",[t._v("S")]),t._v(" "),e("td",[t._v("36-38")]),t._v(" "),e("td",[t._v("29-31")]),t._v(" "),e("td",[t._v("36.5-38.5")])]),t._v(" "),e("tr",[e("td",[t._v("M")]),t._v(" "),e("td",[t._v("38-40")]),t._v(" "),e("td",[t._v("31-33")]),t._v(" "),e("td",[t._v("38.5-40.5")])]),t._v(" "),e("tr",[e("td",[t._v("L")]),t._v(" "),e("td",[t._v("40-42")]),t._v(" "),e("td",[t._v("33-36")]),t._v(" "),e("td",[t._v("40.5-43.5")])]),t._v(" "),e("tr",[e("td",[t._v("XL")]),t._v(" "),e("td",[t._v("42-45")]),t._v(" "),e("td",[t._v("36-40")]),t._v(" "),e("td",[t._v("43.5-47.5")])]),t._v(" "),e("tr",[e("td",[t._v("XXL")]),t._v(" "),e("td",[t._v("45-48")]),t._v(" "),e("td",[t._v("40-44")]),t._v(" "),e("td",[t._v("47.5-51.5")])])])])])])])]),t._v(" "),e("div",{staticClass:"tab-pane fade",attrs:{id:"product-reviews-content",role:"tabpanel","aria-labelledby":"product-tab-reviews"}},[t.product.reviews>0?e("div",{key:"noReviews",staticClass:"product-reviews-content"},[1===t.product.reviews?e("h3",{key:"singleReview",staticClass:"reviews-title"},[t._v(t._s(t.product.reviews)+" review for "+t._s(t.product.name))]):e("h3",{staticClass:"reviews-title"},[t._v(t._s(t.product.reviews)+" reviews for "+t._s(t.product.name))]),t._v(" "),e("div",{staticClass:"comment-list"},t._l([0,1,2,3,4,5].slice(0,t.product.reviews),(function(r,c){return e("div",{key:"reviews-"+c,staticClass:"comments",class:{"ml-5":c%2==1}},[e("figure",{staticClass:"img-thumbnail"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/blog/author.jpg",expression:"'./images/blog/author.jpg'"}],attrs:{alt:"author",width:"80",height:"80"}})]),t._v(" "),e("div",{staticClass:"comment-block mt-2"},[e("div",{staticClass:"comment-header"},[e("div",{staticClass:"comment-arrow"}),t._v(" "),e("div",{staticClass:"ratings-container float-sm-right"},[e("div",{staticClass:"product-ratings"},[e("span",{staticClass:"ratings",style:{width:20*t.product.ratings+"%"}}),t._v(" "),e("span",{staticClass:"tooltiptext tooltip-top"},[t._v(t._s(t._f("priceFormat")(t.product.ratings)))])])]),t._v(" "),e("span",{staticClass:"comment-by"},[e("strong",[t._v("Joe Doe")]),t._v(" – April 12, 2018\n\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"comment-content"},[e("p",[t._v("Excellent.")])])])])})),0),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"add-product-review"},[e("h3",{staticClass:"review-title"},[t._v("Add a review")]),t._v(" "),e("form",{staticClass:"comment-form m-0",attrs:{action:"#"}},[e("div",{staticClass:"rating-form"},[e("label",{attrs:{for:"rating"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tYour rating\n\t\t\t\t\t\t\t\t\t\t\t"),e("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),e("span",{staticClass:"rating-stars"},t._l([1,2,3,4,5],(function(r){return e("a",{key:"rating"+r,class:"star-"+r,attrs:{href:"javascript:;"},on:{click:function(e){return t.setRating(e)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(r)+"\n\t\t\t\t\t\t\t\t\t\t\t")])})),0),t._v(" "),e("select",{staticStyle:{display:"none"},attrs:{name:"rating",id:"rating",required:""}},[e("option",{attrs:{value:""}},[t._v("Rate…")]),t._v(" "),e("option",{attrs:{value:"5"}},[t._v("Perfect")]),t._v(" "),e("option",{attrs:{value:"4"}},[t._v("Good")]),t._v(" "),e("option",{attrs:{value:"3"}},[t._v("Average")]),t._v(" "),e("option",{attrs:{value:"2"}},[t._v("Not that bad")]),t._v(" "),e("option",{attrs:{value:"1"}},[t._v("Very poor")])])]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\t\t\tYour review\n\t\t\t\t\t\t\t\t\t\t\t"),e("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),e("textarea",{staticClass:"form-control form-control-sm",attrs:{cols:"5",rows:"6"}})]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 col-xl-12"},[e("div",{staticClass:"form-group"},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tName\n\t\t\t\t\t\t\t\t\t\t\t\t\t"),e("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),e("input",{staticClass:"form-control form-control-sm",attrs:{type:"text",required:""}})])]),t._v(" "),e("div",{staticClass:"col-md-6 col-xl-12"},[e("div",{staticClass:"form-group"},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tEmail\n\t\t\t\t\t\t\t\t\t\t\t\t\t"),e("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),e("input",{staticClass:"form-control form-control-sm",attrs:{type:"text",required:""}})])]),t._v(" "),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"custom-control custom-checkbox"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"save-name"}}),t._v(" "),e("label",{staticClass:"custom-control-label mb-0",attrs:{for:"save-name"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tSave my\n\t\t\t\t\t\t\t\t\t\t\t\t\tname, email, and website in this browser for the next time I\n\t\t\t\t\t\t\t\t\t\t\t\t\tcomment.\n\t\t\t\t\t\t\t\t\t\t\t\t")])])])]),t._v(" "),e("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])])]):e("div",{staticClass:"product-reviews-content"},[e("h3",{staticClass:"reviews-title"},[t._v("Reviews")]),t._v(" "),e("p",[t._v("There are no reviews yet.")]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"add-product-review"},[e("h3",{staticClass:"review-title"},[t._v("Be the first to review “"+t._s(t.product.name)+"”")]),t._v(" "),e("form",{staticClass:"comment-form m-0",attrs:{action:"#"}},[e("div",{staticClass:"rating-form"},[e("label",{attrs:{for:"rating"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tYour rating\n\t\t\t\t\t\t\t\t\t\t\t"),e("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),e("span",{staticClass:"rating-stars"},t._l([1,2,3,4,5],(function(r){return e("a",{key:"rating"+r,class:"star-"+r,attrs:{href:"javascript:;"},on:{click:function(e){return t.setRating(e)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(r)+"\n\t\t\t\t\t\t\t\t\t\t\t")])})),0),t._v(" "),e("select",{staticStyle:{display:"none"},attrs:{name:"rating",id:"rating",required:""}},[e("option",{attrs:{value:""}},[t._v("Rate…")]),t._v(" "),e("option",{attrs:{value:"5"}},[t._v("Perfect")]),t._v(" "),e("option",{attrs:{value:"4"}},[t._v("Good")]),t._v(" "),e("option",{attrs:{value:"3"}},[t._v("Average")]),t._v(" "),e("option",{attrs:{value:"2"}},[t._v("Not that bad")]),t._v(" "),e("option",{attrs:{value:"1"}},[t._v("Very poor")])])]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\t\t\tYour review\n\t\t\t\t\t\t\t\t\t\t\t"),e("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),e("textarea",{staticClass:"form-control form-control-sm",attrs:{cols:"5",rows:"6"}})]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 col-xl-12"},[e("div",{staticClass:"form-group"},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tName\n\t\t\t\t\t\t\t\t\t\t\t\t\t"),e("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),e("input",{staticClass:"form-control form-control-sm",attrs:{type:"text",required:""}})])]),t._v(" "),e("div",{staticClass:"col-md-6 col-xl-12"},[e("div",{staticClass:"form-group"},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tEmail\n\t\t\t\t\t\t\t\t\t\t\t\t\t"),e("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),e("input",{staticClass:"form-control form-control-sm",attrs:{type:"text",required:""}})])]),t._v(" "),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"custom-control custom-checkbox"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"save-name"}}),t._v(" "),e("label",{staticClass:"custom-control-label mb-0",attrs:{for:"save-name"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tSave my\n\t\t\t\t\t\t\t\t\t\t\t\t\tname, email, and website in this browser for the next time I\n\t\t\t\t\t\t\t\t\t\t\t\t\tcomment.\n\t\t\t\t\t\t\t\t\t\t\t\t")])])])]),t._v(" "),e("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])])])])])])])])])}),[],!1,null,null,null).exports,k=r(368),x=r(369),S={directives:{Sticky:c.a},components:{PvMediaSix:h,PvDetailLeft:C.a,PvDetailRight:y.a,PvDescThree:P,PvRelatedProducts:k.a,PvSmallCollection:x.a},data:function(){return{product:null,relatedProducts:null,featuredProducts:null,bestProducts:null,latestProducts:null,topRatedProducts:null,nextProduct:null,prevProduct:null,baseUrl:o.a,loaded:!1,categoryList:[],productCategory:[],isSticky:!1,isProductNav:{type:Boolean,default:!0}}},created:function(){this.getProduct()},mounted:function(){this.resizeHandler(),window.addEventListener("resize",this.resizeHandler,{passive:!0})},destroyed:function(){window.removeEventListener("resize",this.resizeHandler)},methods:{getProduct:function(){var t=this;this.loaded=!1,o.c.get("".concat(o.a,"/products/").concat(this.$route.params.slug),{params:{demo:o.b}}).then((function(e){t.product=e.data.product,t.relatedProducts=e.data.relatedProducts,t.featuredProducts=e.data.featuredProducts,t.bestProducts=e.data.bestSellingProducts,t.latestProducts=e.data.latestProducts,t.topRatedProducts=e.data.topRatedProducts,t.prevProduct=e.data.prevProduct,t.nextProduct=e.data.nextProduct,t.product.product_categories.map((function(e){t.productCategory.push(e)})),t.loaded=!0})).catch((function(t){return{error:JSON.stringify(t)}}))},resizeHandler:function(){this.isSticky=window.innerWidth>991}}},j=Object(f.a)(S,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"main skeleton-body"},[e("nav",{staticClass:"breadcrumb-nav mb-3",attrs:{"aria-label":"breadcrumb"}},[e("div",{staticClass:"container"},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("nuxt-link",{attrs:{to:"/"}},[e("i",{staticClass:"icon-home"})])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item"},[e("nuxt-link",{attrs:{to:"/shop"}},[t._v("Shop")])],1),t._v(" "),t.loaded?e("li",{staticClass:"breadcrumb-item"},t._l(t.productCategory,(function(r,c){return e("nuxt-link",{key:"product-category-".concat(c),attrs:{to:{path:"/shop",query:{category:r.slug}}}},[t._v(t._s(c===t.productCategory.length-1?r.name:r.name+", "))])})),1):t._e(),t._v(" "),t.loaded?e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.product.name))]):t._e()])])]),t._v(" "),e("div",{staticClass:"container"},[t.product?e("div",{staticClass:"product-single-container product-single-default product-center-vertical"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-3 order-1 order-lg-0",attrs:{"sticky-container":""}},[e("div",{directives:[{name:"sticky",rawName:"v-sticky",value:t.isSticky,expression:"isSticky"}],staticClass:"sidebar-wrapper mt-4 mt-lg-0",attrs:{"sticky-offset":"{top: 80}"}},[e("pv-detail-left",{attrs:{product:t.product,"prev-product":t.prevProduct,"next-product":t.nextProduct}})],1)]),t._v(" "),e("div",{staticClass:"col-lg-6 product-single-gallery order-0 order-lg-0"},[e("pv-media-six",{attrs:{product:t.product}})],1),t._v(" "),e("div",{staticClass:"col-lg-3 order-2 order-lg-0",attrs:{"sticky-container":""}},[e("div",{directives:[{name:"sticky",rawName:"v-sticky",value:t.isSticky,expression:"isSticky"}],staticClass:"sidebar-wrapper mt-2 mt-lg-0",attrs:{"sticky-offset":"{top: 80}"}},[e("div",{staticClass:"product-single-details"},[e("pv-detail-right",{attrs:{product:t.product}}),t._v(" "),t._m(0)],1)])])])]):t._e()]),t._v(" "),t.product?e("pv-desc-three",{attrs:{product:t.product}}):e("div",{staticClass:"container mb-4"},[t._m(1)]),t._v(" "),e("div",{staticClass:"container"},[t.product?t._e():e("div",{staticClass:"skel-group mb-4"},[e("div",{staticClass:"tab-content col-lg-12 mb-7"})]),t._v(" "),e("pv-related-products",{staticClass:"mb-1",attrs:{products:t.relatedProducts}})],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-single-share custom-product-single-share"},[e("label",{staticClass:"sr-only"},[t._v("Share:")]),t._v(" "),e("div",{staticClass:"social-icons mt-0"},[e("a",{staticClass:"social-icon social-facebook icon-facebook",attrs:{href:"javascript:;",title:"Facebook"}}),t._v(" "),e("a",{staticClass:"social-icon social-twitter icon-twitter",attrs:{href:"javascript:;",title:"Twitter"}}),t._v(" "),e("a",{staticClass:"social-icon social-linkedin fab fa-linkedin-in",attrs:{href:"javascript:;",title:"Linkedin"}}),t._v(" "),e("a",{staticClass:"social-icon social-gplus fab fa-google-plus-g",attrs:{href:"javascript:;",title:"Google +"}}),t._v(" "),e("a",{staticClass:"social-icon social-mail icon-mail-alt",attrs:{href:"javascript:;",title:"Mail"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"skel-group skel-center"},[e("div",{staticClass:"summary entry-summary col-lg-3 order-1 order-lg-0"}),t._v(" "),e("div",{staticClass:"summary-before col-lg-6 overflow-hidden order-0 order-lg-0"}),t._v(" "),e("div",{staticClass:"summary entry-summary col-lg-3 order-2 order-lg-0"})])}],!1,null,null,null);e.default=j.exports}}]);