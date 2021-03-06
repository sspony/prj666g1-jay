webpackJsonp([18],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(afAuth, events, navCtrl, navParams) {
        var _this = this;
        this.afAuth = afAuth;
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = { "toolbarTitle": "Home",
            "title": "MeeTogether",
            "subtitle": "- Group 1 -",
            "subtitle2": "Something something dark side",
            "link": "https://zenit.senecac.on.ca/~prj666_182a01/",
            "description": "Link to zenit",
            "background": "assets/images/images/" + Math.ceil(Math.random() * 17) + ".jpg" };
        this.user = {};
        this.home_msg = "";
        events.subscribe('login_status', function (isLogin, user) {
            if (isLogin && user != null) {
                _this.home_msg = 'Hello ' + user.uid;
            }
            else {
                _this.home_msg = "Hello there! Use the left side menue to login!";
            }
        });
    }
    HomePage.prototype.ionViewWillLoad = function () {
    };
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1-jay/src/pages/home/home.html"*/'<ion-header header-ios>\n  <ion-navbar transparent>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!--<ion-title>{{data.toolbarTitle}}</ion-title>-->\n  </ion-navbar>\n</ion-header>\n\n<ion-content elastic-header padding>\n  <div *ngIf="data != null && data.background != null" background-size default-background [ngStyle]="{\'background-image\': \'url(\' + data.background + \')\'}">\n    <div class="ionic-description" text-center>\n      <h2 item-title>{{data.title}}</h2>\n      <h2 item-title>{{data.subtitle}}</h2>\n      <p item-subtitle>{{data.subtitle2}}</p>\n    </div>\n    <a [href]="data.link" target="_blank">{{data.description}}</a>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1-jay/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FriendListPage = /** @class */ (function () {
    // Tabs
    //Friends = FriendListPage;
    //Pending = FriendListPage;
    //Blocked = FriendListPage;
    //Add = AddFriendPage;
    function FriendListPage(navCtrl, navParams, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.data = { "toolbarTitle": "Friends",
            "title": "Search for friend",
            "headerImage": "assets/images/background/" + Math.ceil(Math.random() * 23) + ".jpg", };
        this.user = {};
        this.searchTerm = "";
        this.friendList = [];
        this.user.uid = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid;
    }
    FriendListPage.prototype.ionViewDidLoad = function () { };
    FriendListPage.prototype.ionViewWillEnter = function () {
        this.friendList.length = 0;
        this.getFriendList();
    };
    FriendListPage.prototype.getFriendList = function () {
        var _this = this;
        var doc = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Users').doc(this.user.uid);
        doc.get().then(function (data) {
            _this.user.friendList = data.data().friendList;
            _this.user.friendList.forEach(function (fRef) {
                fRef.get().then(function (friend) {
                    var f = {};
                    f.firstName = friend.data().firstName;
                    f.lastName = friend.data().lastName;
                    f.username = friend.data().username;
                    f.email = friend.data().email;
                    f.avatar = friend.data().avatar;
                    _this.friendList.push(f);
                });
            });
        });
    };
    FriendListPage.prototype.addFriend = function () {
        this.navCtrl.push('AddFriendPage', this.user);
    };
    FriendListPage.prototype.search = function (item) {
    };
    FriendListPage.prototype.presentActionSheet = function (item, index) {
        var actionSheet = this.actionSheetCtrl.create({
            title: '',
            buttons: [
                {
                    text: 'View Profile',
                    handler: function () {
                        //
                    }
                },
                {
                    text: 'Send Message',
                    handler: function () {
                        //
                    }
                },
                {
                    text: 'Delete Friend',
                    role: 'destructive',
                    handler: function () {
                        //
                    }
                },
                {
                    text: 'Block Friend',
                    handler: function () {
                        //
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        //
                    }
                }
            ]
        });
        actionSheet.present();
    };
    FriendListPage.prototype.editFriends = function () {
    };
    FriendListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-friend-list',template:/*ion-inline-start:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1-jay/src/pages/friend-list/friend-list.html"*/'<ion-header header-ios>\n  <ion-navbar transparent>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!--<ion-title *ngIf="data != null">{{data.toolbarTitle}}</ion-title>-->\n  </ion-navbar>\n\n  <!-- Search bar -->\n  <ion-toolbar no-padding>\n    <div background-size *ngIf="data != null" [ngStyle]="{\'background-image\': \'url(\' + data.headerImage + \')\'}">\n      <div search-bar-bcg>\n        <!-- Header Title -->\n        <h1 ion-text no-margin padding-left search-bar-title>{{data.title}}</h1>\n        <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="search(searchTerm)"></ion-searchbar>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n\n<!-- Content -->\n<ion-content elastic-header>\n  <ion-list *ngIf="friendList != null">\n    <ion-item border no-lines *ngFor="let friend of friendList; let i = index">\n      <ion-avatar item-start>\n        <img [src]="friend.avatar" />\n      </ion-avatar>\n      <h2 item-title>{{friend.firstName}} {{friend.lastName}}</h2>\n      <h3 item-subtitle text-wrap>{{friend.username}}</h3>\n      <!-- Action Sheet Button -->\n      <button text-capitalize button-clear ion-button item-end clear (click)="presentActionSheet()">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<!-- Bottom Button -->\n<ion-footer transparent no-padding no-margin>\n  <ion-grid no-padding class="button-group">\n    <ion-row no-padding>\n      <ion-col no-padding>\n        <button ion-button item-start no-padding no-margin block clear color="primary">Friends</button>\n      </ion-col>\n      <ion-col no-padding>\n        <button ion-button no-padding no-margin block clear color="primary">Pending</button>\n      </ion-col>\n      <ion-col no-padding>\n        <button ion-button no-padding no-margin block clear color="primary">Blocked</button>\n      </ion-col>\n      <ion-col no-padding>\n        <button ion-button item-end no-padding no-margin block clear color="primary">Add</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!--<ion-fab bottom right>\n      <button ion-fab (click)="addFriend()">+</button>\n      <ion-fab-list side="top">\n        <button ion-fab (click)="addFriend()">+</button>\n        <button ion-fab (click)="editFriends()">=</button>\n      </ion-fab-list>\n    </ion-fab>-->\n</ion-footer>'/*ion-inline-end:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1-jay/src/pages/friend-list/friend-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], FriendListPage);
    return FriendListPage;
}());

//# sourceMappingURL=friend-list.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var LoginPage = /** @class */ (function () {
    function LoginPage(afAuth, events, navCtrl, navParams, toastCtrl) {
        this.afAuth = afAuth;
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.data = { "toolbarTitle": "Login",
            "forgotPassword": "Forgot password?",
            "other": "Test User",
            "subtitle": "Welcome",
            "labelEmail": "EMAIL",
            "labelUsername": "USERNAME",
            "labelPassword": "PASSWORD",
            "title": "Login to your account",
            "email": "Enter your email",
            "username": "Enter your username",
            "password": "Enter your password",
            "register": "Register",
            "login": "Login",
            "logo": "assets/images/logo/2.png",
            "errorUser": "Field can't be empty.",
            "errorPassword": "Field can't be empty." };
        this.user = {};
        this.password = "";
        this.err_msg = "";
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(user.email, this.password)
                                .then(function () {
                                // to see the email if it is verified
                                _this.afAuth.auth.onAuthStateChanged(function (data) {
                                    if (!data.emailVerified) {
                                        // email not verified
                                        throw { code: 'auth/email-not-verified' };
                                    }
                                    // email verified
                                    _this.afAuth.auth.onAuthStateChanged(function (data) {
                                        _this.password = ""; // delete password
                                        user.uid = data.uid;
                                        __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('Users').doc(user.uid).get().then(function (data) {
                                            _this.user.firstName = data.data().firstName;
                                            _this.user.lastName = data.data().lastName;
                                            _this.events.publish('login_status', true, user);
                                            _this.toastCtrl.create({
                                                message: "Welcome! " + _this.user.firstName + " " + _this.user.lastName,
                                                duration: 3000,
                                                position: "bottom"
                                            }).present();
                                            _this.navCtrl.setRoot('HomePage');
                                        });
                                    });
                                });
                            })
                                .catch(function (err) {
                                switch (err.code) {
                                    case ('auth/email-not-verified'): {
                                        _this.err_msg = "Email is not verified! Please check your mailbox!";
                                        break;
                                    }
                                    case ('auth/invalid-email'): {
                                        _this.err_msg = "Please enter a valid email!";
                                        break;
                                    }
                                    case ('auth/user-disabled'): {
                                        _this.err_msg = "User disabled!";
                                        break;
                                    }
                                    case ('auth/user-not-found'):
                                    case ('auth/wrong-password'): {
                                        _this.err_msg = "Incorrect email or password!";
                                        break;
                                    }
                                    default: {
                                        _this.err_msg = err.code;
                                    }
                                }
                                _this.toastCtrl.create({
                                    message: _this.err_msg,
                                    duration: 3000,
                                    position: "bottom"
                                }).present();
                            })];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        if (result) {
                            // publish a status for changing 
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push('RegisterPage');
    };
    LoginPage.prototype.resetPwd = function () {
        this.navCtrl.push('ResetPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1-jay/src/pages/login/login.html"*/'<ion-header>\n\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <!--<ion-title>{{data.toolbarTitle}}</ion-title>-->\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content>\n    <ion-grid no-padding *ngIf = "data != null">\n      <ion-row padding-horizontal align-self-center>\n  \n        <ion-col align-self start col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n          <button ion-button button-clear text-capitalize clear float-left (click)="login(user)">{{data.other}}</button>\n          <button ion-button button-clear text-capitalize clear float-right (click)="resetPwd()">{{data.forgotPassword}}</button>\n        </ion-col>\n        \n        <ion-col align-self-end col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n          <!--Logo-->\n          <img [src]="data.logo">\n          <!--Logo Subtitle-->\n          <h2 login-subtitle no-margin>{{data.subtitle}}</h2>\n          <!---Logo Title-->\n          <h1 ion-text padding-bottom login-title no-margin>{{data.title}}</h1>\n        </ion-col>\n  \n        <ion-col align-self-start col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n          <!---Input field username-->\n          <ion-item transparent>\n            <ion-label stacked>{{data.labelEmail}}</ion-label>\n            <ion-input required placeholder="{{data.email}}" type="email" [(ngModel)]="user.email"></ion-input>\n          </ion-item>\n  \n          <!--Input field password-->\n          <ion-item transparent>\n            <ion-label stacked>{{data.labelPassword}}</ion-label>\n            <ion-input required type="password" placeholder="{{data.password}}" [(ngModel)]="password"></ion-input>\n          </ion-item>\n        </ion-col>\n  \n        <!--Share Section-->\n        <ion-col align-self-end bottom-form col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n          <!---Login button-->\n          <button ion-button  full text-capitalize default-button (click)="login(user)">Login</button>\n          <!---Facebook button-->\n          <button ion-button default-button color="facebook" full text-capitalize block><ion-icon name="logo-facebook"></ion-icon> Login with Facebook</button>\n          <!---Google button-->\n          <button ion-button default-button google-button color="google" full text-capitalize block><ion-icon name="logo-google"></ion-icon> Login with Google</button>\n        </ion-col>\n  \n        <ion-col col-12>\n          <div description text-center>\n            <p>Don\'t have an account? <a text-capitalize ion-text color="primary" (click)="register()">Register</a></p>\n          </div>\n        </ion-col>\n        <!--End Share Section-->\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n'/*ion-inline-end:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1-jay/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(48);
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
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LogoutPage = /** @class */ (function () {
    function LogoutPage(navCtrl, navParams, afAuth, toastCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.toastCtrl = toastCtrl;
        this.events = events;
    }
    LogoutPage.prototype.ionViewDidLoad = function () {
    };
    LogoutPage.prototype.logoutBtnListener = function () {
        this.afAuth.auth.signOut();
        this.events.publish('login_status', false, null);
        this.toastCtrl.create({
            message: "You have logout",
            duration: 3000,
            position: "bottom"
        }).present();
        this.navCtrl.setRoot('HomePage');
    };
    LogoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-logout',template:/*ion-inline-start:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1-jay/src/pages/logout/logout.html"*/'<!--\n  Generated template for the LogoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Logout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <h2> Are you sure you want to logout? </h2>\n\n  <p> Note: After Logout you cannot get the notification from others! </p>\n\n  <button ion-button (click)="logoutBtnListener()">Logout</button>\n</ion-content>\n'/*ion-inline-end:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1-jay/src/pages/logout/logout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], LogoutPage);
    return LogoutPage;
}());

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManageEventPage = /** @class */ (function () {
    function ManageEventPage(navCtrl, navParams, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.data = {
            "toolbarTitle": "Events List",
            "headerImage": "assets/images/places/" + Math.ceil(Math.random() * 8) + ".jpg",
            //"backgroundImage": "assets/images/images/" + Math.ceil(Math.random() * 17) + ".jpg",
            "backgroundImage": "assets/images/maps/0.jpg",
        };
        //backgroundImage = "assets/images/places/" + Math.ceil(Math.random() * 9) + ".jpg"
        this.user = {};
        this.events = [];
        this.searchTerm = "";
        this.user.uid = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid;
    }
    ManageEventPage.prototype.ionViewDidLoad = function () {
    };
    ManageEventPage.prototype.ionViewWillEnter = function () {
        this.getEventList();
    };
    ManageEventPage.prototype.ionViewDidLeave = function () {
        this.events.length = 0; // by set count = 0 not erase all data
        this.user.eventList.forEach(function (eventRef) {
            eventRef.onSnapshot(function () { });
        });
    };
    ManageEventPage.prototype.getEventList = function () {
        var _this = this;
        var doc = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Users').doc(this.user.uid);
        doc.get().then(function (doc) {
            if (doc.data() != null) {
                _this.events.length = 0;
                _this.user.eventList = doc.data().eventList;
                _this.user.eventList.forEach(function (e) {
                    var event = {};
                    event.eventId = e.id;
                    e.get().then(function (content) {
                        if (content.data() != null) {
                            event.eventName = content.data().eventName;
                            event.description = content.data().description;
                            event.date = content.data().date;
                            event.creator = content.data().creator;
                            /*event.admins = content.data().admins;
                            event.blockedUsers = content.data().blockedUsers;
                            event.dateCreated = content.data().dateCreated;
                            event.participants = content.data().participants;
                            event.chat = content.data().chat;
                            event.radius = content.data().radius;
                            event.location = content.data().location;*/
                            _this.events.push(event);
                        }
                    });
                });
            }
        });
    };
    ManageEventPage.prototype.viewEvent = function (eventRef) {
        this.navCtrl.push('ViewEventPage', eventRef);
    };
    ManageEventPage.prototype.createEvent = function () {
        this.navCtrl.push('CreateEventPage');
    };
    ManageEventPage.prototype.joinEvent = function () {
        this.navCtrl.push('JoinEventPage');
    };
    /*getRandomBackground() : string {
      return "assets/images/places/" + Math.ceil(Math.random() * 9) + ".jpg";
    }*/
    ManageEventPage.prototype.search = function (item) {
    };
    ManageEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-manage-event',template:/*ion-inline-start:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1-jay/src/pages/manage-event/manage-event.html"*/'<ion-header header-ios>\n  <ion-navbar transparent>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!--<ion-title *ngIf="data != null">{{data.toolbarTitle}}</ion-title>-->\n  </ion-navbar>\n\n  <!-- Search bar -->\n  <ion-toolbar no-padding>\n    <div background-size *ngIf="data != null" [ngStyle]="{\'background-image\': \'url(\' + data.headerImage + \')\'}">\n      <div search-bar-bcg>\n        <!-- Header Title -->\n        <h1 ion-text no-margin padding-left search-bar-title>{{data.title}}</h1>\n        <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="search(searchTerm)"></ion-searchbar>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content elastic-header>\n  <!--Theme Google Card - Full Image Cards-->\n  <ion-grid no-padding *ngIf="events != null && data != null">\n    <ion-row>\n      <ion-col no-padding col-12 col-md-6 *ngFor="let e of events;">\n        <ion-card background-size text-left (click)="viewEvent(e.eventId)" [ngStyle]="{\'background-image\': \'url(\' + data.backgroundImage + \')\'}">\n          <!--ngStyle]="{\'background-image\': \'url(\' + data.backgroundImage + \')\'}-->\n          <!-- Event Name -->\n          <div card-title>{{e.eventName}}</div>\n          <!-- Event Description and Date -->\n          <div text-wrap card-subtitle>\n            <b>Description:</b> {{e.description}}\n            <br>\n            <!--<b>Creator:</b> {{e.creator}} <br>-->\n            <b>Time:</b> {{e.date | date:\'EEEE, MMMM d y h:mm a\'}}</div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<!-- Bottom Button -->\n<ion-footer no-padding transparent>\n  <ion-grid no-padding class="button-group">\n    <ion-row no-padding>\n      <ion-col><button ion-button block clear color="primary" no-padding no-margin>Events</button></ion-col>\n      <ion-col><button ion-button block clear color="primary" no-padding no-margin>Requests</button></ion-col>\n      <ion-col><button ion-button block clear color="primary" no-padding no-margin (click)="createEvent()">Create</button></ion-col>\n      <ion-col><button ion-button block clear color="primary" no-padding no-margin (click)="joinEvent()">Join</button></ion-col>\n    </ion-row>\n  </ion-grid>\n  <!--<ion-fab bottom right>\n    <button ion-fab>\n      <ion-icon ios="ios-add" md="md-add"></ion-icon>\n    </button>\n    <ion-fab-list side="top">\n      <button (click)="createEvent()" ion-fab>Create</button>\n      <button (click)="joinEvent()" ion-fab>Join</button>\n    </ion-fab-list>\n  </ion-fab>-->\n</ion-footer>'/*ion-inline-end:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1-jay/src/pages/manage-event/manage-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ManageEventPage);
    return ManageEventPage;
}());

//# sourceMappingURL=manage-event.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, afAuth, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.toast = toast;
        this.data = { "toolbarTitle": "Profile",
            "title": "",
            "subtitle": "",
            "background": "assets/images/images/" + Math.ceil(Math.random() * 17) + ".jpg" };
        this.user = {};
        this.user.uid = afAuth.auth.currentUser.uid;
        this.user.email = afAuth.auth.currentUser.email;
        /* empty info */
        this.user.username = "";
        this.user.firstName = "";
        this.user.lastName = "";
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        /* retrieve data from firestore of current user */
        this.getProfile();
    };
    ProfilePage.prototype.getProfile = function () {
        var _this = this;
        /* get avatar
        var img = firebase.storage().ref('avatar').child(this.user.uid+'.png');
        console.log(img);
        */
        // get informations
        var doc = __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('Users').doc(this.user.uid);
        doc.get().then(function (doc) {
            if (doc.exists) {
                _this.user.username = doc.data().username;
                _this.user.firstName = doc.data().firstName;
                _this.user.lastName = doc.data().lastName;
                _this.user.avatar = doc.data().avatar;
            }
        });
    };
    ProfilePage.prototype.getQr = function () {
        this.navCtrl.push('QrCodePage', this.user.uid);
    };
    ProfilePage.prototype.editProfile = function () {
        this.navCtrl.push('EditProfilePage', this.user);
    };
    ProfilePage.prototype.changePwd = function () {
        var _this = this;
        var auth = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]();
        return auth.sendPasswordResetEmail(this.user.email)
            .then(function () {
            console.log("email sent");
            _this.toast.create({
                message: "Reset link has been sent to, " + _this.user.email,
                duration: 3000
            }).present();
        })
            .catch(function (error) { return console.log(error); });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1-jay/src/pages/profile/profile.html"*/'<ion-header header-ios>\n  <ion-navbar transparent>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!--<ion-title>{{data.toolbarTitle}}</ion-title>-->\n  </ion-navbar>\n</ion-header>\n\n<ion-content elastic-header>\n  <div padding background-size id="elastic-header" [ngStyle]="{\'background-image\': \'url(\' + data.background + \')\'}">\n    <ion-thumbnail *ngIf="user != null">\n      <img [src]="user.avatar" />\n    </ion-thumbnail>\n    <h2 text-center parallax-title *ngIf="user != null">{{user.username}}</h2>\n    <h3 text-center parallax-subtitle *ngIf="user != null">{{user.firstName}} {{user.lastName}}</h3>\n  </div>\n  <ion-item-group>\n    <ion-item-divider border no-lines>\n      <h2 item-subtitle>Personal Info</h2>\n      <!--<button item-end ion-button button-action-shit><ion-icon name="more" role="img" class="icon icon-ios ion-ios-more" aria-label="more" ng-reflect-name="more"></ion-icon></button>-->\n    </ion-item-divider>\n    <!--First and Last Name-->\n    <ion-item>\n      <ion-icon color="primary" name="arrow-dropright" item-start></ion-icon>\n      <p><b>Name:</b> {{user.firstName}} {{user.lastName}}</p>\n      <!--<ion-icon icon-small ios="ios-create" md="md-create" item-end></ion-icon>-->\n    </ion-item>\n    <!--DoB-->\n    <ion-item>\n      <ion-icon color="primary" name="arrow-dropright" item-start></ion-icon>\n      <!--TODO: Add this to the user database, it should be empty or w/e (-, n/a, etc.) by default. if/when the user add this info then its displayed-->\n      <p><b>Birthday:</b> 15/4/1995</p>\n    </ion-item>\n    <!--Gender-->\n    <ion-item>\n      <ion-icon color="primary" name="arrow-dropright" item-start></ion-icon>\n      <!--TODO: Add this to the user database, it should be empty or w/e (-, n/a, etc.) by default. if/when the user add this info then its displayed-->\n      <p><b>Gender:</b> Female</p>\n    </ion-item>\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider border no-lines>\n      <h2 item-subtitle>Account Info</h2>\n    </ion-item-divider>\n    <!--Username-->\n    <ion-item>\n      <ion-icon color="primary" name="arrow-dropright" item-start></ion-icon>\n      <p><b>Username:</b> {{user.username}}</p>\n    </ion-item>\n    <!--Email-->\n    <ion-item>\n      <ion-icon color="primary" name="arrow-dropright" item-start></ion-icon>\n      <p><b>Email:</b> {{user.email}}</p>\n    </ion-item>\n    <!--Password-->\n    <ion-item no-margin>\n      <ion-icon color="primary" name="code-working" item-start></ion-icon>\n      <!--<p><b>Password:</b> ********</p>\n      <ion-icon icon-small name="send" item-end (click)="changePwd()"></ion-icon>-->\n      <button no-padding no-margin ion-button clear (click)="changePwd()">Change Password</button>\n    </ion-item>\n    <!--QR-->\n    <ion-item no-margin>\n      <ion-icon color="primary" name="finger-print" item-start></ion-icon>\n      <!--<p ><b>Show QR Code</b></p>-->\n      <button no-padding no-margin ion-button clear (click)="getQr()">Show QR Code</button>\n    </ion-item>\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider border no-lines>\n      <h2 item-subtitle>Connected Accounts</h2>\n    </ion-item-divider>\n    <!--Facebook-->\n    <ion-item>\n      <ion-icon color="primary" ios="logo-facebook" md="logo-facebook" item-start></ion-icon>\n      <p no-padding>Facebook</p>\n      <!--TODO: do a check to decide which icon to display-->\n      <ion-icon color="primary" name="close-circle" item-end></ion-icon>\n    </ion-item>\n    <!--Google-->\n    <ion-item>\n      <ion-icon color="primary" ios="logo-google" md="logo-google" item-start></ion-icon>\n      <p no-padding>Google+</p>\n      <!--TODO: do a check to decide which icon to display-->\n      <ion-icon color="primary" name="checkmark-circle" item-end></ion-icon>\n    </ion-item>\n  </ion-item-group>\n</ion-content>\n\n<!-- Bottom Buttons -->\n<ion-footer transparent no-padding no-margin>\n  <button ion-button clear block (click)="editProfile()">Edit Profile</button>\n  <!--<button ion-button block no-margin (click)="changePwd()">Change Password</button>-->\n</ion-footer>'/*ion-inline-end:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1-jay/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 181:
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
webpackEmptyAsyncContext.id = 181;

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-friend/add-friend.module": [
		742,
		7
	],
	"../pages/avatars/avatars.module": [
		749,
		16
	],
	"../pages/chat/chat.module": [
		739,
		15
	],
	"../pages/create-event/create-event.module": [
		750,
		14
	],
	"../pages/edit-event/edit-event.module": [
		740,
		13
	],
	"../pages/edit-profile/edit-profile.module": [
		743,
		12
	],
	"../pages/friend-list/friend-list.module": [
		751,
		5
	],
	"../pages/home/home.module": [
		326
	],
	"../pages/join-event/join-event.module": [
		744,
		6
	],
	"../pages/login/login.module": [
		752,
		4
	],
	"../pages/logout/logout.module": [
		753,
		17
	],
	"../pages/manage-event/manage-event.module": [
		754,
		2
	],
	"../pages/profile/profile.module": [
		755,
		0
	],
	"../pages/qr-code/qr-code.module": [
		748,
		1
	],
	"../pages/qr-scan/qr-scan.module": [
		738,
		11
	],
	"../pages/register/register.module": [
		745,
		10
	],
	"../pages/reset/reset.module": [
		746,
		9
	],
	"../pages/view-event-participants/view-event-participants.module": [
		741,
		8
	],
	"../pages/view-event/view-event.module": [
		747,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 226;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(387);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_manage_event_manage_event__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_friend_list_friend_list__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_logout_logout__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home_module__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_firestore__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_storage__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_api_config__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_google_maps__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_barcode_scanner__ = __webpack_require__(379);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Page Declaration







// Page Module Import



// Angularfire2





// api file



//  Bar code

// Every api key (like firebase access profile...) 
//    should put into './app.api.config.ts'
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_logout_logout__["a" /* LogoutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_manage_event_manage_event__["a" /* ManageEventPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_friend_list_friend_list__["a" /* FriendListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-friend/add-friend.module#AddFriendPageModule', name: 'AddFriendPage', segment: 'add-friend', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/avatars/avatars.module#AvatarsPageModule', name: 'AvatarsPage', segment: 'avatars', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-event/create-event.module#CreateEventPageModule', name: 'CreateEventPage', segment: 'create-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-event/edit-event.module#EditEventPageModule', name: 'EditEventPage', segment: 'edit-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/friend-list/friend-list.module#FriendListPageModule', name: 'FriendListPage', segment: 'friend-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/join-event/join-event.module#JoinEventPageModule', name: 'JoinEventPage', segment: 'join-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logout/logout.module#LogoutPageModule', name: 'LogoutPage', segment: 'logout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/manage-event/manage-event.module#ManageEventPageModule', name: 'ManageEventPage', segment: 'manage-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qr-code/qr-code.module#QrCodePageModule', name: 'QrCodePage', segment: 'qr-code', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qr-scan/qr-scan.module#QrScanPageModule', name: 'QrScanPage', segment: 'qr-scan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset/reset.module#ResetPageModule', name: 'ResetPage', segment: 'reset', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-event-participants/view-event-participants.module#ViewEventParticipantsPageModule', name: 'ViewEventParticipantsPage', segment: 'view-event-participants', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-event/view-event.module#ViewEventPageModule', name: 'ViewEventPage', segment: 'view-event', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_18__app_api_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_firestore__["a" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_storage__["a" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home_module__["HomePageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_logout_logout__["a" /* LogoutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_manage_event_manage_event__["a" /* ManageEventPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_friend_list_friend_list__["a" /* FriendListPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__["a" /* AngularFireDatabase */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_manage_event_manage_event__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_friend_list_friend_list__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_logout_logout__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Page declarations for navigations






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, alertCtrl, 
        //public navCtrl: NavController,
        events) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.data = {
            "toolbarTitle": "Menu",
            "background": "assets/images/images/" + Math.ceil(Math.random() * 17) + ".jpg",
            "image": "assets/images/logo/1.png",
            "userImage": "",
            "username": "",
            "userName": "",
            "title": "MeeTogether",
            "description": "Please login to ...something something meaningful something...",
        };
        this.isLogged = false;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        // default navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */], icon: 'log-in' }
        ];
        // using events subscribe to track login/out status
        events.subscribe('login_status', function (isLogin, user) {
            if (isLogin && user != null) {
                _this.isLogged = true;
                _this.data.userImage = user.avatar;
                _this.data.username = user.username;
                _this.data.userName = user.firstName + " " + user.lastName;
                // TODO: NEED TO RETRIEVE THE DATA "CORRECTLY" ABOVE 
                _this.data.userImage = "assets/images/avatars/20.jpg";
                _this.data.username = "BoredPanda";
                _this.data.userName = "Jay Ansin";
                _this.pages = [
                    { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'home' },
                    { title: 'My Profile', component: __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */], icon: 'person' },
                    { title: 'My Friends', component: __WEBPACK_IMPORTED_MODULE_6__pages_friend_list_friend_list__["a" /* FriendListPage */], icon: 'people' },
                    { title: 'My Events', component: __WEBPACK_IMPORTED_MODULE_5__pages_manage_event_manage_event__["a" /* ManageEventPage */], icon: 'calendar' },
                    //{ title: 'Avatars', component: AvatarsPage, icon: 'people' },
                    { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_8__pages_logout_logout__["a" /* LogoutPage */], icon: 'exit' }
                    //{ title: 'Register', component: RegisterPage}
                ];
            }
            else {
                _this.isLogged = false;
                _this.pages = [
                    { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'home' },
                    { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */], icon: 'log-in' }
                ];
            }
        });
        /*
        firebase.initializeApp({
          apiKey: "AIzaSyAbvHri--QkO91_9FMMGvMdeLlTGp7Gtvw",
          authDomain: "meetogether-prj666g1.firebaseapp.com",
          databaseURL: "https://meetogether-prj666g1.firebaseio.com/",
          projectId: "meetogether-prj666g1",
          storageBucket: "meetogether-prj666g1.appspot.com",
          messagingSenderId: "719772453281"
        });
        */
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.appSettings = function () {
        //
    };
    MyApp.prototype.profileSettings = function () {
        //this.navCtrl.push('ProfilePage');
    };
    MyApp.prototype.login = function () {
        //this.navCtrl.push('LoginPage');
    };
    MyApp.prototype.logout = function () {
        //this.navCtrl.push('LogoutPage');
        var alert = this.alertCtrl.create({
            title: 'Confirm logout',
            message: 'Are you sure you want to logout?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Logout',
                    handler: function () {
                        // LOG USER OUT
                        console.log('Logout clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1-jay/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <div header-background-image padding [ngStyle]="{\'background-image\': \'url(\' + data.background + \')\'}">\n      <ion-thumbnail>\n        <img *ngIf="isLogged == false" src="{{data.image}}" class="logo">\n        <img *ngIf="isLogged == true" src="{{data.userImage}}" class="avatar">\n      </ion-thumbnail>\n      <!--Text if NOT logged in-->\n      <h2 *ngIf="isLogged == false" ion-text header-title>{{data.title}}</h2>\n      <p *ngIf="isLogged == false">{{data.description}}</p>\n      <!--Text if logged in-->\n      <h2 *ngIf="isLogged == true" ion-text header-title>{{data.username}}</h2>\n      <p *ngIf="isLogged == false">{{data.userName}}</p>\n    </div>\n  </ion-header>\n\n  <ion-content>\n    <ion-list no-margin>\n      <button menuClose ion-item item-title main-menu no-lines border *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon icon-small item-left ios="ios-{{p.icon}}" md="md-{{p.icon}}"></ion-icon>{{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n  <!-- Bottom Buttons -->\n  <ion-footer transparent no-padding no-margin>\n    <ion-grid no-padding class="button-group">\n      <ion-row no-padding *ngIf="isLogged == false">\n        <ion-col no-padding>\n          <button ion-button item-start no-padding no-margin block color="primary" (click)="login()">\n            <ion-icon name="exit">Login</ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row no-padding *ngIf="isLogged == true">\n        <!--<ion-col no-padding><button ion-button item-start no-padding no-margin ion-button block color="secondary" (click)="profileSettings()"><ion-icon name="cog">Settings</ion-icon></button></ion-col>-->\n        <ion-col no-padding>\n          <button ion-button item-end no-padding no-margin block color="primary" (click)="logout()">\n            <ion-icon name="exit">Logout</ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-footer>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1-jay/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
/* unused harmony export GOOGLE_MAP_KEY */
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyAbvHri--QkO91_9FMMGvMdeLlTGp7Gtvw",
    authDomain: "meetogether-prj666g1.firebaseapp.com",
    databaseURL: "https://meetogether-prj666g1.firebaseio.com",
    projectId: "meetogether-prj666g1",
    storageBucket: "meetogether-prj666g1.appspot.com",
    messagingSenderId: "719772453281"
};
var GOOGLE_MAP_KEY = "";
//# sourceMappingURL=app.api.config.js.map

/***/ })

},[382]);
//# sourceMappingURL=main.js.map