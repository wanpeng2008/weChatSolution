webpackJsonp([2],{

/***/ "./src/app/pages/customer-view/customer-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/pages/customer-view/customer-view.component.html":
/***/ (function(module, exports) {

module.exports = "\n<weui-tabbar>\n  <weui-tab heading=\"下单\"  [icon]=\"'<img src=assets/images/svg/si-glyph-mail.svg>'\">\n    <app-place-order></app-place-order>\n  </weui-tab>\n  <weui-tab heading=\"我的订单\" [badge]=\"'dot'\" [icon]=\"'<img src=assets/images/svg/si-glyph-bullet-checked-list.svg>'\" >\n    <app-order-list></app-order-list>\n  </weui-tab>\n  <weui-tab heading=\"信息查询\"  [icon]=\"'<img src=assets/images/svg/si-glyph-calculator-2.svg>'\">\n    <app-info-inquiry [title]=\"'信息查询'\" [InquiryList]=\"['price-inquiry']\" ></app-info-inquiry>\n  </weui-tab>\n  <weui-tab heading=\"我的账户\" [active]=\"'true'\" [icon]=\"'<img src=assets/images/svg/si-glyph-person-2.svg>'\" (select)=\"onSelect($event)\">\n    <app-account-info></app-account-info>\n  </weui-tab>\n</weui-tabbar>\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/customer-view/customer-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerViewComponent = (function () {
    function CustomerViewComponent(router) {
        this.router = router;
        this.storage = sessionStorage;
    }
    CustomerViewComponent.prototype.ngOnInit = function () {
        console.debug('CustomerViewComponent init');
        if (this.isLogin()) {
        }
        else {
            var fromurl = location.href;
            var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=填你自已的appid哟&redirect_uri=' + encodeURIComponent(fromurl) + '&response_type=code&scope=snsapi_base&state=STATE%23wechat_redirect&connect_redirect=1#wechat_redirect';
            this.login();
            console.log(url);
            location.href = url;
        }
    };
    CustomerViewComponent.prototype.onSelect = function ($event) {
        //console.log($event)
        if ($event.heading === '我的账户') {
            //console.log(this.router.url+'/account-info')
            //this.router.navigateByUrl('/pages/customer-view/account-info/view')
            //return false
        }
        this.time = new Date().getTime();
    };
    CustomerViewComponent.prototype.isLogin = function () {
        return (this.storage.getItem('token') != null);
    };
    CustomerViewComponent.prototype.login = function () {
        this.storage.setItem('token', 'abc');
    };
    return CustomerViewComponent;
}());
CustomerViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'app-customer-view',
        template: __webpack_require__("./src/app/pages/customer-view/customer-view.component.html"),
        styles: [__webpack_require__("./src/app/pages/customer-view/customer-view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], CustomerViewComponent);

var _a;
//# sourceMappingURL=customer-view.component.js.map

/***/ }),

/***/ "./src/app/pages/customer-view/customer-view.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_view_component__ = __webpack_require__("./src/app/pages/customer-view/customer-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_view_routing__ = __webpack_require__("./src/app/pages/customer-view/customer-view.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_share_module__ = __webpack_require__("./src/app/share/share.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__("./src/app/pages/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_weui__ = __webpack_require__("./node_modules/ngx-weui/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerViewModule", function() { return CustomerViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CustomerViewModule = (function () {
    function CustomerViewModule() {
    }
    return CustomerViewModule;
}());
CustomerViewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__customer_view_routing__["a" /* CustomerViewRouting */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_weui__["b" /* TabModule */],
            __WEBPACK_IMPORTED_MODULE_4__share_share_module__["a" /* ShareModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__customer_view_component__["a" /* CustomerViewComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__customer_view_component__["a" /* CustomerViewComponent */]]
    })
], CustomerViewModule);

//# sourceMappingURL=customer-view.module.js.map

/***/ }),

/***/ "./src/app/pages/customer-view/customer-view.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customer_view_component__ = __webpack_require__("./src/app/pages/customer-view/customer-view.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerViewRouting; });


var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__customer_view_component__["a" /* CustomerViewComponent */],
    }];
var CustomerViewRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(routes);
//# sourceMappingURL=customer-view.routing.js.map

/***/ })

});
//# sourceMappingURL=2.chunk.js.map