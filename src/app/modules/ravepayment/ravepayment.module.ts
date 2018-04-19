import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RavepaymentComponent } from './ravepayment.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        RavepaymentComponent
    ],
    exports: [
        RavepaymentComponent
    ]
})

export class RavepaymentModule { }