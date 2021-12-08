(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n <head>\r\n    <title>Rate myCakes</title>\r\n\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n    <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\r\n\r\n\r\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.2/css/all.css\">\r\n   \r\n    <link href=\"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css\" rel=\"stylesheet\">\r\n    \r\n    <link href=\"https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.2/css/mdb.min.css\" rel=\"stylesheet\">\r\n\r\n    <style>\r\n      *{ outline: 0.0px dotted red; }\r\n      .itemList {\r\n        height: 600px;\r\n        overflow-y: scroll;\r\n      }\r\n\r\n    </style>\r\n</head>\r\n\r\n<body>\r\n  \r\n  <div class=\"jumbotron jumbotron-fluid text-center   z-depth-2\">\r\n    <h1 class=\"h1-reponsive text-info\">{{title}}</h1>\r\n  </div>\r\n\r\n  <div class=\"container-fluid mx-auto\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2\">\r\n          <app-item-create (createEventEmitter)='getItemsFromService()'></app-item-create>\r\n        </div>\r\n\r\n      \r\n        <div class=\"col-md-5 itemList z-depth-1\">\r\n          <div class=\"row\" *ngFor=\"let item of allItems\">\r\n            <div class=\"col-md\">\r\n              <app-item-show-all\r\n                [item]='item' (itemDetailEventEmitter)=\"dataFromChild(item)\"\r\n                (itemUpdateEventEmitter)=\"getItemFromService($event)\"\r\n                (deleteEventEmitter)='getItemsFromService()' >\r\n              </app-item-show-all>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      <hr>\r\n\r\n      <div class=\"col-md \">\r\n        <app-item-show-one [itemToShow]='itemToShow'></app-item-show-one>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = 'Rate my Cakes!!!';
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        this.getItemsFromService();
    };
    AppComponent.prototype.getItemsFromService = function () {
        var _this = this;
        var tempObservable = this._httpService.getItems();
        tempObservable.subscribe(function (data) {
            console.log('Fetched all items.', data['data']);
            _this.allItems = data['data'];
        });
    };
    AppComponent.prototype.getItemFromService = function (event) {
        var _this = this;
        var tempObservable = this._httpService.getItemById(event);
        tempObservable.subscribe(function (item) {
            //  console.log('Getting item...', item);
            _this.dataFromChild(item['data']);
            // console.log('this.itemToShow = ', this.itemToShow);
        });
    };
    AppComponent.prototype.dataFromChild = function (data) {
        //  console.log('data from child: ', data);
        this.itemToShow = data;
        //  console.log('itemToShow: ', this.itemToShow)
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _item_create_item_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./item-create/item-create.component */ "./src/app/item-create/item-create.component.ts");
/* harmony import */ var _item_show_all_item_show_all_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./item-show-all/item-show-all.component */ "./src/app/item-show-all/item-show-all.component.ts");
/* harmony import */ var _item_show_one_item_show_one_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./item-show-one/item-show-one.component */ "./src/app/item-show-one/item-show-one.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _item_create_item_create_component__WEBPACK_IMPORTED_MODULE_8__["ItemCreateComponent"],
                _item_show_all_item_show_all_component__WEBPACK_IMPORTED_MODULE_9__["ItemShowAllComponent"],
                _item_show_one_item_show_one_component__WEBPACK_IMPORTED_MODULE_10__["ItemShowOneComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
        this.getItems();
    }
    HttpService.prototype.create = function (newItem) {
        return this._http.post('/cakes', newItem);
    };
    HttpService.prototype.getItems = function () {
        return this._http.get('/cakes');
    };
    HttpService.prototype.getItemById = function (id) {
        console.log('Cake ID is: ', id);
        return this._http.get('/cakes/' + id);
    };
    HttpService.prototype.updateItem = function (item) {
        return this._http.put('/cakes/' + item._id, item); // the http response is an Observable; store it in a variable
    };
    HttpService.prototype.deleteItem = function (item) {
        return this._http.delete('/cakes/' + item._id);
    };
    HttpService.prototype.addReview = function (id, review) {
        return this._http.put('/cakes/' + id + '/reviews', review);
    };
    HttpService.prototype.deleteReview = function (id, review) {
        return this._http.get('/cakes/' + id + '/reviews/' + review._id);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/item-create/item-create.component.css":
/*!*******************************************************!*\
  !*** ./src/app/item-create/item-create.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0tY3JlYXRlL2l0ZW0tY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/item-create/item-create.component.html":
/*!********************************************************!*\
  !*** ./src/app/item-create/item-create.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container  z-depth-1\">\r\n  <h3 class=\"text-info text-center pt-2\">Submit your cake</h3>\r\n\r\n  <form (submit) = \"submitBtnClicked()\" >\r\n\r\n    <div class = \"input-group md-form py-0\">\r\n      <input placeholder = \"Cake name\" type = \"text\" name=\"newItem.cakeName\" [(ngModel)] = \"newItem.cakeName\" class=\"form-control\" />\r\n    </div>\r\n\r\n    <div class=\"input-group md-form py-2\">\r\n        <input placeholder = \"Baker's name\" type = \"text\" name=\"newItem.bakerName\" [(ngModel)] = \"newItem.bakerName\" class=\"form-control\"  />\r\n    </div>\r\n\r\n    <div class=\"input-group md-form py-2\">\r\n        <input placeholder = \"Image URL\" type = \"text\" name=\"newItem.imageURL\" [(ngModel)] = \"newItem.imageURL\" class=\"form-control\"  />\r\n    </div>\r\n\r\n    <div class=\" md-form text-center pb-4\">\r\n      <button  type=\"submit\" class=\"btn btn-sm btn-success \">Submit</button>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/item-create/item-create.component.ts":
/*!******************************************************!*\
  !*** ./src/app/item-create/item-create.component.ts ***!
  \******************************************************/
/*! exports provided: ItemCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCreateComponent", function() { return ItemCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



var ItemCreateComponent = /** @class */ (function () {
    function ItemCreateComponent(_httpService) {
        this._httpService = _httpService;
        // the @Output() decorator defines an event we want to expose to the parent component
        // EventEmitter is used to invoke the event defined using the @Output() decorator
        this.createEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ItemCreateComponent.prototype.ngOnInit = function () {
        this.clearFields();
    };
    ItemCreateComponent.prototype.clearFields = function () {
        this.newItem = {
            cakeName: "",
            bakerName: "",
            imageURL: "",
            reviews: []
        };
        return this.newItem;
    };
    ItemCreateComponent.prototype.submitBtnClicked = function () {
        var _this = this;
        var tempObservable = this._httpService.create(this.newItem);
        tempObservable.subscribe(function (response) {
            _this.triggerEvent();
        });
        this.clearFields();
    };
    ItemCreateComponent.prototype.triggerEvent = function () {
        this.createEventEmitter.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemCreateComponent.prototype, "createEventEmitter", void 0);
    ItemCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-create',
            template: __webpack_require__(/*! ./item-create.component.html */ "./src/app/item-create/item-create.component.html"),
            styles: [__webpack_require__(/*! ./item-create.component.css */ "./src/app/item-create/item-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], ItemCreateComponent);
    return ItemCreateComponent;
}());



/***/ }),

/***/ "./src/app/item-show-all/item-show-all.component.css":
/*!***********************************************************!*\
  !*** ./src/app/item-show-all/item-show-all.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0tc2hvdy1hbGwvaXRlbS1zaG93LWFsbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/item-show-all/item-show-all.component.html":
/*!************************************************************!*\
  !*** ./src/app/item-show-all/item-show-all.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <p class=\"my-1 text-info\"><strong>{{ item.cakeName }}</strong></p>\r\n\r\n  <div class=\"row \" >\r\n\r\n    <div class=\"col-md-3 \">\r\n      <div class=\"view zoom\">\r\n        <img (click)='displayItemDetail()'   [src]=\"item.imageURL\"  alt=\"cake\" class=\"img-fluid hoverable\">\r\n      </div>\r\n      <button type=\"button\" class=\"btn btn-sm btn-red\" (click) = 'deleteItemBtnClicked(item)'>Delete </button>\r\n    </div>\r\n\r\n    <div class=\"col-md-9\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md\">\r\n            <form (submit) = 'submitReviewBtnClicked(item._id)'>\r\n                <textarea [(ngModel)]='itemReview.comment' name = 'comment' class=\"md-textarea form-control\" rows=\"1\" placeholder=\"Enter a comment...\" type=\"text\" ></textarea>\r\n\r\n                <div class=\"input-group\">\r\n                  <select [(ngModel)]='itemReview.rating' name=\"rating\" class=\"browser-default custom-select\" >\r\n                    <option selected>Choose stars</option>\r\n                    <option value=\"5\">5</option>\r\n                    <option value=\"4\">4</option>\r\n                    <option value=\"3\">3</option>\r\n                    <option value=\"2\">2</option>\r\n                    <option value=\"1\">1</option>\r\n                  </select>\r\n\r\n                  <div class=\"input-group-append\">\r\n                    <input class=\"btn btn-sm btn-indigo\" type=\"submit\" value='Rate !'>\r\n                  </div>\r\n\r\n                </div>\r\n            </form>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <hr>\r\n</div>"

/***/ }),

/***/ "./src/app/item-show-all/item-show-all.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/item-show-all/item-show-all.component.ts ***!
  \**********************************************************/
/*! exports provided: ItemShowAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemShowAllComponent", function() { return ItemShowAllComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



var ItemShowAllComponent = /** @class */ (function () {
    function ItemShowAllComponent(_httpService) {
        this._httpService = _httpService;
        this.itemDetailEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemUpdateEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ItemShowAllComponent.prototype.ngOnInit = function () {
        this.itemReview = { rating: 0, comment: "", id: '' };
    };
    // ------------------------- //
    ItemShowAllComponent.prototype.displayItemDetail = function () {
        console.log('image clicked');
        this.triggerEvent();
    };
    ItemShowAllComponent.prototype.triggerEvent = function () {
        console.log('triggerEvent fncn invoked');
        this.itemDetailEventEmitter.emit(this.item);
    };
    // ------ DELETE item ----- //
    ItemShowAllComponent.prototype.deleteItemBtnClicked = function (item) {
        this.deleteItem(item);
    };
    ItemShowAllComponent.prototype.deleteItem = function (item) {
        var _this = this;
        var tempObservable = this._httpService.deleteItem(item);
        tempObservable.subscribe(function (data) {
            if (data['error']) {
                console.log(data['error']);
            }
            else {
                console.log('Review delete status :', data['status']);
            }
            ;
            _this.deleteEventEmitter.emit();
        });
    };
    // --------Adding Reviews-------- //
    ItemShowAllComponent.prototype.submitReviewBtnClicked = function (id) {
        // this.itemReview.id = id;
        this.addReview(id);
    };
    ItemShowAllComponent.prototype.addReview = function (id) {
        var _this = this;
        console.log('Item: ', id);
        console.log('Review: ', this.itemReview);
        var observable = this._httpService.addReview(id, this.itemReview);
        observable.subscribe(function (data) {
            console.log('Something received');
            //  this.getItem(id);
            _this.onItemUpdate(id);
        });
        this.itemReview = { rating: 0, comment: "", id: '' };
    };
    ItemShowAllComponent.prototype.onItemUpdate = function (id) {
        console.log('onItemUpdate fncn invoked');
        this.itemUpdateEventEmitter.emit(id);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemShowAllComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemShowAllComponent.prototype, "itemDetailEventEmitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemShowAllComponent.prototype, "itemUpdateEventEmitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemShowAllComponent.prototype, "deleteEventEmitter", void 0);
    ItemShowAllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-show-all',
            template: __webpack_require__(/*! ./item-show-all.component.html */ "./src/app/item-show-all/item-show-all.component.html"),
            styles: [__webpack_require__(/*! ./item-show-all.component.css */ "./src/app/item-show-all/item-show-all.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], ItemShowAllComponent);
    return ItemShowAllComponent;
}());



/***/ }),

/***/ "./src/app/item-show-one/item-show-one.component.css":
/*!***********************************************************!*\
  !*** ./src/app/item-show-one/item-show-one.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0tc2hvdy1vbmUvaXRlbS1zaG93LW9uZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/item-show-one/item-show-one.component.html":
/*!************************************************************!*\
  !*** ./src/app/item-show-one/item-show-one.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container py-1 z-depth-1 \" *ngIf='itemToShow != null'>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 border-right border-light\">\r\n            <img width=\"175\" [src]=\"itemToShow.imageURL\" alt=\"cake\">\r\n        </div>\r\n        <div class=\"col \">\r\n            <h3 class=\"text-info\">{{ itemToShow.cakeName }}</h3>\r\n            <p>Made with <i class=\"fas fa-heart text-danger\"></i> by <span class=\"text-info\">{{ itemToShow.bakerName }}</span></p>\r\n            <p>\r\n                <button type=\"button\" class=\"btn btn-sm btn-light\" (click) = 'getAverageRating(itemToShow._id)'> Average Rating</button>\r\n                <strong>&nbsp;{{ itemToShow.averageRating }}</strong>\r\n            </p>\r\n            <table class=\"table\">\r\n                <tbody *ngFor='let review of itemToShow.reviews'>\r\n                    <tr>\r\n                        <td scope=\"row\"><i   class=\"fas fa-star amber-text\"></i>: <strong>{{review.rating}}</strong> </td>\r\n                        <td>.... {{review.comment}}</td>\r\n                        <td><a class=\"d-inline text-secondary\"  (click) = 'onReviewDelete(review)'><i class=\"far fa-trash-alt\"></i></a></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/item-show-one/item-show-one.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/item-show-one/item-show-one.component.ts ***!
  \**********************************************************/
/*! exports provided: ItemShowOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemShowOneComponent", function() { return ItemShowOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



var ItemShowOneComponent = /** @class */ (function () {
    function ItemShowOneComponent(_httpService) {
        this._httpService = _httpService;
        this.itemId = '';
    }
    ItemShowOneComponent.prototype.ngOnInit = function () {
        // this.itemId = this.itemToShow._id;
        // this.getAverageRating(this.itemId);
        this.itemToShow.averageRating = '';
    };
    ItemShowOneComponent.prototype.getAverageRating = function (id) {
        var _this = this;
        var observable = this._httpService.getItemById(id);
        observable.subscribe(function (data) {
            _this.itemToShow = data['data'];
            var avg;
            var sum = 0;
            var numReviews = _this.itemToShow.reviews.length;
            for (var i = 0; i < numReviews; i++) {
                sum = sum + _this.itemToShow.reviews[i].rating;
            }
            console.log('sum is ', sum);
            avg = (sum / numReviews).toFixed(2);
            console.log('Avg rating is', avg);
            _this.itemToShow.averageRating = avg;
        });
    };
    /////////////////// Delete a review by review identifier //////////////////
    ItemShowOneComponent.prototype.onReviewDelete = function (review) {
        var _this = this;
        console.log('review object to delete: ', review);
        console.log("item id is " + this.itemToShow._id + " | review_id is " + review._id);
        var tempObservable = this._httpService.deleteReview(this.itemToShow._id, review);
        tempObservable.subscribe(function (data) {
            if (data['error']) {
                console.log(data['error']);
                //       this.error = data['error']; // this will be displayed in the component html
            }
            else {
                console.log('Review delete status :', data['status']);
            }
            _this.getAverageRating(_this.itemToShow._id);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemShowOneComponent.prototype, "itemToShow", void 0);
    ItemShowOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-show-one',
            template: __webpack_require__(/*! ./item-show-one.component.html */ "./src/app/item-show-one/item-show-one.component.html"),
            styles: [__webpack_require__(/*! ./item-show-one.component.css */ "./src/app/item-show-one/item-show-one.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], ItemShowOneComponent);
    return ItemShowOneComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pauud\Desktop\Rate-My-Cakes\RateMyCakes\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map