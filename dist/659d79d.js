(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{354:function(t,e,r){"use strict";r(41),r(19),r(25),r(22),r(34),r(35),r(28);var c=r(7),o=(r(95),r(12),r(42),r(23),r(43),r(55),r(147)),n=r(18),l=r(13);function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){Object(c.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var v={components:{PvCountDown:o.a},props:{product:Object,adClass:String,isActions:{type:Boolean,default:!0}},data:function(){return{baseUrl:l.a,minPrice:0,maxPrice:0,discount:0}},computed:h(h({},Object(n.c)("wishlist",["wishList"])),{},{isWishlisted:function(){var t=this;return this.wishList.findIndex((function(e){return e.name===t.product.name}))>-1}}),mounted:function(){var t=this;console.log(this.product),this.product.is_sale&&this.product.price&&(this.discount=(this.product.price-this.product.sale_price)/this.product.price*100,this.discount=parseInt(this.discount)),this.product.price||(this.minPrice=this.product.variants[0].price,this.product.variants.forEach((function(e){var r=e.is_sale?e.sale_price:e.price;t.minPrice>r&&(t.minPrice=r),t.maxPrice<r&&(t.maxPrice=r)})))},methods:h(h(h({},Object(n.b)("wishlist",["addToWishlist"])),Object(n.b)("cart",["addToCart"])),{},{openQuickview:function(){this.$modal.show((function(){return Promise.all([r.e(1),r.e(4)]).then(r.bind(null,449))}),{slug:this.product.slug},{width:"931",height:"auto",adaptive:!0,class:"quickview-modal"})},addWishlist:function(t){var e=this;t.currentTarget.classList.add("load-more-overlay","loading"),setTimeout((function(){e.addToWishlist({product:e.product}),document.querySelector(".wishlist-popup").classList.add("active"),setTimeout((function(){document.querySelector(".wishlist-popup").classList.remove("active")}),1e3)}),1e3)},addCart:function(){if(this.product.stock>0){var t=h({},this.product);this.product.is_sale&&(t.price=this.product.sale_price),this.addToCart({product:t})}}})},f=r(6),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-default inner-quickview inner-icon"},[e("figure",{staticClass:"img-effect"},[e("nuxt-link",{attrs:{to:"/product/default/".concat(t.product.slug)}},t._l(t.product.large_pictures.slice(0,2),(function(t,r){return e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.original_url,expression:"item.original_url"}],key:"related-large-".concat(r),attrs:{alt:"large-picture",width:t.width,height:t.height}})})),0),t._v(" "),e("div",{staticClass:"label-group"},[t.product.is_hot?e("div",{staticClass:"product-label label-hot"},[t._v("HOT")]):t._e(),t._v(" "),t.product.is_sale&&!t.product.price?e("div",{staticClass:"product-label label-sale"},[t._v("Sale")]):t._e(),t._v(" "),t.product.is_sale&&t.product.price?e("div",{staticClass:"product-label label-sale"},[t._v("-"+t._s(t.discount)+"%")]):t._e()]),t._v(" "),e("a",{staticClass:"btn-quickview",attrs:{href:"javascript:;",title:"Quick View"},on:{click:t.addCart}},[t._v("Add To Cart")])],1),t._v(" "),e("div",{staticClass:"product-details"},[e("div",{staticClass:"category-wrap"},[e("div",{staticClass:"category-list"},t._l(t.product.product_categories,(function(r,c){return e("span",{key:"product-category-".concat(c)},[e("nuxt-link",{attrs:{to:{path:"/shop",query:{category:r.slug}}}},[t._v(t._s(r.name))]),t._v(" "),c<t.product.product_categories.length-1?[t._v(",")]:t._e()],2)})),0)]),t._v(" "),e("h3",{staticClass:"product-title"},[e("nuxt-link",{attrs:{to:"/product/default/"+t.product.slug}},[t._v(t._s(t.product.name))])],1),t._v(" "),t.product.price?e("div",{key:"singlePrice",staticClass:"price-box"},[t.product.is_sale?[e("span",{staticClass:"old-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.price)))]),t._v(" "),e("span",{staticClass:"product-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.sale_price)))])]:[e("span",{staticClass:"product-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.price)))])]],2):e("div",{staticClass:"price-box"},[t.minPrice!==t.maxPrice?[e("span",{staticClass:"product-price"},[t._v("$"+t._s(t._f("priceFormat")(t.minPrice))+" – $"+t._s(t._f("priceFormat")(t.maxPrice)))])]:[e("span",{staticClass:"product-price"},[t._v("$"+t._s(t._f("priceFormat")(t.minPrice)))])]],2)])])}),[],!1,null,null,null);e.a=component.exports},358:function(t,e,r){"use strict";r(19),r(25),r(22),r(34),r(35),r(28),r(23);var c=r(7),o=(r(77),r(118),r(226),r(12),r(38),r(94),r(146)),n=r(355),l=r(145),d=r(150),h=r(372),v=r(144);function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){Object(c.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var m={components:{VueSlideToggle:o.a,VueTreeList:n.VueTreeList,PvSmallProduct:d.a,PvCarousel:l.a},props:{categoryList:Array,featuredProducts:Array},data:function(){return{catOpened:!0,priceOpenened:!0,sizeOpened:!0,colorOpened:!0,brandOpened:!0,prices:[0,1e3],priceSettings:{connect:!0,step:50,margin:100,range:{min:0,max:1e3}},shopColors:h.b,shopSizes:h.c,shopBrands:h.a,baseSlider1:v.a,emptyObject:{},isFeatured:!0,priceReset:!0,currentCategory:""}},watch:{$route:function(){this.getFlag(),this.$route.query.min_price?this.prices=[this.$route.query.min_price,this.$route.query.max_price]:this.prices=[0,1e3],this.priceReset=!1,this.currentCategory=this.$route.query.category,this.$nextTick((function(){this.priceReset=!0}))}},created:function(){this.getFlag(),this.$route.query.min_price?this.prices=[this.$route.query.min_price,this.$route.query.max_price]:this.prices=[0,1e3]},computed:{categoryTree:function(){return new n.Tree(this.categoryList)},priceFilterRoute:function(){return{path:this.$route.path,query:_(_({},this.$route.query),{},{page:1,max_price:this.prices[1],min_price:this.prices[0]})}},isEmptyQuery:function(){return 0===Object.entries(this.$route.query).length}},methods:{colorFilterRoute:function(t){var e=this.$route.query.color?this.$route.query.color.split(","):[],r=e.indexOf(t.name);return r>-1?e.splice(r,1):e.push(t.name),{path:this.$route.path,query:_(_({},this.$route.query),{},{page:1,color:e.toString()})}},sizeFilterRoute:function(t){var e=this.$route.query.size?this.$route.query.size.split(","):[],r=e.indexOf(t.size);return r>-1?e.splice(r,1):e.push(t.size),{path:this.$route.path,query:_(_({},this.$route.query),{},{size:e.toString(),page:1})}},brandFilterRoute:function(t){var e=this.$route.query.brand?this.$route.query.brand.split(","):[],r=e.indexOf(t.name);return r>-1?e.splice(r,1):e.push(t.name),{path:this.$route.path,query:_(_({},this.$route.query),{},{brand:e.toString(),page:1})}},isActivedColor:function(t){return this.$route.query.color&&this.$route.query.color.split(",").includes(t.name)},isActivedSize:function(t){return this.$route.query.size&&this.$route.query.size.split(",").includes(t.size)},isActivedBrand:function(t){return this.$route.query.brand&&this.$route.query.brand.split(",").includes(t.name)},getFlag:function(){this.$route.path.includes("horizontal-filter-1")&&(this.isFeatured=!1)}}},y=r(6),component=Object(y.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-wrapper"},[0===t.categoryList.length?e("div",{staticClass:"sidebar-content skeleton-body"},[e("aside",{staticClass:"widget"})]):e("div",{staticClass:"widget widget-product-categories"},[e("h3",{staticClass:"widget-title"},[e("a",{class:{collapsed:!t.catOpened},attrs:{"data-toggle":"collapse",href:"javascript:;"},on:{click:function(e){t.catOpened=!t.catOpened}}},[t._v("Categories")])]),t._v(" "),e("vue-slide-toggle",{attrs:{open:t.catOpened}},[e("div",{staticClass:"widget-body"},[e("vue-tree-list",{attrs:{model:t.categoryTree,"default-expanded":!1},scopedSlots:t._u([{key:"leafNameDisplay",fn:function(r){return[e("nuxt-link",{class:{active:r.model.slug===t.currentCategory},attrs:{to:{path:t.$route.path,query:{category:r.model.slug,page:1}}}},[t._v("\n\t\t\t\t\t\t\t"+t._s(r.model.name)+"\n\t\t\t\t\t\t\t")])]}},{key:"treeNodeIcon",fn:function(){return[e("span")]},proxy:!0}])})],1)])],1),t._v(" "),e("vue-slide-toggle",{attrs:{open:!t.isEmptyQuery}},[e("div",{staticClass:"widget"},[e("nuxt-link",{staticClass:"btn btn-primary reset-filter-btn router-link-active",attrs:{to:{path:t.$router.path}}},[t._v("Reset All Filters")])],1)]),t._v(" "),e("div",{staticClass:"widget"},[e("h3",{staticClass:"widget-title"},[e("a",{class:{collapsed:!t.priceOpenened},attrs:{"data-toggle":"collapse",href:"javascript:;"},on:{click:function(e){t.priceOpenened=!t.priceOpenened}}},[t._v("Price")])]),t._v(" "),e("vue-slide-toggle",{attrs:{open:t.priceOpenened}},[e("div",{staticClass:"widget-body pb-0"},[e("form",{attrs:{action:"#"}},[e("div",{staticClass:"price-slider-wrapper"},[t.priceReset?e("vue-nouislider",{attrs:{config:t.priceSettings,values:t.prices,id:"price-slider"}}):t._e()],1),t._v(" "),e("div",{staticClass:"filter-price-action d-flex align-items-center justify-content-between flex-wrap"},[e("div",{staticClass:"filter-price-text"},[t._v("Price: $"+t._s(t.prices[0])+" - $"+t._s(t.prices[1]))]),t._v(" "),e("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:t.priceFilterRoute}},[t._v("Filter")])],1)])])])],1),t._v(" "),e("div",{staticClass:"widget widget-color"},[e("h3",{staticClass:"widget-title"},[e("a",{class:{collapsed:!t.colorOpened},attrs:{"data-toggle":"collapse",href:"javascript:;"},on:{click:function(e){t.colorOpened=!t.colorOpened}}},[t._v("Color")])]),t._v(" "),e("vue-slide-toggle",{attrs:{open:t.colorOpened}},[e("div",{staticClass:"widget-body pb-0"},[e("ul",{staticClass:"config-swatch-list"},t._l(t.shopColors,(function(r,c){return e("li",{key:"color-filter"+c,class:{active:t.isActivedColor(r)}},[e("nuxt-link",{style:{backgroundColor:r.color},attrs:{to:t.colorFilterRoute(r)}})],1)})),0)])])],1),t._v(" "),e("div",{staticClass:"widget widget-size d-none"},[e("h3",{staticClass:"widget-title"},[e("a",{class:{collapsed:!t.sizeOpened},attrs:{href:"javascript:;"},on:{click:function(e){t.sizeOpened=!t.sizeOpened}}},[t._v("Sizes")])]),t._v(" "),e("vue-slide-toggle",{attrs:{open:t.sizeOpened}},[e("div",{staticClass:"widget-body pb-0"},[e("ul",{staticClass:"config-size-list"},t._l(t.shopSizes,(function(r,c){return e("li",{key:"size-filter"+c,class:{active:t.isActivedSize(r)}},[e("nuxt-link",{attrs:{to:t.sizeFilterRoute(r)}},[t._v(t._s(r.size))])],1)})),0)])])],1),t._v(" "),t.isFeatured?e("div",{staticClass:"widget widget-featured d-none"},[e("h3",{staticClass:"widget-title"},[t._v("Featured")]),t._v(" "),e("div",{staticClass:"widget-body"},[e("pv-carousel",{staticClass:"widget-featured-products",attrs:{options:t.baseSlider1}},[e("div",{staticClass:"featured-col swiper-slide"},t._l(t.featuredProducts,(function(t,r){return e("pv-small-product",{key:"featured"+r,attrs:{product:t,"is-lazy":!1}})})),1),t._v(" "),e("div",{staticClass:"featured-col swiper-slide"},t._l(t.featuredProducts,(function(t,r){return e("pv-small-product",{key:"featured"+r,attrs:{product:t,"is-lazy":!1}})})),1)])],1)]):t._e(),t._v(" "),e("div",{staticClass:"widget widget-brand"},[e("h3",{staticClass:"widget-title"},[e("a",{class:{collapsed:!t.brandOpened},attrs:{href:"javascript:;"},on:{click:function(e){t.brandOpened=!t.brandOpened}}},[t._v("Brand")])]),t._v(" "),e("vue-slide-toggle",{attrs:{open:t.brandOpened}},[e("div",{staticClass:"widget-body pb-0"},[e("ul",{staticClass:"config-brand-list mb-0"},t._l(t.shopBrands,(function(r,c){return e("li",{key:"brand-filter"+c,class:{active:t.isActivedBrand(r)}},[e("nuxt-link",{attrs:{to:t.brandFilterRoute(r)}},[t._v(t._s(r.brand))])],1)})),0)])])],1)],1)}),[],!1,null,null,null);e.a=component.exports},363:function(t,e,r){"use strict";r(25),r(22),r(34),r(35),r(28),r(12),r(23);var c=r(7);r(149);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(c.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={props:{totalCount:Number,itemsPerPage:Number},data:function(){return{pageNumbers:[],totalPage:0,currentPage:1}},computed:{prevPage:function(){var t=this.$route.params.page&&this.$route.params.page>1?this.$route.params.page-1:1;return n(n({},this.$route),{},{query:n(n({},this.$route.query),{},{page:t})})},nextPage:function(){var t=this.$route.params.page&&this.$route.params.page<this.totalPage?this.$route.params.page+1:this.totalPage;return n(n({},this.$route),{},{query:n(n({},this.$route.query),{},{page:t})})}},watch:{$route:function(){this.getPageNumbers(),this.currentPage=this.$route.query.page},itemsPerPage:function(){this.getPageNumbers()}},created:function(){this.getPageNumbers(),this.currentPage=this.$route.query.page?this.$route.query.page:1},methods:{getPageNumbers:function(){this.totalPage=parseInt(this.totalCount/this.itemsPerPage)+(0<this.totalCount%this.itemsPerPage?1:0),this.pageNumbers=[];for(var i=-1;i<2&&this.totalPage>=3;i++)1<this.currentPage&&this.currentPage<this.totalPage&&this.pageNumbers.push(this.currentPage+i),1===this.currentPage&&this.pageNumbers.push(this.currentPage+i+1),this.currentPage===this.totalPage&&this.pageNumbers.push(this.currentPage+i-1);for(var t=0;t<this.totalPage&&this.totalPage<3;t++)this.pageNumbers.push(t+1)},getPageLinkUrl:function(t){return n(n({},this.$route.path),{},{query:n(n({},this.$route.query),{},{page:t})})},changePage:function(t){this.currentPage=t}}},d=r(6),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return t.pageNumbers.length>1?e("ul",{staticClass:"pagination toolbox-item mb-0"},[t.currentPage>1?e("li",{staticClass:"page-item"},[e("nuxt-link",{staticClass:"page-link page-link-btn",attrs:{to:t.prevPage}},[e("i",{staticClass:"icon-angle-left"})])],1):t._e(),t._v(" "),t._l(t.pageNumbers,(function(r){return e("li",{key:"page"+r,staticClass:"page-item",on:{click:function(e){return t.changePage(r)}}},[e("nuxt-link",{staticClass:"page-link",class:{active:r===t.currentPage},attrs:{to:t.getPageLinkUrl(r)}},[t._v("\n\t\t\t"+t._s(r)+"\n\t\t\t"),e("span",{staticClass:"sr-only"},[t._v("(current)")])])],1)})),t._v(" "),t.currentPage<t.totalPage?e("li",{staticClass:"page-item"},[e("nuxt-link",{staticClass:"page-link page-link-btn",attrs:{to:t.nextPage}},[e("i",{staticClass:"icon-angle-right"})])],1):t._e()],2):t._e()}),[],!1,null,null,null);e.a=component.exports},371:function(t,e,r){"use strict";r(40),r(41),r(19),r(25),r(22),r(34),r(35),r(28);var c=r(7),o=(r(95),r(12),r(42),r(23),r(43),r(55),r(18)),n=r(13);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(c.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h={props:{product:Object,adClass:String},data:function(){return{baseUrl:n.a,minPrice:0,maxPrice:0,discount:0}},computed:d(d({},Object(o.c)("wishlist",["wishList"])),{},{isWishlisted:function(){var t=this;return this.wishList.findIndex((function(e){return e.name===t.product.name}))>-1}}),mounted:function(){var t=this;this.product.is_sale&&this.product.price&&(this.discount=(this.product.price-this.product.sale_price)/this.product.price*100,this.discount=parseInt(this.discount)),this.product.price||(this.minPrice=this.product.variants[0].price,this.product.variants.forEach((function(e){var r=e.is_sale?e.sale_price:e.price;t.minPrice>r&&(t.minPrice=r),t.maxPrice<r&&(t.maxPrice=r)})))},methods:d(d(d({},Object(o.b)("wishlist",["addToWishlist"])),Object(o.b)("cart",["addToCart"])),{},{openQuickview:function(){this.$modal.show((function(){return Promise.all([r.e(1),r.e(4)]).then(r.bind(null,449))}),{slug:this.product.slug},{width:"931",height:"auto",adaptive:!0,class:"quickview-modal"})},addWishlist:function(t){var e=this;t.currentTarget.classList.add("load-more-overlay","loading"),setTimeout((function(){e.addToWishlist({product:e.product}),document.querySelector(".wishlist-popup").classList.add("active"),setTimeout((function(){document.querySelector(".wishlist-popup").classList.remove("active")}),1e3)}),1e3)},addCart:function(){if(this.product.stock>0){var t=d({},this.product);this.product.is_sale&&(t.price=this.product.sale_price),this.addToCart({product:t})}}})},v=r(6),component=Object(v.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-default left-details product-list"},[e("figure",[e("nuxt-link",{attrs:{to:"/product/default/".concat(t.product.slug)}},t._l(t.product.large_pictures.slice(0,2),(function(r,c){return e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"".concat(t.baseUrl).concat(r.url),expression:"`${baseUrl}${item.url}`"}],key:"related-large-".concat(c),attrs:{alt:"large-picture",width:r.width,height:r.height}})})),0),t._v(" "),e("div",{staticClass:"label-group"},[t.product.is_hot?e("div",{staticClass:"product-label label-hot"},[t._v("HOT")]):t._e(),t._v(" "),t.product.is_sale&&!t.product.price?e("div",{staticClass:"product-label label-sale"},[t._v("Sale")]):t._e(),t._v(" "),t.product.is_sale&&t.product.price?e("div",{staticClass:"product-label label-sale"},[t._v("-"+t._s(t.discount)+"%")]):t._e()])],1),t._v(" "),e("div",{staticClass:"product-details"},[e("div",{staticClass:"category-list"},t._l(t.product.product_categories,(function(r,c){return e("span",{key:"product-category-".concat(c)},[e("nuxt-link",{attrs:{to:{path:"/shop",query:{category:r.slug}}}},[t._v(t._s(r.name))]),t._v(" "),c<t.product.product_categories.length-1?[t._v(",")]:t._e()],2)})),0),t._v(" "),e("h3",{staticClass:"product-title"},[e("nuxt-link",{attrs:{to:"/product/default/"+t.product.slug}},[t._v(t._s(t.product.name))])],1),t._v(" "),e("div",{staticClass:"ratings-container"},[e("div",{staticClass:"product-ratings"},[e("span",{staticClass:"ratings",style:{width:20*t.product.ratings+"%"}}),t._v(" "),e("span",{staticClass:"tooltiptext tooltip-top"},[t._v(t._s(t._f("priceFormat")(t.product.ratings)))])])]),t._v(" "),t.product.short_description?e("div",{staticClass:"product-description"},[e("p",{staticClass:"mb-0"},[t._v(t._s(t.product.short_description))])]):t._e(),t._v(" "),t.product.price?e("div",{key:"singlePrice",staticClass:"price-box"},[t.product.is_sale?[e("span",{staticClass:"product-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.sale_price)))]),t._v(" "),e("span",{staticClass:"old-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.price)))])]:[e("span",{staticClass:"product-price"},[t._v("$"+t._s(t._f("priceFormat")(t.product.price)))])]],2):e("div",{staticClass:"price-box"},[t.minPrice!==t.maxPrice?[e("span",{staticClass:"product-price"},[t._v("$"+t._s(t._f("priceFormat")(t.minPrice))+" – $"+t._s(t._f("priceFormat")(t.maxPrice)))])]:[e("span",{staticClass:"product-price"},[t._v("$"+t._s(t._f("priceFormat")(t.minPrice)))])]],2),t._v(" "),e("div",{staticClass:"product-action"},[t.product.variants.length>0?e("nuxt-link",{key:"variantProduct",staticClass:"btn-icon btn-add-cart product-type-simple",attrs:{to:"/product/default/"+t.product.slug}},[e("i",{staticClass:"fa fa-arrow-right"}),t._v(" "),e("span",[t._v("SELECT OPTIONS")])]):e("a",{staticClass:"btn-icon btn-add-cart product-type-simple",attrs:{href:"javascript:;"},on:{click:t.addCart}},[e("i",{staticClass:"icon-shopping-cart"}),t._v(" "),e("span",[t._v("ADD TO CART")])]),t._v(" "),t.isWishlisted?e("nuxt-link",{staticClass:"btn-icon-wish added-wishlist",attrs:{to:"/pages/wishlist",title:"Go to Wishlist"}},[e("i",{staticClass:"icon-wishlist-2"})]):t._e(),t._v(" "),t.isWishlisted?t._e():e("a",{staticClass:"btn-icon-wish",attrs:{href:"javascript:;",title:"Add to Wishlist"},on:{click:function(e){return t.addWishlist(e)}}},[e("i",{staticClass:"icon-wishlist-2"})]),t._v(" "),e("a",{staticClass:"btn-quickview",attrs:{href:"javascript:;",title:"Quick View"},on:{click:t.openQuickview}},[e("i",{staticClass:"fas fa-external-link-alt"})])],1)])])}),[],!1,null,null,null);e.a=component.exports},372:function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return n}));var c=[{color:"#000",name:"black"},{color:"#0188cc",name:"blue"},{color:"#81d742",name:"green"},{color:"#6085a5",name:"indigo"},{color:"#ab6e6e",name:"red"}],o=[{size:"XL",name:"Extra Large"},{size:"L",name:"Large"},{size:"M",name:"Medium"},{size:"S",name:"Small"}],n=[{name:"adidas",brand:"Adidas"},{name:"asics",brand:"Asics"},{name:"brooks",brand:"Brooks"},{name:"nike",brand:"Nike"},{name:"puma",brand:"Puma"}]}}]);