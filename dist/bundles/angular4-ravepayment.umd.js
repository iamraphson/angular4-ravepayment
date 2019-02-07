(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('angular4-ravepayment', ['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['angular4-ravepayment'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var RavepaymentComponent = /** @class */ (function () {
    function RavepaymentComponent() {
        this.callback = new core.EventEmitter();
        this.close = new core.EventEmitter();
    }
    RavepaymentComponent.prototype.ngOnInit = function () { };
    RavepaymentComponent.prototype.madePayment = function () {
        this.prepRaveOptions();
        window.getpaidSetup(this.raveOptions);
    };
    RavepaymentComponent.prototype.prepRaveOptions = function () {
        var _this = this;
        this.raveOptions = {
            PBFPubKey: this.key,
            txref: this.reference,
            amount: this.amount,
            customer_email: this.email,
            onclose: function () { return _this.close.emit(); },
            callback: function (response) { return _this.callback.emit(response); },
            currency: this.currency || 'NGN',
            country: this.country || 'NG',
            customer_firstname: this.customer_firstname || '',
            customer_lastname: this.customer_lastname || '',
            customer_phone: this.customer_phone || '',
            custom_title: this.custom_title || '',
            custom_description: this.custom_description || '',
            custom_logo: this.custom_logo || '',
            redirect_url: this.redirect_url || '',
            meta: this.meta || {}
        };
    };
    return RavepaymentComponent;
}());
RavepaymentComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'rave-pay-button',
                template: "<button\n    class=\"rave-pay-button\"\n    [ngStyle]=\"style\"\n    [ngClass]=\"className\"\n    (click)=\"madePayment()\">\n        {{text || 'Pay'}}\n</button>\n",
                styles: ["h1{color:red}"]
            },] },
];
RavepaymentComponent.ctorParameters = function () { return []; };
RavepaymentComponent.propDecorators = {
    "text": [{ type: core.Input },],
    "style": [{ type: core.Input },],
    "className": [{ type: core.Input },],
    "callback": [{ type: core.Output },],
    "close": [{ type: core.Output },],
    "key": [{ type: core.Input },],
    "email": [{ type: core.Input },],
    "amount": [{ type: core.Input },],
    "reference": [{ type: core.Input },],
    "meta": [{ type: core.Input },],
    "currency": [{ type: core.Input },],
    "country": [{ type: core.Input },],
    "customer_firstname": [{ type: core.Input },],
    "customer_lastname": [{ type: core.Input },],
    "customer_phone": [{ type: core.Input },],
    "custom_title": [{ type: core.Input },],
    "custom_description": [{ type: core.Input },],
    "custom_logo": [{ type: core.Input },],
    "redirect_url": [{ type: core.Input },],
};
var RavepaymentModule = /** @class */ (function () {
    function RavepaymentModule() {
    }
    return RavepaymentModule;
}());
RavepaymentModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [
                    RavepaymentComponent
                ],
                exports: [
                    RavepaymentComponent
                ]
            },] },
];

exports.RavepaymentModule = RavepaymentModule;
exports.ɵa = RavepaymentComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular4-ravepayment.umd.js.map
