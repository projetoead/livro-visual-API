(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-atividades-nova-atividade-nova-atividade-module"],{

/***/ "./node_modules/ngx-quill/fesm2015/ngx-quill.js":
/*!******************************************************!*\
  !*** ./node_modules/ngx-quill/fesm2015/ngx-quill.js ***!
  \******************************************************/
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






const defaultModules = {
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

const QUILL_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('config');

var QuillEditorComponent_1;
// tslint:disable-next-line:variable-name
let Quill = null;
const getFormat = (format, configFormat) => {
    const passedFormat = format || configFormat;
    return passedFormat || 'html';
};
const ɵ0 = getFormat;
let QuillEditorComponent = QuillEditorComponent_1 = class QuillEditorComponent {
    constructor(elementRef, domSanitizer, doc, 
    // tslint:disable-next-line:ban-types
    platformId, renderer, zone, config) {
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
        this.valueGetter = (quillEditor, editorElement) => {
            let html = editorElement.querySelector('.ql-editor').innerHTML;
            if (html === '<p><br></p>' || html === '<div><br><div>') {
                html = null;
            }
            let modelValue = html;
            const format = getFormat(this.format, this.config.format);
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
        this.valueSetter = (quillEditor, value) => {
            const format = getFormat(this.format, this.config.format);
            if (format === 'html') {
                if (this.sanitize) {
                    value = this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].HTML, value);
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
        this.selectionChangeHandler = (range, oldRange, source) => {
            this.zone.run(() => {
                if (range === null) {
                    this.onBlur.emit({
                        editor: this.quillEditor,
                        source
                    });
                }
                else if (oldRange === null) {
                    this.onFocus.emit({
                        editor: this.quillEditor,
                        source
                    });
                }
                this.onSelectionChanged.emit({
                    editor: this.quillEditor,
                    oldRange,
                    range,
                    source
                });
                if (!range && this.onModelTouched) {
                    this.onModelTouched();
                }
            });
        };
        this.textChangeHandler = (delta, oldDelta, source) => {
            // only emit changes emitted by user interactions
            const text = this.quillEditor.getText();
            const content = this.quillEditor.getContents();
            let html = this.editorElem.querySelector('.ql-editor').innerHTML;
            if (html === '<p><br></p>' || html === '<div><br><div>') {
                html = null;
            }
            this.zone.run(() => {
                const trackChanges = this.trackChanges || this.config.trackChanges;
                if ((source === Quill.sources.USER || trackChanges && trackChanges === 'all') && this.onModelChange) {
                    this.onModelChange(this.valueGetter(this.quillEditor, this.editorElem));
                }
                this.onContentChanged.emit({
                    content,
                    delta,
                    editor: this.quillEditor,
                    html,
                    oldDelta,
                    source,
                    text
                });
            });
        };
        this.editorChangeHandler = (event, current, old, source) => {
            // only emit changes emitted by user interactions
            if (event === 'text-change') {
                const text = this.quillEditor.getText();
                const content = this.quillEditor.getContents();
                let html = this.editorElem.querySelector('.ql-editor').innerHTML;
                if (html === '<p><br></p>' || html === '<div><br><div>') {
                    html = null;
                }
                this.zone.run(() => {
                    this.onEditorChanged.emit({
                        content,
                        delta: current,
                        editor: this.quillEditor,
                        event,
                        html,
                        oldDelta: old,
                        source,
                        text
                    });
                });
            }
            else {
                this.onEditorChanged.emit({
                    editor: this.quillEditor,
                    event,
                    oldRange: old,
                    range: current,
                    source
                });
            }
        };
    }
    static normalizeClassNames(classes) {
        const classList = classes.trim().split(' ');
        return classList.reduce((prev, cur) => {
            const trimmed = cur.trim();
            if (trimmed) {
                prev.push(trimmed);
            }
            return prev;
        }, []);
    }
    // tslint:disable-next-line:no-empty
    onModelChange(_modelValue) { }
    // tslint:disable-next-line:no-empty
    onModelTouched() { }
    ngAfterViewInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId)) {
            return;
        }
        if (!Quill) {
            Quill = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js");
        }
        this.elementRef.nativeElement.insertAdjacentHTML(this.customToolbarPosition === 'top' ? 'beforeend' : 'afterbegin', this.preserveWhitespace ? '<pre quill-editor-element></pre>' : '<div quill-editor-element></div>');
        this.editorElem = this.elementRef.nativeElement.querySelector('[quill-editor-element]');
        const toolbarElem = this.elementRef.nativeElement.querySelector('[quill-editor-toolbar]');
        const modules = Object.assign({}, this.modules || (this.config.modules || defaultModules));
        if (toolbarElem) {
            modules.toolbar = toolbarElem;
        }
        else if (modules.toolbar === undefined) {
            modules.toolbar = defaultModules.toolbar;
        }
        let placeholder = this.placeholder !== undefined ? this.placeholder : this.config.placeholder;
        if (placeholder === undefined) {
            placeholder = 'Insert text here ...';
        }
        if (this.styles) {
            Object.keys(this.styles).forEach((key) => {
                this.renderer.setStyle(this.editorElem, key, this.styles[key]);
            });
        }
        if (this.classes) {
            this.addClasses(this.classes);
        }
        this.customOptions.forEach((customOption) => {
            const newCustomOption = Quill.import(customOption.import);
            newCustomOption.whitelist = customOption.whitelist;
            Quill.register(newCustomOption, true);
        });
        let bounds = this.bounds && this.bounds === 'self' ? this.editorElem : this.bounds;
        if (!bounds) {
            bounds = this.config.bounds ? this.config.bounds : this.doc.body;
        }
        let debug = this.debug;
        if (!debug && debug !== false && this.config.debug) {
            debug = this.config.debug;
        }
        let readOnly = this.readOnly;
        if (!readOnly && this.readOnly !== false) {
            readOnly = this.config.readOnly !== undefined ? this.config.readOnly : false;
        }
        let scrollingContainer = this.scrollingContainer;
        if (!scrollingContainer && this.scrollingContainer !== null) {
            scrollingContainer = this.config.scrollingContainer === null || this.config.scrollingContainer ? this.config.scrollingContainer : null;
        }
        let formats = this.formats;
        if (!formats && formats === undefined) {
            formats = this.config.formats ? Object.assign({}, this.config.formats) : (this.config.formats === null ? null : undefined);
        }
        this.quillEditor = new Quill(this.editorElem, {
            bounds,
            debug,
            formats,
            modules,
            placeholder,
            readOnly,
            scrollingContainer,
            strict: this.strict,
            theme: this.theme || (this.config.theme ? this.config.theme : 'snow')
        });
        if (this.content) {
            const format = getFormat(this.format, this.config.format);
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
                const contents = this.quillEditor.clipboard.convert(this.content);
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
        setTimeout(() => this.onEditorCreated.emit(this.quillEditor));
    }
    ngOnDestroy() {
        if (this.quillEditor) {
            this.quillEditor.off('selection-change', this.selectionChangeHandler);
            this.quillEditor.off('text-change', this.textChangeHandler);
            this.quillEditor.off('editor-change', this.editorChangeHandler);
        }
    }
    ngOnChanges(changes) {
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
            const currentStyling = changes['styles'].currentValue;
            const previousStyling = changes['styles'].previousValue;
            if (previousStyling) {
                Object.keys(previousStyling).forEach((key) => {
                    this.renderer.removeStyle(this.editorElem, key);
                });
            }
            if (currentStyling) {
                Object.keys(currentStyling).forEach((key) => {
                    this.renderer.setStyle(this.editorElem, key, this.styles[key]);
                });
            }
        }
        if (changes['classes']) {
            const currentClasses = changes['classes'].currentValue;
            const previousClasses = changes['classes'].previousValue;
            if (previousClasses) {
                this.removeClasses(previousClasses);
            }
            if (currentClasses) {
                this.addClasses(currentClasses);
            }
        }
        // tslint:enable:no-string-literal
    }
    addClasses(classList) {
        QuillEditorComponent_1.normalizeClassNames(classList).forEach((c) => {
            this.renderer.addClass(this.editorElem, c);
        });
    }
    removeClasses(classList) {
        QuillEditorComponent_1.normalizeClassNames(classList).forEach((c) => {
            this.renderer.removeClass(this.editorElem, c);
        });
    }
    writeValue(currentValue) {
        this.content = currentValue;
        const format = getFormat(this.format, this.config.format);
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
    }
    setDisabledState(isDisabled = this.disabled) {
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
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    validate() {
        if (!this.quillEditor) {
            return null;
        }
        const err = {};
        let valid = true;
        const textLength = this.quillEditor.getText().trim().length;
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
    }
};
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
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(() => QuillEditorComponent_1)
            },
            {
                multi: true,
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(() => QuillEditorComponent_1)
            }
        ],
        selector: 'quill-editor',
        template: `
  <ng-content select="[quill-editor-toolbar]"></ng-content>
`
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(QUILL_CONFIG_TOKEN)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], Object, Object,
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], Object])
], QuillEditorComponent);

let QuillViewHTMLComponent = class QuillViewHTMLComponent {
    constructor(sanitizer, config) {
        this.sanitizer = sanitizer;
        this.config = config;
        this.innerHTML = '';
        this.themeClass = 'ql-snow';
        this.content = '';
    }
    ngOnChanges(changes) {
        if (changes.theme) {
            const theme = changes.theme.currentValue || (this.config.theme ? this.config.theme : 'snow');
            this.themeClass = `ql-${theme} ngx-quill-view-html`;
        }
        else if (!this.theme) {
            const theme = this.config.theme ? this.config.theme : 'snow';
            this.themeClass = `ql-${theme} ngx-quill-view-html`;
        }
        if (changes.content) {
            this.innerHTML = this.sanitizer.bypassSecurityTrustHtml(changes.content.currentValue);
        }
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
        template: `
  <div class="ql-container" [ngClass]="themeClass">
    <div class="ql-editor" [innerHTML]="innerHTML">
    </div>
  </div>
`,
        styles: [`
.ql-container.ngx-quill-view-html {
  border: 0;
}
`]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(QUILL_CONFIG_TOKEN)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], Object])
], QuillViewHTMLComponent);

// tslint:disable-next-line:variable-name
let Quill$1 = null;
const getFormat$1 = (format, configFormat) => {
    const passedFormat = format || configFormat;
    return passedFormat || 'html';
};
const ɵ0$1 = getFormat$1;
let QuillViewComponent = class QuillViewComponent {
    constructor(
    // tslint:disable-next-line:ban-types
    platformId, config, renderer, elementRef) {
        this.platformId = platformId;
        this.config = config;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.strict = true;
        this.customOptions = [];
        this.preserveWhitespace = false;
        this.valueSetter = (quillEditor, value) => {
            const format = getFormat$1(this.format, this.config.format);
            let content = value;
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
    ngOnChanges(changes) {
        if (!this.quillEditor) {
            return;
        }
        if (changes.content) {
            this.valueSetter(this.quillEditor, changes.content.currentValue);
        }
    }
    ngAfterViewInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId)) {
            return;
        }
        if (!Quill$1) {
            Quill$1 = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js");
        }
        const modules = Object.assign({}, this.modules || (this.config.modules || defaultModules));
        modules.toolbar = false;
        this.customOptions.forEach((customOption) => {
            const newCustomOption = Quill$1.import(customOption.import);
            newCustomOption.whitelist = customOption.whitelist;
            Quill$1.register(newCustomOption, true);
        });
        let debug = this.debug;
        if (!debug && debug !== false && this.config.debug) {
            debug = this.config.debug;
        }
        let formats = this.formats;
        if (!formats && formats === undefined) {
            formats = this.config.formats ? Object.assign({}, this.config.formats) : (this.config.formats === null ? null : undefined);
        }
        const theme = this.theme || (this.config.theme ? this.config.theme : 'snow');
        this.elementRef.nativeElement.insertAdjacentHTML('afterbegin', this.preserveWhitespace ? '<pre quill-view-element></pre>' : '<div quill-view-element></div>');
        this.editorElem = this.elementRef.nativeElement.querySelector('[quill-view-element]');
        this.quillEditor = new Quill$1(this.editorElem, {
            debug,
            formats,
            modules,
            readOnly: true,
            strict: this.strict,
            theme
        });
        this.renderer.addClass(this.editorElem, 'ngx-quill-view');
        if (this.content) {
            this.valueSetter(this.quillEditor, this.content);
        }
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
        template: `
`,
        styles: [`
.ql-container.ngx-quill-view {
  border: 0;
}
`]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(QUILL_CONFIG_TOKEN)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object, _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
], QuillViewComponent);

var QuillModule_1;
let QuillModule = QuillModule_1 = class QuillModule {
    static forRoot(config) {
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
    }
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nova_atividade_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nova-atividade.page */ "./src/app/pages/atividades/nova-atividade/nova-atividade.page.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm2015/ngx-quill.js");








const routes = [
    {
        path: '',
        component: _nova_atividade_page__WEBPACK_IMPORTED_MODULE_6__["NovaAtividadePage"]
    }
];
let NovaAtividadePageModule = class NovaAtividadePageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let NovaAtividadePage = class NovaAtividadePage {
    constructor(formBuilder, platform, alertCtrl, loadingCtrl, toastCtrl, router, banco, api) {
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
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toolbarOptions = [
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
            this.usuario = yield this.banco.get('user-credentials');
            console.log("usuario: ", this.usuario);
            // this.editor
            //     .onContentChanged
            //     .pipe(
            //         debounceTime(400),
            //         distinctUntilChanged()
            //     )
            //     .subscribe((data) => {
            //         // tslint:disable-next-line:no-console
            //         console.log('view child + directly subscription', data)
            //     })
        });
    }
    selecionarImagens() {
        if (this.platform.is('capacitor')) {
            this.abreImagemCapacitor();
        }
        else {
            var target = document.getElementById('imagePicker');
            target.click();
        }
    }
    abreImagemCapacitor() { }
    abreArquivo(e) {
        var file = e.target.files[0];
        if (!file) {
            return;
        }
        var reader = new FileReader();
        reader.onload = (e) => {
            var image = new Image();
        };
    }
    abreArquivos(e) {
        var files = e.target.files;
        if (!files.length) {
            return;
        }
        for (let file of files) {
            console.log("imagem");
            var reader = new FileReader();
            reader.onload = (e) => {
                // this.imagemDestaque = e.target['result'];
                // console.log('this.imagemDestaque: ', this.imagemDestaque);
                var image = new Image();
                image.src = e.target['result'];
                image.onload = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    let imageReturn = yield this.comprimir(e.target['result']);
                    let imagem = {
                        baixa_resolucao: imageReturn
                    };
                    console.log("imagem: ", imagem);
                    this.imagens.push(imagem);
                });
            };
            reader.readAsDataURL(file);
        }
    }
    comprimir(img) {
        return new Promise(done => {
            let imagemOtimizada = null;
            var image = new Image();
            image.src = img;
            image.onload = () => {
                var canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');
                canvas.width = image.naturalWidth;
                canvas.height = image.naturalHeight;
                if (canvas.width > 1080 && canvas.width > canvas.height) {
                    console.log('width bigger:', canvas.width, canvas.height);
                    let proporcao = (((1080 * 100) / canvas.width)) / 100;
                    canvas.width = Math.round(image.naturalWidth * proporcao);
                    canvas.height = Math.round(image.naturalHeight * proporcao);
                }
                else if (canvas.height > 1080 && canvas.height > canvas.width) {
                    console.log('height bigger:', canvas.height, canvas.width);
                    let proporcao = (((1080 * 100) / canvas.height)) / 100;
                    canvas.height = Math.round(image.naturalHeight * proporcao);
                    canvas.width = Math.round(image.naturalWidth * proporcao);
                }
                console.log('width/height:', canvas.width, canvas.height);
                ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
                imagemOtimizada = canvas.toDataURL("image/jpeg", 0.3);
                done(imagemOtimizada);
            };
        });
    }
    removerImagem(index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                subHeader: "Deseja remover esta imagem?", buttons: [{
                        text: "Não"
                    }, {
                        text: "Sim",
                        handler: () => {
                            this.imagens.splice(index, 1);
                            console.log('imagens', this.imagens);
                        }
                    }]
            });
            alert.present();
        });
    }
    changedEditor(e) {
        // console.log("changed", e);
        // console.log("texto", e.content());
    }
    salvar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log(JSON.stringify(this.editor.getContents()));
            // return;
            let loading = yield this.loadingCtrl.create({ message: "Salvando..." });
            loading.present();
            let body = `
            mutation {
                novaAtividade(
                    id_usuario: ${this.usuario['id']}
                    titulo: "${this.atividadeForm.value.titulo}",
                    autor: "${this.atividadeForm.value.autor}",
                    descricao: "${this.atividadeForm.value.descricao}",
                    texto: ${JSON.stringify(JSON.stringify(this.editor.getContents()))},
                    imagens: ${JSON.stringify(this.imagens).replace(/\"baixa_resolucao\"/g, 'baixa_resolucao')}
                ){
                    id
                }
            }
        `;
            let retorno = yield this.api.post({ query: body });
            loading.dismiss();
            if (retorno.data && !retorno.errors) {
                let toast = yield this.toastCtrl.create({ message: "Cadastro realizado com sucesso", duration: 3000 });
                toast.present();
                this.router.navigate(['/atividades/minhas-atividades']);
            }
            else {
                let alerta = yield this.alertCtrl.create({ header: "Ocorreu um erro", message: "Tente novamente, ou contate o suporte." });
                alerta.present();
            }
        });
    }
};
NovaAtividadePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _services_banco_service__WEBPACK_IMPORTED_MODULE_1__["BancoService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] }
];
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



/***/ })

}]);
//# sourceMappingURL=pages-atividades-nova-atividade-nova-atividade-module-es2015.js.map