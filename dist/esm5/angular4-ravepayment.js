import { Component, Input, EventEmitter, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var RavepaymentComponent = /** @class */ (function () {
    function RavepaymentComponent() {
        this.callback = new EventEmitter();
        this.close = new EventEmitter();
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
    { type: Component, args: [{
                selector: 'rave-pay-button',
                template: "<button\n    class=\"rave-pay-button\"\n    [ngStyle]=\"style\"\n    [ngClass]=\"className\"\n    (click)=\"madePayment()\">\n        {{text || 'Pay'}}\n</button>\n",
                styles: ["h1{color:red}"]
            },] },
];
RavepaymentComponent.ctorParameters = function () { return []; };
RavepaymentComponent.propDecorators = {
    "text": [{ type: Input },],
    "style": [{ type: Input },],
    "className": [{ type: Input },],
    "callback": [{ type: Output },],
    "close": [{ type: Output },],
    "key": [{ type: Input },],
    "email": [{ type: Input },],
    "amount": [{ type: Input },],
    "reference": [{ type: Input },],
    "meta": [{ type: Input },],
    "currency": [{ type: Input },],
    "country": [{ type: Input },],
    "customer_firstname": [{ type: Input },],
    "customer_lastname": [{ type: Input },],
    "customer_phone": [{ type: Input },],
    "custom_title": [{ type: Input },],
    "custom_description": [{ type: Input },],
    "custom_logo": [{ type: Input },],
    "redirect_url": [{ type: Input },],
};
var RavepaymentModule = /** @class */ (function () {
    function RavepaymentModule() {
    }
    return RavepaymentModule;
}());
RavepaymentModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    RavepaymentComponent
                ],
                exports: [
                    RavepaymentComponent
                ]
            },] },
];

export { RavepaymentModule, RavepaymentComponent as ɵa };
//# sourceMappingURL=angular4-ravepayment.js.map
