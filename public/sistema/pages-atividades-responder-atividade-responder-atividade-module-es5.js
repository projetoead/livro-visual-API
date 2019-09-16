(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-atividades-responder-atividade-responder-atividade-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/atividades/responder-atividade/responder-atividade.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/atividades/responder-atividade/responder-atividade.page.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>Responder Atividade</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"conteudo\">\r\n        <div class=\"slide-um\">\r\n            <div [hidden]=\"slideAtual != 1\">\r\n                <ion-text color=\"dark\">\r\n                    <h1>Livro de Registro Visual</h1>\r\n                </ion-text>\r\n                <ion-button (click)=\"avancar()\">\r\n                    Iniciar\r\n                </ion-button>\r\n            </div>\r\n            <div [hidden]=\"slideAtual != 2\">\r\n                <ion-grid>\r\n                    <ion-row>\r\n                        <ion-col size-lg=\"6\" size-sm=\"12\">\r\n                            <ion-text color=\"dark\">\r\n                                <h1>{{atividade ? atividade.titulo : 'Sem Titulo'}}</h1>\r\n                                <h3>{{atividade ? atividade.autor : 'Sem Autor'}}</h3>\r\n                            </ion-text>\r\n                            <div #textoView id=\"textoView\"></div>\r\n                            <div hidden>\r\n                                <div #editorView id=\"editorView\"></div>\r\n                            </div>\r\n                        </ion-col>\r\n                        <ion-col size-lg=\"6\" size-sm=\"12\">\r\n                            <ion-text color=\"dark\" class=\"ion-text-center\">\r\n                                <h1>Pontos Focais</h1>\r\n                            </ion-text>\r\n                            <ion-list>\r\n                                <ng-template ngFor let-ponto [ngForOf]=\"listaPontos\" let-i=\"index\">\r\n                                    <ion-item>\r\n                                        <ion-label>{{i+1 + ' - '+ ponto}}</ion-label>\r\n                                    </ion-item>\r\n                                </ng-template>\r\n                            </ion-list>\r\n                            <ion-item>\r\n                                <ion-label position=\"floating\">Novo Ponto Focal</ion-label>\r\n                                <ion-input type=\"text\" [(ngModel)]=\"pontoFocal\"></ion-input>\r\n                            </ion-item>\r\n                            <ion-button (click)=\"adicionarPonto()\" [disabled]='!pontoFocal'>\r\n                                <ion-icon slot=\"start\" name=\"add\"></ion-icon>\r\n                                Adicionar\r\n                            </ion-button>\r\n                            <ion-button (click)=\"avancar()\" [disabled]='listaPontos.length<5'>\r\n                                <ion-icon name=\"arrow-forward\"></ion-icon>\r\n                                Avançar\r\n                            </ion-button>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-grid>\r\n            </div>\r\n            <div [hidden]=\"slideAtual != 3\">\r\n                <ion-grid>\r\n                    <ion-row>\r\n                        <ion-col size=\"6\">\r\n                            <ion-row *ngIf=\"atividade\">\r\n                                <ng-template ngFor let-img [ngForOf]=\"atividade.imagens\" let-i=\"index\">\r\n                                    <ion-col size=\"6\">\r\n                                        <div class=\"imagens\">\r\n                                            <img [src]=\"img.imagem.link\" class=\"imagem\">\r\n                                        </div>\r\n                                    </ion-col>\r\n                                </ng-template>\r\n                                <ion-col size=\"12\"></ion-col>\r\n                            </ion-row>\r\n                        </ion-col>\r\n                        <ion-col size=\"6\">\r\n                            <div #editorSintese id=\"editorSintese\"></div>\r\n                            <ion-button (click)=\"concluir()\" color=\"success\">\r\n                                Concluir\r\n                            </ion-button>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-grid>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/atividades/responder-atividade/responder-atividade.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/atividades/responder-atividade/responder-atividade.module.ts ***!
  \************************************************************************************/
/*! exports provided: ResponderAtividadePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponderAtividadePageModule", function() { return ResponderAtividadePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _responder_atividade_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./responder-atividade.page */ "./src/app/pages/atividades/responder-atividade/responder-atividade.page.ts");







var routes = [
    {
        path: '',
        component: _responder_atividade_page__WEBPACK_IMPORTED_MODULE_6__["ResponderAtividadePage"]
    }
];
var ResponderAtividadePageModule = /** @class */ (function () {
    function ResponderAtividadePageModule() {
    }
    ResponderAtividadePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_responder_atividade_page__WEBPACK_IMPORTED_MODULE_6__["ResponderAtividadePage"]]
        })
    ], ResponderAtividadePageModule);
    return ResponderAtividadePageModule;
}());



/***/ }),

/***/ "./src/app/pages/atividades/responder-atividade/responder-atividade.page.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/atividades/responder-atividade/responder-atividade.page.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".conteudo {\n  padding: 0 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXRpdmlkYWRlcy9yZXNwb25kZXItYXRpdmlkYWRlL0M6XFxVc2Vyc1xcVXNlclxcRG9jdW1lbnRzXFxZdXJpXFxsaXZyby12aXN1YWwtQVBQL3NyY1xcYXBwXFxwYWdlc1xcYXRpdmlkYWRlc1xccmVzcG9uZGVyLWF0aXZpZGFkZVxccmVzcG9uZGVyLWF0aXZpZGFkZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F0aXZpZGFkZXMvcmVzcG9uZGVyLWF0aXZpZGFkZS9yZXNwb25kZXItYXRpdmlkYWRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F0aXZpZGFkZXMvcmVzcG9uZGVyLWF0aXZpZGFkZS9yZXNwb25kZXItYXRpdmlkYWRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZXVkb3tcclxuICAgIHBhZGRpbmc6IDAgMjVweDtcclxufSIsIi5jb250ZXVkbyB7XG4gIHBhZGRpbmc6IDAgMjVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/atividades/responder-atividade/responder-atividade.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/atividades/responder-atividade/responder-atividade.page.ts ***!
  \**********************************************************************************/
/*! exports provided: ResponderAtividadePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponderAtividadePage", function() { return ResponderAtividadePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_5__);






var ResponderAtividadePage = /** @class */ (function () {
    function ResponderAtividadePage(loadingCtrl, route, api) {
        this.loadingCtrl = loadingCtrl;
        this.route = route;
        this.api = api;
        this.slideAtual = 1;
        this.atividade = null;
        this.listaPontos = [];
        this.pontoFocal = '';
        // let id_atividade = this.route.snapshot.paramMap.get('id');
    }
    ResponderAtividadePage.prototype.ionViewDidEnter = function () {
        var id_atividade = this.route.snapshot.paramMap.get('id');
        this.abrirAtividade(id_atividade);
    };
    ResponderAtividadePage.prototype.ngOnInit = function () {
        var toolbarOptions = [
            [{ 'font': [] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'align': [] }],
            ['clean']
        ];
        this.editorView = new quill__WEBPACK_IMPORTED_MODULE_5__('#editorView', {
            theme: 'snow', modules: {
                toolbar: toolbarOptions
            }
        });
        this.editor = new quill__WEBPACK_IMPORTED_MODULE_5__('#editorSintese', {
            theme: 'snow', modules: {
                toolbar: toolbarOptions
            }
        });
    };
    ResponderAtividadePage.prototype.abrirAtividade = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, body, retorno;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({ message: "Buscando atividades..." })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        body = "\n            query {\n                retornarAtividade(id_atividade: " + id + "){\n                    id\n                    titulo\n                    autor\n                    texto\n                    imagens{\n                        imagem{\n                            link\n                        }\n                    }\n                }\n            }\n        ";
                        return [4 /*yield*/, this.api.get(body)];
                    case 2:
                        retorno = _a.sent();
                        loading.dismiss();
                        if (!retorno.errors && retorno.data.retornarAtividade) {
                            this.atividade = retorno.data.retornarAtividade;
                            this.processarDados();
                        }
                        else {
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ResponderAtividadePage.prototype.processarDados = function () {
        console.log("Texto: ", (JSON.parse(this.atividade.texto)));
        this.editorView.setContents(JSON.parse(this.atividade.texto));
        var justHtmlContent = document.getElementById('textoView');
        var justHtml = this.editorView.root.innerHTML;
        justHtmlContent.innerHTML = justHtml;
    };
    ResponderAtividadePage.prototype.avancar = function () {
        this.slideAtual++;
    };
    ResponderAtividadePage.prototype.voltar = function () {
        this.slideAtual--;
    };
    ResponderAtividadePage.prototype.adicionarPonto = function () {
        this.listaPontos.push(JSON.parse(JSON.stringify(this.pontoFocal)));
        this.pontoFocal = '';
    };
    ResponderAtividadePage.prototype.concluir = function () {
    };
    ResponderAtividadePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }
    ]; };
    ResponderAtividadePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-responder-atividade',
            template: __webpack_require__(/*! raw-loader!./responder-atividade.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/atividades/responder-atividade/responder-atividade.page.html"),
            styles: [__webpack_require__(/*! ./responder-atividade.page.scss */ "./src/app/pages/atividades/responder-atividade/responder-atividade.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ResponderAtividadePage);
    return ResponderAtividadePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-atividades-responder-atividade-responder-atividade-module-es5.js.map