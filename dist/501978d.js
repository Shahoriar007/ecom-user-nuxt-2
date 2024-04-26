(window.webpackJsonp=window.webpackJsonp||[]).push([[25,5],{356:function(t,e,r){"use strict";var o=r(357);const n=function(t){t.directive("Sticky",o.a)};window.Vue&&Vue.use(n),o.a.install=n,e.a=o.a},357:function(module,__webpack_exports__,__webpack_require__){"use strict";const namespace="@@vue-sticky-directive",events=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],batchStyle=(t,style={},e={})=>{for(let e in style)t.style[e]=style[e];for(let r in e)e[r]&&!t.classList.contains(r)?t.classList.add(r):!e[r]&&t.classList.contains(r)&&t.classList.remove(r)};class Sticky{constructor(t,e){this.el=t,this.vm=e,this.unsubscribers=[],this.isPending=!1,this.state={isTopSticky:null,isBottomSticky:null,height:null,width:null,xOffset:null},this.lastState={top:null,bottom:null,sticked:!1};const r=this.getAttribute("sticky-offset")||{},o=this.getAttribute("sticky-side")||"top",n=this.getAttribute("sticky-z-index")||"10",c=this.getAttribute("on-stick")||null;this.options={topOffset:Number(r.top)||0,bottomOffset:Number(r.bottom)||0,shouldTopSticky:"top"===o||"both"===o,shouldBottomSticky:"bottom"===o||"both"===o,zIndex:n,onStick:c}}doBind(){if(this.unsubscribers.length>0)return;const{el:t,vm:e}=this;e.$nextTick((()=>{this.placeholderEl=document.createElement("div"),this.containerEl=this.getContainerEl(),t.parentNode.insertBefore(this.placeholderEl,t),events.forEach((t=>{const e=this.update.bind(this);this.unsubscribers.push((()=>window.removeEventListener(t,e))),this.unsubscribers.push((()=>this.containerEl.removeEventListener(t,e))),window.addEventListener(t,e,{passive:!0}),this.containerEl.addEventListener(t,e,{passive:!0})}))}))}doUnbind(){this.unsubscribers.forEach((t=>t())),this.unsubscribers=[],this.resetElement()}update(){this.isPending||(requestAnimationFrame((()=>{this.isPending=!1,this.recomputeState(),this.updateElements()})),this.isPending=!0)}isTopSticky(){if(!this.options.shouldTopSticky)return!1;const t=this.state.placeholderElRect.top,e=this.state.containerElRect.bottom,r=this.options.topOffset,o=this.options.bottomOffset;return t<=r&&e>=o}isBottomSticky(){if(!this.options.shouldBottomSticky)return!1;const t=window.innerHeight-this.state.placeholderElRect.top-this.state.height,e=window.innerHeight-this.state.containerElRect.top,r=this.options.topOffset;return t<=this.options.bottomOffset&&e>=r}recomputeState(){this.state=Object.assign({},this.state,{height:this.getHeight(),width:this.getWidth(),xOffset:this.getXOffset(),placeholderElRect:this.getPlaceholderElRect(),containerElRect:this.getContainerElRect()}),this.state.isTopSticky=this.isTopSticky(),this.state.isBottomSticky=this.isBottomSticky()}fireEvents(){"function"!=typeof this.options.onStick||this.lastState.top===this.state.isTopSticky&&this.lastState.bottom===this.state.isBottomSticky&&this.lastState.sticked===(this.state.isTopSticky||this.state.isBottomSticky)||(this.lastState={top:this.state.isTopSticky,bottom:this.state.isBottomSticky,sticked:this.state.isBottomSticky||this.state.isTopSticky},this.options.onStick(this.lastState))}updateElements(){const t={paddingTop:0},e={position:"static",top:"auto",bottom:"auto",left:"auto",width:"auto",zIndex:this.options.zIndex},r={"vue-sticky-el":!0,"top-sticky":!1,"bottom-sticky":!1};if(this.state.isTopSticky){e.position="fixed",e.top=this.options.topOffset+"px",e.left=this.state.xOffset+"px",e.width=this.state.width+"px";const o=this.state.containerElRect.bottom-this.state.height-this.options.bottomOffset-this.options.topOffset;o<0&&(e.top=o+this.options.topOffset+"px"),t.paddingTop=this.state.height+"px",r["top-sticky"]=!0}else if(this.state.isBottomSticky){e.position="fixed",e.bottom=this.options.bottomOffset+"px",e.left=this.state.xOffset+"px",e.width=this.state.width+"px";const o=window.innerHeight-this.state.containerElRect.top-this.state.height-this.options.bottomOffset-this.options.topOffset;o<0&&(e.bottom=o+this.options.bottomOffset+"px"),t.paddingTop=this.state.height+"px",r["bottom-sticky"]=!0}else t.paddingTop=0;batchStyle(this.el,e,r),batchStyle(this.placeholderEl,t,{"vue-sticky-placeholder":!0}),this.fireEvents()}resetElement(){["position","top","bottom","left","width","zIndex"].forEach((t=>{this.el.style.removeProperty(t)})),this.el.classList.remove("bottom-sticky","top-sticky");const{parentNode:t}=this.placeholderEl;t&&t.removeChild(this.placeholderEl)}getContainerEl(){let t=this.el.parentNode;for(;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){if(t.hasAttribute("sticky-container"))return t;t=t.parentNode}return this.el.parentNode}getXOffset(){return this.placeholderEl.getBoundingClientRect().left}getWidth(){return this.placeholderEl.getBoundingClientRect().width}getHeight(){return this.el.getBoundingClientRect().height}getPlaceholderElRect(){return this.placeholderEl.getBoundingClientRect()}getContainerElRect(){return this.containerEl.getBoundingClientRect()}getAttribute(name){const expr=this.el.getAttribute(name);let result;if(expr)if(this.vm[expr])result=this.vm[expr];else try{result=eval(`(${expr})`)}catch(t){result=expr}return result}}__webpack_exports__.a={inserted(t,e,r){(void 0===e.value||e.value)&&(t[namespace]=new Sticky(t,r.context),t[namespace].doBind())},unbind(t,e,r){t[namespace]&&(t[namespace].doUnbind(),t[namespace]=void 0)},componentUpdated(t,e,r){void 0===e.value||e.value?(t[namespace]||(t[namespace]=new Sticky(t,r.context)),t[namespace].doBind()):t[namespace]&&t[namespace].doUnbind()}}},358:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var o=r(115);var n=r(147),c=r(94);function l(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||Object(n.a)(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},361:function(t,e,r){var content=r(374);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("e928b9ea",content,!0,{sourceMap:!1})},362:function(t,e,r){var content=r(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("15bc8f03",content,!0,{sourceMap:!1})},370:function(t,e,r){"use strict";r(18),r(27),r(24),r(36),r(37),r(32);var o=r(9),n=(r(93),r(63),r(12),r(77),r(22),r(54),r(19)),c=r(145),l=r(366),d=r(13),h=r(146);function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var m={computed:f({},Object(n.c)("cart",["totalCount"])),methods:{addCart:function(){if(this.product.stock>0){var t=f({},this.product);this.product.is_sale&&(t.price=this.product.sale_price),this.addToCart({product:t})}},buyNow:function(){if(this.product.stock>0){var t=f({},this.product);this.product.is_sale&&(t.price=this.product.sale_price),this.addToCart({product:t})}this.$router.push("/pages/checkout")}}},_=(r(373),r(6)),w=Object(_.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sticky-navbar fixed"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("a",{staticClass:"btn btn-primary width-50",attrs:{href:"javascript:;"},on:{click:t.addCart}},[t._v("\n                Add to Cart\n            ")]),t._v(" "),e("a",{staticClass:"btn btn-warning width-50",attrs:{href:"javascript:;"},on:{click:t.buyNow}},[t._v("\n                Buy Now\n            ")])])])])}),[],!1,null,"7b1a9d58",null).exports;function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var k={components:{VueSlideToggle:c.a,PvProductNav:l.a,PvCountDown:h.a,PvStickyButton:w},props:{product:Object,isProductNav:{type:Boolean,default:!0}},data:function(){return{minPrice:0,maxPrice:0,qty:1,currentIndex:0,baseUrl:"".concat(d.a),vSizes:[],vColors:[],curSize:{name:null,text:null,image:null},curColor:{name:null,text:null,image:null},tIndex:0,isShare:{type:Boolean,default:!0}}},watch:{$route:function(){this.getFlag()}},computed:C(C({},Object(n.c)("wishlist",["wishList"])),{},{isCartActive:function(){return!(this.product.stock<parseInt(this.qty))&&0===this.product.length},isPriceShow:function(){return null!==this.curSize.name&&null!==this.curColor.name||(null!==this.curColor.name&&0===this.vSizes.length||null!==this.curSize.name&&0===this.vColors.length)}}),created:function(){this.getFlag()},mounted:function(){var t=this;this.product.variants&&!this.product.price&&(this.minPrice=this.product.variants[0].price,this.product.variants.forEach((function(e){var r=e.sale_price?e.sale_price:e.price;t.minPrice>r&&(t.minPrice=r),t.maxPrice<r&&(t.maxPrice=r)})))},methods:C(C(C({},Object(n.b)("cart",["addToCart"])),Object(n.b)("wishlist",["addToWishlist"])),{},{plusQty:function(){this.qty<this.product.stock&&this.qty++},minusQty:function(){this.qty>1&&this.qty--},addCart:function(){if(this.product.stock>0){var t=C({},this.product);this.product.is_sale&&(t.price=this.product.sale_price),this.addToCart({product:t})}},buyNow:function(){if(this.product.stock>0){var t=C({},this.product);this.product.is_sale&&(t.price=this.product.sale_price),this.addToCart({product:t})}this.$router.push("/pages/checkout")},addWishlist:function(t){var e=this;t.currentTarget.classList.add("load-more-overlay","loading"),setTimeout((function(){e.addToWishlist({product:e.product}),document.querySelector(".wishlist-popup").classList.add("active"),setTimeout((function(){document.querySelector(".wishlist-popup").classList.remove("active")}),1e3)}),1e3)},isDisabled:function(t,e){return!(!t.name||!e.name)&&(0===this.vSizes.length?-1===this.product.variants.findIndex((function(e){return e.colors[0].color_name===t.name})):0===this.vColors.length?-1===this.product.variants.findIndex((function(t){return t.size[0].size_name===e.name})):-1===this.product.variants.findIndex((function(r){return r.colors[0].color_name===t.name&&r.size[0].size_name===e.name})))},toggleColorItem:function(t){this.isDisabled(t,this.curSize)||(this.curColor===t?this.curColor={name:null,text:null,image:null}:this.curColor=t)},toggleSizeItem:function(t){this.isDisabled(this.curColor,t)||(this.curSize===t?this.curSize={name:null,text:null,image:null}:this.curSize=t)},resetValue:function(){this.curColor={name:null,text:null,image:null},this.curSize={name:null,text:null,image:null}},changeQty:function(t){},getFlag:function(){this.$route.path.includes("sticky-info")&&(this.isShare=!1)}})},x=(r(375),Object(_.a)(k,(function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticClass:"product-title"},[t._v(t._s(t.product.name))]),t._v(" "),e("hr",{staticClass:"short-divider"}),t._v(" "),t.product.price?e("div",{key:"singlePrice",staticClass:"price-box"},[t.product.is_sale?[e("span",{staticClass:"new-price"},[t._v("BDT "+t._s(t._f("priceFormat")(t.product.sale_price)))]),t._v(" "),e("span",{staticClass:"old-price"},[t._v("BDT "+t._s(t._f("priceFormat")(t.product.price)))])]:[e("span",{staticClass:"new-price"},[t._v("BDT "+t._s(t._f("priceFormat")(t.product.price)))])]],2):e("div",{staticClass:"price-box"},[t.minPrice!==t.maxPrice?[e("span",{staticClass:"new-price"},[t._v("BDT "+t._s(t._f("priceFormat")(t.minPrice))+" – BDT "+t._s(t._f("priceFormat")(t.maxPrice)))])]:[e("span",{staticClass:"new-price"},[t._v("BDT "+t._s(t._f("priceFormat")(t.minPrice)))])]],2),t._v(" "),t.product.video_link?e("a",{staticClass:"btn btn-video add-cart mr-2 mt-2",attrs:{href:t.product.video_link,title:"Watch Video",target:"_blank"}},[e("svg",{staticClass:"bi bi-play-btn mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"}}),t._v(" "),e("path",{attrs:{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"}})]),t._v("\n\t\t\t\t\tVideo\n\t\t\t")]):t._e(),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("ul",{staticClass:"single-info-list"},[t.product.sku?e("li",[t._v("\n\t\t\t\tSKU:\n\t\t\t\t"),e("strong",[t._v(t._s(t.product.sku))])]):t._e(),t._v(" "),e("li",[t._v("\n\t\t\t\tCATEGORY:\n\t\t\t\t"),e("nuxt-link",{attrs:{to:"/shop?category=".concat(t.product.category.id)}},[e("strong",[t._v("\n\t\t\t\t\t\t"+t._s(t.product.category.name)+" \n\t\t\t\t\t")])]),t._v(" "),t.product.sub_category_id?[t._v("\n\t\t\t\t\t>>\n\t\t\t\t\t"),e("nuxt-link",{attrs:{to:"/shop?subCategory=".concat(t.product.sub_category.id)}},[e("strong",[t._v("\n\t\t\t\t\t\t\t"+t._s(t.product.sub_category.name)+" \n\t\t\t\t\t\t")])])]:t._e(),t._v(" "),t.product.child_category_id?[t._v("\n\t\t\t\t\t>>\n\t\t\t\t\t"),e("nuxt-link",{attrs:{to:"/shop?childCategory=".concat(t.product.child_category.id)}},[e("strong",[t._v("\n\t\t\t\t\t\t\t"+t._s(t.product.child_category.name)+" \n\t\t\t\t\t\t")])])]:t._e()],2)]),t._v(" "),e("div",{staticClass:"product-action"},[e("a",{staticClass:"btn btn-dark add-cart mr-2 mt-2",attrs:{href:"javascript:;",title:"Add to Cart"},on:{click:t.addCart}},[e("svg",{staticClass:"bi bi-bag mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"}})]),t._v("  কার্টে যোগ করুন")]),t._v(" "),e("v-row",[e("a",{staticClass:"btn btn-buy-now add-cart mr-2 mt-2",attrs:{href:"javascript:;",title:"Buy Now"},on:{click:t.buyNow}},[e("svg",{staticClass:"bi bi-cart2 mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"}})]),t._v("অর্ডার করুন")]),t._v(" "),e("a",{staticClass:"btn btn-whatsapp add-cart mr-2 mt-2",attrs:{href:"https://wa.me/+8801994635351",title:"Buy Now",target:"_blank"}},[e("svg",{staticClass:"bi bi-whatsapp mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"}})]),t._v("\nWhatsapp")])]),t._v(" "),e("b-row",[e("a",{staticClass:"btn btn-messenger add-cart mr-2 mt-2",attrs:{href:"https://m.me/100064835408819",title:"Buy Now",target:"_blank"}},[e("svg",{staticClass:"text-white mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"16",height:"16",viewBox:"0 0 50 50"}},[e("path",{attrs:{d:"M 25 2 C 12.347656 2 2 11.597656 2 23.5 C 2 30.007813 5.132813 35.785156 10 39.71875 L 10 48.65625 L 11.46875 47.875 L 18.6875 44.125 C 20.703125 44.664063 22.800781 45 25 45 C 37.652344 45 48 35.402344 48 23.5 C 48 11.597656 37.652344 2 25 2 Z M 25 4 C 36.644531 4 46 12.757813 46 23.5 C 46 34.242188 36.644531 43 25 43 C 22.835938 43 20.742188 42.6875 18.78125 42.125 L 18.40625 42.03125 L 18.0625 42.21875 L 12 45.375 L 12 38.8125 L 11.625 38.53125 C 6.960938 34.941406 4 29.539063 4 23.5 C 4 12.757813 13.355469 4 25 4 Z M 22.71875 17.71875 L 10.6875 30.46875 L 21.5 24.40625 L 27.28125 30.59375 L 39.15625 17.71875 L 28.625 23.625 Z"}})]),t._v("\nMessenger")])]),t._v(" "),e("nuxt-link",{staticClass:"btn btn-gray view-cart d-none",attrs:{to:"/pages/cart"}},[t._v("View cart")])],1),t._v(" "),[e("div",{staticClass:"sticky-navbar fixed"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("a",{staticClass:"btn btn-primary width-50",attrs:{href:"javascript:;"},on:{click:t.addCart}},[t._v("\n\t\t\t\t\t\t\t\tকার্টে যোগ করুন\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("a",{staticClass:"btn btn-warning width-50",attrs:{href:"javascript:;"},on:{click:t.buyNow}},[t._v("\n\t\t\t\t\t\t\t\tঅর্ডার করুন\n\t\t\t\t\t\t\t")])])])])]],2)}),[],!1,null,null,null));e.a=x.exports},373:function(t,e,r){"use strict";r(361)},374:function(t,e,r){var o=r(38)((function(i){return i[1]}));o.push([t.i,".button-container[data-v-7b1a9d58]{display:flex;justify-content:space-between}.width-50[data-v-7b1a9d58]{width:50%}.sticky-button[data-v-7b1a9d58]{background-color:#fff;border-top:1px solid #e7e7e7;display:flex;left:0;opacity:1;position:fixed;right:0;top:100%;transition:all .25s;visibility:visible;width:100%;z-index:997}",""]),o.locals={},t.exports=o},375:function(t,e,r){"use strict";r(362)},376:function(t,e,r){var o=r(38)((function(i){return i[1]}));o.push([t.i,'.buy-now:before{content:"\\F83F";font-family:"Porto";font-size:1.8rem;font-weight:600;margin-right:7px;margin-top:-2px}.btn-video{background-color:red;color:#fff!important}.btn-video:hover{background-color:red;color:#000!important}.btn-buy-now{background-color:#ffc107;color:#000}.btn-messenger{background-image:linear-gradient(180deg,#ff6070 10%,#9f33ff,#168aff);color:#000}.btn-whatsapp{background-color:#25d366;color:#fff}.button-container{display:flex;justify-content:space-between}.width-50{width:50%}.product-title{width:100%!important}.btn-primary{background-color:#222529!important;border-color:#222529!important}',""]),o.locals={},t.exports=o},379:function(t,e,r){"use strict";var o=r(2),n=r(78).find,c=r(116),l="find",d=!0;l in[]&&Array(1)[l]((function(){d=!1})),o({target:"Array",proto:!0,forced:d},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},384:function(t,e,r){"use strict";r(18);var o=r(358),n=(r(62),r(379),r(12),r(144)),c=r(371),l=r.n(c),d=r(13),h=r(143),v=(r(372),{components:{PvCarousel:n.a,LightBox:l.a},props:{product:Object,isMagnify:{type:Boolean,default:!0}},data:function(){return{baseSlider1:h.a,baseSlider2:h.b,baseUrl:d.a}},computed:{lightBoxMedia:function(){return this.product.large_pictures.reduce((function(t,e){return[].concat(Object(o.a)(t),[{src:"".concat(d.a).concat(e.url),thumb:"".concat(d.a).concat(e.url)}])}),[])}},mounted:function(){var t=this;console.log(this.product),null!==this.product&&this.$nextTick((function(){var e=t;t.$refs.mediaRef.swiper.on("transitionStart",(function(){var t=e.$refs.mediaRef.swiper.activeIndex;e.$refs.thumbRef.swiper.slideTo(t),e.$refs.thumbRef.swiper.$el.find(".swiper-wrapper").find(".swiper-dot.active")[0].classList.remove("active"),e.$refs.thumbRef.swiper.$el.find(".swiper-wrapper").find(".swiper-dot")[t].classList.add("active")}))}))},methods:{activeThumbItem:function(t,e){e.currentTarget.parentNode.querySelector(".swiper-dot.active").classList.remove("active"),e.currentTarget.classList.add("active"),this.$refs.mediaRef.swiper.slideTo(t)},openLightBox:function(){this.$refs.lightBox.showImage(this.$refs.mediaRef.swiper.activeIndex)}}}),f=r(6),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"product-slider-container"},[e("div",{staticClass:"label-group"},[t.product.is_hot?e("div",{staticClass:"product-label label-hot"},[t._v("HOT")]):t._e(),t._v(" "),t.product.is_sale?e("div",{staticClass:"product-label label-sale"},[t._v("Sale")]):t._e()]),t._v(" "),e("PvCarousel",{ref:"mediaRef",staticClass:"product-single-carousel show-nav-hover",attrs:{options:t.baseSlider1}},t._l(t.product.large_pictures,(function(t){return e("div",{key:t.name,staticClass:"swiper-slide"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.original_url,expression:"item.original_url"}],staticClass:"product-single-image",attrs:{width:t.width,height:t.height,alt:"lgPicture"}})])})),0),t._v(" "),t.isMagnify?e("span",{staticClass:"prod-full-screen",on:{click:t.openLightBox}},[e("i",{staticClass:"icon-plus"})]):t._e()],1),t._v(" "),e("PvCarousel",{ref:"thumbRef",staticClass:"prod-thumbnail swiper-dots show-nav-hover",attrs:{options:t.baseSlider2,useFasIcon:!0}},t._l(t.product.large_pictures,(function(r,o){return e("div",{key:"media-one"+o,staticClass:"swiper-dot swiper-slide",class:{active:0===o},on:{click:function(e){return t.activeThumbItem(o,e)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:r.original_url,expression:"item.original_url"}],attrs:{width:r.width,height:r.height,alt:"product-thumbnail"}})])})),0),t._v(" "),e("light-box",{ref:"lightBox",attrs:{media:t.lightBoxMedia,"show-light-box":!1}})],1)}),[],!1,null,null,null);e.a=component.exports},450:function(t,e,r){"use strict";r.r(e);r(18),r(62),r(55),r(360);var o=r(13),n=r(356),c=r(144),l=r(150),d=r(143),h={components:{PvSmallProduct:l.a,PvCarousel:c.a},directives:{Sticky:n.a},props:{featuredProducts:Array},data:function(){return{isSticky:!1,baseSlider1:d.a}},computed:{categoryTree:function(){return new Tree(this.categoryList)}},mounted:function(){this.resizeHandler(),window.addEventListener("resize",this.resizeHandler,{passive:!0})},destroyed:function(){window.removeEventListener("resize",this.resizeHandler)},methods:{resizeHandler:function(){this.isSticky=window.innerWidth>991}}},v=r(6),f=Object(v.a)(h,(function(){var t=this,e=t._self._c;return e("aside",{staticClass:"sidebar-product col-lg-3 mobile-sidebar",attrs:{"sticky-container":""}},[e("div",{directives:[{name:"sticky",rawName:"v-sticky",value:t.isSticky,expression:"isSticky"}],staticClass:"sidebar-wrapper",attrs:{"sticky-offset":"{top: 80}"}},[t._m(0),t._v(" "),e("div",{staticClass:"widget"},[e("div",{staticClass:"maga-sale-container"},[e("figure",{staticClass:"mega-image"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/banners/banner-sidebar.jpg",expression:"'./images/banners/banner-sidebar.jpg'"}],staticClass:"w-100",staticStyle:{background:"#edece7"},attrs:{width:"280",height:"355",alt:"Banner Desc"}})]),t._v(" "),t._m(1)])]),t._v(" "),e("div",{staticClass:"widget widget-featured"},[e("h3",{staticClass:"widget-title"},[t._v("Featured")]),t._v(" "),e("div",{staticClass:"widget-body"},[e("pv-carousel",{staticClass:"widget-featured-products",attrs:{options:t.baseSlider1}},[e("div",{staticClass:"featured-col swiper-slide"},t._l(t.featuredProducts,(function(t,r){return e("pv-small-product",{key:"featured"+r,attrs:{product:t,"is-lazy":!1}})})),1)])],1)])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"widget widget-info"},[e("ul",[e("li",[e("i",{staticClass:"icon-shipped"}),t._v(" "),e("h4",[t._v("\n\t\t\t\t\t\tFREE\n\t\t\t\t\t\t"),e("br"),t._v("SHIPPING\n\t\t\t\t\t")])]),t._v(" "),e("li",[e("i",{staticClass:"icon-us-dollar"}),t._v(" "),e("h4",[t._v("\n\t\t\t\t\t\t100% MONEY\n\t\t\t\t\t\t"),e("br"),t._v("BACK GUARANTEE\n\t\t\t\t\t")])]),t._v(" "),e("li",[e("i",{staticClass:"icon-online-support"}),t._v(" "),e("h4",[t._v("\n\t\t\t\t\t\tONLINE\n\t\t\t\t\t\t"),e("br"),t._v("SUPPORT 24/7\n\t\t\t\t\t")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"mega-content"},[e("div",{staticClass:"mega-price-box"},[e("span",{staticClass:"price-big"},[t._v("50")]),t._v(" "),e("span",{staticClass:"price-desc"},[e("em",[t._v("%")]),t._v("OFF\n\t\t\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"mega-desc"},[e("h3",{staticClass:"mega-title mb-0"},[t._v("MEGA SALE")]),t._v(" "),e("span",{staticClass:"mega-subtitle"},[t._v("MANY ITEM")])])])}],!1,null,null,null).exports,m=r(384),_=r(370),w=r(385),y=r(368),C=r(369),k={components:{PvRightSidebar:f,PvMediaOne:m.a,PvDetailOne:_.a,PvDescOne:w.a,PvRelatedProducts:y.a,PvSmallCollection:C.a},data:function(){return{product:null,relatedProducts:null,featuredProducts:null,bestProducts:null,latestProducts:null,topRatedProducts:null,nextProduct:null,prevProduct:null,baseUrl:o.a,isSidebar:!1,loaded:!1,categoryList:[],productCategory:[]}},created:function(){this.getProduct()},mounted:function(){this.resizeHandler(),window.addEventListener("resize",this.resizeHandler,{passive:!0})},destroyed:function(){window.removeEventListener("resize",this.resizeHandler)},methods:{getProduct:function(){var t=this;this.loaded=!1,o.c.get("".concat(o.a,"/products/").concat(this.$route.params.slug),{params:{demo:o.b}}).then((function(e){t.product=e.data.product,t.relatedProducts=e.data.relatedProducts,t.featuredProducts=e.data.featuredProducts,t.bestProducts=e.data.bestSellingProducts,t.latestProducts=e.data.latestProducts,t.topRatedProducts=e.data.topRatedProducts,t.prevProduct=e.data.prevProduct,t.nextProduct=e.data.nextProduct,t.product.product_categories.map((function(e){t.productCategory.push(e)})),t.loaded=!0})).catch((function(t){return{error:JSON.stringify(t)}}))},toggleSidebar:function(){var body=document.querySelector("body");body.classList.contains("sidebar-opened")?body.classList.remove("sidebar-opened"):body.classList.add("sidebar-opened")},resizeHandler:function(){this.isSidebar=!(window.innerWidth>991)}}},x=Object(v.a)(k,(function(){var t=this,e=t._self._c;return e("main",[e("nav",{staticClass:"breadcrumb-nav mb-3",attrs:{"aria-label":"breadcrumb"}},[e("div",{staticClass:"container"},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("nuxt-link",{attrs:{to:"/"}},[e("i",{staticClass:"icon-home"})])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item"},[e("nuxt-link",{attrs:{to:"/shop"}},[t._v("Shop")])],1),t._v(" "),t.loaded?e("li",{staticClass:"breadcrumb-item"},t._l(t.productCategory,(function(r,o){return e("nuxt-link",{key:"product-category-".concat(o),attrs:{to:{path:"/shop",query:{category:r.slug}}}},[t._v(t._s(o===t.productCategory.length-1?r.name:r.name+", "))])})),1):t._e(),t._v(" "),t.loaded?e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.product.name))]):t._e()])])]),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-9 main-content pb-2 skeleton-body product-sidebar-right"},[t.product?e("div",{staticClass:"product-single-container product-single-default"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 product-single-gallery"},[e("pv-media-one",{attrs:{product:t.product}})],1),t._v(" "),e("div",{staticClass:"col-md-6 product-single-details"},[e("pv-detail-one",{attrs:{product:t.product,"prev-product":t.prevProduct,"next-product":t.nextProduct}})],1)])]):e("div",{staticClass:"skel-group"},[e("div",{staticClass:"summary-before col-md-6"}),t._v(" "),e("div",{staticClass:"summary entry-summary col-md-6"}),t._v(" "),e("div",{staticClass:"tab-content col-lg-12 mb-7"})]),t._v(" "),t.product?e("pv-desc-one",{attrs:{product:t.product}}):t._e()],1),t._v(" "),t.isSidebar?e("div",{staticClass:"custom-sidebar-toggle sidebar-toggle",on:{click:t.toggleSidebar}},[e("i",{staticClass:"fas fa-sliders-h"})]):t._e(),t._v(" "),e("div",{staticClass:"sidebar-overlay",on:{click:t.toggleSidebar}}),t._v(" "),t.featuredProducts?e("pv-right-sidebar",{attrs:{"featured-products":t.featuredProducts}}):t._e(),t._v(" "),t.featuredProducts?t._e():e("aside",{staticClass:"sidebar-product col-lg-3 mobile-sidebar"},[t._m(0)])],1),t._v(" "),e("pv-related-products",{staticClass:"mb-1",attrs:{products:t.relatedProducts}}),t._v(" "),e("hr",{staticClass:"mt-0 m-b-5"}),t._v(" "),e("div",{staticClass:"skeleton-body"},[e("pv-small-collection",{attrs:{"featured-products":t.featuredProducts,"best-products":t.bestProducts,"latest-products":t.latestProducts,"top-rated-products":t.topRatedProducts}})],1)],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-content skeleton-body"},[e("aside",{staticClass:"widget"}),t._v(" "),e("aside",{staticClass:"widget"}),t._v(" "),e("aside",{staticClass:"widget"})])}],!1,null,null,null);e.default=x.exports}}]);