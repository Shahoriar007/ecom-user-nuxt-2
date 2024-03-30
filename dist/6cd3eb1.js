(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{357:function(t,e,o){"use strict";var r=o(358);const c=function(t){t.directive("Sticky",r.a)};window.Vue&&Vue.use(c),r.a.install=c,e.a=r.a},358:function(module,__webpack_exports__,__webpack_require__){"use strict";const namespace="@@vue-sticky-directive",events=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],batchStyle=(t,style={},e={})=>{for(let e in style)t.style[e]=style[e];for(let o in e)e[o]&&!t.classList.contains(o)?t.classList.add(o):!e[o]&&t.classList.contains(o)&&t.classList.remove(o)};class Sticky{constructor(t,e){this.el=t,this.vm=e,this.unsubscribers=[],this.isPending=!1,this.state={isTopSticky:null,isBottomSticky:null,height:null,width:null,xOffset:null},this.lastState={top:null,bottom:null,sticked:!1};const o=this.getAttribute("sticky-offset")||{},r=this.getAttribute("sticky-side")||"top",c=this.getAttribute("sticky-z-index")||"10",n=this.getAttribute("on-stick")||null;this.options={topOffset:Number(o.top)||0,bottomOffset:Number(o.bottom)||0,shouldTopSticky:"top"===r||"both"===r,shouldBottomSticky:"bottom"===r||"both"===r,zIndex:c,onStick:n}}doBind(){if(this.unsubscribers.length>0)return;const{el:t,vm:e}=this;e.$nextTick((()=>{this.placeholderEl=document.createElement("div"),this.containerEl=this.getContainerEl(),t.parentNode.insertBefore(this.placeholderEl,t),events.forEach((t=>{const e=this.update.bind(this);this.unsubscribers.push((()=>window.removeEventListener(t,e))),this.unsubscribers.push((()=>this.containerEl.removeEventListener(t,e))),window.addEventListener(t,e,{passive:!0}),this.containerEl.addEventListener(t,e,{passive:!0})}))}))}doUnbind(){this.unsubscribers.forEach((t=>t())),this.unsubscribers=[],this.resetElement()}update(){this.isPending||(requestAnimationFrame((()=>{this.isPending=!1,this.recomputeState(),this.updateElements()})),this.isPending=!0)}isTopSticky(){if(!this.options.shouldTopSticky)return!1;const t=this.state.placeholderElRect.top,e=this.state.containerElRect.bottom,o=this.options.topOffset,r=this.options.bottomOffset;return t<=o&&e>=r}isBottomSticky(){if(!this.options.shouldBottomSticky)return!1;const t=window.innerHeight-this.state.placeholderElRect.top-this.state.height,e=window.innerHeight-this.state.containerElRect.top,o=this.options.topOffset;return t<=this.options.bottomOffset&&e>=o}recomputeState(){this.state=Object.assign({},this.state,{height:this.getHeight(),width:this.getWidth(),xOffset:this.getXOffset(),placeholderElRect:this.getPlaceholderElRect(),containerElRect:this.getContainerElRect()}),this.state.isTopSticky=this.isTopSticky(),this.state.isBottomSticky=this.isBottomSticky()}fireEvents(){"function"!=typeof this.options.onStick||this.lastState.top===this.state.isTopSticky&&this.lastState.bottom===this.state.isBottomSticky&&this.lastState.sticked===(this.state.isTopSticky||this.state.isBottomSticky)||(this.lastState={top:this.state.isTopSticky,bottom:this.state.isBottomSticky,sticked:this.state.isBottomSticky||this.state.isTopSticky},this.options.onStick(this.lastState))}updateElements(){const t={paddingTop:0},e={position:"static",top:"auto",bottom:"auto",left:"auto",width:"auto",zIndex:this.options.zIndex},o={"vue-sticky-el":!0,"top-sticky":!1,"bottom-sticky":!1};if(this.state.isTopSticky){e.position="fixed",e.top=this.options.topOffset+"px",e.left=this.state.xOffset+"px",e.width=this.state.width+"px";const r=this.state.containerElRect.bottom-this.state.height-this.options.bottomOffset-this.options.topOffset;r<0&&(e.top=r+this.options.topOffset+"px"),t.paddingTop=this.state.height+"px",o["top-sticky"]=!0}else if(this.state.isBottomSticky){e.position="fixed",e.bottom=this.options.bottomOffset+"px",e.left=this.state.xOffset+"px",e.width=this.state.width+"px";const r=window.innerHeight-this.state.containerElRect.top-this.state.height-this.options.bottomOffset-this.options.topOffset;r<0&&(e.bottom=r+this.options.bottomOffset+"px"),t.paddingTop=this.state.height+"px",o["bottom-sticky"]=!0}else t.paddingTop=0;batchStyle(this.el,e,o),batchStyle(this.placeholderEl,t,{"vue-sticky-placeholder":!0}),this.fireEvents()}resetElement(){["position","top","bottom","left","width","zIndex"].forEach((t=>{this.el.style.removeProperty(t)})),this.el.classList.remove("bottom-sticky","top-sticky");const{parentNode:t}=this.placeholderEl;t&&t.removeChild(this.placeholderEl)}getContainerEl(){let t=this.el.parentNode;for(;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){if(t.hasAttribute("sticky-container"))return t;t=t.parentNode}return this.el.parentNode}getXOffset(){return this.placeholderEl.getBoundingClientRect().left}getWidth(){return this.placeholderEl.getBoundingClientRect().width}getHeight(){return this.el.getBoundingClientRect().height}getPlaceholderElRect(){return this.placeholderEl.getBoundingClientRect()}getContainerElRect(){return this.containerEl.getBoundingClientRect()}getAttribute(name){const expr=this.el.getAttribute(name);let result;if(expr)if(this.vm[expr])result=this.vm[expr];else try{result=eval(`(${expr})`)}catch(t){result=expr}return result}}__webpack_exports__.a={inserted(t,e,o){(void 0===e.value||e.value)&&(t[namespace]=new Sticky(t,o.context),t[namespace].doBind())},unbind(t,e,o){t[namespace]&&(t[namespace].doUnbind(),t[namespace]=void 0)},componentUpdated(t,e,o){void 0===e.value||e.value?(t[namespace]||(t[namespace]=new Sticky(t,o.context)),t[namespace].doBind()):t[namespace]&&t[namespace].doUnbind()}}},361:function(t,e,o){var content=o(374);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("e928b9ea",content,!0,{sourceMap:!1})},362:function(t,e,o){var content=o(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("843a0a4c",content,!0,{sourceMap:!1})},370:function(t,e,o){"use strict";o(18),o(25),o(22),o(34),o(35),o(28);var r=o(7),c=(o(95),o(63),o(12),o(78),o(23),o(55),o(19)),n=o(146),l=o(366),d=o(13),h=o(148);function v(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function f(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?v(Object(o),!0).forEach((function(e){Object(r.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):v(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var m={computed:f({},Object(c.c)("cart",["totalCount"])),methods:{addCart:function(){if(this.product.stock>0){var t=f({},this.product);this.product.is_sale&&(t.price=this.product.sale_price),this.addToCart({product:t})}},buyNow:function(){if(this.product.stock>0){var t=f({},this.product);this.product.is_sale&&(t.price=this.product.sale_price),this.addToCart({product:t})}this.$router.push("/pages/checkout")}}},_=(o(373),o(6)),y=Object(_.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sticky-navbar fixed"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("a",{staticClass:"btn btn-primary width-50",attrs:{href:"javascript:;"},on:{click:t.addCart}},[t._v("\n                Add to Cart\n            ")]),t._v(" "),e("a",{staticClass:"btn btn-warning width-50",attrs:{href:"javascript:;"},on:{click:t.buyNow}},[t._v("\n                Buy Now\n            ")])])])])}),[],!1,null,"7b1a9d58",null).exports;function w(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function C(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?w(Object(o),!0).forEach((function(e){Object(r.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):w(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var k={components:{VueSlideToggle:n.a,PvProductNav:l.a,PvCountDown:h.a,PvStickyButton:y},props:{product:Object,isProductNav:{type:Boolean,default:!0}},data:function(){return{minPrice:0,maxPrice:0,qty:1,currentIndex:0,baseUrl:"".concat(d.a),vSizes:[],vColors:[],curSize:{name:null,text:null,image:null},curColor:{name:null,text:null,image:null},tIndex:0,isShare:{type:Boolean,default:!0}}},watch:{$route:function(){this.getFlag()}},computed:C(C({},Object(c.c)("wishlist",["wishList"])),{},{isCartActive:function(){return!(this.product.stock<parseInt(this.qty))&&0===this.product.length},isPriceShow:function(){return null!==this.curSize.name&&null!==this.curColor.name||(null!==this.curColor.name&&0===this.vSizes.length||null!==this.curSize.name&&0===this.vColors.length)}}),created:function(){this.getFlag()},mounted:function(){var t=this;console.log(this.product),this.product.variants&&!this.product.price&&(this.minPrice=this.product.variants[0].price,this.product.variants.forEach((function(e){var o=e.sale_price?e.sale_price:e.price;t.minPrice>o&&(t.minPrice=o),t.maxPrice<o&&(t.maxPrice=o)})))},methods:C(C(C({},Object(c.b)("cart",["addToCart"])),Object(c.b)("wishlist",["addToWishlist"])),{},{plusQty:function(){this.qty<this.product.stock&&this.qty++},minusQty:function(){this.qty>1&&this.qty--},addCart:function(){if(this.product.stock>0){var t=C({},this.product);this.product.is_sale&&(t.price=this.product.sale_price),this.addToCart({product:t})}},buyNow:function(){if(this.product.stock>0){var t=C({},this.product);this.product.is_sale&&(t.price=this.product.sale_price),this.addToCart({product:t})}this.$router.push("/pages/checkout")},addWishlist:function(t){var e=this;t.currentTarget.classList.add("load-more-overlay","loading"),setTimeout((function(){e.addToWishlist({product:e.product}),document.querySelector(".wishlist-popup").classList.add("active"),setTimeout((function(){document.querySelector(".wishlist-popup").classList.remove("active")}),1e3)}),1e3)},isDisabled:function(t,e){return!(!t.name||!e.name)&&(0===this.vSizes.length?-1===this.product.variants.findIndex((function(e){return e.colors[0].color_name===t.name})):0===this.vColors.length?-1===this.product.variants.findIndex((function(t){return t.size[0].size_name===e.name})):-1===this.product.variants.findIndex((function(o){return o.colors[0].color_name===t.name&&o.size[0].size_name===e.name})))},toggleColorItem:function(t){this.isDisabled(t,this.curSize)||(this.curColor===t?this.curColor={name:null,text:null,image:null}:this.curColor=t)},toggleSizeItem:function(t){this.isDisabled(this.curColor,t)||(this.curSize===t?this.curSize={name:null,text:null,image:null}:this.curSize=t)},resetValue:function(){this.curColor={name:null,text:null,image:null},this.curSize={name:null,text:null,image:null}},changeQty:function(t){},getFlag:function(){this.$route.path.includes("sticky-info")&&(this.isShare=!1)}})},x=(o(375),Object(_.a)(k,(function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticClass:"product-title"},[t._v(t._s(t.product.name))]),t._v(" "),e("hr",{staticClass:"short-divider"}),t._v(" "),t.product.price?e("div",{key:"singlePrice",staticClass:"price-box"},[t.product.is_sale?[e("span",{staticClass:"new-price"},[t._v("BDT "+t._s(t._f("priceFormat")(t.product.sale_price)))]),t._v(" "),e("span",{staticClass:"old-price"},[t._v("BDT "+t._s(t._f("priceFormat")(t.product.price)))])]:[e("span",{staticClass:"new-price"},[t._v("BDT "+t._s(t._f("priceFormat")(t.product.price)))])]],2):e("div",{staticClass:"price-box"},[t.minPrice!==t.maxPrice?[e("span",{staticClass:"new-price"},[t._v("BDT "+t._s(t._f("priceFormat")(t.minPrice))+" – BDT "+t._s(t._f("priceFormat")(t.maxPrice)))])]:[e("span",{staticClass:"new-price"},[t._v("BDT "+t._s(t._f("priceFormat")(t.minPrice)))])]],2),t._v(" "),e("a",{staticClass:"btn btn-video add-cart mr-2 mt-2",attrs:{href:t.product.video_link,title:"Watch Video",target:"_blank"}},[e("svg",{staticClass:"bi bi-play-btn mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"}}),t._v(" "),e("path",{attrs:{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"}})]),t._v("\nVideo")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("ul",{staticClass:"single-info-list"},[t.product.sku?e("li",[t._v("\n\t\t\t\tSKU:\n\t\t\t\t"),e("strong",[t._v(t._s(t.product.sku))])]):t._e(),t._v(" "),e("li",[t._v("\n\t\t\t\tCATEGORY:\n\t\t\t\t"),e("nuxt-link",{attrs:{to:"/shop?category=".concat(t.product.category.id)}},[e("strong",[t._v("\n\t\t\t\t\t\t"+t._s(t.product.category.name)+" \n\t\t\t\t\t")])]),t._v(" "),t.product.sub_category_id?[t._v("\n\t\t\t\t\t>>\n\t\t\t\t\t"),e("nuxt-link",{attrs:{to:"/shop?subCategory=".concat(t.product.sub_category.id)}},[e("strong",[t._v("\n\t\t\t\t\t\t\t"+t._s(t.product.sub_category.name)+" \n\t\t\t\t\t\t")])])]:t._e(),t._v(" "),t.product.child_category_id?[t._v("\n\t\t\t\t\t>>\n\t\t\t\t\t"),e("nuxt-link",{attrs:{to:"/shop?childCategory=".concat(t.product.child_category.id)}},[e("strong",[t._v("\n\t\t\t\t\t\t\t"+t._s(t.product.child_category.name)+" \n\t\t\t\t\t\t")])])]:t._e()],2)]),t._v(" "),e("div",{staticClass:"product-action"},[e("a",{staticClass:"btn btn-dark add-cart mr-2 mt-2",attrs:{href:"javascript:;",title:"Add to Cart"},on:{click:t.addCart}},[e("svg",{staticClass:"bi bi-bag mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"}})]),t._v("  কার্টে যোগ করুন")]),t._v(" "),e("v-row",[e("a",{staticClass:"btn btn-buy-now add-cart mr-2 mt-2",attrs:{href:"javascript:;",title:"Buy Now"},on:{click:t.buyNow}},[e("svg",{staticClass:"bi bi-cart2 mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"}})]),t._v("অর্ডার করুন")]),t._v(" "),e("a",{staticClass:"btn btn-whatsapp add-cart mr-2 mt-2",attrs:{href:"https://wa.me/+8801994635351",title:"Buy Now",target:"_blank"}},[e("svg",{staticClass:"bi bi-whatsapp mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"}})]),t._v("\nWhatsapp")])]),t._v(" "),e("b-row",[e("a",{staticClass:"btn btn-messenger add-cart mr-2 mt-2",attrs:{href:"https://m.me/100064835408819",title:"Buy Now",target:"_blank"}},[e("svg",{staticClass:"bi bi-chat mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"}})]),t._v("\nMessenger")])]),t._v(" "),e("nuxt-link",{staticClass:"btn btn-gray view-cart d-none",attrs:{to:"/pages/cart"}},[t._v("View cart")])],1),t._v(" "),[e("div",{staticClass:"sticky-navbar fixed"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("a",{staticClass:"btn btn-primary width-50",attrs:{href:"javascript:;"},on:{click:t.addCart}},[t._v("\n\t\t\t\t\tকার্টে যোগ করুন\n\t\t\t\t                ")]),t._v(" "),e("a",{staticClass:"btn btn-warning width-50",attrs:{href:"javascript:;"},on:{click:t.buyNow}},[t._v("\n                    অর্ডার করুন\n                ")])])])])]],2)}),[],!1,null,null,null));e.a=x.exports},373:function(t,e,o){"use strict";o(361)},374:function(t,e,o){var r=o(38)((function(i){return i[1]}));r.push([t.i,".button-container[data-v-7b1a9d58]{display:flex;justify-content:space-between}.width-50[data-v-7b1a9d58]{width:50%}.sticky-button[data-v-7b1a9d58]{background-color:#fff;border-top:1px solid #e7e7e7;display:flex;left:0;opacity:1;position:fixed;right:0;top:100%;transition:all .25s;visibility:visible;width:100%;z-index:997}",""]),r.locals={},t.exports=r},375:function(t,e,o){"use strict";o(362)},376:function(t,e,o){var r=o(38)((function(i){return i[1]}));r.push([t.i,'.buy-now:before{content:"\\F83F";font-family:"Porto";font-size:1.8rem;font-weight:600;margin-right:7px;margin-top:-2px}.btn-video{background-color:red;color:#fff!important}.btn-video:hover{background-color:red;color:#000!important}.btn-buy-now{background-color:#eb9544;color:#fff}.btn-messenger{background-color:#0084ff;color:#fff}.btn-whatsapp{background-color:#25d366;color:#fff}.button-container{display:flex;justify-content:space-between}.width-50{width:50%}.product-title{width:100%!important}',""]),r.locals={},t.exports=r},394:function(t,e,o){"use strict";o(42),o(43),o(18);var r=o(147),c=(o(12),o(371)),n=o.n(c),l=o(13),d=o(144),h=(o(372),{components:{LightBox:n.a},props:{product:Object,isMagnify:{type:Boolean,default:!0}},data:function(){return{baseSlider1:d.a,baseSlider2:d.b,baseUrl:l.a}},computed:{lightBoxMedia:function(){return this.product.large_pictures.reduce((function(t,e){return[].concat(Object(r.a)(t),[{src:"".concat(l.a).concat(e.url),thumb:"".concat(l.a).concat(e.url)}])}),[])}},methods:{openLightBox:function(t){this.$refs.lightBox.showImage(t)}}}),v=o(6),component=Object(v.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"position-relative"},[e("div",{staticClass:"label-group"},[t.product.is_hot?e("div",{staticClass:"product-label label-hot"},[t._v("HOT")]):t._e(),t._v(" "),t.product.is_sale?e("div",{staticClass:"product-label label-sale"},[t._v("Sale")]):t._e(),t._v(" "),t.product.is_new?e("div",{staticClass:"product-label label-sale"},[t._v("New")]):t._e()]),t._v(" "),t._l(t.product.large_pictures.slice(0,3),(function(o,r){return e("div",{key:o.name,staticClass:"product-item"},[e("div",{staticClass:"inner"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"".concat(t.baseUrl).concat(o.url),expression:"`${baseUrl}${item.url}`"}],staticClass:"product-single-image",attrs:{width:o.width,height:o.height,alt:"lgPicture"}})]),t._v(" "),t.isMagnify?e("span",{staticClass:"prod-full-screen",on:{click:function(e){return t.openLightBox(r)}}},[e("i",{staticClass:"icon-plus"})]):t._e()])})),t._v(" "),e("light-box",{ref:"lightBox",attrs:{media:t.lightBoxMedia,"show-light-box":!1}})],2)}),[],!1,null,null,null);e.a=component.exports},458:function(t,e,o){"use strict";o.r(e);o(18),o(42),o(56),o(360);var r=o(357),c=o(13),n=o(394),l=o(370),d=o(385),h=o(368),v=o(369),f={directives:{Sticky:r.a},components:{PvMediaThree:n.a,PvDetailOne:l.a,PvDescOne:d.a,PvRelatedProducts:h.a,PvSmallCollection:v.a},data:function(){return{isSticky:!1,product:null,relatedProducts:null,featuredProducts:null,bestProducts:null,latestProducts:null,topRatedProducts:null,nextProduct:null,prevProduct:null,baseUrl:c.a,loaded:!1,categoryList:[],productCategory:[]}},created:function(){this.getProduct()},mounted:function(){this.resizeHandler(),window.addEventListener("resize",this.resizeHandler,{passive:!0})},destroyed:function(){window.removeEventListener("resize",this.resizeHandler)},methods:{getProduct:function(){var t=this;this.loaded=!1,c.c.get("".concat(c.a,"/products/").concat(this.$route.params.slug),{params:{demo:c.b}}).then((function(e){t.product=e.data.product,t.relatedProducts=e.data.relatedProducts,t.featuredProducts=e.data.featuredProducts,t.bestProducts=e.data.bestSellingProducts,t.latestProducts=e.data.latestProducts,t.topRatedProducts=e.data.topRatedProducts,t.prevProduct=e.data.prevProduct,t.nextProduct=e.data.nextProduct,t.product.product_categories.map((function(e){t.productCategory.push(e)})),t.loaded=!0})).catch((function(t){return{error:JSON.stringify(t)}}))},resizeHandler:function(){this.isSticky=window.innerWidth>991}}},m=o(6),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"main skeleton-body"},[e("nav",{staticClass:"breadcrumb-nav mb-3",attrs:{"aria-label":"breadcrumb"}},[e("div",{staticClass:"container"},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("nuxt-link",{attrs:{to:"/"}},[e("i",{staticClass:"icon-home"})])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item"},[e("nuxt-link",{attrs:{to:"/shop"}},[t._v("Shop")])],1),t._v(" "),t.loaded?e("li",{staticClass:"breadcrumb-item"},t._l(t.productCategory,(function(o,r){return e("nuxt-link",{key:"product-category-".concat(r),attrs:{to:{path:"/shop",query:{category:o.slug}}}},[t._v(t._s(r===t.productCategory.length-1?o.name:o.name+", "))])})),1):t._e(),t._v(" "),t.loaded?e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.product.name))]):t._e()])])]),t._v(" "),e("div",{staticClass:"container"},[t.product?e("div",{staticClass:"product-single-container product-single-info"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-5 col-md-6 product-single-gallery"},[e("pv-media-three",{attrs:{product:t.product}})],1),t._v(" "),e("div",{staticClass:"col-lg-7 col-md-6",attrs:{"sticky-container":""}},[e("div",{directives:[{name:"sticky",rawName:"v-sticky",value:t.isSticky,expression:"isSticky"}],staticClass:"sidebar-wrapper",attrs:{"sticky-offset":"{top: 80}"}},[e("div",{staticClass:"product-single-details"},[e("pv-detail-one",{attrs:{product:t.product,"prev-product":t.prevProduct,"next-product":t.nextProduct}})],1)])])]),t._v(" "),t._m(0)]):t._e()]),t._v(" "),t.product?t._e():e("div",{staticClass:"container"},[t._m(1)]),t._v(" "),e("div",{staticClass:"product-single-tabs custom-product-single-tabs bg-gray mb-4"},[e("div",{staticClass:"container"},[t.product?e("pv-desc-one",{attrs:{product:t.product}}):e("div",{staticClass:"skel-group"},[e("div",{staticClass:"tab-content col-lg-12 mb-7"})])],1)]),t._v(" "),e("div",{staticClass:"container"},[e("pv-related-products",{staticClass:"mb-1",attrs:{products:t.relatedProducts}})],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row align-items-start"},[e("div",{staticClass:"widget widget-info col-md-9 col-xl-6 pb-4 pb-md-0"},[e("ul",{staticClass:"promote"},[e("li",[e("i",{staticClass:"icon-shipped"}),t._v(" "),e("h4",[t._v("\n\t\t\t\t\t\t\t\tFREE\n\t\t\t\t\t\t\t\t"),e("br"),t._v("SHIPPING\n\t\t\t\t\t\t\t")])]),t._v(" "),e("li",[e("i",{staticClass:"icon-us-dollar"}),t._v(" "),e("h4",[t._v("\n\t\t\t\t\t\t\t\t100% MONEY\n\t\t\t\t\t\t\t\t"),e("br"),t._v("BACK GUARANTEE\n\t\t\t\t\t\t\t")])]),t._v(" "),e("li",[e("i",{staticClass:"icon-online-support"}),t._v(" "),e("h4",[t._v("\n\t\t\t\t\t\t\t\tONLINE\n\t\t\t\t\t\t\t\t"),e("br"),t._v("SUPPORT 24/7\n\t\t\t\t\t\t\t")])])])]),t._v(" "),e("div",{staticClass:"product-single-share col-md-3 col-xl-6 align-items-start justify-content-md-end mt-0"},[e("label",{staticClass:"sr-only"},[t._v("Share:")]),t._v(" "),e("div",{staticClass:"social-icons mt-0 pb-5 pb-md-0"},[e("a",{staticClass:"social-icon social-facebook icon-facebook",attrs:{href:"javascript:;",title:"Facebook"}}),t._v(" "),e("a",{staticClass:"social-icon social-twitter icon-twitter",attrs:{href:"javascript:;",title:"Twitter"}}),t._v(" "),e("a",{staticClass:"social-icon social-linkedin fab fa-linkedin-in",attrs:{href:"javascript:;",title:"Linkedin"}}),t._v(" "),e("a",{staticClass:"social-icon social-gplus fab fa-google-plus-g",attrs:{href:"javascript:;",title:"Google +"}}),t._v(" "),e("a",{staticClass:"social-icon social-mail icon-mail-alt",attrs:{href:"javascript:;",title:"Mail"}})])])])},function(){var t=this._self._c;return t("div",{staticClass:"skel-group"},[t("div",{staticClass:"summary-info-before col-lg-5 col-md-6"}),this._v(" "),t("div",{staticClass:"summary entry-summary col-lg-7 col-md-6"})])}],!1,null,null,null);e.default=component.exports}}]);