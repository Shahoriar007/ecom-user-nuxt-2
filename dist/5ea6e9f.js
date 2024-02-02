(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{362:function(t,e,o){"use strict";var r=o(363);const c=function(t){t.directive("Sticky",r.a)};window.Vue&&Vue.use(c),r.a.install=c,e.a=r.a},363:function(module,__webpack_exports__,__webpack_require__){"use strict";const namespace="@@vue-sticky-directive",events=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],batchStyle=(t,style={},e={})=>{for(let e in style)t.style[e]=style[e];for(let o in e)e[o]&&!t.classList.contains(o)?t.classList.add(o):!e[o]&&t.classList.contains(o)&&t.classList.remove(o)};class Sticky{constructor(t,e){this.el=t,this.vm=e,this.unsubscribers=[],this.isPending=!1,this.state={isTopSticky:null,isBottomSticky:null,height:null,width:null,xOffset:null},this.lastState={top:null,bottom:null,sticked:!1};const o=this.getAttribute("sticky-offset")||{},r=this.getAttribute("sticky-side")||"top",c=this.getAttribute("sticky-z-index")||"10",n=this.getAttribute("on-stick")||null;this.options={topOffset:Number(o.top)||0,bottomOffset:Number(o.bottom)||0,shouldTopSticky:"top"===r||"both"===r,shouldBottomSticky:"bottom"===r||"both"===r,zIndex:c,onStick:n}}doBind(){if(this.unsubscribers.length>0)return;const{el:t,vm:e}=this;e.$nextTick((()=>{this.placeholderEl=document.createElement("div"),this.containerEl=this.getContainerEl(),t.parentNode.insertBefore(this.placeholderEl,t),events.forEach((t=>{const e=this.update.bind(this);this.unsubscribers.push((()=>window.removeEventListener(t,e))),this.unsubscribers.push((()=>this.containerEl.removeEventListener(t,e))),window.addEventListener(t,e,{passive:!0}),this.containerEl.addEventListener(t,e,{passive:!0})}))}))}doUnbind(){this.unsubscribers.forEach((t=>t())),this.unsubscribers=[],this.resetElement()}update(){this.isPending||(requestAnimationFrame((()=>{this.isPending=!1,this.recomputeState(),this.updateElements()})),this.isPending=!0)}isTopSticky(){if(!this.options.shouldTopSticky)return!1;const t=this.state.placeholderElRect.top,e=this.state.containerElRect.bottom,o=this.options.topOffset,r=this.options.bottomOffset;return t<=o&&e>=r}isBottomSticky(){if(!this.options.shouldBottomSticky)return!1;const t=window.innerHeight-this.state.placeholderElRect.top-this.state.height,e=window.innerHeight-this.state.containerElRect.top,o=this.options.topOffset;return t<=this.options.bottomOffset&&e>=o}recomputeState(){this.state=Object.assign({},this.state,{height:this.getHeight(),width:this.getWidth(),xOffset:this.getXOffset(),placeholderElRect:this.getPlaceholderElRect(),containerElRect:this.getContainerElRect()}),this.state.isTopSticky=this.isTopSticky(),this.state.isBottomSticky=this.isBottomSticky()}fireEvents(){"function"!=typeof this.options.onStick||this.lastState.top===this.state.isTopSticky&&this.lastState.bottom===this.state.isBottomSticky&&this.lastState.sticked===(this.state.isTopSticky||this.state.isBottomSticky)||(this.lastState={top:this.state.isTopSticky,bottom:this.state.isBottomSticky,sticked:this.state.isBottomSticky||this.state.isTopSticky},this.options.onStick(this.lastState))}updateElements(){const t={paddingTop:0},e={position:"static",top:"auto",bottom:"auto",left:"auto",width:"auto",zIndex:this.options.zIndex},o={"vue-sticky-el":!0,"top-sticky":!1,"bottom-sticky":!1};if(this.state.isTopSticky){e.position="fixed",e.top=this.options.topOffset+"px",e.left=this.state.xOffset+"px",e.width=this.state.width+"px";const r=this.state.containerElRect.bottom-this.state.height-this.options.bottomOffset-this.options.topOffset;r<0&&(e.top=r+this.options.topOffset+"px"),t.paddingTop=this.state.height+"px",o["top-sticky"]=!0}else if(this.state.isBottomSticky){e.position="fixed",e.bottom=this.options.bottomOffset+"px",e.left=this.state.xOffset+"px",e.width=this.state.width+"px";const r=window.innerHeight-this.state.containerElRect.top-this.state.height-this.options.bottomOffset-this.options.topOffset;r<0&&(e.bottom=r+this.options.bottomOffset+"px"),t.paddingTop=this.state.height+"px",o["bottom-sticky"]=!0}else t.paddingTop=0;batchStyle(this.el,e,o),batchStyle(this.placeholderEl,t,{"vue-sticky-placeholder":!0}),this.fireEvents()}resetElement(){["position","top","bottom","left","width","zIndex"].forEach((t=>{this.el.style.removeProperty(t)})),this.el.classList.remove("bottom-sticky","top-sticky");const{parentNode:t}=this.placeholderEl;t&&t.removeChild(this.placeholderEl)}getContainerEl(){let t=this.el.parentNode;for(;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){if(t.hasAttribute("sticky-container"))return t;t=t.parentNode}return this.el.parentNode}getXOffset(){return this.placeholderEl.getBoundingClientRect().left}getWidth(){return this.placeholderEl.getBoundingClientRect().width}getHeight(){return this.el.getBoundingClientRect().height}getPlaceholderElRect(){return this.placeholderEl.getBoundingClientRect()}getContainerElRect(){return this.containerEl.getBoundingClientRect()}getAttribute(name){const expr=this.el.getAttribute(name);let result;if(expr)if(this.vm[expr])result=this.vm[expr];else try{result=eval(`(${expr})`)}catch(t){result=expr}return result}}__webpack_exports__.a={inserted(t,e,o){(void 0===e.value||e.value)&&(t[namespace]=new Sticky(t,o.context),t[namespace].doBind())},unbind(t,e,o){t[namespace]&&(t[namespace].doUnbind(),t[namespace]=void 0)},componentUpdated(t,e,o){void 0===e.value||e.value?(t[namespace]||(t[namespace]=new Sticky(t,o.context)),t[namespace].doBind()):t[namespace]&&t[namespace].doUnbind()}}},366:function(t,e,o){"use strict";o(38),o(39),o(22),o(25),o(19),o(34),o(35),o(28);var r=o(7),c=(o(94),o(10),o(42),o(23),o(43),o(56),o(18)),n=o(13);function l(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function d(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?l(Object(o),!0).forEach((function(e){Object(r.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var h={props:{product:Object,adClass:String},data:function(){return{baseUrl:n.a,minPrice:0,maxPrice:0,discount:0}},computed:d(d({},Object(c.c)("wishlist",["wishList"])),{},{isWishlisted:function(){var t=this;return this.wishList.findIndex((function(e){return e.name===t.product.name}))>-1}}),mounted:function(){var t=this;this.product.is_sale&&this.product.price&&(this.discount=(this.product.price-this.product.sale_price)/this.product.price*100,this.discount=parseInt(this.discount)),this.product.price||(this.minPrice=this.product.variants[0].price,this.product.variants.forEach((function(e){var o=e.is_sale?e.sale_price:e.price;t.minPrice>o&&(t.minPrice=o),t.maxPrice<o&&(t.maxPrice=o)})))},methods:d(d(d({},Object(c.b)("wishlist",["addToWishlist"])),Object(c.b)("cart",["addToCart"])),{},{openQuickview:function(){this.$modal.show((function(){return Promise.all([o.e(1),o.e(4)]).then(o.bind(null,459))}),{slug:this.product.slug},{width:"931",height:"auto",adaptive:!0,class:"quickview-modal"})},addWishlist:function(t){var e=this;t.currentTarget.classList.add("load-more-overlay","loading"),setTimeout((function(){e.addToWishlist({product:e.product}),document.querySelector(".wishlist-popup").classList.add("active"),setTimeout((function(){document.querySelector(".wishlist-popup").classList.remove("active")}),1e3)}),1e3)},addCart:function(){if(this.product.stock>0){var t=d({},this.product);this.product.is_sale&&(t.price=this.product.sale_price),this.addToCart({product:t})}}})},v=o(6),component=Object(v.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-default left-details product-list"},[e("figure",[e("nuxt-link",{attrs:{to:"/product/default/".concat(t.product.slug)}},t._l(t.product.large_pictures.slice(0,2),(function(o,r){return e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"".concat(t.baseUrl).concat(o.url),expression:"`${baseUrl}${item.url}`"}],key:"related-large-".concat(r),attrs:{alt:"large-picture",width:o.width,height:o.height}})})),0),t._v(" "),e("div",{staticClass:"label-group"},[t.product.is_hot?e("div",{staticClass:"product-label label-hot"},[t._v("HOT")]):t._e(),t._v(" "),t.product.is_sale&&!t.product.price?e("div",{staticClass:"product-label label-sale"},[t._v("Sale")]):t._e(),t._v(" "),t.product.is_sale&&t.product.price?e("div",{staticClass:"product-label label-sale"},[t._v("-"+t._s(t.discount)+"%")]):t._e()])],1),t._v(" "),e("div",{staticClass:"product-details"},[e("div",{staticClass:"category-list"},t._l(t.product.product_categories,(function(o,r){return e("span",{key:"product-category-".concat(r)},[e("nuxt-link",{attrs:{to:{path:"/shop",query:{category:o.slug}}}},[t._v(t._s(o.name))]),t._v(" "),r<t.product.product_categories.length-1?[t._v(",")]:t._e()],2)})),0),t._v(" "),e("h3",{staticClass:"product-title"},[e("nuxt-link",{attrs:{to:"/product/default/"+t.product.slug}},[t._v(t._s(t.product.name))])],1),t._v(" "),e("div",{staticClass:"ratings-container"},[e("div",{staticClass:"product-ratings"},[e("span",{staticClass:"ratings",style:{width:20*t.product.ratings+"%"}}),t._v(" "),e("span",{staticClass:"tooltiptext tooltip-top"},[t._v(t._s(t._f("priceFormat")(t.product.ratings)))])])]),t._v(" "),t.product.short_description?e("div",{staticClass:"product-description"},[e("p",{staticClass:"mb-0"},[t._v(t._s(t.product.short_description))])]):t._e(),t._v(" "),t.product.price?e("div",{key:"singlePrice",staticClass:"price-box"},[t.product.is_sale?[e("span",{staticClass:"product-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.sale_price)))]),t._v(" "),e("span",{staticClass:"old-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.price)))])]:[e("span",{staticClass:"product-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.price)))])]],2):e("div",{staticClass:"price-box"},[t.minPrice!==t.maxPrice?[e("span",{staticClass:"product-price"},[t._v("$"+t._s(t._f("priceFormat")(t.minPrice))+" – $"+t._s(t._f("priceFormat")(t.maxPrice)))])]:[e("span",{staticClass:"product-price"},[t._v("$"+t._s(t._f("priceFormat")(t.minPrice)))])]],2),t._v(" "),e("div",{staticClass:"product-action"},[t.product.variants.length>0?e("nuxt-link",{key:"variantProduct",staticClass:"btn-icon btn-add-cart product-type-simple",attrs:{to:"/product/default/"+t.product.slug}},[e("i",{staticClass:"fa fa-arrow-right"}),t._v(" "),e("span",[t._v("SELECT OPTIONS")])]):e("a",{staticClass:"btn-icon btn-add-cart product-type-simple",attrs:{href:"javascript:;"},on:{click:t.addCart}},[e("i",{staticClass:"icon-shopping-cart"}),t._v(" "),e("span",[t._v("ADD TO CART")])]),t._v(" "),t.isWishlisted?e("nuxt-link",{staticClass:"btn-icon-wish added-wishlist",attrs:{to:"/pages/wishlist",title:"Go to Wishlist"}},[e("i",{staticClass:"icon-wishlist-2"})]):t._e(),t._v(" "),t.isWishlisted?t._e():e("a",{staticClass:"btn-icon-wish",attrs:{href:"javascript:;",title:"Add to Wishlist"},on:{click:function(e){return t.addWishlist(e)}}},[e("i",{staticClass:"icon-wishlist-2"})]),t._v(" "),e("a",{staticClass:"btn-quickview",attrs:{href:"javascript:;",title:"Quick View"},on:{click:t.openQuickview}},[e("i",{staticClass:"fas fa-external-link-alt"})])],1)])])}),[],!1,null,null,null);e.a=component.exports},367:function(t,e,o){"use strict";var r=o(6),component=Object(r.a)({},(function(){var t=this._self._c;return t("div",{staticClass:"category-banner-container bg-gray"},[t("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:"./images/banners/banner-top.jpg",expression:"'./images/banners/banner-top.jpg'",arg:"background-image"}],staticClass:"category-banner banner text-uppercase",staticStyle:{background:"#7adcf8"}},[this._m(0)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container position-relative"},[e("div",{staticClass:"row"},[e("div",{staticClass:"pl-lg-5 pb-5 pb-md-0 col-sm-5 col-xl-4 col-lg-4 offset-1"},[e("h3",[t._v("\n\t\t\t\t\t\tElectronic\n\t\t\t\t\t\t"),e("br"),t._v("Deals\n\t\t\t\t\t")]),t._v(" "),e("a",{staticClass:"btn btn-dark",attrs:{href:"javascript:;"}},[t._v("Get Yours!")])]),t._v(" "),e("div",{staticClass:"pl-lg-3 col-sm-4 offset-sm-1 offset-1 pt-3"},[e("div",{staticClass:"coupon-sale-content"},[e("h4",{staticClass:"m-b-1 coupon-sale-text bg-white text-transform-none"},[t._v("Exclusive COUPON")]),t._v(" "),e("h5",{staticClass:"mb-2 coupon-sale-text d-block ls-10 p-0"},[e("i",{staticClass:"ls-0"},[t._v("UP TO")]),t._v(" "),e("b",{staticClass:"text-dark"},[t._v("$100")]),t._v(" OFF\n\t\t\t\t\t\t")])])])])])}],!1,null,null,null);e.a=component.exports},369:function(t,e,o){"use strict";o(19),o(49),o(39),o(10);var r=o(7),c=(o(25),o(77),o(149),o(34),o(35),o(28),o(95),o(23),o(366)),n=o(364),l=o(378),d=o(20),h=o(13);function v(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function m(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?v(Object(o),!0).forEach((function(e){Object(r.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):v(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var f={components:{PvProductTwo:c.a,PvProductThree:n.a,PvPagination:l.a},props:{itemsPerRow:{type:Number,default:3}},data:function(){return{products:null,repeatCount:new Array(100),orderBy:"default",itemsPerPage:9,totalCount:0,type:{type:String,default:"grid"},isOffCanvas:{type:Boolean,default:!1},gridCols:{1:"col-12",3:"col-6 col-sm-4",4:"col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3",5:"col-6 col-sm-4 col-md-3 col-xl-5col",6:"col-6 col-sm-4 col-md-3 col-xl-2",7:"col-6 col-sm-4 col-md-3 col-xl-7col",8:"col-6 col-sm-4 col-md-3 col-xl-8col"}}},watch:{$route:function(){this.getProducts(),this.isOffCanvas=!!this.$route.path.includes("off-canvas"),this.type=this.$route.path.includes("list")?"list":"grid"}},created:function(){this.getProducts(),this.isOffCanvas=!!this.$route.path.includes("off-canvas"),this.type=this.$route.path.includes("list")?"list":"grid"},methods:{getProducts:function(){var t=this;this.products=null,this.totalCount=0,h.c.get("".concat(h.a,"/shop"),{params:m(m({},this.$route.query),{},{demo:h.b,order_by:this.orderBy,per_page:this.itemsPerPage})}).then((function(e){t.products=e.data.products,t.totalCount=e.data.totalCount,Object(d.e)()})).catch((function(t){return{error:JSON.stringify(t)}}))},showSidebarFilter:function(){document.querySelector("body").classList.toggle("sidebar-opened")},changePerPage:function(){this.$router.push(m(m({},this.$route),{},{query:m(m({},this.$route.query),{},{per_page:this.itemsPerPage,page:1})}))}}},_=o(6),component=Object(_.a)(f,(function(){var t=this,e=t._self._c;return e("div",[!t.products||t.products&&t.products.length>0?e("nav",{directives:[{name:"sticky",rawName:"v-sticky"}],staticClass:"toolbox sticky-header mobile-sticky",attrs:{"data-start-top":"500","data-offset-top":"60"}},[e("div",{staticClass:"toolbox-left"},[e("a",{staticClass:"sidebar-toggle mb-0 mb-lg-1",attrs:{href:"javascript:;"},on:{click:t.showSidebarFilter}},[e("svg",{attrs:{"data-name":"Layer 3",id:"Layer_3",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"}},[e("line",{staticClass:"cls-1",attrs:{x1:"15",x2:"26",y1:"9",y2:"9"}}),t._v(" "),e("line",{staticClass:"cls-1",attrs:{x1:"6",x2:"9",y1:"9",y2:"9"}}),t._v(" "),e("line",{staticClass:"cls-1",attrs:{x1:"23",x2:"26",y1:"16",y2:"16"}}),t._v(" "),e("line",{staticClass:"cls-1",attrs:{x1:"6",x2:"17",y1:"16",y2:"16"}}),t._v(" "),e("line",{staticClass:"cls-1",attrs:{x1:"17",x2:"26",y1:"23",y2:"23"}}),t._v(" "),e("line",{staticClass:"cls-1",attrs:{x1:"6",x2:"11",y1:"23",y2:"23"}}),t._v(" "),e("path",{staticClass:"cls-2",attrs:{d:"M14.5,8.92A2.6,2.6,0,0,1,12,11.5,2.6,2.6,0,0,1,9.5,8.92a2.5,2.5,0,0,1,5,0Z"}}),t._v(" "),e("path",{staticClass:"cls-2",attrs:{d:"M22.5,15.92a2.5,2.5,0,1,1-5,0,2.5,2.5,0,0,1,5,0Z"}}),t._v(" "),e("path",{staticClass:"cls-3",attrs:{d:"M21,16a1,1,0,1,1-2,0,1,1,0,0,1,2,0Z"}}),t._v(" "),e("path",{staticClass:"cls-2",attrs:{d:"M16.5,22.92A2.6,2.6,0,0,1,14,25.5a2.6,2.6,0,0,1-2.5-2.58,2.5,2.5,0,0,1,5,0Z"}})]),t._v(" "),e("span",[t._v("Filters")])]),t._v(" "),t.isOffCanvas?t._e():e("div",{staticClass:"toolbox-item toolbox-sort"},[e("label",[t._v("Sort By:")]),t._v(" "),e("div",{staticClass:"select-custom"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.orderBy,expression:"orderBy"}],staticClass:"form-control",attrs:{name:"orderby"},on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.orderBy=e.target.multiple?o:o[0]},t.getProducts]}},[e("option",{attrs:{value:"default",selected:"default"}},[t._v("Default sorting")]),t._v(" "),e("option",{attrs:{value:"featured"}},[t._v("Sort by popularity")]),t._v(" "),e("option",{attrs:{value:"rating"}},[t._v("Sort by average rating")]),t._v(" "),e("option",{attrs:{value:"new"}},[t._v("Sort by newness")]),t._v(" "),e("option",{attrs:{value:"price-asc"}},[t._v("Sort by price: low to high")]),t._v(" "),e("option",{attrs:{value:"price-dec"}},[t._v("Sort by price: high to low")])])])])]),t._v(" "),e("div",{staticClass:"toolbox-right"},[t.isOffCanvas?e("div",{staticClass:"toolbox-item toolbox-sort"},[e("label",[t._v("Sort By:")]),t._v(" "),e("div",{staticClass:"select-custom"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.orderBy,expression:"orderBy"}],staticClass:"form-control",attrs:{name:"orderby"},on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.orderBy=e.target.multiple?o:o[0]},t.getProducts]}},[e("option",{attrs:{value:"default",selected:"default"}},[t._v("Default sorting")]),t._v(" "),e("option",{attrs:{value:"featured"}},[t._v("Sort by popularity")]),t._v(" "),e("option",{attrs:{value:"rating"}},[t._v("Sort by average rating")]),t._v(" "),e("option",{attrs:{value:"new"}},[t._v("Sort by newness")]),t._v(" "),e("option",{attrs:{value:"price-asc"}},[t._v("Sort by price: low to high")]),t._v(" "),e("option",{attrs:{value:"price-dec"}},[t._v("Sort by price: high to low")])])])]):t._e(),t._v(" "),t.totalCount>0?e("div",{staticClass:"toolbox-item toolbox-show"},[e("label",[t._v("Show:")]),t._v(" "),e("div",{staticClass:"select-custom"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.itemsPerPage,expression:"itemsPerPage"}],staticClass:"form-control",attrs:{name:"count"},on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.itemsPerPage=e.target.multiple?o:o[0]},t.changePerPage]}},[e("option",{domProps:{value:9}},[t._v("9")]),t._v(" "),e("option",{domProps:{value:12}},[t._v("12")]),t._v(" "),e("option",{domProps:{value:24}},[t._v("24")]),t._v(" "),e("option",{domProps:{value:36}},[t._v("36")])])])]):t._e(),t._v(" "),e("div",{staticClass:"toolbox-item layout-modes"},[e("nuxt-link",{staticClass:"layout-btn btn-grid",class:{active:"list"!==t.type},attrs:{to:"/shop",title:"Grid"}},[e("i",{staticClass:"icon-mode-grid"})]),t._v(" "),e("nuxt-link",{staticClass:"layout-btn btn-list",class:{active:"list"===t.type},attrs:{to:"/shop/list",title:"List"}},[e("i",{staticClass:"icon-mode-list"})])],1)])]):t._e(),t._v(" "),e("div",{staticClass:"divide-line-wrapper"},[e("div",{staticClass:"row products-group",class:{"row-sm sm-padding":t.itemsPerRow>6,"row-joined divide-line":1!==t.itemsPerRow},staticStyle:{"margin-bottom":"-1px"}},[t.products&&t.products.length>0?t._l(t.products,(function(o,r){return e("div",{key:"shop-product"+r,class:t.gridCols[t.itemsPerRow]},["list"!==t.type?[t.itemsPerRow>6?e("pv-product-three",{key:"gridType",attrs:{product:o,isActions:!1}}):e("pv-product-three",{key:"gridType",attrs:{product:o}})]:e("pv-product-two",{attrs:{product:o}})],2)})):t._e(),t._v(" "),t.products&&0===t.products.length?[t._m(0)]:t._e(),t._v(" "),t.products?t._e():t._l(t.repeatCount.slice(0,t.itemsPerPage),(function(o,r){return e("div",{key:"skel-shop"+r,class:t.gridCols[t.itemsPerRow]},["list"!==t.type?e("div",{key:"normalSkel",staticClass:"skel-pro"}):e("div",{staticClass:"skel-pro skel-pro-list mb-2"})])}))],2)]),t._v(" "),t.products&&t.products.length>0?e("nav",{staticClass:"toolbox toolbox-pagination"},[e("div",{staticClass:"toolbox-item toolbox-show mb-0"},[e("label",[t._v("Show:")]),t._v(" "),e("div",{staticClass:"select-custom"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.itemsPerPage,expression:"itemsPerPage"}],staticClass:"form-control",attrs:{name:"count"},on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.itemsPerPage=e.target.multiple?o:o[0]},t.changePerPage]}},[e("option",{domProps:{value:9}},[t._v("9")]),t._v(" "),e("option",{domProps:{value:12}},[t._v("12")]),t._v(" "),e("option",{domProps:{value:24}},[t._v("24")]),t._v(" "),e("option",{domProps:{value:36}},[t._v("36")])])])]),t._v(" "),t.totalCount?e("pv-pagination",{attrs:{totalCount:t.totalCount,itemsPerPage:t.itemsPerPage}}):t._e()],1):t._e(),t._v(" "),t.products&&0===t.products.length?e("div",{staticClass:"sidebar-toggle custom-sidebar-toggle",on:{click:t.showSidebarFilter}},[e("i",{staticClass:"fas fa-sliders-h"})]):t._e()])}),[function(){var t=this._self._c;return t("div",{staticClass:"info-box with-icon p-0 shop-info mb-2"},[t("p",[this._v("No products were found matching your selection.")])])}],!1,null,null,null);e.a=component.exports},448:function(t,e,o){"use strict";o.r(e);o(365);var r=o(362),c=(o(145),o(375)),n=o(369),l=o(367),d=o(13),h=o(144),v={directives:{Sticky:r.a},components:{PvSidebarFilterOne:c.a,PvProductListOne:n.a,PvShopBanner:l.a},data:function(){return{categoryList:[],featuredProducts:[],baseSlider6:h.e,isSticky:!1}},mounted:function(){this.getCategoryLists(),this.resizeHandler(),window.addEventListener("resize",this.resizeHandler,{passive:!0})},destroyed:function(){window.removeEventListener("resize",this.resizeHandler)},methods:{getCategoryLists:function(){var t=this;d.c.get("".concat(d.a,"/shop/sidebar-list"),{params:{demo:d.b}}).then((function(e){t.categoryList=e.data.sidebarList,t.featuredProducts=e.data.featuredProducts})).catch((function(t){return{error:JSON.stringify(t)}}))},resizeHandler:function(){this.isSticky=window.innerWidth>991},hideSidebar:function(){document.querySelector("body").classList.remove("sidebar-opened")}}},m=o(6),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"main skeleton-body"},[e("nav",{staticClass:"breadcrumb-nav mb-3",attrs:{"aria-label":"breadcrumb"}},[e("div",{staticClass:"container"},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("nuxt-link",{attrs:{to:"/"}},[e("i",{staticClass:"icon-home"})])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item active"},[t._v("Shop")])])])]),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-9"},[e("pv-product-list-one",{attrs:{"category-list":t.categoryList,itemsPerRow:4}})],1),t._v(" "),e("div",{staticClass:"sidebar-overlay",on:{click:t.hideSidebar}}),t._v(" "),e("aside",{staticClass:"sidebar-shop col-lg-3 order-lg-first mobile-sidebar",attrs:{"sticky-container":""}},[e("div",{directives:[{name:"sticky",rawName:"v-sticky",value:t.isSticky,expression:"isSticky"}],attrs:{"sticky-offset":"{top: 80}"}},[t.featuredProducts.length>0?e("pv-sidebar-filter-one",{attrs:{"category-list":t.categoryList,"featured-products":t.featuredProducts}}):t._e(),t._v(" "),0===t.featuredProducts.length?e("div",{staticClass:"sidebar-content skeleton-body"},[e("aside",{staticClass:"widget"}),t._v(" "),e("aside",{staticClass:"widget"}),t._v(" "),e("aside",{staticClass:"widget"})]):t._e()],1)])]),t._v(" "),e("div",{staticClass:"mb-2 mb-lg-5"})])])}),[],!1,null,null,null);e.default=component.exports}}]);