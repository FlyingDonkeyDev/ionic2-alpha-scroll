"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ionic_angular_1 = require("ionic-angular");
var ion_alpha_scroll_1 = require("./ion-alpha-scroll");
var util_module_1 = require("./util-module");
var ng_dynamic_1 = require("ng-dynamic");
var ionic_image_loader_1 = require("ionic-image-loader");

var IonAlphaScrollModule = (function () {
    function IonAlphaScrollModule() {
    }
    return IonAlphaScrollModule;
}());
IonAlphaScrollModule = __decorate([
    core_1.NgModule({
        imports: [
            ionic_angular_1.IonicModule,
            ionic_image_loader_1.IonicImageLoader,
            common_1.CommonModule,
            ng_dynamic_1.DynamicComponentModule.forRoot({
                imports: [common_1.CommonModule, ionic_angular_1.IonicModule, util_module_1.UtilModule, ionic_image_loader_1.IonicImageLoader],
                declarations: []
            })
        ],
        declarations: [ion_alpha_scroll_1.IonAlphaScroll],
        exports: [ion_alpha_scroll_1.IonAlphaScroll]
    })
], IonAlphaScrollModule);
exports.IonAlphaScrollModule = IonAlphaScrollModule;
//# sourceMappingURL=module.js.map