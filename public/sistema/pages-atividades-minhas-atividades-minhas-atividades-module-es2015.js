(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-atividades-minhas-atividades-minhas-atividades-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/atividades/minhas-atividades/minhas-atividades.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/atividades/minhas-atividades/minhas-atividades.page.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <div class=\"cabecalho\">\r\n            <ion-title>Minhas Atividades</ion-title>\r\n            <ion-button (click)=\"adicionarAtividade()\" class=\"adicionar-header\">\r\n                <ion-icon name=\"add-circle\"></ion-icon>\r\n                Adicionar Atividade\r\n            </ion-button>\r\n        </div>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-text color=\"dark\" class=\"ion-text-center\">\r\n        <h1>Escolha uma Atividade</h1>\r\n    </ion-text>\r\n    <ion-list>\r\n        <ng-template ngFor let-texto [ngForOf]=\"atividades\" let-i=\"index\">\r\n            <ion-item (click)=\"abrirAtividade(texto)\">\r\n                <ion-label>Texto {{i+1}} - {{texto.titulo}} - {{texto.autor}}</ion-label>\r\n                <!-- <h3>Texto {{i+1}} - {{texto.titulo}} - {{texto.autor}}</h3> -->\r\n            </ion-item>\r\n        </ng-template>\r\n    </ion-list>\r\n    <!-- <ion-text color=\"dark\">\r\n    </ion-text> -->\r\n</ion-content>\r\n<ion-footer>\r\n    <ion-toolbar>\r\n        <ion-button (click)=\"adicionarAtividade()\" class=\"adicionar-footer\">\r\n            <ion-icon name=\"add-circle\"></ion-icon>\r\n            Adicionar Atividade\r\n        </ion-button>\r\n    </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/atividades/minhas-atividades/minhas-atividades.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/atividades/minhas-atividades/minhas-atividades.module.ts ***!
  \********************************************************************************/
/*! exports provided: MinhasAtividadesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinhasAtividadesPageModule", function() { return MinhasAtividadesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _minhas_atividades_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./minhas-atividades.page */ "./src/app/pages/atividades/minhas-atividades/minhas-atividades.page.ts");







const routes = [
    {
        path: '',
        component: _minhas_atividades_page__WEBPACK_IMPORTED_MODULE_6__["MinhasAtividadesPage"]
    }
];
let MinhasAtividadesPageModule = class MinhasAtividadesPageModule {
};
MinhasAtividadesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_minhas_atividades_page__WEBPACK_IMPORTED_MODULE_6__["MinhasAtividadesPage"]]
    })
], MinhasAtividadesPageModule);



/***/ }),

/***/ "./src/app/pages/atividades/minhas-atividades/minhas-atividades.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/atividades/minhas-atividades/minhas-atividades.page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cabecalho {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  padding-right: 15px;\n}\n\n.adicionar-header ion-icon {\n  padding-right: 5px;\n}\n\n.adicionar-footer {\n  display: none;\n}\n\n.adicionar-footer ion-icon {\n  padding-right: 5px;\n}\n\n@media (max-width: 600px) {\n  .adicionar-header {\n    display: none;\n  }\n\n  .adicionar-footer {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXRpdmlkYWRlcy9taW5oYXMtYXRpdmlkYWRlcy9DOlxcVXNlcnNcXFVzZXJcXERvY3VtZW50c1xcWXVyaVxcbGl2cm8tdmlzdWFsLUFQUC9zcmNcXGFwcFxccGFnZXNcXGF0aXZpZGFkZXNcXG1pbmhhcy1hdGl2aWRhZGVzXFxtaW5oYXMtYXRpdmlkYWRlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F0aXZpZGFkZXMvbWluaGFzLWF0aXZpZGFkZXMvbWluaGFzLWF0aXZpZGFkZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FER0k7RUFDSSxrQkFBQTtBQ0FSOztBREdBO0VBQ0ksYUFBQTtBQ0FKOztBRENJO0VBQ0ksa0JBQUE7QUNDUjs7QURFQTtFQUNJO0lBQ0ksYUFBQTtFQ0NOOztFRENFO0lBQ0ksY0FBQTtFQ0VOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdGl2aWRhZGVzL21pbmhhcy1hdGl2aWRhZGVzL21pbmhhcy1hdGl2aWRhZGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWJlY2FsaG97ICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uYWRpY2lvbmFyLWhlYWRlcntcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIH1cclxufVxyXG4uYWRpY2lvbmFyLWZvb3RlcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgIC5hZGljaW9uYXItaGVhZGVye1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuYWRpY2lvbmFyLWZvb3RlcntcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufSIsIi5jYWJlY2FsaG8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4uYWRpY2lvbmFyLWhlYWRlciBpb24taWNvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmFkaWNpb25hci1mb290ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmFkaWNpb25hci1mb290ZXIgaW9uLWljb24ge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYWRpY2lvbmFyLWhlYWRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5hZGljaW9uYXItZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/atividades/minhas-atividades/minhas-atividades.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/atividades/minhas-atividades/minhas-atividades.page.ts ***!
  \******************************************************************************/
/*! exports provided: MinhasAtividadesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinhasAtividadesPage", function() { return MinhasAtividadesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let MinhasAtividadesPage = class MinhasAtividadesPage {
    constructor(router, api, loadingCtrl, alertCtrl) {
        this.router = router;
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.textos = [{
                titulo: 'Soneto VII',
                autor: 'Gregório de Matos'
            }, {
                titulo: 'Soneto',
                autor: 'Cláudio Manoel da Costa'
            }, {
                titulo: 'Amor',
                autor: 'Álvares de Azevedo'
            }, {
                titulo: 'Deixe que o Olhar',
                autor: 'Olavo Bilac'
            }, {
                titulo: 'O Quinze',
                autor: 'Rachel de Queiroz'
            }, {
                titulo: 'Oceano',
                autor: 'Djavan'
            }, {
                titulo: 'Soneto',
                autor: 'Alphonsus de Guimaraens'
            }];
        this.atividades = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.buscarAtividades();
    }
    adicionarAtividade() {
        console.log("Nova Atividade");
        this.router.navigate(['/atividades/nova-atividade']);
    }
    buscarAtividades() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({ message: "Buscando atividades..." });
            loading.present();
            let body = `
            query {
                buscarAtividades{
                    id
                    titulo
                    autor
                }
            }
        `;
            let retorno = yield this.api.get(body);
            loading.dismiss();
            console.log('retorno: ', retorno);
            if (!retorno.errors && retorno.data.buscarAtividades) {
                this.atividades = retorno.data.buscarAtividades;
            }
            else {
                let alerta = yield this.alertCtrl.create({ header: "Erro", message: "Ocorreu um erro, tente novamente." });
                alerta.present();
            }
        });
    }
    abrirAtividade(atividade) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.router.navigate(['atividades/responder-atividade/' + atividade.id]);
            // let loading = await this.loadingCtrl.create({ message: "Buscando atividades..." })
            // loading.present()
            // let body = `
            //     query {
            //         retornarAtividade(id_atividade: ${atividade.id}){
            //             id
            //             titulo
            //             autor
            //             texto
            //             imagens{
            //                 imagem{
            //                     link
            //                 }
            //             }
            //         }
            //     }
            // `
            // let retorno = await this.api.get(body)
            // loading.dismiss()
        });
    }
};
MinhasAtividadesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
MinhasAtividadesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-minhas-atividades',
        template: __webpack_require__(/*! raw-loader!./minhas-atividades.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/atividades/minhas-atividades/minhas-atividades.page.html"),
        styles: [__webpack_require__(/*! ./minhas-atividades.page.scss */ "./src/app/pages/atividades/minhas-atividades/minhas-atividades.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], MinhasAtividadesPage);



/***/ })

}]);
//# sourceMappingURL=pages-atividades-minhas-atividades-minhas-atividades-module-es2015.js.map