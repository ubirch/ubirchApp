webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_detail__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_ble__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, toastCtrl, ble, ngZone) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.ble = ble;
        this.ngZone = ngZone;
        this.devices = [];
    }
    HomePage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidEnter');
        this.scan();
    };
    HomePage.prototype.scan = function () {
        var _this = this;
        this.setStatus('Scanning for Bluetooth LE Devices');
        this.devices = []; // clear list
        this.ble.scan([], 5).subscribe(function (device) { return _this.onDeviceDiscovered(device); }, function (error) { return _this.scanError(error); });
        setTimeout(this.setStatus.bind(this), 5000, 'Scan complete');
    };
    HomePage.prototype.onDeviceDiscovered = function (device) {
        var _this = this;
        console.log('Discovered ' + JSON.stringify(device, null, 2));
        this.ngZone.run(function () {
            _this.devices.push(device);
        });
    };
    /**
     *     If location permission is denied, you'll end up here
     */
    HomePage.prototype.scanError = function (error) {
        this.setStatus('Error ' + error);
        var toast = this.toastCtrl.create({
            message: 'Error scanning for Bluetooth low energy devices',
            position: 'middle',
            duration: 5000
        });
        toast.present();
    };
    HomePage.prototype.setStatus = function (message) {
        var _this = this;
        console.log(message);
        this.ngZone.run(function () {
            _this.statusMessage = message;
        });
    };
    HomePage.prototype.deviceSelected = function (device) {
        console.log(JSON.stringify(device) + ' selected');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_detail__["a" /* DetailPage */], {
            device: device
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/victor/Documents/ubirchApp/src/pages/admin-ui/404.html"*/'<!doctype html> <html lang="en"> <head> <meta charset="utf-8"> <title>Page Not Found :(</title> <style>::-moz-selection {\n        background: #b3d4fc;\n        text-shadow: none;\n      }\n\n      ::selection {\n        background: #b3d4fc;\n        text-shadow: none;\n      }\n\n      html {\n        padding: 30px 10px;\n        font-size: 20px;\n        line-height: 1.4;\n        color: #737373;\n        background: #f0f0f0;\n        -webkit-text-size-adjust: 100%;\n        -ms-text-size-adjust: 100%;\n      }\n\n      html,\n      input {\n        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n      }\n\n      body {\n        max-width: 500px;\n        padding: 30px 20px 50px;\n        border: 1px solid #b3b3b3;\n        border-radius: 4px;\n        margin: 0 auto;\n        box-shadow: 0 1px 10px #a7a7a7, inset 0 1px 0 #fff;\n        background: #fcfcfc;\n      }\n\n      h1 {\n        margin: 0 10px;\n        font-size: 50px;\n        text-align: center;\n      }\n\n      h1 span {\n        color: #bbb;\n      }\n\n      h3 {\n        margin: 1.5em 0 0.5em;\n      }\n\n      p {\n        margin: 1em 0;\n      }\n\n      ul {\n        padding: 0 0 0 40px;\n        margin: 1em 0;\n      }\n\n      .container {\n        max-width: 380px;\n        margin: 0 auto;\n      }\n\n      /* google search */\n\n      #goog-fixurl ul {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n      }\n\n      #goog-fixurl form {\n        margin: 0;\n      }\n\n      #goog-wm-qt,\n      #goog-wm-sb {\n        border: 1px solid #bbb;\n        font-size: 16px;\n        line-height: normal;\n        vertical-align: top;\n        color: #444;\n        border-radius: 2px;\n      }\n\n      #goog-wm-qt {\n        width: 220px;\n        height: 20px;\n        padding: 5px;\n        margin: 5px 10px 0 0;\n        box-shadow: inset 0 1px 1px #ccc;\n      }\n\n      #goog-wm-sb {\n        display: inline-block;\n        height: 32px;\n        padding: 0 10px;\n        margin: 5px 0 0;\n        white-space: nowrap;\n        cursor: pointer;\n        background-color: #f5f5f5;\n        background-image: -webkit-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n        background-image: -moz-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n        background-image: -ms-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n        background-image: -o-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n      }\n\n      #goog-wm-sb:hover,\n      #goog-wm-sb:focus {\n        border-color: #aaa;\n        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n        background-color: #f8f8f8;\n      }\n\n      #goog-wm-qt:hover,\n      #goog-wm-qt:focus {\n        border-color: #105cb6;\n        outline: 0;\n        color: #222;\n      }\n\n      input::-moz-focus-inner {\n        padding: 0;\n        border: 0;\n      }</style> </head> <body> <div class="container"> <h1>Not found <span>:(</span></h1> <p>Sorry, but the page you were trying to view does not exist.</p> <p>It looks like this was the result of either:</p> <ul> <li>a mistyped address</li> <li>an out-of-date link</li> </ul> <script>var GOOG_FIXURL_LANG = (navigator.language || \'\').slice(0,2),GOOG_FIXURL_SITE = location.host;</script> <script src="//linkhelp.clients.google.com/tbproxy/lh/wm/fixurl.js"></script> </div> </body> </html>'/*ion-inline-end:"/Users/victor/Documents/ubirchApp/src/pages/admin-ui/404.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_ble__["a" /* BLE */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_ble__["a" /* BLE */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]) === "function" && _d || Object])
], HomePage);

var _a, _b, _c, _d;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_tweetnacl__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_tweetnacl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_tweetnacl__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Bluetooth UUIDs
 **/
var HANDSHAKE_SERVICE = '80E4196E-E6A2-4C5E-BD8D-090C2660D898';
var SIGNATURE_CHARACTERISTIC = '80E40001-E6A2-4C5E-BD8D-090C2660D898';
var PUBLIC_KEY_CHARACTERISTIC = '80E4FE22-E6A2-4C5E-BD8D-090C2660D898';
/**
 * Message sent into the device
 */
var message = new Uint8Array([0xFF]);
var DetailPage = (function () {
    function DetailPage(navCtrl, navParams, ble, alertCtrl, toastCtrl, ngZone) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ble = ble;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.ngZone = ngZone;
        this.peripheral = {};
        var device = navParams.get('device');
        this.setStatus('Connecting to ' + device.name || device.id);
        this.ble.connect(device.id).subscribe(function (peripheral) { return _this.onConnected(peripheral); }, function (peripheral) { return _this.onDeviceDisconnected(peripheral); });
    }
    DetailPage.prototype.onConnected = function (peripheral) {
        var _this = this;
        this.ngZone.run(function () {
            _this.setStatus('');
            _this.peripheral = peripheral;
        });
    };
    DetailPage.prototype.onDeviceDisconnected = function (peripheral) {
        var toast = this.toastCtrl.create({
            message: 'The peripheral unexpectedly disconnected',
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    DetailPage.prototype.showAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    /**
     * Disconnect peripheral when leaving the page
     **/
    DetailPage.prototype.ionViewWillLeave = function () {
        var _this = this;
        console.log('ionViewWillLeave disconnecting Bluetooth');
        this.ble.disconnect(this.peripheral.id).then(function () { return console.log('Disconnected ' + JSON.stringify(_this.peripheral)); }, function () { return console.log('ERROR disconnecting ' + JSON.stringify(_this.peripheral)); });
    };
    DetailPage.prototype.setStatus = function (message) {
        var _this = this;
        console.log(message);
        this.ngZone.run(function () {
            _this.statusMessage = message;
        });
    };
    /**
     * The BLE plugin uses typed Arrays or ArrayBuffers for sending and receiving data
     **/
    DetailPage.prototype.stringToBytes = function (string) {
        var array = new Uint32Array(string.length);
        for (var i = 0, l = string.length; i < l; i++)
            ;
        {
            array[i] = string.charCodeAt(i);
        }
        return array.buffer;
    };
    DetailPage.prototype.bytesToString = function (buffer) {
        return String.fromCharCode.apply(null, new Uint8Array(buffer));
    };
    DetailPage.prototype.toHexString = function (byteArray) {
        return Array.prototype.map.call(byteArray, function (b) {
            return ('00' + b.toString(16)).slice(-2).toString();
        }).join('');
    };
    /**
        End of convertion methods
     */
    DetailPage.prototype.writeMessage = function () {
        var _this = this;
        this.ble.write(this.peripheral.id, HANDSHAKE_SERVICE, SIGNATURE_CHARACTERISTIC, message.buffer).then(function (data) { return _this.showAlert('Success !', 'Written = ' + _this.bytesToString(message.buffer)); }, function () { return _this.showAlert('Unexpected Error', 'Failed to write to the characteristic'); });
    };
    DetailPage.prototype.readPubKey = function () {
        var _this = this;
        this.ble.read(this.peripheral.id, HANDSHAKE_SERVICE, PUBLIC_KEY_CHARACTERISTIC).then(function (data) { return _this.showAlert('Success !', 'Public key = ' + _this.toHexString(new Uint8Array(data))); }, function () { return _this.showAlert('Unexpected Error', 'Failed to read the public key'); });
    };
    DetailPage.prototype.readSignature = function () {
        var _this = this;
        this.ble.read(this.peripheral.id, HANDSHAKE_SERVICE, SIGNATURE_CHARACTERISTIC).then(function (data) { return _this.showAlert('Success !', 'Signature = ' + _this.toHexString(new Uint8Array(data))); }, function () { return _this.showAlert('Unexpected Error', 'Failed to read signature'); });
    };
    /**
     *  nacl library  :
     *  verify(msg: Uint8Array, sig: Uint8Array, publicKey: Uint8Array): boolean;git
     **/
    DetailPage.prototype.verifySignature = function () {
        var _this = this;
        this.ble.read(this.peripheral.id, HANDSHAKE_SERVICE, PUBLIC_KEY_CHARACTERISTIC).then(function (data) { return _this.pubkey = data; }, function () { return _this.showAlert('Unexpected Error', 'Failed to read the pubkey'); });
        this.ble.read(this.peripheral.id, HANDSHAKE_SERVICE, SIGNATURE_CHARACTERISTIC).then(function (data) { return _this.signature = data; }, function () { return _this.showAlert('Unexpected Error', 'Failed to read signature'); });
        if (__WEBPACK_IMPORTED_MODULE_3_tweetnacl__["sign"].detached.verify(message, new Uint8Array(this.signature), new Uint8Array(this.pubkey))) {
            console.log('Signature valid');
            this.showAlert('Success!', 'The signature is valid !');
        }
        else {
            console.log('Signature NOT valid');
            this.showAlert('Error', 'Signature NOT Valid');
        }
    };
    return DetailPage;
}());
DetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detail',template:/*ion-inline-start:"/Users/victor/Documents/ubirchApp/src/pages/detail/detail.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-title>{{ peripheral.name || \'Device\' }}</ion-title>\n      <button ion-button (click) = "writeMessage()">\n          Write Message\n      </button>\n\n      <button ion-button (click) = "readPubKey()">\n          Read PubKey\n      </button>\n\n      <button ion-button (click) = "verifySignature()">\n          Verify Signature\n      </button>\n\n      <button ion-button (click) = "readSignature()">\n          Read Signature\n      </button>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="padding">\n  <ion-card>\n    <ion-card-header>\n      {{ peripheral.name || \'Unnamed\' }}\n    </ion-card-header>\n    <ion-card-content>\n      {{ peripheral.id }}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header align-self-center>\n      Services\n    </ion-card-header>\n\n    <ion-list>\n      <ion-item *ngFor="let service of peripheral.services">\n        {{service}}\n      </ion-item>\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Details\n    </ion-card-header>\n    <ion-card-content>\n      <pre>{{peripheral | json }}</pre>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <p>{{ statusMessage }}</p>\n  </ion-toolbar>\n\n</ion-footer>\n'/*ion-inline-end:"/Users/victor/Documents/ubirchApp/src/pages/detail/detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__["a" /* BLE */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
], DetailPage);

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(213);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_ble__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_detail_detail__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_detail_detail__["a" /* DetailPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_detail_detail__["a" /* DetailPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_ble__["a" /* BLE */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/victor/Documents/ubirchApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n\n'/*ion-inline-end:"/Users/victor/Documents/ubirchApp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[194]);
//# sourceMappingURL=main.js.map