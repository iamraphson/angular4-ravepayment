import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RavepaymentModule } from './modules/ravepayment/ravepayment.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RavepaymentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
