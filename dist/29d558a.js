(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{352:function(t,e,r){"use strict";var o=r(353);const n=function(t){t.directive("Sticky",o.a)};window.Vue&&Vue.use(n),o.a.install=n,e.a=o.a},353:function(module,__webpack_exports__,__webpack_require__){"use strict";const namespace="@@vue-sticky-directive",events=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],batchStyle=(t,style={},e={})=>{for(let e in style)t.style[e]=style[e];for(let r in e)e[r]&&!t.classList.contains(r)?t.classList.add(r):!e[r]&&t.classList.contains(r)&&t.classList.remove(r)};class Sticky{constructor(t,e){this.el=t,this.vm=e,this.unsubscribers=[],this.isPending=!1,this.state={isTopSticky:null,isBottomSticky:null,height:null,width:null,xOffset:null},this.lastState={top:null,bottom:null,sticked:!1};const r=this.getAttribute("sticky-offset")||{},o=this.getAttribute("sticky-side")||"top",n=this.getAttribute("sticky-z-index")||"10",c=this.getAttribute("on-stick")||null;this.options={topOffset:Number(r.top)||0,bottomOffset:Number(r.bottom)||0,shouldTopSticky:"top"===o||"both"===o,shouldBottomSticky:"bottom"===o||"both"===o,zIndex:n,onStick:c}}doBind(){if(this.unsubscribers.length>0)return;const{el:t,vm:e}=this;e.$nextTick((()=>{this.placeholderEl=document.createElement("div"),this.containerEl=this.getContainerEl(),t.parentNode.insertBefore(this.placeholderEl,t),events.forEach((t=>{const e=this.update.bind(this);this.unsubscribers.push((()=>window.removeEventListener(t,e))),this.unsubscribers.push((()=>this.containerEl.removeEventListener(t,e))),window.addEventListener(t,e,{passive:!0}),this.containerEl.addEventListener(t,e,{passive:!0})}))}))}doUnbind(){this.unsubscribers.forEach((t=>t())),this.unsubscribers=[],this.resetElement()}update(){this.isPending||(requestAnimationFrame((()=>{this.isPending=!1,this.recomputeState(),this.updateElements()})),this.isPending=!0)}isTopSticky(){if(!this.options.shouldTopSticky)return!1;const t=this.state.placeholderElRect.top,e=this.state.containerElRect.bottom,r=this.options.topOffset,o=this.options.bottomOffset;return t<=r&&e>=o}isBottomSticky(){if(!this.options.shouldBottomSticky)return!1;const t=window.innerHeight-this.state.placeholderElRect.top-this.state.height,e=window.innerHeight-this.state.containerElRect.top,r=this.options.topOffset;return t<=this.options.bottomOffset&&e>=r}recomputeState(){this.state=Object.assign({},this.state,{height:this.getHeight(),width:this.getWidth(),xOffset:this.getXOffset(),placeholderElRect:this.getPlaceholderElRect(),containerElRect:this.getContainerElRect()}),this.state.isTopSticky=this.isTopSticky(),this.state.isBottomSticky=this.isBottomSticky()}fireEvents(){"function"!=typeof this.options.onStick||this.lastState.top===this.state.isTopSticky&&this.lastState.bottom===this.state.isBottomSticky&&this.lastState.sticked===(this.state.isTopSticky||this.state.isBottomSticky)||(this.lastState={top:this.state.isTopSticky,bottom:this.state.isBottomSticky,sticked:this.state.isBottomSticky||this.state.isTopSticky},this.options.onStick(this.lastState))}updateElements(){const t={paddingTop:0},e={position:"static",top:"auto",bottom:"auto",left:"auto",width:"auto",zIndex:this.options.zIndex},r={"vue-sticky-el":!0,"top-sticky":!1,"bottom-sticky":!1};if(this.state.isTopSticky){e.position="fixed",e.top=this.options.topOffset+"px",e.left=this.state.xOffset+"px",e.width=this.state.width+"px";const o=this.state.containerElRect.bottom-this.state.height-this.options.bottomOffset-this.options.topOffset;o<0&&(e.top=o+this.options.topOffset+"px"),t.paddingTop=this.state.height+"px",r["top-sticky"]=!0}else if(this.state.isBottomSticky){e.position="fixed",e.bottom=this.options.bottomOffset+"px",e.left=this.state.xOffset+"px",e.width=this.state.width+"px";const o=window.innerHeight-this.state.containerElRect.top-this.state.height-this.options.bottomOffset-this.options.topOffset;o<0&&(e.bottom=o+this.options.bottomOffset+"px"),t.paddingTop=this.state.height+"px",r["bottom-sticky"]=!0}else t.paddingTop=0;batchStyle(this.el,e,r),batchStyle(this.placeholderEl,t,{"vue-sticky-placeholder":!0}),this.fireEvents()}resetElement(){["position","top","bottom","left","width","zIndex"].forEach((t=>{this.el.style.removeProperty(t)})),this.el.classList.remove("bottom-sticky","top-sticky");const{parentNode:t}=this.placeholderEl;t&&t.removeChild(this.placeholderEl)}getContainerEl(){let t=this.el.parentNode;for(;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){if(t.hasAttribute("sticky-container"))return t;t=t.parentNode}return this.el.parentNode}getXOffset(){return this.placeholderEl.getBoundingClientRect().left}getWidth(){return this.placeholderEl.getBoundingClientRect().width}getHeight(){return this.el.getBoundingClientRect().height}getPlaceholderElRect(){return this.placeholderEl.getBoundingClientRect()}getContainerElRect(){return this.containerEl.getBoundingClientRect()}getAttribute(name){const expr=this.el.getAttribute(name);let result;if(expr)if(this.vm[expr])result=this.vm[expr];else try{result=eval(`(${expr})`)}catch(t){result=expr}return result}}__webpack_exports__.a={inserted(t,e,r){(void 0===e.value||e.value)&&(t[namespace]=new Sticky(t,r.context),t[namespace].doBind())},unbind(t,e,r){t[namespace]&&(t[namespace].doUnbind(),t[namespace]=void 0)},componentUpdated(t,e,r){void 0===e.value||e.value?(t[namespace]||(t[namespace]=new Sticky(t,r.context)),t[namespace].doBind()):t[namespace]&&t[namespace].doUnbind()}}},387:function(t,e,r){"use strict";r(19),r(12),r(23);var o={components:{PvProductNav:r(357).a},props:{product:Object,prevProduct:Object,nextProduct:Object,isTitle:{type:Boolean,default:!0},isProductNav:{type:Boolean,default:!0}},data:function(){return{minPrice:0,maxPrice:0}},mounted:function(){var t=this;this.product.variants&&!this.product.price&&(this.minPrice=this.product.variants[0].price,this.product.variants.forEach((function(e){var r=e.sale_price?e.sale_price:e.price;t.minPrice>r&&(t.minPrice=r),t.maxPrice<r&&(t.maxPrice=r)})))}},n=r(6),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-single-details"},[t.isTitle?e("div",[e("h1",{staticClass:"product-title mb-1"},[t._v(t._s(t.product.name))]),t._v(" "),e("div",{staticClass:"product-nav pt-2 ml-5 top-0 float-right"},[t.isProductNav?e("pv-product-nav",{attrs:{"prev-product":t.prevProduct,"next-product":t.nextProduct}}):t._e()],1)]):t._e(),t._v(" "),t.isTitle?e("div",{staticClass:"ratings-container"},[e("div",{staticClass:"product-ratings"},[e("span",{staticClass:"ratings",style:"width:"+20*t.product.ratings+"%"}),t._v(" "),e("span",{staticClass:"tooltiptext tooltip-top"},[t._v(t._s(t._f("priceFormat")(t.product.ratings)))])]),t._v(" "),t.product.reviews>0?e("a",{staticClass:"rating-link",attrs:{href:"javascript:;"}},[t._v("( "+t._s(t.product.reviews)+" Reviews )")]):e("a",{staticClass:"rating-link",attrs:{href:"javascript:;"}},[t._v("( There is no review yet. )")])]):t._e(),t._v(" "),t.isTitle?e("hr",{staticClass:"short-divider"}):t._e(),t._v(" "),t.product.price?e("div",{key:"singlePrice",staticClass:"price-box pt-1"},[t.product.is_sale?[e("span",{staticClass:"new-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.sale_price)))]),t._v(" "),e("span",{staticClass:"old-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.price)))])]:[e("span",{staticClass:"new-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.price)))])]],2):e("div",{staticClass:"price-box pt-1"},[t.minPrice!==t.maxPrice?[e("span",{staticClass:"new-price"},[t._v("$"+t._s(t._f("priceFormat")(t.minPrice))+" – $"+t._s(t._f("priceFormat")(t.maxPrice)))])]:[e("span",{staticClass:"new-price"},[t._v("$"+t._s(t._f("priceFormat")(t.minPrice)))])]],2),t._v(" "),t.product.short_description?e("div",{staticClass:"product-desc"},[e("p",[t._v(t._s(t.product.short_description))])]):t._e(),t._v(" "),e("ul",{staticClass:"single-info-list"},[t.product.sku?e("li",[t._v("\n\t\t\tSKU:\n\t\t\t"),e("strong",[t._v(t._s(t.product.sku))])]):t._e(),t._v(" "),e("li",[t._v("\n\t\t\tCATEGORY:\n\t\t\t"),e("strong",t._l(t.product.product_categories,(function(r,o){return e("nuxt-link",{key:"product-category-"+o,staticClass:"product-category",attrs:{to:{path:"/shop",query:{category:r.slug}}}},[t._v("\n\t\t\t\t\t"+t._s(r.name)+"\n\t\t\t\t\t"),o<t.product.product_categories.length-1?[t._v(",")]:t._e()],2)})),1)]),t._v(" "),t.product.product_tags.length>0?e("li",[t._v("\n\t\t\tTAGS:\n\t\t\t"),e("strong",t._l(t.product.product_tags,(function(r,o){return e("nuxt-link",{key:"product-category-"+o,staticClass:"product-category",attrs:{to:{path:"/shop",query:{tag:r.slug}}}},[t._v("\n\t\t\t\t\t"+t._s(r.name)+"\n\t\t\t\t\t"),o<t.product.product_tags.length-1?[t._v(",")]:t._e()],2)})),1)]):t._e()])])}),[],!1,null,null,null);e.a=component.exports},388:function(t,e,r){"use strict";r(40),r(19),r(25),r(22),r(34),r(35),r(28);var o=r(7),n=(r(95),r(41),r(12),r(23),r(55),r(18)),c=r(146),l=r(357),h=r(13);function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var v={components:{VueSlideToggle:c.a,PvProductNav:l.a},props:{product:Object},data:function(){return{minPrice:0,maxPrice:0,qty:1,currentIndex:0,baseUrl:h.a,vSizes:[],vColors:[],curSize:{name:null,text:null,image:null},curColor:{name:null,text:null,image:null},tIndex:0,isShare:{type:Boolean,default:!0}}},watch:{$route:function(){this.getFlag()}},computed:m(m({},Object(n.c)("wishlist",["wishList"])),{},{isWishlisted:function(){var t=this;return this.wishList.findIndex((function(e){return e.name===t.product.name}))>-1},curIndex:function(){var t=this;if(null!==this.curColor.name&&0===this.vSizes.length){var e=this.product.variants.findIndex((function(e){return e.colors[0].color_name===t.curColor.name}));return this.tIndex=e,e}if(null!==this.curSize.name&&0===this.vColors.length){var r=this.product.variants.findIndex((function(e){return e.size[0].size_name===t.curSize.name}));return this.tIndex=r,r}if(null!==this.curColor.name&&null!==this.curSize.name){var o=this.product.variants.findIndex((function(e){return e.colors[0].color_name===t.curColor.name&&e.size[0].size_name===t.curSize.name}));return this.tIndex=o,o}return this.tIndex},isCartActive:function(){return!(this.product.stock<parseInt(this.qty))&&(0===this.product.variants.length||(null!==this.curSize.name&&null!==this.curColor.name||(null!==this.curColor.name&&0===this.vSizes.length||null!==this.curSize.name&&0===this.vColors.length)))},isPriceShow:function(){return null!==this.curSize.name&&null!==this.curColor.name||(null!==this.curColor.name&&0===this.vSizes.length||null!==this.curSize.name&&0===this.vColors.length)}}),mounted:function(){var t=this;this.product.variants&&!this.product.price&&(this.minPrice=this.product.variants[0].price,this.product.variants.forEach((function(e){var r=e.sale_price?e.sale_price:e.price;t.minPrice>r&&(t.minPrice=r),t.maxPrice<r&&(t.maxPrice=r)}))),this.product.variants.length>0&&(this.product.variants[0].size[0]&&this.product.variants.forEach((function(e){-1===t.vSizes.findIndex((function(t){return t.name===e.size[0].size_name}))&&t.vSizes.push({name:e.size[0].size_name,text:e.size[0].size,image:e.size[0].size_thumbnail})})),this.product.variants[0].colors[0]&&this.product.variants.forEach((function(e){-1===t.vColors.findIndex((function(t){return t.name===e.colors[0].color_name}))&&t.vColors.push({name:e.colors[0].color_name,text:e.colors[0].color,image:e.colors[0].color_thumbnail})})))},methods:m(m(m({},Object(n.b)("cart",["addToCart"])),Object(n.b)("wishlist",["addToWishlist"])),{},{plusQty:function(){this.qty<this.product.stock&&this.qty++},minusQty:function(){this.qty>1&&this.qty--},addCart:function(){if(this.isCartActive){var t,e;if(this.product.variants.length>0)e=this.product.price?this.product.sale_price?this.product.sale_price:this.product.price:this.product.variants[this.curIndex].sale_price?this.product.variants[this.curIndex].sale_price:this.product.variants[this.curIndex].price,t=m(m({},this.product),{},{qty:this.qty,name:this.product.name+" - "+this.curColor.name.charAt(0).toUpperCase()+this.curColor.name.slice(1)+", "+this.curSize.name,price:e});else t=m(m({},this.product),{},{qty:this.qty,price:this.product.sale_price?this.product.sale_price:this.product.price});this.addToCart({product:t})}},addWishlist:function(t){var e=this;t.currentTarget.classList.add("load-more-overlay","loading"),setTimeout((function(){e.addToWishlist({product:e.product}),document.querySelector(".wishlist-popup").classList.add("active"),setTimeout((function(){document.querySelector(".wishlist-popup").classList.remove("active")}),1e3)}),1e3)},isDisabled:function(t,e){return!(!t.name||!e.name)&&(0===this.vSizes.length?-1===this.product.variants.findIndex((function(e){return e.colors[0].color_name===t.name})):0===this.vColors.length?-1===this.product.variants.findIndex((function(t){return t.size[0].size_name===e.name})):-1===this.product.variants.findIndex((function(r){return r.colors[0].color_name===t.name&&r.size[0].size_name===e.name})))},toggleColorItem:function(t){this.isDisabled(t,this.curSize)||(this.curColor===t?this.curColor={name:null,text:null,image:null}:this.curColor=t)},toggleSizeItem:function(t){this.isDisabled(this.curColor,t)||(this.curSize===t?this.curSize={name:null,text:null,image:null}:this.curSize=t)},resetValue:function(){this.curColor={name:null,text:null,image:null},this.curSize={name:null,text:null,image:null}},changeQty:function(t){}})},f=r(6),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("div",[t.product.variants.length>0?e("div",{staticClass:"product-filters-container custom-product-filters pt-0 pb-0 mb-0"},[t.vColors.length>0?e("div",{staticClass:"product-single-filter"},[e("label",[t._v("Color:")]),t._v(" "),e("ul",{staticClass:"config-size-list config-color-list config-filter-list"},t._l(t.vColors,(function(r,o){return e("li",{key:"variant-color-"+o,class:{disabled:t.isDisabled(r,t.curSize),active:t.curColor===r},on:{click:function(e){return t.toggleColorItem(r)}}},[r.image[0]?e("a",{key:"thumbForm",staticClass:"filter-thumb p-0",class:{disabled:t.isDisabled(r,t.curSize)},attrs:{href:"javascript:;"}},[e("img",{attrs:{src:"".concat(t.baseUrl).concat(r.image[0].url),width:r.image[0].width,height:r.image[0].height,alt:"color thumb"}})]):e("a",{key:"colorForm",staticClass:"filter-color border-0",class:{disabled:t.isDisabled(r,t.curSize)},style:{backgroundColor:r.text},attrs:{href:"javascript:;"}})])})),0)]):t._e(),t._v(" "),t.vSizes.length>0?e("div",{staticClass:"product-single-filter"},[e("label",[t._v("Size:")]),t._v(" "),e("ul",{staticClass:"config-size-list"},t._l(t.vSizes,(function(r,o){return e("li",{key:"variant-size-"+o,class:{disabled:t.isDisabled(t.curColor,r),active:t.curSize===r},on:{click:function(e){return t.toggleSizeItem(r)}}},[r.image[0]?e("a",{key:"thumbSizeForm",staticClass:"filter-thumb p-0",class:{disabled:t.isDisabled(r,t.curSize)},attrs:{href:"javascript:;"}},[e("img",{attrs:{src:"".concat(t.baseUrl).concat(r.image[0].url),width:r.image[0].width,height:r.image[0].height,alt:"size thumb"}})]):e("a",{staticClass:"d-flex align-items-center justify-content-center",class:{disabled:t.isDisabled(t.curColor,r)},attrs:{href:"javascript:;"}},[r.text?[t._v(t._s(r.text))]:e("img",{attrs:{src:"".concat(t.baseUrl).concat(r.thumbnail[0]),alt:"thumb-image"}})],2)])})),0)]):t._e(),t._v(" "),e("div",{staticClass:"product-single-filter"},[e("vue-slide-toggle",{attrs:{open:null!==t.curColor.name||null!==t.curSize.name}},[e("label"),t._v(" "),e("a",{staticClass:"font1 text-uppercase clear-btn",attrs:{href:"javascript:;"},on:{click:t.resetValue}},[t._v("Clear")])])],1)]):t._e(),t._v(" "),e("div",{staticClass:"product-action"},[t.product.variants.length>0?e("vue-slide-toggle",{attrs:{open:t.isPriceShow}},[t.minPrice===t.maxPrice||t.product.price?e("div",{key:"samePrice",staticClass:"price-box product-filtered-price"},[e("span",{staticClass:"product-stock"},[t._v(t._s(t.product.stock)+" in stock")])]):e("div",{staticClass:"price-box product-filtered-price"},[t.product.variants[t.curIndex].sale_price?[e("del",{staticClass:"old-price"},[e("span",[t._v("$"+t._s(t._f("priceFormat")(t.product.variants[t.curIndex].price)))])]),t._v(" "),e("span",{staticClass:"product-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.variants[t.curIndex].sale_price)))])]:[e("span",{staticClass:"product-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.variants[t.curIndex].price)))])]],2)]):t._e(),t._v(" "),e("div",{staticClass:"product-single-qty d-flex align-items-center mb-1 pb-2 mt-0"},[e("label",{staticClass:"mr-3 mb-0"},[t._v("QTY:")]),t._v(" "),e("div",{staticClass:"input-group bootstrap-touchspin bootstrap-touchspin-injected"},[e("span",{staticClass:"input-group-btn input-group-prepend"},[e("button",{staticClass:"btn btn-outline btn-down-icon bootstrap-touchspin-down",attrs:{type:"button"},on:{click:t.minusQty}})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.qty,expression:"qty",modifiers:{number:!0}}],staticClass:"horizontal-quantity form-control bg-transparent",attrs:{type:"text",max:t.product.stock},domProps:{value:t.qty},on:{change:function(e){return t.changeQty(e)},input:function(e){e.target.composing||(t.qty=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),e("span",{staticClass:"input-group-btn input-group-append"},[e("button",{staticClass:"btn btn-outline btn-up-icon bootstrap-touchspin-up",attrs:{type:"button"},on:{click:t.plusQty}})])])]),t._v(" "),e("a",{staticClass:"btn btn-dark add-cart mr-2",class:{disabled:!t.isCartActive},attrs:{href:"javascript:;",title:"Add to Cart"},on:{click:t.addCart}},[t._v("Add to Cart")]),t._v(" "),e("nuxt-link",{staticClass:"btn btn-gray view-cart d-none",attrs:{to:"/pages/cart"}},[t._v("View cart")])],1),t._v(" "),t.isWishlisted?e("nuxt-link",{staticClass:"btn-icon-wish add-wishlist added-wishlist p-0",attrs:{to:"/pages/wishlist",title:"Go to Wishlist"}},[e("i",{staticClass:"icon-wishlist-2"}),t._v(" "),e("span",[t._v("Go to Wishlist")])]):t._e(),t._v(" "),t.isWishlisted?t._e():e("a",{staticClass:"btn-icon-wish add-wishlist p-0",attrs:{href:"javascript:;",title:"Add to Wishlist"},on:{click:function(e){return t.addWishlist(e)}}},[e("i",{staticClass:"icon-wishlist-2"}),t._v(" "),e("span",[t._v("Add to Wishlist")])])],1)}),[],!1,null,null,null);e.a=component.exports}}]);