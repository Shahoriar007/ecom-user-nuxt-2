(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{397:function(t,e,r){var content=r(409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("9e3e19d4",content,!0,{sourceMap:!1})},408:function(t,e,r){"use strict";r(397)},409:function(t,e,r){var n=r(38)((function(i){return i[1]}));n.push([t.i,".btn-primary[data-v-cc0c2360]{background-color:#222529!important;border-color:#222529!important;width:100%}",""]),n.locals={},t.exports=n},454:function(t,e,r){"use strict";r.r(e);r(18),r(148),r(27),r(24),r(36),r(37),r(32),r(12),r(23);var n=r(17),o=r(9),c=(r(80),r(152),r(42),r(145)),l=r(19),d=r(13),m=r(149);function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var h={components:{VueSlideToggle:c.a,PvStickyFooter:m.a},data:function(){return{loginOpened:!1,codeOpened:!1,accountOpened:!1,addressOpened:!1,fullName:"",firstName:"",lastName:"",companyName:"",countryName:"",cityName:"",detailAddress:"",phone:"",email:"",orderNotes:"",deliveryCharge:"",detailAddressError:!1,insideDhaka:"",outsideDhaka:""}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(l.c)("cart",["cartList","totalCount","totalPrice"])),mounted:function(){var t=this;d.c.get("".concat(d.a,"/api/order-delivery-charge")).then((function(e){t.insideDhaka=e.data.data[0].inside_dhaka,t.outsideDhaka=e.data.data[0].outside_dhaka,t.deliveryCharge=t.outsideDhaka}))},methods:{truncateName:function(t){if(!t)return"";var e=t.split(" ");return e.length>2?e.slice(0,2).join(" ")+"...":t},purchaseConfirmedGTM:function(){console.log("testtest"),window.dataLayer.push({event:"purchase",ecommerce:{transaction_id:77,affiliation:"rongdhonumart.com",value:1020,tax:0,shipping:120,currency:"BDT",coupon:"null",customer:{name:"Tofayel",phone:"01723735407",address:"Rajshahi"},items:[{item_name:"Electric Nail Trimmer for Baby Newborn",item_id:60,price:450,item_brand:"Unknown",item_category:"",quantity:2}]}})},submitOrder:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.purchaseConfirmedGTM(),t.deliveryCharge==t.insideDhaka?t.orderFrom="Inside Dhaka":t.orderFrom="Outside Dhaka",!(t.fullName.length<1)){e.next=6;break}return alert("Full name is required!"),e.abrupt("return");case 6:if(!(t.phone.length<1)){e.next=9;break}return alert("Phone number is required!"),e.abrupt("return");case 9:if(!(t.detailAddress.length<6)){e.next=12;break}return alert("Address must be at least 6 characters long!"),e.abrupt("return");case 12:return r={fullName:t.fullName,firstName:t.fullName,lastName:t.lastName,companyName:t.companyName,countryName:t.countryName,cityName:t.cityName,detailAddress:t.detailAddress,phone:t.phone,email:t.email,orderNotes:t.orderNotes,deliveryCharge:t.deliveryCharge,totalPrice:t.totalPrice+t.deliveryCharge,orderFrom:t.orderFrom,products:t.cartList},e.next=15,d.c.post("".concat(d.a,"/api/order"),r);case 15:return 200===(n=e.sent).status?t.$router.push("/pages/account"):alert("Order failed! Please try again."),e.abrupt("return",n);case 20:e.prev=20,e.t0=e.catch(0),alert("Failed! Please try again.");case 23:case"end":return e.stop()}}),e,null,[[0,20]])})))()},validateDetailAddress:function(){this.detailAddress.length>=6?this.detailAddressError=!1:this.detailAddressError=!0}}},_=h,f=(r(408),r(6)),component=Object(f.a)(_,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"main main-test"},[t._m(0),t._v(" "),e("div",{staticClass:"container checkout-container"},[e("ul",{staticClass:"checkout-progress-bar d-flex justify-content-center flex-wrap"},[e("li",[e("nuxt-link",{attrs:{to:"/pages/cart"}},[t._v("Shopping Cart")])],1),t._v(" "),e("li",{staticClass:"active"},[e("nuxt-link",{attrs:{to:"/pages/checkout"}},[t._v("Checkout")])],1),t._v(" "),t._m(1)]),t._v(" "),t.cartList.length>0?[e("div",{staticClass:"login-form-container"}),t._v(" "),e("div",{staticClass:"checkout-discount"},[e("vue-slide-toggle",{attrs:{open:t.codeOpened}},[e("div",{staticClass:"feature-box"},[e("div",{staticClass:"feature-box-content"},[e("p",[t._v("\n                                    If you have a coupon code, please apply it\n                                    below.\n                                ")]),t._v(" "),e("form",{attrs:{action:"#"}},[e("div",{staticClass:"input-group"},[e("input",{staticClass:"form-control form-control-sm w-auto",attrs:{type:"text",placeholder:"Coupon code",required:""}}),t._v(" "),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-sm mt-0",attrs:{type:"submit"}},[t._v("\n                                                Apply Coupon\n                                            ")])])])])])])])],1),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-7"},[e("ul",{staticClass:"checkout-steps"},[e("li",[e("h2",{staticClass:"step-title"},[t._v("Billing details")]),t._v(" "),e("form",{attrs:{action:"#",id:"checkout-form"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"form-group"},[t._m(2),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.fullName,expression:"fullName"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.fullName},on:{input:function(e){e.target.composing||(t.fullName=e.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"form-group"},[t._m(3),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"tel",required:""},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group mb-1 pb-2"},[t._m(4),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.detailAddress,expression:"detailAddress"}],staticClass:"form-control",attrs:{type:"text",placeholder:"House number and street name",required:""},domProps:{value:t.detailAddress},on:{input:[function(e){e.target.composing||(t.detailAddress=e.target.value)},t.validateDetailAddress]}}),t._v(" "),t.detailAddressError?e("div",{staticClass:"text-danger"},[t._v("\n                                            Minimum 6 characters required\n                                        ")]):t._e()])])])])]),t._v(" "),e("div",{staticClass:"col-lg-5"},[e("div",{staticClass:"order-summary"},[e("h3",[t._v("YOUR ORDER")]),t._v(" "),e("table",{staticClass:"table table-mini-cart"},[t._m(5),t._v(" "),t.cartList.length>0?e("tbody",t._l(t.cartList,(function(r,n){return e("tr",{key:"cart-product-"+n},[e("td",{staticClass:"product-col"},[e("h2",{staticClass:"product-title"},[t._v("\n                                                "+t._s(t.truncateName(r.name))+" ×\n                                                "),e("span",{staticClass:"product-qty"},[t._v(t._s(r.qty))])])]),t._v(" "),e("td",{staticClass:"price-col"},[e("span",[t._v("(BDT)\n                                                "+t._s(t._f("priceFormat")(r.price)))])])])})),0):e("tbody",[e("p",{staticClass:"cart-empty-text ml-3"},[t._v("\n                                        No products in the cart.\n                                    ")])]),t._v(" "),e("tfoot",[e("tr",{staticClass:"order-shipping"},[e("td",{staticClass:"text-left",attrs:{colspan:"2"}},[e("h4",{staticClass:"m-b-sm"},[t._v("\n                                                Delivery Charge\n                                            ")]),t._v(" "),e("div",{staticClass:"form-group form-group-custom-control"},[e("div",{staticClass:"custom-control custom-radio d-flex"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.deliveryCharge,expression:"deliveryCharge"}],staticClass:"custom-control-input",attrs:{type:"radio",name:"radio"},domProps:{value:t.insideDhaka,checked:t._q(t.deliveryCharge,t.insideDhaka)},on:{change:function(e){t.deliveryCharge=t.insideDhaka}}}),t._v(" "),e("label",{staticClass:"custom-control-label"},[t._v("Inside Dhaka - (BDT) "+t._s(t.insideDhaka))])])]),t._v(" "),e("div",{staticClass:"form-group form-group-custom-control mb-0"},[e("div",{staticClass:"custom-control custom-radio d-flex mb-0"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.deliveryCharge,expression:"deliveryCharge"}],staticClass:"custom-control-input",attrs:{type:"radio",name:"radio",checked:""},domProps:{value:t.outsideDhaka,checked:t._q(t.deliveryCharge,t.outsideDhaka)},on:{change:function(e){t.deliveryCharge=t.outsideDhaka}}}),t._v(" "),e("label",{staticClass:"custom-control-label"},[t._v("Outside Dhaka - (BDT) "+t._s(t.outsideDhaka))])])])])]),t._v(" "),e("tr",{staticClass:"order-total"},[t._m(6),t._v(" "),e("td",[e("b",{staticClass:"total-price"},[e("span",[t._v("(BDT)\n                                                    "+t._s(t._f("priceFormat")(Number(t.totalPrice)+Number(t.deliveryCharge))))])])])])])]),t._v(" "),e("button",{staticClass:"btn btn-dark btn-place-order",on:{click:t.submitOrder}},[t._v("\n                                অর্ডার কনফার্ম করুন\n                            ")])])])])]:e("div",{staticClass:"box-content"},[e("table",{staticClass:"table-cart",attrs:{"data-pagination":"no","data-per-page":"5","data-page":"1","data-id":"","data-token":""}},[t._m(7),t._v(" "),e("tbody",{staticClass:"cart-items-wrapper"},[t._m(8),t._v(" "),t._m(9),t._v(" "),e("tr",{staticClass:"border-0 py-0"},[e("td",{staticClass:"px-3 text-center",attrs:{colspan:"6"}},[e("nuxt-link",{staticClass:"btn btn-go-shop",attrs:{to:"/shop"}},[t._v("RETURN TO SHOP")])],1)])])]),t._v(" "),e("div",{staticClass:"mb-6"})])],2),t._v(" "),[t.cartList.length>0?e("div",{staticClass:"sticky-navbar fixed"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("button",{staticClass:"btn btn-primary",attrs:{href:"javascript:;"},on:{click:t.submitOrder}},[t._v("\n\t\t\t\t\t\t\t\tঅর্ডার কনফার্ম করুন\n\t\t\t\t\t\t\t\t\t\t\t")])])])]):e("div",[e("pv-sticky-footer")],1)],t._v(" "),t._m(10)],2)}),[function(){var t=this._self._c;return t("head",[t("script",[this._v("(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n            })(window,document,'script','dataLayer','GTM-TZ7FH7BK');")])])},function(){var t=this._self._c;return t("li",{staticClass:"disabled"},[t("a",{attrs:{href:"javascript:;"}},[this._v("Order Complete")])])},function(){var t=this,e=t._self._c;return e("label",[t._v("\n                                                    Full name\n                                                    "),e("abbr",{staticClass:"required",attrs:{title:"required"}},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",[t._v("\n                                            Phone\n                                            "),e("abbr",{staticClass:"required",attrs:{title:"required"}},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",[t._v("\n                                            Detail address\n                                            "),e("abbr",{staticClass:"required",attrs:{title:"required"}},[t._v("*")])])},function(){var t=this._self._c;return t("thead",[t("tr",[t("th",{attrs:{colspan:"2"}},[this._v("Product")])])])},function(){var t=this._self._c;return t("td",[t("h4",[this._v("Total")])])},function(){var t=this,e=t._self._c;return e("thead",{staticClass:"d-none"},[e("tr",[e("th",{staticClass:"product-thumbnail"}),t._v(" "),e("th",{staticClass:"product-name"},[e("span",{staticClass:"nobr"},[t._v("Product")])]),t._v(" "),e("th",{staticClass:"product-price"},[e("span",{staticClass:"nobr"},[t._v("price")])]),t._v(" "),e("th",{staticClass:"product-stock-status"},[e("span",{staticClass:"nobr"},[t._v("Stock status")])]),t._v(" "),e("th",{staticClass:"product-add-to-cart"},[e("span",{staticClass:"nobr"},[t._v("Actions")])])])])},function(){var t=this,e=t._self._c;return e("tr",{staticClass:"border-0 py-0"},[e("td",{staticClass:"px-3 py-2 text-center",attrs:{colspan:"6"}},[e("p",{staticClass:"noproduct-msg mb-2"},[t._v("\n                                    Checkout is not available while your cart is\n                                    empty.\n                                ")]),t._v(" "),e("i",{staticClass:"icon-bag-2 cart-empty"})])])},function(){var t=this._self._c;return t("tr",{staticClass:"border-0 py-0"},[t("td",{staticClass:"px-3 py-2 text-center cart-empty",attrs:{colspan:"6"}},[this._v("\n                                No products added to the cart\n                            ")])])},function(){var t=this._self._c;return t("body",[t("noscript",[t("iframe",{staticStyle:{display:"none",visibility:"hidden"},attrs:{src:"https://www.googletagmanager.com/ns.html?id=GTM-TZ7FH7BK",height:"0",width:"0"}})])])}],!1,null,"cc0c2360",null);e.default=component.exports}}]);