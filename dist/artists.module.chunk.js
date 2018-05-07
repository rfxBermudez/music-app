webpackJsonp(["artists.module"],{

/***/ "../../../../../src/app/artists/artists-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artists_artists_component__ = __webpack_require__("../../../../../src/app/artists/artists/artists.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__artists_artists_component__["a" /* ArtistsComponent */]
    }
];
var ArtistsRoutingModule = /** @class */ (function () {
    function ArtistsRoutingModule() {
    }
    ArtistsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], ArtistsRoutingModule);
    return ArtistsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/artists/artists.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistsModule", function() { return ArtistsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artists_artists_component__ = __webpack_require__("../../../../../src/app/artists/artists/artists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__artists_artist_add_artist_add_component__ = __webpack_require__("../../../../../src/app/artists/artists/artist-add/artist-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__artists_artist_display_artist_display_component__ = __webpack_require__("../../../../../src/app/artists/artists/artist-display/artist-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_artists_service__ = __webpack_require__("../../../../../src/app/artists/services/artists.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__artists_routing_module__ = __webpack_require__("../../../../../src/app/artists/artists-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ArtistsModule = /** @class */ (function () {
    function ArtistsModule() {
    }
    ArtistsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__artists_routing_module__["a" /* ArtistsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* ReactiveFormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__artists_artists_component__["a" /* ArtistsComponent */], __WEBPACK_IMPORTED_MODULE_3__artists_artist_add_artist_add_component__["a" /* ArtistAddComponent */], __WEBPACK_IMPORTED_MODULE_4__artists_artist_display_artist_display_component__["a" /* ArtistDisplayComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_artists_service__["a" /* ArtistsService */]]
        })
    ], ArtistsModule);
    return ArtistsModule;
}());



/***/ }),

/***/ "../../../../../src/app/artists/artists/artist-add/artist-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artists/artists/artist-add/artist-add.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"artistForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n\t<div class=\"form-group\">\n\t\t<label class=\"center-block\">Name\n\t\t\t<input class=\"form-control\" formControlName=\"name\">\n\t\t</label>\n\t\t<div *ngIf=\"!artistForm.controls['name'].valid && (artistForm.controls['name'].dirty || artistForm.controls['name'].touched)\" class=\"alert alert-danger\">\n\t\t\t<div *ngIf=\"artistForm.controls['name'].errors.required\">\n\t\t\t\tRequired\n\t\t\t</div>\n\t\t\t<div *ngIf=\"artistForm.controls['name'].errors.minlength\">\n\t\t\t\tminLength 1 \n\t\t\t</div>\n\t\t\t<div *ngIf=\"artistForm.controls['name'].errors.maxlength\">\n\t\t\t\tmaxLength 50\n\t\t\t</div>\n\t\t\t<div *ngIf=\"artistForm.controls['name'].errors.mayusInvalid\">\n\t\t\t\tMayusculas\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label class=\"center-block\">Email\n\t\t\t<input class=\"form-control\" formControlName=\"email\">\n\t\t</label>\n\t\t<div *ngIf=\"artistForm.controls['email'].invalid && (artistForm.controls['email'].dirty || artistForm.controls['email'].touched)\" class=\"alert alert-danger\">\n\t\t\t<div *ngIf=\"artistForm.controls['email'].errors.required\">\n\t\t\t\tRequired\n\t\t\t</div>\n\t\t\t<div *ngIf=\"artistForm.controls['email'].errors.patternInvalid\">\n\t\t\t\tInvalid format\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div>\n\t\t<button type=\"submit\"\n\t\t[disabled]=\"artistForm.invalid \" class=\"btn btn-success\"><span *ngIf=\"!isEditing\">Add</span><span *ngIf=\"isEditing\">Edit</span></button> &nbsp;\n\t\t<button type=\"reset\" (click)=\"revert()\" class=\"btn btn-danger\">Clear</button>\n\t</div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/artists/artists/artist-add/artist-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_artist__ = __webpack_require__("../../../../../src/app/models/artist.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_pattern_validator__ = __webpack_require__("../../../../../src/app/shared/pattern-validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_mayus_validator__ = __webpack_require__("../../../../../src/app/shared/mayus-validator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArtistAddComponent = /** @class */ (function () {
    function ArtistAddComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.addArtist = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.editArtist = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.canAdd = true;
        this.artist = new __WEBPACK_IMPORTED_MODULE_2__models_artist__["a" /* Artist */]();
        this.submitted = false;
        this.isEditing = false;
    }
    ArtistAddComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    ArtistAddComponent.prototype.createForm = function () {
        this.artistForm = this.formBuilder.group({
            _id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](undefined),
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(1),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(50),
                Object(__WEBPACK_IMPORTED_MODULE_4__shared_mayus_validator__["a" /* mayusValidator */])(/^[^a-z]*$/)
            ]),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, Object(__WEBPACK_IMPORTED_MODULE_3__shared_pattern_validator__["a" /* patternValidator */])(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)])
        });
    };
    ArtistAddComponent.prototype.onSubmit = function () {
        if (this.isEditing) {
            this.editArtist.emit({ artist: this.artistForm.value, form: this.artistForm });
            this.isEditing = false;
        }
        else {
            this.addArtist.emit({ artist: this.artistForm.value, form: this.artistForm });
        }
        this.submitted = true;
    };
    ArtistAddComponent.prototype.ngOnChanges = function (changes) {
        console.log('changes', changes);
        if (changes.artist && changes.artist.currentValue._id) {
            console.log('is editing');
            if (changes.artist.currentValue.__v !== undefined) {
                delete changes.artist.currentValue.__v;
            }
            this.artistForm.setValue(changes.artist.currentValue);
            this.isEditing = true;
        }
    };
    ArtistAddComponent.prototype.revert = function () {
        this.artistForm.reset();
        this.submitted = false;
        this.isEditing = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ArtistAddComponent.prototype, "addArtist", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ArtistAddComponent.prototype, "editArtist", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ArtistAddComponent.prototype, "canAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('selectedArtist'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_artist__["a" /* Artist */])
    ], ArtistAddComponent.prototype, "artist", void 0);
    ArtistAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-artist-add',
            template: __webpack_require__("../../../../../src/app/artists/artists/artist-add/artist-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/artists/artists/artist-add/artist-add.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], ArtistAddComponent);
    return ArtistAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/artists/artists/artist-display/artist-display.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".actions {\n\tmargin-top: 8px;\n}\n\n.actions .text-center {\n\tmargin-bottom: 5px;\n}\n\n.actions .text-center button{\n\twidth: 85px;\n}\n\n.deleting {\n\tposition: relative;\n}\n\n.deleting::after {\n\tcontent:\"deleting...\";\n\tpadding-top: 6%;\n\tcolor:white;\n\ttext-align: center;\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: rgba(0,0,0,0.8);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artists/artists/artist-display/artist-display.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" [class.deleting]=\"isDeleting\">\n\t<div class=\"col-9\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-3\">Name: </div><div class=\"col-9\"> {{artist.name}}</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-3\">Email: </div><div class=\"col-9\"> {{artist.email}}</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-3 actions\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12 text-center\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"editar()\">Edit</button>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 text-center\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"borrar()\"><span *ngIf=\"isDeleting\">...</span><span *ngIf=\"!isDeleting\">Delete</span></button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/artists/artists/artist-display/artist-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_artist__ = __webpack_require__("../../../../../src/app/models/artist.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArtistDisplayComponent = /** @class */ (function () {
    function ArtistDisplayComponent() {
        this.deleteArtist = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.editArtist = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.isDeleting = false;
    }
    ArtistDisplayComponent.prototype.ngOnInit = function () {
    };
    ArtistDisplayComponent.prototype.borrar = function () {
        this.isDeleting = true;
        this.deleteArtist.emit(this.artist);
    };
    ArtistDisplayComponent.prototype.editar = function () {
        this.editArtist.emit(this.artist);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_artist__["a" /* Artist */])
    ], ArtistDisplayComponent.prototype, "artist", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ArtistDisplayComponent.prototype, "deleteArtist", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ArtistDisplayComponent.prototype, "editArtist", void 0);
    ArtistDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-artist-display',
            template: __webpack_require__("../../../../../src/app/artists/artists/artist-display/artist-display.component.html"),
            styles: [__webpack_require__("../../../../../src/app/artists/artists/artist-display/artist-display.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArtistDisplayComponent);
    return ArtistDisplayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/artists/artists/artists.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".usuario-display{\n\tmargin-top: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artists/artists/artists.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"usuario\">\n\t<div class=\"page-title row\">\n\t\t<h2 class=\"col-5\">Artists</h2>\n\t</div>\n\t<div class=\"products row\">\n\t\t<ul class=\"col-6\">\n\t\t\t<li *ngFor=\"let artist of artists\" class=\"row usuario-display\">\n\t\t\t\t<app-artist-display [artist]='artist' \n\t\t\t\t(deleteArtist)=\"deleteArtist($event)\" \n\t\t\t\t(editArtist)=\"editArtist($event)\" class=\"col-12 card\">\n\t\t\t\t</app-artist-display>\n\t\t\t</li>\n\t\t</ul>\t\n\t\t<ul class=\"col-4 offset-1\">\n\t\t\t<app-artist-add (addArtist)=\"addArtist($event)\" (editArtist)=\"editArtistSave($event)\" [selectedArtist]=\"selectedArtist\" [canAdd]='!loading'></app-artist-add>\n\t\t\t<div *ngIf=\"loading\">\n\t\t\t\tloading...\n\t\t\t</div>\n\t\t</ul>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/artists/artists/artists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_artist__ = __webpack_require__("../../../../../src/app/models/artist.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_artists_service__ = __webpack_require__("../../../../../src/app/artists/services/artists.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArtistsComponent = /** @class */ (function () {
    function ArtistsComponent(artistService) {
        this.artistService = artistService;
        this.selectedArtist = new __WEBPACK_IMPORTED_MODULE_1__models_artist__["a" /* Artist */]();
        this.loading = false;
    }
    ArtistsComponent.prototype.ngOnInit = function () {
        this.getArtist();
    };
    ArtistsComponent.prototype.editArtist = function (artist) {
        this.selectedArtist = Object.assign({}, artist);
    };
    ArtistsComponent.prototype.editArtistSave = function (artist) {
        var _this = this;
        this.artistService.editArtist(artist.artist)
            .then(function (data) {
            artist.form.reset();
            _this.getArtist();
        })
            .catch(function (error) {
            console.log('error', error);
        });
    };
    ArtistsComponent.prototype.deleteArtist = function (artist) {
        var _this = this;
        this.artistService.deleteArtist(artist)
            .then(function (data) {
            _this.getArtist();
        });
    };
    ArtistsComponent.prototype.getArtist = function () {
        var _this = this;
        this.artistService.getArtists().subscribe(function (data) {
            _this.artists = data.artist;
        });
    };
    ArtistsComponent.prototype.addArtist = function (artist) {
        var _this = this;
        console.log(artist);
        this.loading = true;
        delete artist.artist._id;
        this.artistService.addArtist(artist.artist)
            .then(function (data) {
            artist.form.reset();
            _this.loading = false;
            _this.getArtist();
        })
            .catch(function (error) {
            _this.loading = false;
            alert('El usuario seleccionado ya existe, por favor seleccione otro');
        });
    };
    ArtistsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-artists',
            template: __webpack_require__("../../../../../src/app/artists/artists/artists.component.html"),
            styles: [__webpack_require__("../../../../../src/app/artists/artists/artists.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_artists_service__["a" /* ArtistsService */]])
    ], ArtistsComponent);
    return ArtistsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/mayus-validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mayusValidator;
function mayusValidator(regexp) {
    return function (control) {
        var value = control.value;
        if (value === '') {
            return null;
        }
        return !regexp.test(value) ? { 'mayusInvalid': { regexp: regexp } } : null;
    };
}


/***/ }),

/***/ "../../../../../src/app/shared/pattern-validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = patternValidator;
function patternValidator(regexp) {
    return function (control) {
        var value = control.value;
        if (value === '') {
            return null;
        }
        return !regexp.test(value) ? { 'patternInvalid': { regexp: regexp } } : null;
    };
}


/***/ })

});
//# sourceMappingURL=artists.module.chunk.js.map