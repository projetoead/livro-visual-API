(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-usuario-usuario-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/usuario/usuario.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/usuario/usuario.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>Minha Conta</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-card>\r\n        <ion-card-header>\r\n            <ion-card-title>Meus Dados</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n            <div class=\"informacoes\">\r\n                <div *ngIf=\"usuario\" class=\"person-icon\">\r\n                    <div>\r\n                        <ion-avatar item-center>\r\n                            <img\r\n                                [src]=\"usuario && usuario.imagem.link ? usuario.imagem.link :'assets/images/person.png'\">\r\n                        </ion-avatar>\r\n                    </div>\r\n                    <!-- <ion-img src=\"assets/images/person_2.png\"></ion-img> -->\r\n                    <!-- <ion-icon name=\"person\"></ion-icon> -->\r\n                    <!-- <ion-text color=\"primary\" class=\"ion-text-left\">\r\n                            <h1>Alterar</h1>\r\n                        </ion-text> -->\r\n                    <!-- <p class=\"alterar-imagem\">Alterar</p> -->\r\n                    <input type=\"file\" src=\"\" accept=\"image/*\" multiple=\"false\" id=\"imagePicker\" hidden>\r\n                    <ion-button  color=\"light\" shape=\"round\" size=\"small\">\r\n                        Alterar\r\n                    </ion-button>\r\n                </div>\r\n                <div class=\"dados\" *ngIf=\"usuario\">\r\n                    <!-- <ion-item-group> -->\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Nome Completo</ion-label>\r\n                        <ion-input  readonly [value]=\"usuario.name\"></ion-input>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">E-mail</ion-label>\r\n                        <ion-input  readonly [value]= \"usuario.email\"></ion-input>\r\n                    </ion-item>\r\n                </div>\r\n            </div>\r\n        </ion-card-content>\r\n    </ion-card>\r\n    <ion-card>\r\n        <ion-card-header>\r\n            <ion-card-title>Minhas Avaliações</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n            <div class=\"vazio\">\r\n                Nenhuma avaliação disponível\r\n            </div>\r\n        </ion-card-content>\r\n    </ion-card>\r\n    <!-- <ion-grid fixed>\r\n        <ion-row>\r\n            <ion-col size=\"6\" class=\"secao\">\r\n                <ion-text color=\"dark\" class=\"cabecalho-secao\">\r\n                    <h2>\r\n                        <ion-icon name=\"information-circle\"></ion-icon> Informações\r\n                    </h2>\r\n                </ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"6\" class=\"secao direita\">\r\n                <ion-text color=\"dark\" class=\"cabecalho-secao\">\r\n                    <h2>\r\n                        <ion-icon name=\"document\"></ion-icon> Avaliações\r\n                    </h2>\r\n                </ion-text>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid> -->\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/usuario/usuario.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/usuario/usuario.module.ts ***!
  \*************************************************/
/*! exports provided: UsuarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioPageModule", function() { return UsuarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _usuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuario.page */ "./src/app/pages/usuario/usuario.page.ts");







var routes = [
    {
        path: '',
        component: _usuario_page__WEBPACK_IMPORTED_MODULE_6__["UsuarioPage"]
    }
];
var UsuarioPageModule = /** @class */ (function () {
    function UsuarioPageModule() {
    }
    UsuarioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_usuario_page__WEBPACK_IMPORTED_MODULE_6__["UsuarioPage"]]
        })
    ], UsuarioPageModule);
    return UsuarioPageModule;
}());



/***/ }),

/***/ "./src/app/pages/usuario/usuario.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/usuario/usuario.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".secao {\n  height: 100%;\n}\n\n.cabecalho-secao {\n  text-align: center;\n}\n\n.direita {\n  border-left: 1px solid gray;\n}\n\n.informacoes {\n  display: -webkit-box;\n  display: flex;\n}\n\n.informacoes .person-icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding-right: 5px;\n}\n\n.informacoes .person-icon ion-icon {\n  font-size: 90px;\n  display: -webkit-box;\n  display: flex;\n  background-color: lightgrey;\n  border-radius: 50%;\n}\n\n.informacoes .person-icon .alterar-imagem {\n  margin-top: 5px;\n  color: green;\n  text-align: center;\n}\n\n.informacoes .person-icon div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.informacoes .dados {\n  width: 100%;\n  padding-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXN1YXJpby9DOlxcVXNlcnNcXFVzZXJcXERvY3VtZW50c1xcWXVyaVxcbGl2cm8tdmlzdWFsLUFQUC9zcmNcXGFwcFxccGFnZXNcXHVzdWFyaW9cXHVzdWFyaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy91c3VhcmlvL3VzdWFyaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURBQTtFQUNJLDJCQUFBO0FDR0o7O0FEQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7QUNHSjs7QURGSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxrQkFBQTtBQ0lSOztBREhRO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNLWjs7QURIUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNLWjs7QURIUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNLWjs7QURESTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQ0dSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXN1YXJpby91c3VhcmlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWNhb3tcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uY2FiZWNhbGhvLXNlY2Fve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5kaXJlaXRhe1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xyXG59XHJcblxyXG4uaW5mb3JtYWNvZXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLnBlcnNvbi1pY29ue1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hbHRlcmFyLWltYWdlbXtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRhZG9ze1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbn0iLCIuc2VjYW8ge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYWJlY2FsaG8tc2VjYW8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kaXJlaXRhIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xufVxuXG4uaW5mb3JtYWNvZXMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmluZm9ybWFjb2VzIC5wZXJzb24taWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4uaW5mb3JtYWNvZXMgLnBlcnNvbi1pY29uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA5MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5pbmZvcm1hY29lcyAucGVyc29uLWljb24gLmFsdGVyYXItaW1hZ2VtIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBjb2xvcjogZ3JlZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbmZvcm1hY29lcyAucGVyc29uLWljb24gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaW5mb3JtYWNvZXMgLmRhZG9zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/usuario/usuario.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/usuario/usuario.page.ts ***!
  \***********************************************/
/*! exports provided: UsuarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioPage", function() { return UsuarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_banco_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/banco.service */ "./src/app/services/banco.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/login.page */ "./src/app/pages/login/login.page.ts");





var UsuarioPage = /** @class */ (function () {
    function UsuarioPage(modalCtrl, bancoLocal) {
        this.modalCtrl = modalCtrl;
        this.bancoLocal = bancoLocal;
        this.usuario = null;
    }
    UsuarioPage.prototype.ngOnInit = function () {
    };
    UsuarioPage.prototype.ionViewDidEnter = function () {
        this.buscarUsuario();
    };
    UsuarioPage.prototype.buscarUsuario = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var usuario, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bancoLocal.get("user-credentials")];
                    case 1:
                        usuario = _a.sent();
                        console.log("user retorno: ", usuario);
                        if (!usuario) return [3 /*break*/, 2];
                        this.usuario = usuario;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.modalCtrl.create({ component: _login_login_page__WEBPACK_IMPORTED_MODULE_4__["LoginPage"] })];
                    case 3:
                        modal = _a.sent();
                        modal.present();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UsuarioPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_banco_service__WEBPACK_IMPORTED_MODULE_2__["BancoService"] }
    ]; };
    UsuarioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usuario',
            template: __webpack_require__(/*! raw-loader!./usuario.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/usuario/usuario.page.html"),
            styles: [__webpack_require__(/*! ./usuario.page.scss */ "./src/app/pages/usuario/usuario.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_banco_service__WEBPACK_IMPORTED_MODULE_2__["BancoService"]])
    ], UsuarioPage);
    return UsuarioPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-usuario-usuario-module.js.map