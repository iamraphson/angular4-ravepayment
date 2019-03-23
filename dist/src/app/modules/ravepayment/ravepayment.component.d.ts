import { OnInit, EventEmitter } from '@angular/core';
export declare class RavepaymentComponent implements OnInit {
    text: string;
    style: object;
    className: string;
    callback: EventEmitter<object>;
    close: EventEmitter<{}>;
    key: string;
    email: string;
    amount: number;
    reference: string;
    meta: any;
    currency: string;
    country: string;
    customer_firstname: string;
    customer_lastname: string;
    customer_phone: string;
    custom_title: string;
    custom_description: string;
    custom_logo: string;
    redirect_url: string;
    payment_method: string;
    private raveOptions;
    constructor();
    ngOnInit(): void;
    madePayment(): void;
    prepRaveOptions(): void;
}
