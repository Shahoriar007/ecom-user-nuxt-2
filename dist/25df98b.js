(window.webpackJsonp=window.webpackJsonp||[]).push([[23,5],{358:function(t,r,e){"use strict";e.d(r,"a",(function(){return l}));var o=e(114);var c=e(147),n=e(94);function l(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||Object(c.a)(t)||Object(n.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},361:function(t,r,e){var content=e(374);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("e928b9ea",content,!0,{sourceMap:!1})},362:function(t,r,e){var content=e(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("1c5f6d94",content,!0,{sourceMap:!1})},370:function(t,r,e){"use strict";e(18),e(27),e(24),e(36),e(37),e(32);var o=e(9),c=(e(93),e(63),e(12),e(77),e(23),e(54),e(19)),n=e(145),l=e(366),d=e(13),h=e(146);function v(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,o)}return e}function m(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?v(Object(e),!0).forEach((function(r){Object(o.a)(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):v(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var f={computed:m({},Object(c.c)("cart",["totalCount"])),methods:{addCart:function(){if(this.product.stock>0){var t=m({},this.product);this.product.is_sale&&(t.price=this.product.sale_price),this.addToCart({product:t})}},buyNow:function(){if(this.product.stock>0){var t=m({},this.product);this.product.is_sale&&(t.price=this.product.sale_price),this.addToCart({product:t})}this.$router.push("/pages/checkout")}}},_=(e(373),e(6)),w=Object(_.a)(f,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"sticky-navbar fixed"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("a",{staticClass:"btn btn-primary width-50",attrs:{href:"javascript:;"},on:{click:t.addCart}},[t._v("\n                Add to Cart\n            ")]),t._v(" "),r("a",{staticClass:"btn btn-warning width-50",attrs:{href:"javascript:;"},on:{click:t.buyNow}},[t._v("\n                Buy Now\n            ")])])])])}),[],!1,null,"7b1a9d58",null).exports;function y(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,o)}return e}function C(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?y(Object(e),!0).forEach((function(r){Object(o.a)(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):y(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var P={components:{VueSlideToggle:n.a,PvProductNav:l.a,PvCountDown:h.a,PvStickyButton:w},props:{product:Object,isProductNav:{type:Boolean,default:!0}},data:function(){return{minPrice:0,maxPrice:0,qty:1,currentIndex:0,baseUrl:"".concat(d.a),vSizes:[],vColors:[],curSize:{name:null,text:null,image:null},curColor:{name:null,text:null,image:null},tIndex:0,isShare:{type:Boolean,default:!0}}},watch:{$route:function(){this.getFlag()}},computed:C(C({},Object(c.c)("wishlist",["wishList"])),{},{isCartActive:function(){return!(this.product.stock<parseInt(this.qty))&&0===this.product.length},isPriceShow:function(){return null!==this.curSize.name&&null!==this.curColor.name||(null!==this.curColor.name&&0===this.vSizes.length||null!==this.curSize.name&&0===this.vColors.length)}}),created:function(){this.getFlag()},mounted:function(){var t=this;this.product.variants&&!this.product.price&&(this.minPrice=this.product.variants[0].price,this.product.variants.forEach((function(r){var e=r.sale_price?r.sale_price:r.price;t.minPrice>e&&(t.minPrice=e),t.maxPrice<e&&(t.maxPrice=e)}))),this.viewItemGTM()},methods:C(C(C({},Object(c.b)("cart",["addToCart"])),Object(c.b)("wishlist",["addToWishlist"])),{},{plusQty:function(){this.qty<this.product.stock&&this.qty++},minusQty:function(){this.qty>1&&this.qty--},addCart:function(){if(this.product.stock>0){var t=C({},this.product);this.product.is_sale&&(t.price=this.product.sale_price),this.addToCart({product:t})}},buyNow:function(){if(this.product.stock>0){var t=C({},this.product);this.product.is_sale&&(t.price=this.product.sale_price),this.addToCart({product:t})}this.$router.push("/pages/checkout")},addWishlist:function(t){var r=this;t.currentTarget.classList.add("load-more-overlay","loading"),setTimeout((function(){r.addToWishlist({product:r.product}),document.querySelector(".wishlist-popup").classList.add("active"),setTimeout((function(){document.querySelector(".wishlist-popup").classList.remove("active")}),1e3)}),1e3)},isDisabled:function(t,r){return!(!t.name||!r.name)&&(0===this.vSizes.length?-1===this.product.variants.findIndex((function(r){return r.colors[0].color_name===t.name})):0===this.vColors.length?-1===this.product.variants.findIndex((function(t){return t.size[0].size_name===r.name})):-1===this.product.variants.findIndex((function(e){return e.colors[0].color_name===t.name&&e.size[0].size_name===r.name})))},viewItemGTM:function(){window.dataLayer.push({event:"page_view",ecommerce:{currency:"BDT",value:450,items:[{item_name:"Electric Nail Trimmer for Baby Newborn",item_id:60,price:450,item_brand:"",item_category:"",item_variant:"",item_list_name:"",item_list_id:"",discount:""}]}})},toggleColorItem:function(t){this.isDisabled(t,this.curSize)||(this.curColor===t?this.curColor={name:null,text:null,image:null}:this.curColor=t)},toggleSizeItem:function(t){this.isDisabled(this.curColor,t)||(this.curSize===t?this.curSize={name:null,text:null,image:null}:this.curSize=t)},resetValue:function(){this.curColor={name:null,text:null,image:null},this.curSize={name:null,text:null,image:null}},changeQty:function(t){},getFlag:function(){this.$route.path.includes("sticky-info")&&(this.isShare=!1)}})},x=(e(375),Object(_.a)(P,(function(){var t=this,r=t._self._c;return r("div",[r("h1",{staticClass:"product-title"},[t._v(t._s(t.product.name))]),t._v(" "),r("hr",{staticClass:"short-divider"}),t._v(" "),t.product.price?r("div",{key:"singlePrice",staticClass:"price-box"},[t.product.is_sale?[r("span",{staticClass:"new-price"},[t._v("BDT "+t._s(t._f("priceFormat")(t.product.sale_price)))]),t._v(" "),r("span",{staticClass:"old-price"},[t._v("BDT "+t._s(t._f("priceFormat")(t.product.price)))])]:[r("span",{staticClass:"new-price"},[t._v("BDT "+t._s(t._f("priceFormat")(t.product.price)))])]],2):r("div",{staticClass:"price-box"},[t.minPrice!==t.maxPrice?[r("span",{staticClass:"new-price"},[t._v("BDT "+t._s(t._f("priceFormat")(t.minPrice))+" – BDT "+t._s(t._f("priceFormat")(t.maxPrice)))])]:[r("span",{staticClass:"new-price"},[t._v("BDT "+t._s(t._f("priceFormat")(t.minPrice)))])]],2),t._v(" "),t.product.video_link?r("a",{staticClass:"btn btn-video add-cart mr-2 mt-2",attrs:{href:t.product.video_link,title:"Watch Video",target:"_blank"}},[r("svg",{staticClass:"bi bi-play-btn mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"}}),t._v(" "),r("path",{attrs:{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"}})]),t._v("\n\t\t\t\t\tVideo\n\t\t\t")]):t._e(),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("ul",{staticClass:"single-info-list"},[t.product.sku?r("li",[t._v("\n\t\t\t\tSKU:\n\t\t\t\t"),r("strong",[t._v(t._s(t.product.sku))])]):t._e(),t._v(" "),r("li",[t._v("\n\t\t\t\tCATEGORY:\n\t\t\t\t"),r("nuxt-link",{attrs:{to:"/shop?category=".concat(t.product.category.id)}},[r("strong",[t._v("\n\t\t\t\t\t\t"+t._s(t.product.category.name)+" \n\t\t\t\t\t")])]),t._v(" "),t.product.sub_category_id?[t._v("\n\t\t\t\t\t>>\n\t\t\t\t\t"),r("nuxt-link",{attrs:{to:"/shop?subCategory=".concat(t.product.sub_category.id)}},[r("strong",[t._v("\n\t\t\t\t\t\t\t"+t._s(t.product.sub_category.name)+" \n\t\t\t\t\t\t")])])]:t._e(),t._v(" "),t.product.child_category_id?[t._v("\n\t\t\t\t\t>>\n\t\t\t\t\t"),r("nuxt-link",{attrs:{to:"/shop?childCategory=".concat(t.product.child_category.id)}},[r("strong",[t._v("\n\t\t\t\t\t\t\t"+t._s(t.product.child_category.name)+" \n\t\t\t\t\t\t")])])]:t._e()],2)]),t._v(" "),r("div",{staticClass:"product-action"},[r("a",{staticClass:"btn btn-dark add-cart mr-2 mt-2",attrs:{href:"javascript:;",title:"Add to Cart"},on:{click:t.addCart}},[r("svg",{staticClass:"bi bi-bag mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"}})]),t._v("  কার্টে যোগ করুন")]),t._v(" "),r("v-row",[r("a",{staticClass:"btn btn-buy-now add-cart mr-2 mt-2",attrs:{href:"javascript:;",title:"Buy Now"},on:{click:t.buyNow}},[r("svg",{staticClass:"bi bi-cart2 mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"}})]),t._v("অর্ডার করুন")]),t._v(" "),r("a",{staticClass:"btn btn-whatsapp add-cart mr-2 mt-2",attrs:{href:"https://wa.me/+8801994635351",title:"Buy Now",target:"_blank"}},[r("svg",{staticClass:"bi bi-whatsapp mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"}})]),t._v("\nWhatsapp")])]),t._v(" "),r("b-row",[r("a",{staticClass:"btn btn-messenger add-cart mr-2 mt-2",attrs:{href:"https://m.me/100064835408819",title:"Buy Now",target:"_blank"}},[r("svg",{staticClass:"text-white mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"16",height:"16",viewBox:"0 0 50 50"}},[r("path",{attrs:{d:"M 25 2 C 12.347656 2 2 11.597656 2 23.5 C 2 30.007813 5.132813 35.785156 10 39.71875 L 10 48.65625 L 11.46875 47.875 L 18.6875 44.125 C 20.703125 44.664063 22.800781 45 25 45 C 37.652344 45 48 35.402344 48 23.5 C 48 11.597656 37.652344 2 25 2 Z M 25 4 C 36.644531 4 46 12.757813 46 23.5 C 46 34.242188 36.644531 43 25 43 C 22.835938 43 20.742188 42.6875 18.78125 42.125 L 18.40625 42.03125 L 18.0625 42.21875 L 12 45.375 L 12 38.8125 L 11.625 38.53125 C 6.960938 34.941406 4 29.539063 4 23.5 C 4 12.757813 13.355469 4 25 4 Z M 22.71875 17.71875 L 10.6875 30.46875 L 21.5 24.40625 L 27.28125 30.59375 L 39.15625 17.71875 L 28.625 23.625 Z"}})]),t._v("\nMessenger")])]),t._v(" "),r("nuxt-link",{staticClass:"btn btn-gray view-cart d-none",attrs:{to:"/pages/cart"}},[t._v("View cart")])],1),t._v(" "),[r("div",{staticClass:"sticky-navbar fixed"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("a",{staticClass:"btn btn-primary width-50",attrs:{href:"javascript:;"},on:{click:t.addCart}},[t._v("\n\t\t\t\t\t\t\t\tকার্টে যোগ করুন\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("a",{staticClass:"btn btn-warning width-50",attrs:{href:"javascript:;"},on:{click:t.buyNow}},[t._v("\n\t\t\t\t\t\t\t\tঅর্ডার করুন\n\t\t\t\t\t\t\t")])])])])]],2)}),[],!1,null,null,null));r.a=x.exports},373:function(t,r,e){"use strict";e(361)},374:function(t,r,e){var o=e(38)((function(i){return i[1]}));o.push([t.i,".button-container[data-v-7b1a9d58]{display:flex;justify-content:space-between}.width-50[data-v-7b1a9d58]{width:50%}.sticky-button[data-v-7b1a9d58]{background-color:#fff;border-top:1px solid #e7e7e7;display:flex;left:0;opacity:1;position:fixed;right:0;top:100%;transition:all .25s;visibility:visible;width:100%;z-index:997}",""]),o.locals={},t.exports=o},375:function(t,r,e){"use strict";e(362)},376:function(t,r,e){var o=e(38)((function(i){return i[1]}));o.push([t.i,'.buy-now:before{content:"\\F83F";font-family:"Porto";font-size:1.8rem;font-weight:600;margin-right:7px;margin-top:-2px}.btn-video{background-color:red;color:#fff!important}.btn-video:hover{background-color:red;color:#000!important}.btn-buy-now{background-color:#ffc107;color:#000}.btn-messenger{background-image:linear-gradient(180deg,#ff6070 10%,#9f33ff,#168aff);color:#000}.btn-whatsapp{background-color:#25d366;color:#fff}.button-container{display:flex;justify-content:space-between}.width-50{width:50%}.product-title{width:100%!important}.btn-primary{background-color:#222529!important;border-color:#222529!important}',""]),o.locals={},t.exports=o},448:function(t,r,e){"use strict";e.r(r);e(18),e(62),e(55),e(360);var o=e(13),c=e(358),n=(e(12),e(371)),l=e.n(n),d=e(143),h=(e(372),{components:{LightBox:l.a},props:{product:Object,isMagnify:{type:Boolean,default:!0}},data:function(){return{baseSlider1:d.a,baseSlider2:d.b,baseUrl:o.a}},computed:{lightBoxMedia:function(){return this.product.large_pictures.reduce((function(t,r){return[].concat(Object(c.a)(t),[{src:"".concat(o.a).concat(r.url),thumb:"".concat(o.a).concat(r.url)}])}),[])}},methods:{openLightBox:function(t){this.$refs.lightBox.showImage(t)}}}),v=e(6),m=Object(v.a)(h,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"row"},[r("div",{staticClass:"label-group"},[t.product.is_hot?r("div",{staticClass:"product-label label-hot"},[t._v("HOT")]):t._e(),t._v(" "),t.product.is_sale?r("div",{staticClass:"product-label label-sale"},[t._v("Sale")]):t._e(),t._v(" "),t.product.is_new?r("div",{staticClass:"product-label label-sale"},[t._v("New")]):t._e()]),t._v(" "),t._l(t.product.large_pictures,(function(e,o){return r("div",{key:e.name,staticClass:"product-item col-sm-6"},[r("div",{staticClass:"inner"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"".concat(t.baseUrl).concat(e.url),expression:"`${baseUrl}${item.url}`"}],staticClass:"product-single-image",attrs:{width:e.width,height:e.height,alt:"lgPicture"}})]),t._v(" "),t.isMagnify?r("span",{staticClass:"prod-full-screen",on:{click:function(r){return t.openLightBox(o)}}},[r("i",{staticClass:"icon-plus"})]):t._e()])})),t._v(" "),r("light-box",{ref:"lightBox",attrs:{media:t.lightBoxMedia,"show-light-box":!1}})],2)}),[],!1,null,null,null).exports,f=e(370),_=e(385),w=e(368),y=e(369),C={components:{PvMediaSeven:m,PvDetailOne:f.a,PvDescOne:_.a,PvRelatedProducts:w.a,PvSmallCollection:y.a},data:function(){return{product:null,relatedProducts:null,featuredProducts:null,bestProducts:null,latestProducts:null,topRatedProducts:null,nextProduct:null,prevProduct:null,baseUrl:o.a,loaded:!1,categoryList:[],productCategory:[]}},created:function(){this.getProduct()},methods:{getProduct:function(){var t=this;this.loaded=!1,o.c.get("".concat(o.a,"/products/").concat(this.$route.params.slug),{params:{demo:o.b}}).then((function(r){t.product=r.data.product,console.log(t.product),t.relatedProducts=r.data.relatedProducts,t.featuredProducts=r.data.featuredProducts,t.bestProducts=r.data.bestSellingProducts,t.latestProducts=r.data.latestProducts,t.topRatedProducts=r.data.topRatedProducts,t.prevProduct=r.data.prevProduct,t.nextProduct=r.data.nextProduct,t.product.product_categories.map((function(r){t.productCategory.push(r)})),t.loaded=!0})).catch((function(t){return{error:JSON.stringify(t)}}))}}},P=Object(v.a)(C,(function(){var t=this,r=t._self._c;return r("main",{staticClass:"main"},[r("nav",{staticClass:"breadcrumb-nav mb-3",attrs:{"aria-label":"breadcrumb"}},[r("div",{staticClass:"container"},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"}},[r("i",{staticClass:"icon-home"})])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/shop"}},[t._v("Shop")])],1),t._v(" "),t.loaded?r("li",{staticClass:"breadcrumb-item"},t._l(t.productCategory,(function(e,o){return r("nuxt-link",{key:"product-category-".concat(o),attrs:{to:{path:"/shop",query:{category:e.slug}}}},[t._v(t._s(o===t.productCategory.length-1?e.name:e.name+", "))])})),1):t._e(),t._v(" "),t.loaded?r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.product.name))]):t._e()])])]),t._v(" "),r("div",{staticClass:"container skeleton-body product-layout-grid"},[t.product?r("div",{staticClass:"product-single-container product-single-grid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-8 product-single-gallery"},[r("pv-media-seven",{attrs:{product:t.product}})],1),t._v(" "),r("div",{staticClass:"col-lg-4 product-single-details"},[r("pv-detail-one",{attrs:{product:t.product,"prev-product":t.prevProduct,"next-product":t.nextProduct}})],1)])]):r("div",{staticClass:"skel-group"},[r("div",{staticClass:"summary-before col-lg-8"}),t._v(" "),r("div",{staticClass:"summary entry-summary col-lg-4"}),t._v(" "),r("div",{staticClass:"tab-content col-lg-12 mb-7"})]),t._v(" "),t.product?r("pv-desc-one",{attrs:{product:t.product}}):t._e(),t._v(" "),r("pv-related-products",{staticClass:"mb-1",attrs:{products:t.relatedProducts}}),t._v(" "),r("hr",{staticClass:"mt-0 m-b-5"}),t._v(" "),r("div",{staticClass:"skeleton-body"},[r("pv-small-collection",{attrs:{"featured-products":t.featuredProducts,"best-products":t.bestProducts,"latest-products":t.latestProducts,"top-rated-products":t.topRatedProducts}})],1)],1)])}),[],!1,null,null,null);r.default=P.exports}}]);