(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{372:function(t,e,r){"use strict";r(38),r(22),r(25),r(19),r(34),r(35),r(28);var c=r(7),o=(r(94),r(77),r(39),r(10),r(95),r(23),r(56),r(18)),n=r(146),l=r(368),d=r(13),h=r(148);function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){Object(c.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f={components:{VueSlideToggle:n.a,PvProductNav:l.a,PvCountDown:h.a},props:{product:Object,prevProduct:Object,nextProduct:Object,isProductNav:{type:Boolean,default:!0}},data:function(){return{minPrice:0,maxPrice:0,qty:1,currentIndex:0,baseUrl:d.a,vSizes:[],vColors:[],curSize:{name:null,text:null,image:null},curColor:{name:null,text:null,image:null},tIndex:0,isShare:{type:Boolean,default:!0}}},watch:{$route:function(){this.getFlag()}},computed:m(m({},Object(o.c)("wishlist",["wishList"])),{},{curIndex:function(){var t=this;if(null!==this.curColor.name&&0===this.vSizes.length){var e=this.product.variants.findIndex((function(e){return e.colors[0].color_name===t.curColor.name}));return this.tIndex=e,e}if(null!==this.curSize.name&&0===this.vColors.length){var r=this.product.variants.findIndex((function(e){return e.size[0].size_name===t.curSize.name}));return this.tIndex=r,r}if(null!==this.curColor.name&&null!==this.curSize.name){var c=this.product.variants.findIndex((function(e){return e.colors[0].color_name===t.curColor.name&&e.size[0].size_name===t.curSize.name}));return this.tIndex=c,c}return this.tIndex},isCartActive:function(){return!(this.product.stock<parseInt(this.qty))&&(0===this.product.variants.length||(null!==this.curSize.name&&null!==this.curColor.name||(null!==this.curColor.name&&0===this.vSizes.length||null!==this.curSize.name&&0===this.vColors.length)))},isWishlisted:function(){var t=this;return this.wishList.findIndex((function(e){return e.name===t.product.name}))>-1},isPriceShow:function(){return null!==this.curSize.name&&null!==this.curColor.name||(null!==this.curColor.name&&0===this.vSizes.length||null!==this.curSize.name&&0===this.vColors.length)}}),created:function(){this.getFlag()},mounted:function(){var t=this;this.product.variants&&!this.product.price&&(this.minPrice=this.product.variants[0].price,this.product.variants.forEach((function(e){var r=e.sale_price?e.sale_price:e.price;t.minPrice>r&&(t.minPrice=r),t.maxPrice<r&&(t.maxPrice=r)}))),this.product.variants.length>0&&(this.product.variants[0].size[0]&&this.product.variants.forEach((function(e){-1===t.vSizes.findIndex((function(t){return t.name===e.size[0].size_name}))&&t.vSizes.push({name:e.size[0].size_name,text:e.size[0].size,image:e.size[0].size_thumbnail})})),this.product.variants[0].colors[0]&&this.product.variants.forEach((function(e){-1===t.vColors.findIndex((function(t){return t.name===e.colors[0].color_name}))&&t.vColors.push({name:e.colors[0].color_name,text:e.colors[0].color,image:e.colors[0].color_thumbnail})})))},methods:m(m(m({},Object(o.b)("cart",["addToCart"])),Object(o.b)("wishlist",["addToWishlist"])),{},{plusQty:function(){this.qty<this.product.stock&&this.qty++},minusQty:function(){this.qty>1&&this.qty--},addCart:function(){if(this.isCartActive){var t,e,r;if(this.product.variants.length>0)e=this.product.price?this.product.sale_price?this.product.sale_price:this.product.price:this.product.variants[this.curIndex].sale_price?this.product.variants[this.curIndex].sale_price:this.product.variants[this.curIndex].price,this.curColor.name&&this.curSize.name&&(r=this.curColor.name.charAt(0).toUpperCase()+this.curColor.name.slice(1)+", "+this.curSize.name),this.curColor.name||(r=this.curSize.name),this.curSize.name||(r=this.curColor.name.charAt(0).toUpperCase()+this.curColor.name.slice(1)),t=m(m({},this.product),{},{qty:this.qty,name:this.product.name+" - "+r,price:e});else t=m(m({},this.product),{},{qty:this.qty,price:this.product.sale_price?this.product.sale_price:this.product.price});this.addToCart({product:t})}},addWishlist:function(t){var e=this;t.currentTarget.classList.add("load-more-overlay","loading"),setTimeout((function(){e.addToWishlist({product:e.product}),document.querySelector(".wishlist-popup").classList.add("active"),setTimeout((function(){document.querySelector(".wishlist-popup").classList.remove("active")}),1e3)}),1e3)},isDisabled:function(t,e){return!(!t.name||!e.name)&&(0===this.vSizes.length?-1===this.product.variants.findIndex((function(e){return e.colors[0].color_name===t.name})):0===this.vColors.length?-1===this.product.variants.findIndex((function(t){return t.size[0].size_name===e.name})):-1===this.product.variants.findIndex((function(r){return r.colors[0].color_name===t.name&&r.size[0].size_name===e.name})))},toggleColorItem:function(t){this.isDisabled(t,this.curSize)||(this.curColor===t?this.curColor={name:null,text:null,image:null}:this.curColor=t)},toggleSizeItem:function(t){this.isDisabled(this.curColor,t)||(this.curSize===t?this.curSize={name:null,text:null,image:null}:this.curSize=t)},resetValue:function(){this.curColor={name:null,text:null,image:null},this.curSize={name:null,text:null,image:null}},changeQty:function(t){},getFlag:function(){this.$route.path.includes("sticky-info")&&(this.isShare=!1)}})},_=r(6),component=Object(_.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticClass:"product-title"},[t._v(t._s(t.product.name))]),t._v(" "),t.isProductNav?e("pv-product-nav",{attrs:{"prev-product":t.prevProduct,"next-product":t.nextProduct}}):t._e(),t._v(" "),e("hr",{staticClass:"short-divider"}),t._v(" "),t.product.price?e("div",{key:"singlePrice",staticClass:"price-box"},[t.product.is_sale?[e("span",{staticClass:"new-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.sale_price)))]),t._v(" "),e("span",{staticClass:"old-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.price)))])]:[e("span",{staticClass:"new-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.price)))])]],2):e("div",{staticClass:"price-box"},[t.minPrice!==t.maxPrice?[e("span",{staticClass:"new-price"},[t._v("$"+t._s(t._f("priceFormat")(t.minPrice))+" – $"+t._s(t._f("priceFormat")(t.maxPrice)))])]:[e("span",{staticClass:"new-price"},[t._v("$"+t._s(t._f("priceFormat")(t.minPrice)))])]],2),t._v(" "),t.product.until?e("div",{staticClass:"product-countdown-container-two mt-1"},[e("h5",{staticClass:"daily-deal-title"},[t._v("Offer Ends In:")]),t._v(" "),e("pv-count-down",{staticClass:"product-countdown countdown-compact",attrs:{until:t.product.until,"label-short":!0}})],1):t._e(),t._v(" "),t.product.short_description?e("div",{staticClass:"product-desc"},[e("p",[t._v(t._s(t.product.short_description))])]):t._e(),t._v(" "),e("ul",{staticClass:"single-info-list"},[t.product.sku?e("li",[t._v("\n\t\t\tSKU:\n\t\t\t"),e("strong",[t._v(t._s(t.product.sku))])]):t._e(),t._v(" "),e("li",[t._v("\n\t\t\tCATEGORY:\n\t\t\t"),e("strong",t._l(t.product.product_categories,(function(r,c){return e("nuxt-link",{key:"product-category-"+c,staticClass:"product-category",attrs:{to:{path:"/shop",query:{category:r.slug}}}},[t._v("\n\t\t\t\t\t"+t._s(r.name)+"\n\t\t\t\t\t"),c<t.product.product_categories.length-1?[t._v(",")]:t._e()],2)})),1)]),t._v(" "),t.product.product_tags.length>0?e("li",[t._v("\n\t\t\tTAGS:\n\t\t\t"),e("strong",t._l(t.product.product_tags,(function(r,c){return e("nuxt-link",{key:"product-category-"+c,staticClass:"product-category",attrs:{to:{path:"/shop",query:{tag:r.slug}}}},[t._v("\n\t\t\t\t\t"+t._s(r.name)+"\n\t\t\t\t\t"),c<t.product.product_tags.length-1?[t._v(",")]:t._e()],2)})),1)]):t._e()]),t._v(" "),t.product.variants.length>0?e("div",{staticClass:"product-filters-container"},[t.vColors.length>0?e("div",{staticClass:"product-single-filter"},[e("label",[t._v("Color:")]),t._v(" "),e("ul",{staticClass:"config-size-list config-color-list config-filter-list"},t._l(t.vColors,(function(r,c){return e("li",{key:"variant-color-"+c,class:{disabled:t.isDisabled(r,t.curSize),active:t.curColor===r},on:{click:function(e){return t.toggleColorItem(r)}}},[r.image[0]?e("a",{key:"thumbForm",staticClass:"filter-thumb p-0",class:{disabled:t.isDisabled(r,t.curSize)},attrs:{href:"javascript:;"}},[e("img",{attrs:{src:"".concat(t.baseUrl).concat(r.image[0].url),width:r.image[0].width,height:r.image[0].height,alt:"color thumb"}})]):e("a",{key:"colorForm",staticClass:"filter-color border-0",class:{disabled:t.isDisabled(r,t.curSize)},style:{backgroundColor:r.text},attrs:{href:"javascript:;"}})])})),0)]):t._e(),t._v(" "),t.vSizes.length>0?e("div",{staticClass:"product-single-filter"},[e("label",[t._v("Size:")]),t._v(" "),e("ul",{staticClass:"config-size-list"},t._l(t.vSizes,(function(r,c){return e("li",{key:"variant-size-"+c,class:{disabled:t.isDisabled(t.curColor,r),active:t.curSize===r},on:{click:function(e){return t.toggleSizeItem(r)}}},[r.image[0]?e("a",{key:"thumbSizeForm",staticClass:"filter-thumb p-0",class:{disabled:t.isDisabled(r,t.curSize)},attrs:{href:"javascript:;"}},[e("img",{attrs:{src:"".concat(t.baseUrl).concat(r.image[0].url),width:r.image[0].width,height:r.image[0].height,alt:"size thumb"}})]):e("a",{staticClass:"d-flex align-items-center justify-content-center",class:{disabled:t.isDisabled(t.curColor,r)},attrs:{href:"javascript:;"}},[r.text?[t._v(t._s(r.text))]:e("img",{attrs:{src:"".concat(t.baseUrl).concat(r.thumbnail[0])}})],2)])})),0)]):t._e(),t._v(" "),e("div",{staticClass:"product-single-filter"},[e("vue-slide-toggle",{attrs:{open:null!==t.curColor.name||null!==t.curSize.name}},[e("label"),t._v(" "),e("a",{staticClass:"font1 text-uppercase clear-btn",attrs:{href:"javascript:;"},on:{click:t.resetValue}},[t._v("Clear")])])],1)]):t._e(),t._v(" "),e("div",{staticClass:"product-action"},[t.product.variants.length>0?e("vue-slide-toggle",{attrs:{open:t.isPriceShow}},[t.minPrice===t.maxPrice||t.product.price?e("div",{key:"samePrice",staticClass:"price-box product-filtered-price"},[e("span",{staticClass:"product-stock"},[t._v(t._s(t.product.stock)+" in stock")])]):e("div",{staticClass:"price-box product-filtered-price"},[t.product.variants[t.curIndex].sale_price?[e("del",{staticClass:"old-price"},[e("span",[t._v("$"+t._s(t._f("priceFormat")(t.product.variants[t.curIndex].price)))])]),t._v(" "),e("span",{staticClass:"product-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.variants[t.curIndex].sale_price)))])]:[e("span",{staticClass:"product-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.variants[t.curIndex].price)))])]],2)]):t._e(),t._v(" "),e("div",{staticClass:"product-single-qty"},[e("div",{staticClass:"input-group bootstrap-touchspin bootstrap-touchspin-injected"},[e("span",{staticClass:"input-group-btn input-group-prepend"},[e("button",{staticClass:"btn btn-outline btn-down-icon bootstrap-touchspin-down",attrs:{type:"button"},on:{click:t.minusQty}})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.qty,expression:"qty",modifiers:{number:!0}}],staticClass:"horizontal-quantity form-control bg-transparent",attrs:{type:"text",max:t.product.stock},domProps:{value:t.qty},on:{change:function(e){return t.changeQty(e)},input:function(e){e.target.composing||(t.qty=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),e("span",{staticClass:"input-group-btn input-group-append"},[e("button",{staticClass:"btn btn-outline btn-up-icon bootstrap-touchspin-up",attrs:{type:"button"},on:{click:t.plusQty}})])])]),t._v(" "),e("a",{staticClass:"btn btn-dark add-cart mr-2",class:{disabled:!t.isCartActive},attrs:{href:"javascript:;",title:"Add to Cart"},on:{click:t.addCart}},[t._v("Add to Cart")]),t._v(" "),e("v-row",[e("a",{staticClass:"btn btn-dark mr-2",class:{disabled:!t.isCartActive},attrs:{href:"javascript:;",title:"Buy Now"},on:{click:t.addCart}},[t._v("Buy Now (Whatsapp)")])]),t._v(" "),e("b-row",[e("a",{staticClass:"btn btn-dark mr-2",class:{disabled:!t.isCartActive},attrs:{href:"javascript:;",title:"Buy Now"},on:{click:t.addCart}},[t._v("Buy Now (Messenger)")])]),t._v(" "),e("nuxt-link",{staticClass:"btn btn-gray view-cart d-none",attrs:{to:"/pages/cart"}},[t._v("View cart")])],1)],1)}),[],!1,null,null,null);e.a=component.exports},377:function(t,e,r){"use strict";var c=r(2),o=r(78).find,n=r(117),l="find",d=!0;l in[]&&Array(1)[l]((function(){d=!1})),c({target:"Array",proto:!0,forced:d},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(l)},380:function(t,e,r){"use strict";r(38),r(22);var c=r(147),o=(r(377),r(10),r(145)),n=r(373),l=r.n(n),d=r(13),h=r(144),v=(r(374),{components:{PvCarousel:o.a,LightBox:l.a},props:{product:Object,isMagnify:{type:Boolean,default:!0}},data:function(){return{baseSlider1:h.a,baseSlider2:h.b,baseUrl:d.a}},computed:{lightBoxMedia:function(){return this.product.large_pictures.reduce((function(t,e){return[].concat(Object(c.a)(t),[{src:"".concat(d.a).concat(e.url),thumb:"".concat(d.a).concat(e.url)}])}),[])}},mounted:function(){var t=this;null!==this.product&&this.$nextTick((function(){var e=t;t.$refs.mediaRef.swiper.on("transitionStart",(function(){var t=e.$refs.mediaRef.swiper.activeIndex;e.$refs.thumbRef.swiper.slideTo(t),e.$refs.thumbRef.swiper.$el.find(".swiper-wrapper").find(".swiper-dot.active")[0].classList.remove("active"),e.$refs.thumbRef.swiper.$el.find(".swiper-wrapper").find(".swiper-dot")[t].classList.add("active")}))}))},methods:{activeThumbItem:function(t,e){e.currentTarget.parentNode.querySelector(".swiper-dot.active").classList.remove("active"),e.currentTarget.classList.add("active"),this.$refs.mediaRef.swiper.slideTo(t)},openLightBox:function(){this.$refs.lightBox.showImage(this.$refs.mediaRef.swiper.activeIndex)}}}),m=r(6),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"product-slider-container"},[e("div",{staticClass:"label-group"},[t.product.is_hot?e("div",{staticClass:"product-label label-hot"},[t._v("HOT")]):t._e(),t._v(" "),t.product.is_sale?e("div",{staticClass:"product-label label-sale"},[t._v("Sale")]):t._e()]),t._v(" "),e("PvCarousel",{ref:"mediaRef",staticClass:"product-single-carousel show-nav-hover",attrs:{options:t.baseSlider1}},t._l(t.product.large_pictures,(function(r){return e("div",{key:r.name,staticClass:"swiper-slide"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"".concat(t.baseUrl).concat(r.url),expression:"`${baseUrl}${item.url}`"}],staticClass:"product-single-image",attrs:{width:r.width,height:r.height,alt:"lgPicture"}})])})),0),t._v(" "),t.isMagnify?e("span",{staticClass:"prod-full-screen",on:{click:t.openLightBox}},[e("i",{staticClass:"icon-plus"})]):t._e()],1),t._v(" "),e("PvCarousel",{ref:"thumbRef",staticClass:"prod-thumbnail swiper-dots show-nav-hover",attrs:{options:t.baseSlider2,useFasIcon:!0}},t._l(t.product.pictures,(function(r,c){return e("div",{key:"media-one"+c,staticClass:"swiper-dot swiper-slide",class:{active:0===c},on:{click:function(e){return t.activeThumbItem(c,e)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"".concat(t.baseUrl).concat(r.url),expression:"`${baseUrl}${item.url}`"}],attrs:{width:r.width,height:r.height,alt:"product-thumbnail"}})])})),0),t._v(" "),e("light-box",{ref:"lightBox",attrs:{media:t.lightBoxMedia,"show-light-box":!1}})],1)}),[],!1,null,null,null);e.a=component.exports},457:function(t,e,r){"use strict";r.r(e);r(22),r(38),r(49);var c=r(380),o=r(372),n=r(381),l=r(370),d=r(371),h=r(13),v={components:{PvMediaOne:c.a,PvDetailOne:o.a,PvDescOne:n.a,PvRelatedProducts:l.a,PvSmallCollection:d.a},data:function(){return{product:null,relatedProducts:null,featuredProducts:null,bestProducts:null,latestProducts:null,topRatedProducts:null,nextProduct:null,prevProduct:null,loaded:!1,productCategory:[]}},created:function(){this.getProduct()},methods:{getProduct:function(){var t=this;this.loaded=!1,h.c.get("".concat(h.a,"/products/").concat(this.$route.params.slug),{params:{demo:h.b}}).then((function(e){t.product=e.data.product,t.relatedProducts=e.data.relatedProducts,t.featuredProducts=e.data.featuredProducts,t.bestProducts=e.data.bestSellingProducts,t.latestProducts=e.data.latestProducts,t.topRatedProducts=e.data.topRatedProducts,t.prevProduct=e.data.prevProduct,t.nextProduct=e.data.nextProduct,t.product.product_categories.map((function(e){t.productCategory.push(e)})),t.loaded=!0})).catch((function(t){return{error:JSON.stringify(t)}}))}}},m=r(6),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"main skeleton-body"},[e("nav",{staticClass:"breadcrumb-nav mb-3",attrs:{"aria-label":"breadcrumb"}},[e("div",{staticClass:"container"},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("nuxt-link",{attrs:{to:"/"}},[e("i",{staticClass:"icon-home"})])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item"},[e("nuxt-link",{attrs:{to:"/shop"}},[t._v("Shop")])],1),t._v(" "),t.loaded?e("li",{staticClass:"breadcrumb-item"},t._l(t.productCategory,(function(r,c){return e("nuxt-link",{key:"product-category-".concat(c),attrs:{to:{path:"/shop",query:{category:r.slug}}}},[t._v(t._s(c===t.productCategory.length-1?r.name:r.name+", "))])})),1):t._e(),t._v(" "),t.loaded?e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.product.name))]):t._e()])])]),t._v(" "),e("div",{staticClass:"container pt-2"},[e("div",{staticClass:"product-single-container product-single-default"},[t.product?e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-5 col-md-6 product-single-gallery"},[e("pv-media-one",{attrs:{product:t.product}})],1),t._v(" "),e("div",{staticClass:"col-lg-7 col-md-6 product-single-details"},[e("pv-detail-one",{attrs:{product:t.product,"prev-product":t.prevProduct,"next-product":t.nextProduct}})],1)]):t._e()]),t._v(" "),t.product?t._e():e("div",{staticClass:"skel-group"},[e("div",{staticClass:"summary-before col-lg-5 col-md-6"}),t._v(" "),e("div",{staticClass:"summary entry-summary col-lg-7 col-md-6"}),t._v(" "),e("div",{staticClass:"tab-content col-lg-12 mb-7"})]),t._v(" "),t.product?e("pv-desc-one",{attrs:{product:t.product}}):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports}}]);