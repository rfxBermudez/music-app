webpackJsonp(["albums.module"],{

/***/ "../../../../../src/app/albums/albums-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__albums_albums_component__ = __webpack_require__("../../../../../src/app/albums/albums/albums.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__albums_albums_component__["a" /* AlbumsComponent */]
    }
];
var ProductosRoutingModule = /** @class */ (function () {
    function ProductosRoutingModule() {
    }
    ProductosRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], ProductosRoutingModule);
    return ProductosRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/albums/albums.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsModule", function() { return AlbumsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__albums_albums_component__ = __webpack_require__("../../../../../src/app/albums/albums/albums.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__albums_album_add_album_add_component__ = __webpack_require__("../../../../../src/app/albums/albums/album-add/album-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__albums_album_display_album_display_component__ = __webpack_require__("../../../../../src/app/albums/albums/album-display/album-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_albums_service__ = __webpack_require__("../../../../../src/app/albums/services/albums.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__artists_services_artists_service__ = __webpack_require__("../../../../../src/app/artists/services/artists.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_text_contains_directive__ = __webpack_require__("../../../../../src/app/shared/text-contains.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__albums_routing_module__ = __webpack_require__("../../../../../src/app/albums/albums-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__amount_pipe__ = __webpack_require__("../../../../../src/app/amount.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AlbumsModule = /** @class */ (function () {
    function AlbumsModule() {
    }
    AlbumsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_9__albums_routing_module__["a" /* ProductosRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["e" /* ReactiveFormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__albums_albums_component__["a" /* AlbumsComponent */], __WEBPACK_IMPORTED_MODULE_3__albums_album_add_album_add_component__["a" /* AlbumAddComponent */], __WEBPACK_IMPORTED_MODULE_4__albums_album_display_album_display_component__["a" /* AlbumDisplayComponent */], __WEBPACK_IMPORTED_MODULE_7__shared_text_contains_directive__["a" /* TextContainsValidator */], __WEBPACK_IMPORTED_MODULE_10__amount_pipe__["a" /* AmountPipe */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_albums_service__["a" /* AlbumsService */], __WEBPACK_IMPORTED_MODULE_6__artists_services_artists_service__["a" /* ArtistsService */]]
        })
    ], AlbumsModule);
    return AlbumsModule;
}());



/***/ }),

/***/ "../../../../../src/app/albums/albums/album-add/album-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/albums/albums/album-add/album-add.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(albumForm)\" #albumForm=\"ngForm\">\n\t<div class=\"form-group\">\n\t\t<label for=\"name\">Name</label>\n\t\t<input type=\"text\" class=\"form-control\" id=\"name\"\n\t\trequired\n\t\t[text-contains-validator]\n\t\t[(ngModel)]=\"album.name\" name=\"nombre\"\n\t\t#name=\"ngModel\">\n\t\t<div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\n\t\t\t<div *ngIf=\"name.errors && name.errors.required\">\n\t\t\t\tRequired\n\t\t\t</div>\n\t\t\t<div *ngIf=\"name.errors && name.errors.textMayus\">\n\t\t\t\tMayusculas\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"form-group\">\n\t\t<label for=\"price\">Price</label>\n\t\t<input type=\"text\" \n\t\t\tclass=\"form-control\" \n\t\t\tid=\"price\" name=\"price\"\n\t\t\t[(ngModel)]=\"album.price\"  \n\t\t\t#price=\"ngModel\" \n\t\t\trequired pattern=\"[0-9]*\">\n\t\t<div [hidden]=\"price.valid || price.pristine\" class=\"alert alert-danger\" *ngIf=\"price.errors && price.errors.required\">\n\t\t\tRequired\n\t\t</div>\n\t\t<div [hidden]=\"price.valid || price.pristine\" class=\"alert alert-danger\" *ngIf=\"price.errors && price.errors.pattern\">\n\t\t\tMust be numeric\n\t\t</div>\n\t</div>\n\n\t<div class=\"form-group\">\n\t\t<label for=\"price\">Artist</label>\n\t\t <select id=\"artist\" #artist=\"ngModel\" class=\"hideLabel form-control\" [(ngModel)]=\"album.artist._id\" \n\t\t \t     name=\"artist\" required>\n            <option [ngValue]=\"art._id\" *ngFor=\"let art of artists\">{{art.name}}</option>  \n        </select>\n        <div [hidden]=\"artist.valid || artist.pristine\" class=\"alert alert-danger\" *ngIf=\"artist.errors && artist.errors.required\">\n\t\t\tRequired\n\t\t</div>\n\t</div>\n\n\n\t<button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!albumForm.form.valid || !canAdd\"><span *ngIf=\"!isEditing\">Add</span><span *ngIf=\"isEditing\">Edit</span></button>\n\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"newAlbum(); albumForm.reset()\">Clear</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/albums/albums/album-add/album-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_album__ = __webpack_require__("../../../../../src/app/models/album.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlbumAddComponent = /** @class */ (function () {
    function AlbumAddComponent() {
        this.addAlbum = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.editAlbum = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.canAdd = true;
        this.album = new __WEBPACK_IMPORTED_MODULE_1__models_album__["a" /* Album */]();
        this.artists = [];
        this.submitted = false;
        this.requiredText = 'album';
        this.isEditing = false;
    }
    AlbumAddComponent.prototype.onSubmit = function (albumForm) {
        if (this.isEditing) {
            this.editAlbum.emit({
                'album': this.album,
                'form': albumForm
            });
            this.isEditing = false;
            this.newAlbum();
        }
        else {
            this.addAlbum.emit({
                'album': this.album,
                'form': albumForm
            });
        }
        this.submitted = true;
    };
    AlbumAddComponent.prototype.ngOnInit = function () {
    };
    AlbumAddComponent.prototype.ngOnChanges = function (changes) {
        console.log('changes', changes);
        if (changes.album && changes.album.currentValue._id) {
            console.log('is editing');
            this.isEditing = true;
        }
    };
    AlbumAddComponent.prototype.newAlbum = function () {
        this.submitted = false;
        this.isEditing = false;
        this.album = new __WEBPACK_IMPORTED_MODULE_1__models_album__["a" /* Album */]();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AlbumAddComponent.prototype, "addAlbum", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AlbumAddComponent.prototype, "editAlbum", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], AlbumAddComponent.prototype, "canAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('selectedAlbum'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_album__["a" /* Album */])
    ], AlbumAddComponent.prototype, "album", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], AlbumAddComponent.prototype, "artists", void 0);
    AlbumAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-album-add',
            template: __webpack_require__("../../../../../src/app/albums/albums/album-add/album-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/albums/albums/album-add/album-add.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlbumAddComponent);
    return AlbumAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/albums/albums/album-display/album-display.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".actions {\n\tmargin-top: 8px;\n}\n\n.actions .text-center {\n\tmargin-bottom: 5px;\n}\n\n.actions .text-center button{\n\twidth: 85px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/albums/albums/album-display/album-display.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-9\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-4\">Name: </div><div class=\"col-8\"> {{album.name}}</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-4\">Artist: </div><div class=\"col-8\"> {{album.artist.name}}</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-4\">Price: </div><div class=\"col-8\"> {{album.price | amount}}</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-3 actions\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12 text-center\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"edit()\">Edit</button>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 text-center\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"delete()\"><span *ngIf=\"isDeleting\">...</span><span *ngIf=\"!isDeleting\">Delete</span></button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/albums/albums/album-display/album-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_album__ = __webpack_require__("../../../../../src/app/models/album.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlbumDisplayComponent = /** @class */ (function () {
    function AlbumDisplayComponent() {
        this.deleteAlbum = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.editAlbum = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.isDeleting = false;
    }
    AlbumDisplayComponent.prototype.ngOnInit = function () {
    };
    AlbumDisplayComponent.prototype.delete = function () {
        this.isDeleting = true;
        this.deleteAlbum.emit(this.album);
    };
    AlbumDisplayComponent.prototype.edit = function () {
        this.editAlbum.emit(this.album);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_album__["a" /* Album */])
    ], AlbumDisplayComponent.prototype, "album", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AlbumDisplayComponent.prototype, "deleteAlbum", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AlbumDisplayComponent.prototype, "editAlbum", void 0);
    AlbumDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-album-display',
            template: __webpack_require__("../../../../../src/app/albums/albums/album-display/album-display.component.html"),
            styles: [__webpack_require__("../../../../../src/app/albums/albums/album-display/album-display.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlbumDisplayComponent);
    return AlbumDisplayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/albums/albums/albums.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".producto-display{\n\tmargin-top: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/albums/albums/albums.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"productos\">\n\t<div class=\"page-title row\">\n\t\t<h2 class=\"col-5\">Albums</h2>\n\t</div>\n\t<div class=\"products row\">\n\t\t<ul class=\"col-6\">\n\t\t\t<li *ngFor=\"let album of albums\" class=\"row producto-display\">\n\t\t\t\t<app-album-display [album]='album' (deleteAlbum)=\"deleteAlbum($event)\" (editAlbum)=\"editAlbum($event)\" class=\"col-12 card\"></app-album-display>\n\t\t\t</li>\n\t\t</ul>\t\n\t\t<ul class=\"col-4 offset-1\">\n\t\t\t<app-album-add (addAlbum)=\"addAlbum($event)\" (editAlbum)=\"editAlbumSave($event)\" [selectedAlbum]=\"selectedAlbum\" [artists]='artists' [canAdd]='!loading'></app-album-add>\n\t\t\t<div *ngIf=\"loading\">\n\t\t\t\tloading...\n\t\t\t</div>\n\t\t</ul>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/albums/albums/albums.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_album__ = __webpack_require__("../../../../../src/app/models/album.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_albums_service__ = __webpack_require__("../../../../../src/app/albums/services/albums.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__artists_services_artists_service__ = __webpack_require__("../../../../../src/app/artists/services/artists.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlbumsComponent = /** @class */ (function () {
    function AlbumsComponent(albumsService, artistsService) {
        this.albumsService = albumsService;
        this.artistsService = artistsService;
        this.selectedAlbum = new __WEBPACK_IMPORTED_MODULE_1__models_album__["a" /* Album */];
        this.loading = false;
    }
    AlbumsComponent.prototype.ngOnInit = function () {
        this.getAlbums();
        this.getArtist();
    };
    AlbumsComponent.prototype.editAlbum = function (album) {
        this.selectedAlbum = Object.assign({}, album);
    };
    AlbumsComponent.prototype.editAlbumSave = function (album) {
        var _this = this;
        this.albumsService.editAlbum(album.album)
            .then(function (data) {
            _this.getAlbums();
        })
            .catch(function (error) {
            console.log('error', error);
        });
    };
    AlbumsComponent.prototype.deleteAlbum = function (album) {
        var _this = this;
        this.albumsService.deleteAlbum(album)
            .then(function (data) {
            _this.getAlbums();
        })
            .catch(function (error) {
            console.log('error', error);
        });
    };
    AlbumsComponent.prototype.getAlbums = function () {
        var _this = this;
        this.albumsService.getAlbums().subscribe(function (data) {
            _this.albums = data.album;
        }, function (error) {
            console.log('error', error);
        });
    };
    AlbumsComponent.prototype.getArtist = function () {
        var _this = this;
        this.artistsService.getArtists().subscribe(function (data) {
            _this.artists = data.artist;
            console.log(_this.artists);
        }, function (error) {
            console.log('error', error);
        });
    };
    AlbumsComponent.prototype.addAlbum = function (album) {
        var _this = this;
        this.loading = true;
        this.albumsService.addAlbum(album.album)
            .then(function (data) {
            album.form.reset();
            _this.loading = false;
            _this.getAlbums();
        })
            .catch(function (error) {
            console.log('error', error);
        });
    };
    AlbumsComponent.prototype.ngAfterViewInit = function () {
        console.timeEnd();
    };
    AlbumsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-albums',
            template: __webpack_require__("../../../../../src/app/albums/albums/albums.component.html"),
            styles: [__webpack_require__("../../../../../src/app/albums/albums/albums.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_albums_service__["a" /* AlbumsService */], __WEBPACK_IMPORTED_MODULE_3__artists_services_artists_service__["a" /* ArtistsService */]])
    ], AlbumsComponent);
    return AlbumsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/albums/services/albums.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlbumsService = /** @class */ (function () {
    function AlbumsService(dataService) {
        this.dataService = dataService;
    }
    AlbumsService.prototype.getAlbums = function () {
        return this.dataService.get('/api/albums');
    };
    AlbumsService.prototype.addAlbum = function (album) {
        return this.dataService.post('/api/albums', { 'album': album });
    };
    AlbumsService.prototype.deleteAlbum = function (album) {
        return this.dataService.delete('/api/albums/' + album._id);
    };
    AlbumsService.prototype.editAlbum = function (album) {
        return this.dataService.put('/api/albums/' + album._id, { 'album': album });
    };
    AlbumsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], AlbumsService);
    return AlbumsService;
}());



/***/ }),

/***/ "../../../../../src/app/amount.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmountPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AmountPipe = /** @class */ (function () {
    function AmountPipe() {
    }
    AmountPipe.prototype.transform = function (value, args) {
        if (value) {
            return "$ ".concat(value).concat(".00");
        }
        return "$ 0.00";
    };
    AmountPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'amount'
        })
    ], AmountPipe);
    return AmountPipe;
}());



/***/ }),

/***/ "../../../../../src/app/models/album.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Album; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_artist__ = __webpack_require__("../../../../../src/app/models/artist.ts");

var Album = /** @class */ (function () {
    function Album() {
        this._id = undefined;
        this.name = '';
        this.price = 0;
        this.artist = new __WEBPACK_IMPORTED_MODULE_0__models_artist__["a" /* Artist */]();
    }
    return Album;
}());



/***/ }),

/***/ "../../../../../src/app/shared/text-contains.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextContainsValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextContainsValidator = /** @class */ (function () {
    function TextContainsValidator() {
    }
    TextContainsValidator_1 = TextContainsValidator;
    TextContainsValidator.prototype.validate = function (control) {
        var regexp;
        var text = control.value;
        regexp = /^[^a-z]*$/;
        return !regexp.test(text) ? { 'textMayus': { regexp: regexp } } : null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('text-contains-validator'),
        __metadata("design:type", String)
    ], TextContainsValidator.prototype, "param", void 0);
    TextContainsValidator = TextContainsValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[text-contains-validator]',
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALIDATORS */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return TextContainsValidator_1; }),
                    multi: true
                }
            ]
        })
    ], TextContainsValidator);
    return TextContainsValidator;
    var TextContainsValidator_1;
}());



/***/ })

});
//# sourceMappingURL=albums.module.chunk.js.map