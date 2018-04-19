import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

interface IRaveOptions {
    PBFPubKey: string;
    txref: string;
    amount: number;
    currency: string;
    country: string;
    customer_email: string;
    customer_firstname: string;
    customer_lastname: string;
    custom_title: string;
    custom_description: string;
    custom_logo: string;
    meta ?: any;
    callback: (response: object) => void;
    onclose: () => void;
}

interface MyWindow extends Window {
    getpaidSetup: (options: IRaveOptions) => void;
}
declare let window: MyWindow

@Component({
  selector: 'rave-pay-button',
  templateUrl: './ravepayment.component.html',
  styleUrls: ['./ravepayment.component.css']
})

export class RavepaymentComponent implements OnInit {
    @Input() text: string;
    @Input() style: object;
    @Input() className: string;
    @Output() callback = new EventEmitter<object>();
    @Output() close = new EventEmitter();
    @Input() key: string;
    @Input() email: string;
    @Input() amount: number;
    @Input() reference: string;
    @Input() meta: any;
    @Input() currency: string;
    @Input() country: string;
    @Input() customer_firstname: string;
    @Input() customer_lastname: string;
    @Input() custom_title: string;
    @Input() custom_description: string;
    @Input() custom_logo: string;

    private raveOptions: IRaveOptions;


    constructor() {}
    ngOnInit() {}

    madePayment() {
        this.prepRaveOptions();
        window.getpaidSetup(this.raveOptions);
    }

    prepRaveOptions(): void {
        this.raveOptions = {
            PBFPubKey: this.key,
            txref: this.reference,
            amount: this.amount,
            customer_email: this.email,
            onclose: () => this.close.emit(),
            callback: (response: object) => this.callback.emit(response),
            currency: this.currency || 'NGN',
            country: this.country || 'NG',
            customer_firstname: this.customer_firstname || '',
            customer_lastname: this.customer_lastname || '',
            custom_title: this.custom_title || '',
            custom_description: this.custom_description || '',
            custom_logo: this.custom_logo || '',
            meta: this.meta || {}
        };
    }
}
