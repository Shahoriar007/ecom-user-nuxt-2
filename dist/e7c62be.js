(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{357:function(t,e,r){"use strict";r(40),r(19),r(77);var c=r(13),n={props:{prevProduct:Object,nextProduct:Object},data:function(){return{baseUrl:c.a,type:"default"}},mounted:function(){var t=this.$route.path.split("/");this.type=t[t.length-2];["simple","variable","sale","featured"].includes(this.type)&&(this.type="default")}},o=r(6),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-nav"},[e("div",{staticClass:"product-prev",class:{disabled:!t.prevProduct}},[t.prevProduct?e("nuxt-link",{key:"toPrevProduct",attrs:{to:"/product/".concat(t.type,"/").concat(t.prevProduct.slug)}},[e("span",{staticClass:"product-link"}),t._v(" "),e("span",{staticClass:"product-popup"},[e("span",{staticClass:"box-content"},[e("img",{staticStyle:{"padding-top":"0px"},attrs:{alt:"product",width:t.prevProduct.width,height:t.prevProduct.height,src:"".concat(t.baseUrl).concat(t.prevProduct.pictures[0].url)}}),t._v(" "),e("span",[t._v(t._s(t.prevProduct.name))])])])]):e("a",{attrs:{href:"javascript:;"}},[e("span",{staticClass:"product-link"})])],1),t._v(" "),e("div",{staticClass:"product-next",class:{disabled:!t.nextProduct}},[t.nextProduct?e("nuxt-link",{key:"toNexProduct",attrs:{to:"/product/".concat(t.type,"/").concat(t.nextProduct.slug)}},[e("span",{staticClass:"product-link"}),t._v(" "),e("span",{staticClass:"product-popup"},[e("span",{staticClass:"box-content"},[e("img",{staticStyle:{"padding-top":"0px"},attrs:{alt:"product",width:t.nextProduct.width,height:t.nextProduct.height,src:"".concat(t.baseUrl).concat(t.nextProduct.pictures[0].url)}}),t._v(" "),e("span",[t._v(t._s(t.nextProduct.name))])])])]):e("a",{attrs:{href:"javascript:;"}},[e("span",{staticClass:"product-link"})])],1)])}),[],!1,null,null,null);e.a=component.exports},362:function(t,e,r){"use strict";r(19),r(25),r(22),r(34),r(35),r(28);var c=r(7),n=(r(95),r(77),r(12),r(94),r(23),r(55),r(18)),o=r(146),l=r(357),d=r(13),h=r(147);function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){Object(c.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f={components:{VueSlideToggle:o.a,PvProductNav:l.a,PvCountDown:h.a},props:{product:Object,isProductNav:{type:Boolean,default:!0}},data:function(){return{minPrice:0,maxPrice:0,qty:1,currentIndex:0,baseUrl:"".concat(d.a),vSizes:[],vColors:[],curSize:{name:null,text:null,image:null},curColor:{name:null,text:null,image:null},tIndex:0,isShare:{type:Boolean,default:!0}}},watch:{$route:function(){this.getFlag()}},computed:m(m({},Object(n.c)("wishlist",["wishList"])),{},{isCartActive:function(){return!(this.product.stock<parseInt(this.qty))&&0===this.product.length},isPriceShow:function(){return null!==this.curSize.name&&null!==this.curColor.name||(null!==this.curColor.name&&0===this.vSizes.length||null!==this.curSize.name&&0===this.vColors.length)}}),created:function(){this.getFlag()},mounted:function(){var t=this;console.log(this.product),this.product.variants&&!this.product.price&&(this.minPrice=this.product.variants[0].price,this.product.variants.forEach((function(e){var r=e.sale_price?e.sale_price:e.price;t.minPrice>r&&(t.minPrice=r),t.maxPrice<r&&(t.maxPrice=r)})))},methods:m(m(m({},Object(n.b)("cart",["addToCart"])),Object(n.b)("wishlist",["addToWishlist"])),{},{plusQty:function(){this.qty<this.product.stock&&this.qty++},minusQty:function(){this.qty>1&&this.qty--},addCart:function(){if(this.product.stock>0){var t=m({},this.product);this.product.is_sale&&(t.price=this.product.sale_price),this.addToCart({product:t})}},buyNow:function(){if(this.product.stock>0){var t=m({},this.product);this.product.is_sale&&(t.price=this.product.sale_price),this.addToCart({product:t})}this.$router.push("/pages/cart")},addWishlist:function(t){var e=this;t.currentTarget.classList.add("load-more-overlay","loading"),setTimeout((function(){e.addToWishlist({product:e.product}),document.querySelector(".wishlist-popup").classList.add("active"),setTimeout((function(){document.querySelector(".wishlist-popup").classList.remove("active")}),1e3)}),1e3)},isDisabled:function(t,e){return!(!t.name||!e.name)&&(0===this.vSizes.length?-1===this.product.variants.findIndex((function(e){return e.colors[0].color_name===t.name})):0===this.vColors.length?-1===this.product.variants.findIndex((function(t){return t.size[0].size_name===e.name})):-1===this.product.variants.findIndex((function(r){return r.colors[0].color_name===t.name&&r.size[0].size_name===e.name})))},toggleColorItem:function(t){this.isDisabled(t,this.curSize)||(this.curColor===t?this.curColor={name:null,text:null,image:null}:this.curColor=t)},toggleSizeItem:function(t){this.isDisabled(this.curColor,t)||(this.curSize===t?this.curSize={name:null,text:null,image:null}:this.curSize=t)},resetValue:function(){this.curColor={name:null,text:null,image:null},this.curSize={name:null,text:null,image:null}},changeQty:function(t){},getFlag:function(){this.$route.path.includes("sticky-info")&&(this.isShare=!1)}})},_=r(6),component=Object(_.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticClass:"product-title"},[t._v(t._s(t.product.name))]),t._v(" "),e("hr",{staticClass:"short-divider"}),t._v(" "),t.product.price?e("div",{key:"singlePrice",staticClass:"price-box"},[t.product.is_sale?[e("span",{staticClass:"new-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.sale_price)))]),t._v(" "),e("span",{staticClass:"old-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.price)))])]:[e("span",{staticClass:"new-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.price)))])]],2):e("div",{staticClass:"price-box"},[t.minPrice!==t.maxPrice?[e("span",{staticClass:"new-price"},[t._v("$"+t._s(t._f("priceFormat")(t.minPrice))+" – $"+t._s(t._f("priceFormat")(t.maxPrice)))])]:[e("span",{staticClass:"new-price"},[t._v("$"+t._s(t._f("priceFormat")(t.minPrice)))])]],2),t._v(" "),e("a",{staticClass:"btn btn-danger add-cart mr-2",attrs:{href:t.product.video_link,title:"Buy Now",target:"_blank"}},[t._v("Video")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),t.product.short_description?e("div",{staticClass:"product-desc"},[e("p",{domProps:{innerHTML:t._s(t.product.short_description)}})]):t._e(),t._v(" "),e("ul",{staticClass:"single-info-list"},[t.product.stock?e("li",[t._v("\n\t\t\tAVAILABLE IN STOCK:\n\t\t\t"),e("strong",[t._v(t._s(t.product.stock))])]):t._e(),t._v(" "),t.product.sku?e("li",[t._v("\n\t\t\tSKU:\n\t\t\t"),e("strong",[t._v(t._s(t.product.sku))])]):t._e(),t._v(" "),e("li",[t._v("\n\t\t\tCATEGORY:\n\t\t\t"),e("strong",t._l(t.product.product_categories,(function(r,c){return e("nuxt-link",{key:"product-category-"+c,staticClass:"product-category",attrs:{to:{path:"/shop",query:{category:r.slug}}}},[t._v("\n\t\t\t\t\t"+t._s(r.name)+"\n\t\t\t\t\t"),c<t.product.product_categories.length-1?[t._v(",")]:t._e()],2)})),1)])]),t._v(" "),e("div",{staticClass:"product-action"},[e("a",{staticClass:"btn btn-dark add-cart mr-2",attrs:{href:"javascript:;",title:"Add to Cart"},on:{click:t.addCart}},[t._v("Add to Cart")]),t._v(" "),e("v-row",[e("a",{staticClass:"btn btn-dark add-cart mr-2",attrs:{href:"javascript:;",title:"Buy Now"},on:{click:t.buyNow}},[t._v("Buy Now")]),t._v(" "),e("a",{staticClass:"btn btn-dark add-cart mr-2",attrs:{href:"https://wa.me/1234567890",title:"Buy Now",target:"_blank"}},[t._v("Whatsapp")])]),t._v(" "),e("b-row",[e("a",{staticClass:"btn btn-dark add-cart mr-2",attrs:{href:"https://m.me/yourusername",title:"Buy Now",target:"_blank"}},[t._v("Messenger")])]),t._v(" "),e("nuxt-link",{staticClass:"btn btn-gray view-cart d-none",attrs:{to:"/pages/cart"}},[t._v("View cart")])],1)])}),[],!1,null,null,null);e.a=component.exports},367:function(t,e,r){"use strict";var c=r(2),n=r(78).find,o=r(117),l="find",d=!0;l in[]&&Array(1)[l]((function(){d=!1})),c({target:"Array",proto:!0,forced:d},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),o(l)},369:function(t,e,r){"use strict";r(19);var c=r(148),n=(r(40),r(367),r(12),r(145)),o=r(364),l=r.n(o),d=r(13),h=r(144),v=(r(365),{components:{PvCarousel:n.a,LightBox:l.a},props:{product:Object,isMagnify:{type:Boolean,default:!0}},data:function(){return{baseSlider1:h.a,baseSlider2:h.b,baseUrl:d.a}},computed:{lightBoxMedia:function(){return this.product.large_pictures.reduce((function(t,e){return[].concat(Object(c.a)(t),[{src:"".concat(d.a).concat(e.url),thumb:"".concat(d.a).concat(e.url)}])}),[])}},mounted:function(){var t=this;console.log(this.product),null!==this.product&&this.$nextTick((function(){var e=t;t.$refs.mediaRef.swiper.on("transitionStart",(function(){var t=e.$refs.mediaRef.swiper.activeIndex;e.$refs.thumbRef.swiper.slideTo(t),e.$refs.thumbRef.swiper.$el.find(".swiper-wrapper").find(".swiper-dot.active")[0].classList.remove("active"),e.$refs.thumbRef.swiper.$el.find(".swiper-wrapper").find(".swiper-dot")[t].classList.add("active")}))}))},methods:{activeThumbItem:function(t,e){e.currentTarget.parentNode.querySelector(".swiper-dot.active").classList.remove("active"),e.currentTarget.classList.add("active"),this.$refs.mediaRef.swiper.slideTo(t)},openLightBox:function(){this.$refs.lightBox.showImage(this.$refs.mediaRef.swiper.activeIndex)}}}),m=r(6),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"product-slider-container"},[e("div",{staticClass:"label-group"},[t.product.is_hot?e("div",{staticClass:"product-label label-hot"},[t._v("HOT")]):t._e(),t._v(" "),t.product.is_sale?e("div",{staticClass:"product-label label-sale"},[t._v("Sale")]):t._e()]),t._v(" "),e("PvCarousel",{ref:"mediaRef",staticClass:"product-single-carousel show-nav-hover",attrs:{options:t.baseSlider1}},t._l(t.product.large_pictures,(function(t){return e("div",{key:t.name,staticClass:"swiper-slide"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.original_url,expression:"item.original_url"}],staticClass:"product-single-image",attrs:{width:t.width,height:t.height,alt:"lgPicture"}})])})),0),t._v(" "),t.isMagnify?e("span",{staticClass:"prod-full-screen",on:{click:t.openLightBox}},[e("i",{staticClass:"icon-plus"})]):t._e()],1),t._v(" "),e("PvCarousel",{ref:"thumbRef",staticClass:"prod-thumbnail swiper-dots show-nav-hover",attrs:{options:t.baseSlider2,useFasIcon:!0}},t._l(t.product.large_pictures,(function(r,c){return e("div",{key:"media-one"+c,staticClass:"swiper-dot swiper-slide",class:{active:0===c},on:{click:function(e){return t.activeThumbItem(c,e)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:r.original_url,expression:"item.original_url"}],attrs:{width:r.width,height:r.height,alt:"product-thumbnail"}})])})),0),t._v(" "),e("light-box",{ref:"lightBox",attrs:{media:t.lightBoxMedia,"show-light-box":!1}})],1)}),[],!1,null,null,null);e.a=component.exports},449:function(t,e,r){"use strict";r.r(e);r(40);var c=r(369),n=r(362),o=r(13),l={components:{PvMediaOne:c.a,PvDetailOne:n.a},props:{slug:String},data:function(){return{product:null,currentDemo:o.b}},mounted:function(){this.getProduct()},methods:{getProduct:function(){var t=this;o.c.get("".concat(o.a,"/api/products/").concat(this.slug),{params:{demo:o.b,quick_view:!0}}).then((function(e){t.product=e.data.data})).catch((function(t){return{error:JSON.stringify(t)}}))}}},d=r(6),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-single-container product-single-default product-quick-view mb-0 custom-scrollbar skeleton-body"},[t.product?t._e():e("div",{staticClass:"quickview-wrap product"},[t._m(0)]),t._v(" "),t.product?e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 product-single-gallery mb-md-0"},[e("pv-media-one",{attrs:{product:t.product,"is-magnify":!1}})],1),t._v(" "),e("div",{staticClass:"col-md-6 product-single-details mb-0"},[e("pv-detail-one",{attrs:{product:t.product,"is-product-nav":!1}})],1),t._v(" "),e("button",{staticClass:"mfp-close",attrs:{title:"Close (Esc)",type:"button"},on:{click:function(e){return t.$emit("close")}}},[t._v("×")])]):t._e()])}),[function(){var t=this._self._c;return t("div",{staticClass:"skel-group"},[t("div",{staticClass:"col-lg-6 summary-before"}),this._v(" "),t("div",{staticClass:"col-lg-6 summary entry-summary"})])}],!1,null,null,null);e.default=component.exports}}]);