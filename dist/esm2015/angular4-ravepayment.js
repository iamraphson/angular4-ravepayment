import { Component, Input, EventEmitter, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RavepaymentComponent {
    constructor() {
        this.callback = new EventEmitter();
        this.close = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    madePayment() {
        this.prepRaveOptions();
        window.getpaidSetup(this.raveOptions);
    }
    /**
     * @return {?}
     */
    prepRaveOptions() {
        this.raveOptions = {
            PBFPubKey: this.key,
            txref: this.reference,
            amount: this.amount,
            customer_email: this.email,
            onclose: () => this.close.emit(),
            callback: (response) => this.callback.emit(response),
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
    }
}
RavepaymentComponent.decorators = [
    { type: Component, args: [{
                selector: 'rave-pay-button',
                template: `<button
    class="rave-pay-button"
    [ngStyle]="style"
    [ngClass]="className"
    (click)="madePayment()">
        {{text || 'Pay'}}
</button>
`,
                styles: [`h1{color:red}`]
            },] },
];
/** @nocollapse */
RavepaymentComponent.ctorParameters = () => [];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RavepaymentModule {
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { RavepaymentModule, RavepaymentComponent as ɵa };
//# sourceMappingURL=angular4-ravepayment.js.map
