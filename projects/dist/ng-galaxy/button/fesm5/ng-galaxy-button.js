import { Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    ButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ui-lib-button',
                    template: "\n    <button [disabled]=\"disabled\">{{text}}</button>\n  "
                }] }
    ];
    ButtonComponent.propDecorators = {
        text: [{ type: Input }],
        disabled: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [ButtonComponent],
                    imports: [],
                    exports: [ButtonComponent]
                },] }
    ];
    return ButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ButtonComponent, ButtonModule };
//# sourceMappingURL=ng-galaxy-button.js.map
