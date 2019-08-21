(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@ng-galaxy/button', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['ng-galaxy'] = global['ng-galaxy'] || {}, global['ng-galaxy'].button = {}), global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
        }
        ButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ui-lib-button',
                        template: "\n    <button [disabled]=\"disabled\">{{text}}</button>\n  "
                    }] }
        ];
        ButtonComponent.propDecorators = {
            text: [{ type: core.Input }],
            disabled: [{ type: core.Input }]
        };
        return ButtonComponent;
    }());
    if (false) {
        /** @type {?} */
        ButtonComponent.prototype.text;
        /** @type {?} */
        ButtonComponent.prototype.disabled;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonModule = /** @class */ (function () {
        function ButtonModule() {
        }
        ButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ButtonComponent],
                        imports: [],
                        exports: [ButtonComponent]
                    },] }
        ];
        return ButtonModule;
    }());

    exports.ButtonComponent = ButtonComponent;
    exports.ButtonModule = ButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ng-galaxy-button.umd.js.map
