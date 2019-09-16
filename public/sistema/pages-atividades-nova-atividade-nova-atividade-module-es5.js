(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-atividades-nova-atividade-nova-atividade-module"],{

/***/ "./node_modules/ngx-quill/fesm5/ngx-quill.js":
/*!***************************************************!*\
  !*** ./node_modules/ngx-quill/fesm5/ngx-quill.js ***!
  \***************************************************/
/*! exports provided: QUILL_CONFIG_TOKEN, QuillEditorComponent, QuillModule, QuillViewComponent, QuillViewHTMLComponent, defaultModules, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUILL_CONFIG_TOKEN", function() { return QUILL_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuillEditorComponent", function() { return QuillEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuillModule", function() { return QuillModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuillViewComponent", function() { return QuillViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuillViewHTMLComponent", function() { return QuillViewHTMLComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultModules", function() { return defaultModules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var defaultModules = {
    toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ header: 1 }, { header: 2 }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ direction: 'rtl' }],
        [{ size: ['small', false, 'large', 'huge'] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [
            { color: [] },
            { background: [] }
        ],
        [{ font: [] }],
        [{ align: [] }],
        ['clean'],
        ['link', 'image', 'video'] // link and image, video
    ]
};

var QUILL_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('config');

// tslint:disable-next-line:variable-name
var Quill = null;
var getFormat = function (format, configFormat) {
    var passedFormat = format || configFormat;
    return passedFormat || 'html';
};
var ɵ0 = getFormat;
var QuillEditorComponent = /** @class */ (function () {
    function QuillEditorComponent(elementRef, domSanitizer, doc, 
    // tslint:disable-next-line:ban-types
    platformId, renderer, zone, config) {
        var _this = this;
        this.elementRef = elementRef;
        this.domSanitizer = domSanitizer;
        this.doc = doc;
        this.platformId = platformId;
        this.renderer = renderer;
        this.zone = zone;
        this.config = config;
        this.required = false;
        this.customToolbarPosition = 'top';
        this.sanitize = false;
        this.styles = null;
        this.strict = true;
        this.customOptions = [];
        this.preserveWhitespace = false;
        this.onEditorCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onEditorChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onContentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onSelectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.disabled = false; // used to store initial value before ViewInit
        this.valueGetter = function (quillEditor, editorElement) {
            var html = editorElement.querySelector('.ql-editor').innerHTML;
            if (html === '<p><br></p>' || html === '<div><br><div>') {
                html = null;
            }
            var modelValue = html;
            var format = getFormat(_this.format, _this.config.format);
            if (format === 'text') {
                modelValue = quillEditor.getText();
            }
            else if (format === 'object') {
                modelValue = quillEditor.getContents();
            }
            else if (format === 'json') {
                try {
                    modelValue = JSON.stringify(quillEditor.getContents());
                }
                catch (e) {
                    modelValue = quillEditor.getText();
                }
            }
            return modelValue;
        };
        this.valueSetter = function (quillEditor, value) {
            var format = getFormat(_this.format, _this.config.format);
            if (format === 'html') {
                if (_this.sanitize) {
                    value = _this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].HTML, value);
                }
                return quillEditor.clipboard.convert(value);
            }
            else if (format === 'json') {
                try {
                    return JSON.parse(value);
                }
                catch (e) {
                    return [{ insert: value }];
                }
            }
            return value;
        };
        this.selectionChangeHandler = function (range, oldRange, source) {
            _this.zone.run(function () {
                if (range === null) {
                    _this.onBlur.emit({
                        editor: _this.quillEditor,
                        source: source
                    });
                }
                else if (oldRange === null) {
                    _this.onFocus.emit({
                        editor: _this.quillEditor,
                        source: source
                    });
                }
                _this.onSelectionChanged.emit({
                    editor: _this.quillEditor,
                    oldRange: oldRange,
                    range: range,
                    source: source
                });
                if (!range && _this.onModelTouched) {
                    _this.onModelTouched();
                }
            });
        };
        this.textChangeHandler = function (delta, oldDelta, source) {
            // only emit changes emitted by user interactions
            var text = _this.quillEditor.getText();
            var content = _this.quillEditor.getContents();
            var html = _this.editorElem.querySelector('.ql-editor').innerHTML;
            if (html === '<p><br></p>' || html === '<div><br><div>') {
                html = null;
            }
            _this.zone.run(function () {
                var trackChanges = _this.trackChanges || _this.config.trackChanges;
                if ((source === Quill.sources.USER || trackChanges && trackChanges === 'all') && _this.onModelChange) {
                    _this.onModelChange(_this.valueGetter(_this.quillEditor, _this.editorElem));
                }
                _this.onContentChanged.emit({
                    content: content,
                    delta: delta,
                    editor: _this.quillEditor,
                    html: html,
                    oldDelta: oldDelta,
                    source: source,
                    text: text
                });
            });
        };
        this.editorChangeHandler = function (event, current, old, source) {
            // only emit changes emitted by user interactions
            if (event === 'text-change') {
                var text_1 = _this.quillEditor.getText();
                var content_1 = _this.quillEditor.getContents();
                var html_1 = _this.editorElem.querySelector('.ql-editor').innerHTML;
                if (html_1 === '<p><br></p>' || html_1 === '<div><br><div>') {
                    html_1 = null;
                }
                _this.zone.run(function () {
                    _this.onEditorChanged.emit({
                        content: content_1,
                        delta: current,
                        editor: _this.quillEditor,
                        event: event,
                        html: html_1,
                        oldDelta: old,
                        source: source,
                        text: text_1
                    });
                });
            }
            else {
                _this.onEditorChanged.emit({
                    editor: _this.quillEditor,
                    event: event,
                    oldRange: old,
                    range: current,
                    source: source
                });
            }
        };
    }
    QuillEditorComponent_1 = QuillEditorComponent;
    QuillEditorComponent.normalizeClassNames = function (classes) {
        var classList = classes.trim().split(' ');
        return classList.reduce(function (prev, cur) {
            var trimmed = cur.trim();
            if (trimmed) {
                prev.push(trimmed);
            }
            return prev;
        }, []);
    };
    // tslint:disable-next-line:no-empty
    QuillEditorComponent.prototype.onModelChange = function (_modelValue) { };
    // tslint:disable-next-line:no-empty
    QuillEditorComponent.prototype.onModelTouched = function () { };
    QuillEditorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId)) {
            return;
        }
        if (!Quill) {
            Quill = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js");
        }
        this.elementRef.nativeElement.insertAdjacentHTML(this.customToolbarPosition === 'top' ? 'beforeend' : 'afterbegin', this.preserveWhitespace ? '<pre quill-editor-element></pre>' : '<div quill-editor-element></div>');
        this.editorElem = this.elementRef.nativeElement.querySelector('[quill-editor-element]');
        var toolbarElem = this.elementRef.nativeElement.querySelector('[quill-editor-toolbar]');
        var modules = Object.assign({}, this.modules || (this.config.modules || defaultModules));
        if (toolbarElem) {
            modules.toolbar = toolbarElem;
        }
        else if (modules.toolbar === undefined) {
            modules.toolbar = defaultModules.toolbar;
        }
        var placeholder = this.placeholder !== undefined ? this.placeholder : this.config.placeholder;
        if (placeholder === undefined) {
            placeholder = 'Insert text here ...';
        }
        if (this.styles) {
            Object.keys(this.styles).forEach(function (key) {
                _this.renderer.setStyle(_this.editorElem, key, _this.styles[key]);
            });
        }
        if (this.classes) {
            this.addClasses(this.classes);
        }
        this.customOptions.forEach(function (customOption) {
            var newCustomOption = Quill.import(customOption.import);
            newCustomOption.whitelist = customOption.whitelist;
            Quill.register(newCustomOption, true);
        });
        var bounds = this.bounds && this.bounds === 'self' ? this.editorElem : this.bounds;
        if (!bounds) {
            bounds = this.config.bounds ? this.config.bounds : this.doc.body;
        }
        var debug = this.debug;
        if (!debug && debug !== false && this.config.debug) {
            debug = this.config.debug;
        }
        var readOnly = this.readOnly;
        if (!readOnly && this.readOnly !== false) {
            readOnly = this.config.readOnly !== undefined ? this.config.readOnly : false;
        }
        var scrollingContainer = this.scrollingContainer;
        if (!scrollingContainer && this.scrollingContainer !== null) {
            scrollingContainer = this.config.scrollingContainer === null || this.config.scrollingContainer ? this.config.scrollingContainer : null;
        }
        var formats = this.formats;
        if (!formats && formats === undefined) {
            formats = this.config.formats ? Object.assign({}, this.config.formats) : (this.config.formats === null ? null : undefined);
        }
        this.quillEditor = new Quill(this.editorElem, {
            bounds: bounds,
            debug: debug,
            formats: formats,
            modules: modules,
            placeholder: placeholder,
            readOnly: readOnly,
            scrollingContainer: scrollingContainer,
            strict: this.strict,
            theme: this.theme || (this.config.theme ? this.config.theme : 'snow')
        });
        if (this.content) {
            var format = getFormat(this.format, this.config.format);
            if (format === 'object') {
                this.quillEditor.setContents(this.content, 'silent');
            }
            else if (format === 'text') {
                this.quillEditor.setText(this.content, 'silent');
            }
            else if (format === 'json') {
                try {
                    this.quillEditor.setContents(JSON.parse(this.content), 'silent');
                }
                catch (e) {
                    this.quillEditor.setText(this.content, 'silent');
                }
            }
            else {
                if (this.sanitize) {
                    this.content = this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].HTML, this.content);
                }
                var contents = this.quillEditor.clipboard.convert(this.content);
                this.quillEditor.setContents(contents, 'silent');
            }
            this.quillEditor.history.clear();
        }
        // initialize disabled status based on this.disabled as default value
        this.setDisabledState();
        // triggered if selection or text changed
        this.quillEditor.on('editor-change', this.editorChangeHandler);
        // mark model as touched if editor lost focus
        this.quillEditor.on('selection-change', this.selectionChangeHandler);
        // update model if text changes
        this.quillEditor.on('text-change', this.textChangeHandler);
        // trigger created in a timeout to avoid changed models after checked
        // if you are using the editor api in created output to change the editor content
        setTimeout(function () { return _this.onEditorCreated.emit(_this.quillEditor); });
    };
    QuillEditorComponent.prototype.ngOnDestroy = function () {
        if (this.quillEditor) {
            this.quillEditor.off('selection-change', this.selectionChangeHandler);
            this.quillEditor.off('text-change', this.textChangeHandler);
            this.quillEditor.off('editor-change', this.editorChangeHandler);
        }
    };
    QuillEditorComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (!this.quillEditor) {
            return;
        }
        // tslint:disable:no-string-literal
        if (changes['readOnly']) {
            this.quillEditor.enable(!changes['readOnly'].currentValue);
        }
        if (changes['placeholder']) {
            this.quillEditor.root.dataset.placeholder =
                changes['placeholder'].currentValue;
        }
        if (changes['styles']) {
            var currentStyling = changes['styles'].currentValue;
            var previousStyling = changes['styles'].previousValue;
            if (previousStyling) {
                Object.keys(previousStyling).forEach(function (key) {
                    _this.renderer.removeStyle(_this.editorElem, key);
                });
            }
            if (currentStyling) {
                Object.keys(currentStyling).forEach(function (key) {
                    _this.renderer.setStyle(_this.editorElem, key, _this.styles[key]);
                });
            }
        }
        if (changes['classes']) {
            var currentClasses = changes['classes'].currentValue;
            var previousClasses = changes['classes'].previousValue;
            if (previousClasses) {
                this.removeClasses(previousClasses);
            }
            if (currentClasses) {
                this.addClasses(currentClasses);
            }
        }
        // tslint:enable:no-string-literal
    };
    QuillEditorComponent.prototype.addClasses = function (classList) {
        var _this = this;
        QuillEditorComponent_1.normalizeClassNames(classList).forEach(function (c) {
            _this.renderer.addClass(_this.editorElem, c);
        });
    };
    QuillEditorComponent.prototype.removeClasses = function (classList) {
        var _this = this;
        QuillEditorComponent_1.normalizeClassNames(classList).forEach(function (c) {
            _this.renderer.removeClass(_this.editorElem, c);
        });
    };
    QuillEditorComponent.prototype.writeValue = function (currentValue) {
        this.content = currentValue;
        var format = getFormat(this.format, this.config.format);
        if (this.quillEditor) {
            if (currentValue) {
                if (format === 'text') {
                    this.quillEditor.setText(currentValue);
                }
                else {
                    this.quillEditor.setContents(this.valueSetter(this.quillEditor, this.content));
                }
                return;
            }
            this.quillEditor.setText('');
        }
    };
    QuillEditorComponent.prototype.setDisabledState = function (isDisabled) {
        if (isDisabled === void 0) { isDisabled = this.disabled; }
        // store initial value to set appropriate disabled status after ViewInit
        this.disabled = isDisabled;
        if (this.quillEditor) {
            if (isDisabled) {
                this.quillEditor.disable();
                this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', 'disabled');
            }
            else {
                if (!this.readOnly) {
                    this.quillEditor.enable();
                }
                this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
            }
        }
    };
    QuillEditorComponent.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    QuillEditorComponent.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    QuillEditorComponent.prototype.validate = function () {
        if (!this.quillEditor) {
            return null;
        }
        var err = {};
        var valid = true;
        var textLength = this.quillEditor.getText().trim().length;
        if (this.minLength && textLength && textLength < this.minLength) {
            err.minLengthError = {
                given: textLength,
                minLength: this.minLength
            };
            valid = false;
        }
        if (this.maxLength && textLength > this.maxLength) {
            err.maxLengthError = {
                given: textLength,
                maxLength: this.maxLength
            };
            valid = false;
        }
        if (this.required && !textLength) {
            err.requiredError = {
                empty: true
            };
            valid = false;
        }
        return valid ? null : err;
    };
    var QuillEditorComponent_1;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], QuillEditorComponent.prototype, "format", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], QuillEditorComponent.prototype, "theme", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], QuillEditorComponent.prototype, "modules", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], QuillEditorComponent.prototype, "debug", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], QuillEditorComponent.prototype, "readOnly", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], QuillEditorComponent.prototype, "placeholder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], QuillEditorComponent.prototype, "maxLength", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], QuillEditorComponent.prototype, "minLength", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], QuillEditorComponent.prototype, "required", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], QuillEditorComponent.prototype, "formats", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], QuillEditorComponent.prototype, "customToolbarPosition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], QuillEditorComponent.prototype, "sanitize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], QuillEditorComponent.prototype, "styles", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], QuillEditorComponent.prototype, "strict", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], QuillEditorComponent.prototype, "scrollingContainer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], QuillEditorComponent.prototype, "bounds", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], QuillEditorComponent.prototype, "customOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], QuillEditorComponent.prototype, "trackChanges", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], QuillEditorComponent.prototype, "preserveWhitespace", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], QuillEditorComponent.prototype, "classes", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], QuillEditorComponent.prototype, "onEditorCreated", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], QuillEditorComponent.prototype, "onEditorChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], QuillEditorComponent.prototype, "onContentChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], QuillEditorComponent.prototype, "onSelectionChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], QuillEditorComponent.prototype, "onFocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], QuillEditorComponent.prototype, "onBlur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], QuillEditorComponent.prototype, "valueGetter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], QuillEditorComponent.prototype, "valueSetter", void 0);
    QuillEditorComponent = QuillEditorComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            providers: [
                {
                    multi: true,
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () { return QuillEditorComponent_1; })
                },
                {
                    multi: true,
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () { return QuillEditorComponent_1; })
                }
            ],
            selector: 'quill-editor',
            template: "\n  <ng-content select=\"[quill-editor-toolbar]\"></ng-content>\n"
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(QUILL_CONFIG_TOKEN)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], Object, Object,
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], Object])
    ], QuillEditorComponent);
    return QuillEditorComponent;
}());

var QuillViewHTMLComponent = /** @class */ (function () {
    function QuillViewHTMLComponent(sanitizer, config) {
        this.sanitizer = sanitizer;
        this.config = config;
        this.innerHTML = '';
        this.themeClass = 'ql-snow';
        this.content = '';
    }
    QuillViewHTMLComponent.prototype.ngOnChanges = function (changes) {
        if (changes.theme) {
            var theme = changes.theme.currentValue || (this.config.theme ? this.config.theme : 'snow');
            this.themeClass = "ql-" + theme + " ngx-quill-view-html";
        }
        else if (!this.theme) {
            var theme = this.config.theme ? this.config.theme : 'snow';
            this.themeClass = "ql-" + theme + " ngx-quill-view-html";
        }
        if (changes.content) {
            this.innerHTML = this.sanitizer.bypassSecurityTrustHtml(changes.content.currentValue);
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], QuillViewHTMLComponent.prototype, "content", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], QuillViewHTMLComponent.prototype, "theme", void 0);
    QuillViewHTMLComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            selector: 'quill-view-html',
            template: "\n  <div class=\"ql-container\" [ngClass]=\"themeClass\">\n    <div class=\"ql-editor\" [innerHTML]=\"innerHTML\">\n    </div>\n  </div>\n",
            styles: ["\n.ql-container.ngx-quill-view-html {\n  border: 0;\n}\n"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(QUILL_CONFIG_TOKEN)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], Object])
    ], QuillViewHTMLComponent);
    return QuillViewHTMLComponent;
}());

// tslint:disable-next-line:variable-name
var Quill$1 = null;
var getFormat$1 = function (format, configFormat) {
    var passedFormat = format || configFormat;
    return passedFormat || 'html';
};
var ɵ0$1 = getFormat$1;
var QuillViewComponent = /** @class */ (function () {
    function QuillViewComponent(
    // tslint:disable-next-line:ban-types
    platformId, config, renderer, elementRef) {
        var _this = this;
        this.platformId = platformId;
        this.config = config;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.strict = true;
        this.customOptions = [];
        this.preserveWhitespace = false;
        this.valueSetter = function (quillEditor, value) {
            var format = getFormat$1(_this.format, _this.config.format);
            var content = value;
            if (format === 'html' || format === 'text') {
                content = quillEditor.clipboard.convert(value);
            }
            else if (format === 'json') {
                try {
                    content = JSON.parse(value);
                }
                catch (e) {
                    content = [{ insert: value }];
                }
            }
            quillEditor.setContents(content);
        };
    }
    QuillViewComponent.prototype.ngOnChanges = function (changes) {
        if (!this.quillEditor) {
            return;
        }
        if (changes.content) {
            this.valueSetter(this.quillEditor, changes.content.currentValue);
        }
    };
    QuillViewComponent.prototype.ngAfterViewInit = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId)) {
            return;
        }
        if (!Quill$1) {
            Quill$1 = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js");
        }
        var modules = Object.assign({}, this.modules || (this.config.modules || defaultModules));
        modules.toolbar = false;
        this.customOptions.forEach(function (customOption) {
            var newCustomOption = Quill$1.import(customOption.import);
            newCustomOption.whitelist = customOption.whitelist;
            Quill$1.register(newCustomOption, true);
        });
        var debug = this.debug;
        if (!debug && debug !== false && this.config.debug) {
            debug = this.config.debug;
        }
        var formats = this.formats;
        if (!formats && formats === undefined) {
            formats = this.config.formats ? Object.assign({}, this.config.formats) : (this.config.formats === null ? null : undefined);
        }
        var theme = this.theme || (this.config.theme ? this.config.theme : 'snow');
        this.elementRef.nativeElement.insertAdjacentHTML('afterbegin', this.preserveWhitespace ? '<pre quill-view-element></pre>' : '<div quill-view-element></div>');
        this.editorElem = this.elementRef.nativeElement.querySelector('[quill-view-element]');
        this.quillEditor = new Quill$1(this.editorElem, {
            debug: debug,
            formats: formats,
            modules: modules,
            readOnly: true,
            strict: this.strict,
            theme: theme
        });
        this.renderer.addClass(this.editorElem, 'ngx-quill-view');
        if (this.content) {
            this.valueSetter(this.quillEditor, this.content);
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], QuillViewComponent.prototype, "format", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], QuillViewComponent.prototype, "theme", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], QuillViewComponent.prototype, "modules", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], QuillViewComponent.prototype, "debug", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], QuillViewComponent.prototype, "formats", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], QuillViewComponent.prototype, "strict", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], QuillViewComponent.prototype, "content", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], QuillViewComponent.prototype, "customOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], QuillViewComponent.prototype, "preserveWhitespace", void 0);
    QuillViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            selector: 'quill-view',
            template: "\n",
            styles: ["\n.ql-container.ngx-quill-view {\n  border: 0;\n}\n"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(QUILL_CONFIG_TOKEN)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object, _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
    ], QuillViewComponent);
    return QuillViewComponent;
}());

var QuillModule = /** @class */ (function () {
    function QuillModule() {
    }
    QuillModule_1 = QuillModule;
    QuillModule.forRoot = function (config) {
        return {
            ngModule: QuillModule_1,
            providers: [
                {
                    provide: QUILL_CONFIG_TOKEN,
                    // tslint:disable-next-line:only-arrow-functions
                    useValue: config || { modules: defaultModules }
                }
            ]
        };
    };
    var QuillModule_1;
    QuillModule = QuillModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                QuillEditorComponent,
                QuillViewComponent,
                QuillViewHTMLComponent
            ],
            exports: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            providers: []
        })
    ], QuillModule);
    return QuillModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-quill.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/atividades/nova-atividade/nova-atividade.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/atividades/nova-atividade/nova-atividade.page.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <div class=\"cabecalho\">\r\n            <ion-title>Nova Atividade</ion-title>\r\n            <ion-button (click)=\"salvar()\" [disabled]=\"!atividadeForm.valid\">\r\n                <ion-icon slot=\"start\" name=\"save\"></ion-icon>\r\n                Salvar\r\n            </ion-button>\r\n        </div>\r\n    </ion-toolbar>\r\n    <!-- <ion-toolbar>\r\n    </ion-toolbar> -->\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <!-- <div class=\"cabecalho\">\r\n        <small>Campos com * são obrigatórios.</small>\r\n    </div> -->\r\n    <!-- <div class=\"forms\"> -->\r\n    <ion-card>\r\n        <ion-card-header>\r\n            <ion-card-title>Informações da Atividade</ion-card-title>\r\n            <ion-card-subtitle><small>Campos com * são obrigatórios.</small></ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n            <div class=\"teste\">\r\n                <form [formGroup]=\"atividadeForm\">\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Título <ion-text color=\"danger\">*</ion-text>\r\n                        </ion-label>\r\n                        <ion-input required formControlName=\"titulo\"></ion-input>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Autor <ion-text color=\"danger\">*</ion-text>\r\n                        </ion-label>\r\n                        <ion-input required formControlName=\"autor\"></ion-input>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Descrição</ion-label>\r\n                        <ion-textarea rows=\"2\" formControlName=\"descricao\"></ion-textarea>\r\n                    </ion-item>\r\n                </form>\r\n                <!-- <ion-item-divider> -->\r\n                <ion-list-header>\r\n                    <ion-text color=\"dark\">\r\n                        <h1>Texto para Análise <ion-text color=\"danger\">*</ion-text></h1>\r\n                    </ion-text>\r\n                </ion-list-header>\r\n                <!-- </ion-item-divider> -->\r\n                <div id=\"editor\"></div>\r\n                <ion-list-header>\r\n                    <ion-text color=\"dark\">\r\n                        <h1>Imagens</h1>\r\n                    </ion-text>\r\n                </ion-list-header>\r\n                <!-- <ion-button (click)=\"selecionarImagens()\">\r\n                    Selecionar Imagens\r\n                </ion-button> -->\r\n                <input type=\"file\" src=\"\" accept=\"image/*\" multiple=\"false\" id=\"imagePicker\" hidden\r\n                    (change)=\"abreArquivos($event)\">\r\n                <ion-row>\r\n                    <ion-col size=\"4\">\r\n                        <div class=\"adicionar-imagem\" (click)=\"selecionarImagens()\">\r\n                            <ion-text>\r\n                                <h1>\r\n                                    <ion-icon name=\"add\"></ion-icon>\r\n                                </h1>\r\n                            </ion-text>\r\n                            <ion-text color=\"dark\">\r\n                                <p>Selecionar Imagens</p>\r\n                            </ion-text>\r\n                        </div>\r\n                    </ion-col>\r\n                    <ng-template ngFor let-img [ngForOf]=\"imagens\" let-i=\"index\">\r\n                        <ion-col size=\"4\">\r\n                            <div class=\"imagens\">\r\n                                <img [src]=\"img.baixa_resolucao\" class=\"imagem\">\r\n                                <div class=\"remover\">\r\n                                    <ion-button (click)=\"removerImagem(i)\" color=\"light\">\r\n                                        <ion-icon slot=\"icon-only\" name=\"trash\" color=\"danger\"></ion-icon>\r\n                                    </ion-button>\r\n                                </div>\r\n                            </div>\r\n                        </ion-col>\r\n                    </ng-template>\r\n                </ion-row>\r\n            </div>\r\n        </ion-card-content>\r\n    </ion-card>\r\n    <!-- <quill-editor id=\"editor\"></quill-editor> -->\r\n    <!-- </div> -->\r\n    <!-- <ion-slides pager=\"true\">\r\n        <ng-template ngFor let-img [ngForOf]=\"imagens\" let-i=\"index\">\r\n            <ion-slide>\r\n                <div class=\"imagens\">\r\n                    <img [src]=\"img.baixa_resolucao\" class=\"imagem\">\r\n                    <div class=\"remover\">\r\n                        <ion-button (click)=\"removerImagem(i)\">\r\n                            <ion-icon slot=\"icon-only\" name=\"trash\" color=\"danger\"></ion-icon>\r\n                        </ion-button>\r\n                    </div>\r\n                </div>\r\n            </ion-slide>\r\n        </ng-template>\r\n    </ion-slides> -->\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/atividades/nova-atividade/nova-atividade.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/atividades/nova-atividade/nova-atividade.module.ts ***!
  \**************************************************************************/
/*! exports provided: NovaAtividadePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovaAtividadePageModule", function() { return NovaAtividadePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nova_atividade_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nova-atividade.page */ "./src/app/pages/atividades/nova-atividade/nova-atividade.page.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm5/ngx-quill.js");








var routes = [
    {
        path: '',
        component: _nova_atividade_page__WEBPACK_IMPORTED_MODULE_6__["NovaAtividadePage"]
    }
];
var NovaAtividadePageModule = /** @class */ (function () {
    function NovaAtividadePageModule() {
    }
    NovaAtividadePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ngx_quill__WEBPACK_IMPORTED_MODULE_7__["QuillModule"].forRoot(),
            ],
            declarations: [_nova_atividade_page__WEBPACK_IMPORTED_MODULE_6__["NovaAtividadePage"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], NovaAtividadePageModule);
    return NovaAtividadePageModule;
}());



/***/ }),

/***/ "./src/app/pages/atividades/nova-atividade/nova-atividade.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/atividades/nova-atividade/nova-atividade.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cabecalho {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  padding-right: 15px;\n}\n\n.formulario {\n  padding: 10px 20px 0;\n  margin-left: 30px;\n}\n\n.imagens {\n  position: relative;\n  z-index: 1;\n  height: 100%;\n}\n\n.imagens .imagem {\n  z-index: 2;\n}\n\n.imagens .remover {\n  position: relative;\n  top: -25px;\n  z-index: 3;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  padding-right: 25px;\n}\n\n#editor {\n  height: 320px;\n}\n\n.adicionar-imagem {\n  width: 100%;\n  border: 2px solid grey;\n  border-radius: 5px;\n  padding: 50px 0;\n}\n\n.adicionar-imagem ion-text {\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXRpdmlkYWRlcy9ub3ZhLWF0aXZpZGFkZS9DOlxcVXNlcnNcXFVzZXJcXERvY3VtZW50c1xcWXVyaVxcbGl2cm8tdmlzdWFsLUFQUC9zcmNcXGFwcFxccGFnZXNcXGF0aXZpZGFkZXNcXG5vdmEtYXRpdmlkYWRlXFxub3ZhLWF0aXZpZGFkZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F0aXZpZGFkZXMvbm92YS1hdGl2aWRhZGUvbm92YS1hdGl2aWRhZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFHSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDREo7O0FERUk7RUFDSSxVQUFBO0FDQVI7O0FERUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtFQUNBLG1CQUFBO0FDQVI7O0FESUE7RUFDSSxhQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBRUEsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNGSjs7QURHSTtFQUNJLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F0aXZpZGFkZXMvbm92YS1hdGl2aWRhZGUvbm92YS1hdGl2aWRhZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhYmVjYWxob3sgICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlve1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuLmltYWdlbnN7XHJcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLmltYWdlbXtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG4gICAgLnJlbW92ZXJ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogLTI1cHg7XHJcbiAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgIH1cclxuXHJcbn1cclxuI2VkaXRvcntcclxuICAgIGhlaWdodDogMzIwcHg7XHJcbn1cclxuXHJcbi5hZGljaW9uYXItaW1hZ2Vte1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNTBweCAwO1xyXG4gICAgaW9uLXRleHR7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxufSIsIi5jYWJlY2FsaG8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4uZm9ybXVsYXJpbyB7XG4gIHBhZGRpbmc6IDEwcHggMjBweCAwO1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLmltYWdlbnMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbWFnZW5zIC5pbWFnZW0ge1xuICB6LWluZGV4OiAyO1xufVxuLmltYWdlbnMgLnJlbW92ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTI1cHg7XG4gIHotaW5kZXg6IDM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbiNlZGl0b3Ige1xuICBoZWlnaHQ6IDMyMHB4O1xufVxuXG4uYWRpY2lvbmFyLWltYWdlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDUwcHggMDtcbn1cbi5hZGljaW9uYXItaW1hZ2VtIGlvbi10ZXh0IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/atividades/nova-atividade/nova-atividade.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/atividades/nova-atividade/nova-atividade.page.ts ***!
  \************************************************************************/
/*! exports provided: NovaAtividadePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovaAtividadePage", function() { return NovaAtividadePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_banco_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/banco.service */ "./src/app/services/banco.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var NovaAtividadePage = /** @class */ (function () {
    function NovaAtividadePage(formBuilder, platform, alertCtrl, loadingCtrl, toastCtrl, router, banco, api) {
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.banco = banco;
        this.api = api;
        this.imagens = [];
        this.atividadeForm = formBuilder.group({
            titulo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10)])],
            autor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)])],
            descricao: ['']
        });
        // q('a')
        // console.log("editor: ", editor);
        // var editor = new Quill('#editor', {
        //     modules: { toolbar: '#toolbar' },
        //     theme: 'snow'
        // });
    }
    NovaAtividadePage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toolbarOptions, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        toolbarOptions = [
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
                        this.editor = new quill__WEBPACK_IMPORTED_MODULE_5__('#editor', {
                            theme: 'snow', modules: {
                                toolbar: toolbarOptions
                            }
                        });
                        _a = this;
                        return [4 /*yield*/, this.banco.get('user-credentials')];
                    case 1:
                        _a.usuario = _b.sent();
                        console.log("usuario: ", this.usuario);
                        return [2 /*return*/];
                }
            });
        });
    };
    NovaAtividadePage.prototype.selecionarImagens = function () {
        if (this.platform.is('capacitor')) {
            this.abreImagemCapacitor();
        }
        else {
            var target = document.getElementById('imagePicker');
            target.click();
        }
    };
    NovaAtividadePage.prototype.abreImagemCapacitor = function () { };
    NovaAtividadePage.prototype.abreArquivo = function (e) {
        var file = e.target.files[0];
        if (!file) {
            return;
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            var image = new Image();
        };
    };
    NovaAtividadePage.prototype.abreArquivos = function (e) {
        var _this = this;
        var files = e.target.files;
        if (!files.length) {
            return;
        }
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            console.log("imagem");
            var reader = new FileReader();
            reader.onload = function (e) {
                // this.imagemDestaque = e.target['result'];
                // console.log('this.imagemDestaque: ', this.imagemDestaque);
                var image = new Image();
                image.src = e.target['result'];
                image.onload = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var imageReturn, imagem;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.comprimir(e.target['result'])];
                            case 1:
                                imageReturn = _a.sent();
                                imagem = {
                                    baixa_resolucao: imageReturn
                                };
                                console.log("imagem: ", imagem);
                                this.imagens.push(imagem);
                                return [2 /*return*/];
                        }
                    });
                }); };
            };
            reader.readAsDataURL(file);
        }
    };
    NovaAtividadePage.prototype.comprimir = function (img) {
        return new Promise(function (done) {
            var imagemOtimizada = null;
            var image = new Image();
            image.src = img;
            image.onload = function () {
                var canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');
                canvas.width = image.naturalWidth;
                canvas.height = image.naturalHeight;
                if (canvas.width > 1080 && canvas.width > canvas.height) {
                    console.log('width bigger:', canvas.width, canvas.height);
                    var proporcao = (((1080 * 100) / canvas.width)) / 100;
                    canvas.width = Math.round(image.naturalWidth * proporcao);
                    canvas.height = Math.round(image.naturalHeight * proporcao);
                }
                else if (canvas.height > 1080 && canvas.height > canvas.width) {
                    console.log('height bigger:', canvas.height, canvas.width);
                    var proporcao = (((1080 * 100) / canvas.height)) / 100;
                    canvas.height = Math.round(image.naturalHeight * proporcao);
                    canvas.width = Math.round(image.naturalWidth * proporcao);
                }
                console.log('width/height:', canvas.width, canvas.height);
                ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
                imagemOtimizada = canvas.toDataURL("image/jpeg", 0.3);
                done(imagemOtimizada);
            };
        });
    };
    NovaAtividadePage.prototype.removerImagem = function (index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            subHeader: "Deseja remover esta imagem?", buttons: [{
                                    text: "Não"
                                }, {
                                    text: "Sim",
                                    handler: function () {
                                        _this.imagens.splice(index, 1);
                                        console.log('imagens', _this.imagens);
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    NovaAtividadePage.prototype.changedEditor = function (e) {
        // console.log("changed", e);
        // console.log("texto", e.content());
    };
    NovaAtividadePage.prototype.salvar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, body, retorno, toast, alerta;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({ message: "Salvando..." })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        body = "\n            mutation {\n                novaAtividade(\n                    id_usuario: " + this.usuario['id'] + "\n                    titulo: \"" + this.atividadeForm.value.titulo + "\",\n                    autor: \"" + this.atividadeForm.value.autor + "\",\n                    descricao: \"" + this.atividadeForm.value.descricao + "\",\n                    texto: " + JSON.stringify(JSON.stringify(this.editor.getContents())) + ",\n                    imagens: " + JSON.stringify(this.imagens).replace(/\"baixa_resolucao\"/g, 'baixa_resolucao') + "\n                ){\n                    id\n                }\n            }\n        ";
                        return [4 /*yield*/, this.api.post({ query: body })];
                    case 2:
                        retorno = _a.sent();
                        loading.dismiss();
                        if (!(retorno.data && !retorno.errors)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastCtrl.create({ message: "Cadastro realizado com sucesso", duration: 3000 })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        this.router.navigate(['/atividades/minhas-atividades']);
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.alertCtrl.create({ header: "Ocorreu um erro", message: "Tente novamente, ou contate o suporte." })];
                    case 5:
                        alerta = _a.sent();
                        alerta.present();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    NovaAtividadePage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _services_banco_service__WEBPACK_IMPORTED_MODULE_1__["BancoService"] },
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] }
    ]; };
    NovaAtividadePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-nova-atividade',
            template: __webpack_require__(/*! raw-loader!./nova-atividade.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/atividades/nova-atividade/nova-atividade.page.html"),
            styles: [__webpack_require__(/*! ./nova-atividade.page.scss */ "./src/app/pages/atividades/nova-atividade/nova-atividade.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _services_banco_service__WEBPACK_IMPORTED_MODULE_1__["BancoService"],
            src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]])
    ], NovaAtividadePage);
    return NovaAtividadePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-atividades-nova-atividade-nova-atividade-module-es5.js.map