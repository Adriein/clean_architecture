"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Macros = /** @class */ (function () {
    function Macros(carbohidrate, protein, fiber, fat) {
        this.carbohidrate = carbohidrate;
        this.protein = protein;
        this.fiber = fiber;
        this.fat = fat;
        this.carbohidrate = carbohidrate;
        this.protein = protein;
        this.fiber = fiber;
        this.fat = fat;
    }
    Object.defineProperty(Macros.prototype, "macros", {
        get: function () {
            return {
                carbohidrates: this.carbohidrate,
                protein: this.protein,
                fat: this.fat,
                fiber: this.fiber,
            };
        },
        enumerable: true,
        configurable: true
    });
    return Macros;
}());
exports.default = Macros;
