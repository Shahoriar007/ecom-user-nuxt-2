(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{381:function(t,e,r){"use strict";r(40),r(41),r(19);var c=r(148),o=(r(12),r(364)),l=r.n(o),n=r(13),d=r(144),v=(r(365),{components:{LightBox:l.a},props:{product:Object,isMagnify:{type:Boolean,default:!0}},data:function(){return{baseSlider1:d.a,baseSlider2:d.b,baseUrl:n.a}},computed:{lightBoxMedia:function(){return this.product.large_pictures.reduce((function(t,e){return[].concat(Object(c.a)(t),[{src:"".concat(n.a).concat(e.url),thumb:"".concat(n.a).concat(e.url)}])}),[])}},methods:{openLightBox:function(t){this.$refs.lightBox.showImage(t)}}}),m=r(6),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"position-relative"},[e("div",{staticClass:"label-group"},[t.product.is_hot?e("div",{staticClass:"product-label label-hot"},[t._v("HOT")]):t._e(),t._v(" "),t.product.is_sale?e("div",{staticClass:"product-label label-sale"},[t._v("Sale")]):t._e(),t._v(" "),t.product.is_new?e("div",{staticClass:"product-label label-sale"},[t._v("New")]):t._e()]),t._v(" "),t._l(t.product.large_pictures.slice(0,3),(function(r,c){return e("div",{key:r.name,staticClass:"product-item"},[e("div",{staticClass:"inner"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"".concat(t.baseUrl).concat(r.url),expression:"`${baseUrl}${item.url}`"}],staticClass:"product-single-image",attrs:{width:r.width,height:r.height,alt:"lgPicture"}})]),t._v(" "),t.isMagnify?e("span",{staticClass:"prod-full-screen",on:{click:function(e){return t.openLightBox(c)}}},[e("i",{staticClass:"icon-plus"})]):t._e()])})),t._v(" "),e("light-box",{ref:"lightBox",attrs:{media:t.lightBoxMedia,"show-light-box":!1}})],2)}),[],!1,null,null,null);e.a=component.exports},444:function(t,e,r){"use strict";r.r(e);r(40),r(19),r(56),r(355);var c=r(352),o=r(13),l=r(381),n=r(387),d=r(388),v=r(370),m=r(360),_=r(361),h={directives:{Sticky:c.a},components:{PvMediaThree:l.a,PvDetailLeft:n.a,PvDetailRight:d.a,PvDescOne:v.a,PvRelatedProducts:m.a,PvSmallCollection:_.a},data:function(){return{isSticky:!1,product:null,relatedProducts:null,featuredProducts:null,bestProducts:null,latestProducts:null,topRatedProducts:null,nextProduct:null,prevProduct:null,baseUrl:o.a,loaded:!1,categoryList:[],productCategory:[],isProductNav:{type:Boolean,default:!0}}},created:function(){this.getProduct()},mounted:function(){this.resizeHandler(),window.addEventListener("resize",this.resizeHandler,{passive:!0})},destroyed:function(){window.removeEventListener("resize",this.resizeHandler)},methods:{getProduct:function(){var t=this;this.loaded=!1,o.c.get("".concat(o.a,"/products/").concat(this.$route.params.slug),{params:{demo:o.b}}).then((function(e){t.product=e.data.product,t.relatedProducts=e.data.relatedProducts,t.featuredProducts=e.data.featuredProducts,t.bestProducts=e.data.bestSellingProducts,t.latestProducts=e.data.latestProducts,t.topRatedProducts=e.data.topRatedProducts,t.prevProduct=e.data.prevProduct,t.nextProduct=e.data.nextProduct,t.product.product_categories.map((function(e){t.productCategory.push(e)})),t.loaded=!0})).catch((function(t){return{error:JSON.stringify(t)}}))},resizeHandler:function(){this.isSticky=window.innerWidth>991}}},C=r(6),component=Object(C.a)(h,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"main skeleton-body"},[e("nav",{staticClass:"breadcrumb-nav mb-3",attrs:{"aria-label":"breadcrumb"}},[e("div",{staticClass:"container"},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("nuxt-link",{attrs:{to:"/"}},[e("i",{staticClass:"icon-home"})])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item"},[e("nuxt-link",{attrs:{to:"/shop"}},[t._v("Shop")])],1),t._v(" "),t.loaded?e("li",{staticClass:"breadcrumb-item"},t._l(t.productCategory,(function(r,c){return e("nuxt-link",{key:"product-category-".concat(c),attrs:{to:{path:"/shop",query:{category:r.slug}}}},[t._v(t._s(c===t.productCategory.length-1?r.name:r.name+", "))])})),1):t._e(),t._v(" "),t.loaded?e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.product.name))]):t._e()])])]),t._v(" "),e("div",{staticClass:"container"},[t.product?e("div",{staticClass:"product-single-container product-both-info"},[e("div",{staticClass:"product-single-details"},[e("div",{staticClass:"d-md-flex"},[e("div",{staticClass:"d-flex align-items-start"},[e("h1",{staticClass:"product-title w-auto"},[t._v(t._s(t.product.name))]),t._v(" "),t.isProductNav?e("div",{staticClass:"product-nav pt-2 ml-5 position-relative top-0 float-right"},[e("div",{staticClass:"product-prev",class:{disabled:!t.prevProduct}},[t.prevProduct?e("nuxt-link",{key:"toPrevProduct",attrs:{to:"/product/sticky-both/"+t.prevProduct.slug}},[e("span",{staticClass:"product-link"}),t._v(" "),e("span",{staticClass:"product-popup"},[e("span",{staticClass:"box-content"},[e("img",{staticStyle:{"padding-top":"0px"},attrs:{alt:"product",width:t.prevProduct.width,height:t.prevProduct.height,src:"".concat(t.baseUrl).concat(t.prevProduct.pictures[0].url)}}),t._v(" "),e("span",[t._v(t._s(t.prevProduct.name))])])])]):e("a",{attrs:{href:"javascript:;"}},[e("span",{staticClass:"product-link"})])],1),t._v(" "),e("div",{staticClass:"product-next",class:{disabled:!t.nextProduct}},[t.nextProduct?e("nuxt-link",{key:"toNexProduct",attrs:{to:"/product/sticky-both/"+t.nextProduct.slug}},[e("span",{staticClass:"product-link"}),t._v(" "),e("span",{staticClass:"product-popup"},[e("span",{staticClass:"box-content"},[e("img",{staticStyle:{"padding-top":"0px"},attrs:{alt:"product",width:t.nextProduct.width,height:t.nextProduct.height,src:"".concat(t.baseUrl).concat(t.nextProduct.pictures[0].url)}}),t._v(" "),e("span",[t._v(t._s(t.nextProduct.name))])])])]):e("a",{attrs:{href:"javascript:;"}},[e("span",{staticClass:"product-link"})])],1)]):t._e()]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"ratings-container"},[e("div",{staticClass:"product-ratings"},[e("span",{staticClass:"ratings",style:"width:"+20*t.product.ratings+"%"}),t._v(" "),e("span",{staticClass:"tooltiptext tooltip-top"},[t._v(t._s(t._f("priceFormat")(t.product.ratings)))])]),t._v(" "),e("a",{staticClass:"rating-link",attrs:{href:"javascript:;"}},[t._v("( "+t._s(t.product.reviews)+" Reviews )")])]),t._v(" "),e("hr",{staticClass:"short-divider"})]),t._v(" "),e("div",{staticClass:"row mb-lg-3"},[e("div",{staticClass:"col-lg-3",attrs:{"sticky-container":""}},[e("div",{directives:[{name:"sticky",rawName:"v-sticky",value:t.isSticky,expression:"isSticky"}],staticClass:"sidebar-wrapper",attrs:{"sticky-offset":"{top: 80}"}},[e("pv-detail-left",{attrs:{product:t.product,"prev-product":t.prevProduct,"next-product":t.nextProduct,"is-title":!1}})],1)]),t._v(" "),e("div",{staticClass:"col-lg-6 product-single-gallery mb-lg-0"},[e("pv-media-three",{attrs:{product:t.product}})],1),t._v(" "),e("div",{staticClass:"col-lg-3",attrs:{"sticky-container":""}},[e("div",{directives:[{name:"sticky",rawName:"v-sticky",value:t.isSticky,expression:"isSticky"}],staticClass:"sidebar-wrapper",attrs:{"sticky-offset":"{top: 80}"}},[e("div",{staticClass:"product-single-details"},[e("pv-detail-right",{attrs:{product:t.product}})],1)])])])]):t._e()]),t._v(" "),t.product?t._e():e("div",{staticClass:"container mb-4"},[t._m(1)]),t._v(" "),e("div",{staticClass:"product-single-tabs custom-product-single-tabs pt-2 mb-0 mt-6 pb-3"},[e("div",{staticClass:"container"},[t.product?e("pv-desc-one",{attrs:{product:t.product}}):e("div",{staticClass:"skel-group"},[e("div",{staticClass:"tab-content col-lg-12 mb-7"})])],1)]),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"container"},[e("pv-related-products",{staticClass:"mb-1",attrs:{products:t.relatedProducts}})],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-single-share ml-sm-auto"},[e("label",{staticClass:"sr-only"},[t._v("Share:")]),t._v(" "),e("div",{staticClass:"social-icons mr-2 pr-2 pb-5 pb-md-0"},[e("a",{staticClass:"social-icon social-facebook icon-facebook",attrs:{href:"#",title:"Facebook"}}),t._v(" "),e("a",{staticClass:"social-icon social-twitter icon-twitter",attrs:{href:"#",title:"Twitter"}}),t._v(" "),e("a",{staticClass:"social-icon social-linkedin fab fa-linkedin-in",attrs:{href:"#",title:"Linkedin"}}),t._v(" "),e("a",{staticClass:"social-icon social-gplus fab fa-google-plus-g",attrs:{href:"#",title:"Google +"}}),t._v(" "),e("a",{staticClass:"social-icon social-mail icon-mail-alt",attrs:{href:"#",title:"Mail"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"skel-group"},[e("div",{staticClass:"summary entry-summary col-lg-3"}),t._v(" "),e("div",{staticClass:"summary-info-before col-lg-6 overflow-hidden"}),t._v(" "),e("div",{staticClass:"summary entry-summary col-lg-3"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-both-info-bottom bg-gray"},[e("div",{staticClass:"container"},[e("div",{staticClass:"align-items-center row mb-0"},[e("div",{staticClass:"col-md-4 col-sm-6"},[e("h3",{staticClass:"heading"},[e("strong",[t._v("INCREDIBLE QUALITY")])]),t._v(" "),e("p",[t._v("\n\t\t\t\t\t\tSed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n\t\t\t\t\t\tminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n\t\t\t\t\t\tcommodo\n\t\t\t\t\t")]),t._v(" "),e("h3",{staticClass:"heading"},[e("strong",[t._v("ADVANCED SOUND")])]),t._v(" "),e("p",[t._v("\n\t\t\t\t\t\tSed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n\t\t\t\t\t\tminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n\t\t\t\t\t\tcommodo\n\t\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"col-md-4 d-md-block d-none"}),t._v(" "),e("div",{staticClass:"col-md-4 col-sm-6"},[e("h3",{staticClass:"heading text-right"},[e("strong",[t._v("ULTRA BOOST")])]),t._v(" "),e("p",{staticClass:"text-md-right"},[t._v("\n\t\t\t\t\t\tSed do eiusmod tempor incididunt ut labore et dolore magna\n\t\t\t\t\t\taliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n\t\t\t\t\t\tut aliquip ex ea commodo\n\t\t\t\t\t")]),t._v(" "),e("h3",{staticClass:"heading text-right"},[e("strong",[t._v("NOISE REDUCTION")])]),t._v(" "),e("p",{staticClass:"text-md-right"},[t._v("\n\t\t\t\t\t\tSed do eiusmod tempor incididunt ut labore et dolore magna\n\t\t\t\t\t\taliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n\t\t\t\t\t\tut aliquip ex ea commodo\n\t\t\t\t\t")])])])])])}],!1,null,null,null);e.default=component.exports}}]);