(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{445:function(t,e,r){"use strict";r.r(e);r(22),r(25),r(19),r(34),r(35),r(28),r(10),r(23);var o=r(7),l=r(146),c=r(18);function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}var v={components:{VueSlideToggle:l.a},data:function(){return{loginOpened:!1,codeOpened:!1,accountOpened:!1,addressOpened:!1}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(c.c)("cart",["cartList","totalCount","totalPrice"]))},d=v,_=r(6),component=Object(_.a)(d,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"main main-test"},[e("div",{staticClass:"container checkout-container"},[e("ul",{staticClass:"checkout-progress-bar d-flex justify-content-center flex-wrap"},[e("li",[e("nuxt-link",{attrs:{to:"/pages/cart"}},[t._v("Shopping Cart")])],1),t._v(" "),e("li",{staticClass:"active"},[e("nuxt-link",{attrs:{to:"/pages/checkout"}},[t._v("Checkout")])],1),t._v(" "),t._m(0)]),t._v(" "),t.cartList.length>0?[e("div",{staticClass:"login-form-container"},[e("h4",[t._v("\n\t\t\t\t\tReturning customer?\n\t\t\t\t\t"),e("button",{staticClass:"btn btn-link btn-toggle",attrs:{"data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},on:{click:function(e){t.loginOpened=!t.loginOpened}}},[t._v("Login")])]),t._v(" "),e("vue-slide-toggle",{attrs:{open:t.loginOpened}},[e("div",{staticClass:"login-section feature-box"},[e("div",{staticClass:"feature-box-content"},[e("form",{attrs:{action:"#",id:"login-form"}},[e("p",[t._v("\n\t\t\t\t\t\t\t\t\tIf you have shopped with us before, please enter your details below. If you are\n\t\t\t\t\t\t\t\t\ta new customer, please proceed to the Billing & Shipping section.\n\t\t\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"mb-0 pb-1"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tUsername or email\n\t\t\t\t\t\t\t\t\t\t\t\t"),e("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"email",required:""}})])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"mb-0 pb-1"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tPassword\n\t\t\t\t\t\t\t\t\t\t\t\t"),e("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"password",required:""}})])])]),t._v(" "),e("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("LOGIN")]),t._v(" "),e("div",{staticClass:"form-footer mb-1"},[e("div",{staticClass:"custom-control custom-checkbox mb-0 mt-0"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"lost-password"}}),t._v(" "),e("label",{staticClass:"custom-control-label mb-0",attrs:{for:"lost-password"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tRemember\n\t\t\t\t\t\t\t\t\t\t\tme\n\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("nuxt-link",{staticClass:"forget-password",attrs:{to:"/pages/forgot-password"}},[t._v("Lost your password?")])],1)])])])])],1),t._v(" "),e("div",{staticClass:"checkout-discount"},[e("h4",[t._v("\n\t\t\t\t\tHave a coupon?\n\t\t\t\t\t"),e("button",{staticClass:"btn btn-link btn-toggle",attrs:{"data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"true","aria-controls":"collapseOne"},on:{click:function(e){t.codeOpened=!t.codeOpened}}},[t._v("ENTER YOUR CODE")])]),t._v(" "),e("vue-slide-toggle",{attrs:{open:t.codeOpened}},[e("div",{staticClass:"feature-box"},[e("div",{staticClass:"feature-box-content"},[e("p",[t._v("If you have a coupon code, please apply it below.")]),t._v(" "),e("form",{attrs:{action:"#"}},[e("div",{staticClass:"input-group"},[e("input",{staticClass:"form-control form-control-sm w-auto",attrs:{type:"text",placeholder:"Coupon code",required:""}}),t._v(" "),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-sm mt-0",attrs:{type:"submit"}},[t._v("Apply Coupon")])])])])])])])],1),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-7"},[e("ul",{staticClass:"checkout-steps"},[e("li",[e("h2",{staticClass:"step-title"},[t._v("Billing details")]),t._v(" "),e("form",{attrs:{action:"#",id:"checkout-form"}},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),e("div",{staticClass:"form-group mb-1"},[e("div",{staticClass:"custom-control custom-checkbox"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"create-account"}}),t._v(" "),e("label",{staticClass:"custom-control-label",attrs:{"data-toggle":"collapse","data-target":"#collapseThree","aria-controls":"collapseThree",for:"create-account"},on:{click:function(e){t.accountOpened=!t.accountOpened}}},[t._v("Create an account?")])])]),t._v(" "),e("vue-slide-toggle",{attrs:{open:t.accountOpened}},[e("div",{staticClass:"form-group"},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\t\t\tCreate account password\n\t\t\t\t\t\t\t\t\t\t\t"),e("abbr",{staticClass:"required",attrs:{title:"required"}},[t._v("*")])]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"password",placeholder:"Password",required:""}})])]),t._v(" "),e("div",{staticClass:"form-group"},[e("div",{staticClass:"custom-control custom-checkbox mt-0"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"different-shipping"}}),t._v(" "),e("label",{staticClass:"custom-control-label",attrs:{"data-toggle":"collapse","data-target":"#collapseFour","aria-controls":"collapseFour",for:"different-shipping"},on:{click:function(e){t.addressOpened=!t.addressOpened}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tShip to a\n\t\t\t\t\t\t\t\t\t\t\tdifferent\n\t\t\t\t\t\t\t\t\t\t\taddress?\n\t\t\t\t\t\t\t\t\t\t")])])]),t._v(" "),e("vue-slide-toggle",{attrs:{open:t.addressOpened}},[e("div",{staticClass:"shipping-info"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tFirst name\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"),e("abbr",{staticClass:"required",attrs:{title:"required"}},[t._v("*")])]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",required:""}})])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tLast name\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"),e("abbr",{staticClass:"required",attrs:{title:"required"}},[t._v("*")])]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",required:""}})])])]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Company name (optional)")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text"}})]),t._v(" "),e("div",{staticClass:"select-custom"},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tCountry / Region\n\t\t\t\t\t\t\t\t\t\t\t\t"),e("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),e("select",{staticClass:"form-control",attrs:{name:"orderby"}},[e("option",{attrs:{value:"",selected:"selected"}},[t._v("Vanuatu")]),t._v(" "),e("option",{attrs:{value:"1"}},[t._v("Brunei")]),t._v(" "),e("option",{attrs:{value:"2"}},[t._v("Bulgaria")]),t._v(" "),e("option",{attrs:{value:"3"}},[t._v("Burkina Faso")]),t._v(" "),e("option",{attrs:{value:"4"}},[t._v("Burundi")]),t._v(" "),e("option",{attrs:{value:"5"}},[t._v("Cameroon")])])]),t._v(" "),e("div",{staticClass:"form-group mb-1 pb-2"},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tStreet address\n\t\t\t\t\t\t\t\t\t\t\t\t"),e("abbr",{staticClass:"required",attrs:{title:"required"}},[t._v("*")])]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"House number and street name",required:""}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Apartment, suite, unit, etc. (optional)",required:""}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tTown / City\n\t\t\t\t\t\t\t\t\t\t\t\t"),e("abbr",{staticClass:"required",attrs:{title:"required"}},[t._v("*")])]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",required:""}})]),t._v(" "),e("div",{staticClass:"select-custom"},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tState / County\n\t\t\t\t\t\t\t\t\t\t\t\t"),e("abbr",{staticClass:"required",attrs:{title:"required"}},[t._v("*")])]),t._v(" "),e("select",{staticClass:"form-control",attrs:{name:"orderby"}},[e("option",{attrs:{value:"",selected:"selected"}},[t._v("NY")]),t._v(" "),e("option",{attrs:{value:"1"}},[t._v("Brunei")]),t._v(" "),e("option",{attrs:{value:"2"}},[t._v("Bulgaria")]),t._v(" "),e("option",{attrs:{value:"3"}},[t._v("Burkina Faso")]),t._v(" "),e("option",{attrs:{value:"4"}},[t._v("Burundi")]),t._v(" "),e("option",{attrs:{value:"5"}},[t._v("Cameroon")])])]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tPostcode / ZIP\n\t\t\t\t\t\t\t\t\t\t\t\t"),e("abbr",{staticClass:"required",attrs:{title:"required"}},[t._v("*")])]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",required:""}})])])]),t._v(" "),t._m(11)],1)])])]),t._v(" "),e("div",{staticClass:"col-lg-5"},[e("div",{staticClass:"order-summary"},[e("h3",[t._v("YOUR ORDER")]),t._v(" "),e("table",{staticClass:"table table-mini-cart"},[t._m(12),t._v(" "),t.cartList.length>0?e("tbody",t._l(t.cartList,(function(r,o){return e("tr",{key:"cart-product-"+o},[e("td",{staticClass:"product-col"},[e("h2",{staticClass:"product-title"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(r.name)+" ×\n\t\t\t\t\t\t\t\t\t\t\t"),e("span",{staticClass:"product-qty"},[t._v(t._s(r.qty))])])]),t._v(" "),e("td",{staticClass:"price-col"},[e("span",[t._v("$"+t._s(t._f("priceFormat")(r.price)))])])])})),0):e("tbody",[e("p",{staticClass:"cart-empty-text ml-3"},[t._v("No products in the cart.")])]),t._v(" "),e("tfoot",[e("tr",{staticClass:"cart-subtotal"},[t._m(13),t._v(" "),e("td",{staticClass:"price-col"},[e("span",[t._v("$"+t._s(t._f("priceFormat")(t.totalPrice)))])])]),t._v(" "),t._m(14),t._v(" "),e("tr",{staticClass:"order-total"},[t._m(15),t._v(" "),e("td",[e("b",{staticClass:"total-price"},[e("span",[t._v("$"+t._s(t._f("priceFormat")(t.totalPrice)))])])])])])]),t._v(" "),t._m(16),t._v(" "),e("button",{staticClass:"btn btn-dark btn-place-order",attrs:{type:"submit",form:"checkout-form"}},[t._v("Place order")])])])])]:e("div",{staticClass:"box-content"},[e("table",{staticClass:"table-cart",attrs:{"data-pagination":"no","data-per-page":"5","data-page":"1","data-id":"","data-token":""}},[t._m(17),t._v(" "),e("tbody",{staticClass:"cart-items-wrapper"},[t._m(18),t._v(" "),t._m(19),t._v(" "),e("tr",{staticClass:"border-0 py-0"},[e("td",{staticClass:"px-3 text-center",attrs:{colspan:"6"}},[e("nuxt-link",{staticClass:"btn btn-go-shop",attrs:{to:"/shop"}},[t._v("RETURN TO SHOP")])],1)])])]),t._v(" "),e("div",{staticClass:"mb-6"})])],2)])}),[function(){var t=this._self._c;return t("li",{staticClass:"disabled"},[t("a",{attrs:{href:"javascript:;"}},[this._v("Order Complete")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tFirst name\n\t\t\t\t\t\t\t\t\t\t\t\t"),e("abbr",{staticClass:"required",attrs:{title:"required"}},[t._v("*")])]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",required:""}})])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tLast name\n\t\t\t\t\t\t\t\t\t\t\t\t"),e("abbr",{staticClass:"required",attrs:{title:"required"}},[t._v("*")])]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",required:""}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"form-group"},[e("label",[t._v("Company name (optional)")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"select-custom"},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\t\tCountry / Region\n\t\t\t\t\t\t\t\t\t\t"),e("abbr",{staticClass:"required",attrs:{title:"required"}},[t._v("*")])]),t._v(" "),e("select",{staticClass:"form-control",attrs:{name:"orderby"}},[e("option",{attrs:{value:"",selected:"selected"}},[t._v("Vanuatu")]),t._v(" "),e("option",{attrs:{value:"1"}},[t._v("Brunei")]),t._v(" "),e("option",{attrs:{value:"2"}},[t._v("Bulgaria")]),t._v(" "),e("option",{attrs:{value:"3"}},[t._v("Burkina Faso")]),t._v(" "),e("option",{attrs:{value:"4"}},[t._v("Burundi")]),t._v(" "),e("option",{attrs:{value:"5"}},[t._v("Cameroon")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"form-group mb-1 pb-2"},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\t\tStreet address\n\t\t\t\t\t\t\t\t\t\t"),e("abbr",{staticClass:"required",attrs:{title:"required"}},[t._v("*")])]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"House number and street name",required:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"form-group"},[t("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Apartment, suite, unite, etc. (optional)",required:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"form-group"},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\t\tTown / City\n\t\t\t\t\t\t\t\t\t\t"),e("abbr",{staticClass:"required",attrs:{title:"required"}},[t._v("*")])]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",required:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"select-custom"},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\t\tState / County\n\t\t\t\t\t\t\t\t\t\t"),e("abbr",{staticClass:"required",attrs:{title:"required"}},[t._v("*")])]),t._v(" "),e("select",{staticClass:"form-control",attrs:{name:"orderby"}},[e("option",{attrs:{value:"",selected:"selected"}},[t._v("NY")]),t._v(" "),e("option",{attrs:{value:"1"}},[t._v("Brunei")]),t._v(" "),e("option",{attrs:{value:"2"}},[t._v("Bulgaria")]),t._v(" "),e("option",{attrs:{value:"3"}},[t._v("Burkina Faso")]),t._v(" "),e("option",{attrs:{value:"4"}},[t._v("Burundi")]),t._v(" "),e("option",{attrs:{value:"5"}},[t._v("Cameroon")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"form-group"},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\t\tPostcode / Zip\n\t\t\t\t\t\t\t\t\t\t"),e("abbr",{staticClass:"required",attrs:{title:"required"}},[t._v("*")])]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",required:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"form-group"},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\t\tPhone\n\t\t\t\t\t\t\t\t\t\t"),e("abbr",{staticClass:"required",attrs:{title:"required"}},[t._v("*")])]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"tel",required:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"form-group"},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\t\tEmail address\n\t\t\t\t\t\t\t\t\t\t"),e("abbr",{staticClass:"required",attrs:{title:"required"}},[t._v("*")])]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"email",required:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"form-group"},[e("label",{staticClass:"order-comments"},[t._v("Order notes (optional)")]),t._v(" "),e("textarea",{staticClass:"form-control",attrs:{placeholder:"Notes about your order, e.g. special notes for delivery.",required:""}})])},function(){var t=this._self._c;return t("thead",[t("tr",[t("th",{attrs:{colspan:"2"}},[this._v("Product")])])])},function(){var t=this._self._c;return t("td",[t("h4",[this._v("Subtotal")])])},function(){var t=this,e=t._self._c;return e("tr",{staticClass:"order-shipping"},[e("td",{staticClass:"text-left",attrs:{colspan:"2"}},[e("h4",{staticClass:"m-b-sm"},[t._v("Shipping")]),t._v(" "),e("div",{staticClass:"form-group form-group-custom-control"},[e("div",{staticClass:"custom-control custom-radio d-flex"},[e("input",{staticClass:"custom-control-input",attrs:{type:"radio",name:"radio",checked:""}}),t._v(" "),e("label",{staticClass:"custom-control-label"},[t._v("Local Pickup")])])]),t._v(" "),e("div",{staticClass:"form-group form-group-custom-control mb-0"},[e("div",{staticClass:"custom-control custom-radio d-flex mb-0"},[e("input",{staticClass:"custom-control-input",attrs:{type:"radio",name:"radio"}}),t._v(" "),e("label",{staticClass:"custom-control-label"},[t._v("Flat Rate")])])])])])},function(){var t=this._self._c;return t("td",[t("h4",[this._v("Total")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"payment-methods"},[e("h4",{},[t._v("Payment methods")]),t._v(" "),e("div",{staticClass:"info-box with-icon p-0"},[e("p",[t._v("\n\t\t\t\t\t\t\t\t\tSorry, it seems that there are no available\n\t\t\t\t\t\t\t\t\tpayment methods for your state. Please\n\t\t\t\t\t\t\t\t\tcontact us if you require assistance or wish\n\t\t\t\t\t\t\t\t\tto make alternate arrangements.\n\t\t\t\t\t\t\t\t")])])])},function(){var t=this,e=t._self._c;return e("thead",{staticClass:"d-none"},[e("tr",[e("th",{staticClass:"product-thumbnail"}),t._v(" "),e("th",{staticClass:"product-name"},[e("span",{staticClass:"nobr"},[t._v("Product")])]),t._v(" "),e("th",{staticClass:"product-price"},[e("span",{staticClass:"nobr"},[t._v("price")])]),t._v(" "),e("th",{staticClass:"product-stock-status"},[e("span",{staticClass:"nobr"},[t._v("Stock status")])]),t._v(" "),e("th",{staticClass:"product-add-to-cart"},[e("span",{staticClass:"nobr"},[t._v("Actions")])])])])},function(){var t=this,e=t._self._c;return e("tr",{staticClass:"border-0 py-0"},[e("td",{staticClass:"px-3 py-2 text-center",attrs:{colspan:"6"}},[e("p",{staticClass:"noproduct-msg mb-2"},[t._v("Checkout is not available while your cart is empty.")]),t._v(" "),e("i",{staticClass:"icon-bag-2 cart-empty"})])])},function(){var t=this._self._c;return t("tr",{staticClass:"border-0 py-0"},[t("td",{staticClass:"px-3 py-2 text-center cart-empty",attrs:{colspan:"6"}},[this._v("\n\t\t\t\t\t\t\tNo products added to the\n\t\t\t\t\t\t\tcart\n\t\t\t\t\t\t")])])}],!1,null,null,null);e.default=component.exports}}]);