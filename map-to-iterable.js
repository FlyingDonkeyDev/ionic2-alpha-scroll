"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var MapToIterable = (function () {
    function MapToIterable() {
    }
    MapToIterable.prototype.transform = function (value) {
        var result = [];
        if (value.entries) {
            for (var _i = 0, _a = value.entries(); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                result.push({ key: key, value: value });
            }
        }
        else {
            for (var key_1 in value) {
                result.push({ key: key_1, value: value[key_1] });
            }
        }
        return result;
    };
    return MapToIterable;
}());
MapToIterable = __decorate([
    core_1.Pipe({ name: 'mapToIterable' })
], MapToIterable);
exports.MapToIterable = MapToIterable;
//# sourceMappingURL=map-to-iterable.js.map