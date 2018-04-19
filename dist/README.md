# Rave Payment Component for Angular 2, 4, 5
An AngularJS library for RavePay Payment Gateway.

### Demo
![Demo Image](demo.png?raw=true "Demo Image")

### Get Started

This AngularJS library provides a wrapper to add RavePay Payment to your AngularJS application

### Install
```bash
npm install angular4-ravepayment --save
```

or

```bash
yarn add angular4-ravepayment 
```

Then go ahead and reference the Rave inline script in your index.html:
```html
<script src="//flw-pms-dev.eu-west-1.elasticbeanstalk.com/flwv3-pug/getpaidx/api/flwpbf-inline.js"></script>
```

# Notice

**For complete payment security, kindly use our integrity checksum feature to hash all payment values before passing it to the front end for processing.**

**Please see link to implement checksum: https://flutterwavedevelopers.readme.io/v1.0/docs/checksum**

**Also ensure you verify all transactions before giving value to your customer.**

**Please see link to verify transactions: https://flutterwavedevelopers.readme.io/v1.0/docs/status-check**


### Usage
`app.module.ts` file
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RavepaymentModule } from 'angular4-ravepayment';
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
```
`app.component.html` file
```typescript jsx
<rave-pay-button
    [text]="'Pay me,my money'"
    [className]="'paymentbtn'"
    (callback)="confirmPayment($event)"
    (close)="cancelledPayment()"
    [key]="'FLWPUBK-xxxxxxxxxxxxxxxxxxxxxxxx-X'"
    [reference]="generateReference()"
    [amount]="10000"
    [email]="'FooBar@rave.com'"
></rave-pay-button >
```
`app.component.ts` file
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  confirmPayment(response: object): void {
    console.log(response);
  }

  cancelledPayment(): void {
      console.log('close');
  }

  generateReference(): string {
      let text = '';
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < 10; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      return text;
  }
}
````
[Usage](./src/app/app.component.html)

## Deployment
WHEN DEPLOYING TO PRODUCTION/LIVE SYSTEM, take note of the following;
1) Change RavePay Inline script,you kept in the index.html to 
```javascript
<script src="//api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js"></script>
```
2) Change RavePay PUBLIC KEY

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Some commit message'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request 😉😉

## How can I thank you?

Why not star the github repo? I'd love the attention! Why not share the link for this repository on Twitter or Any Social Media? Spread the word!

Don't forget to [follow me on twitter](https://twitter.com/iamraphson)!

Thanks!
Ayeni Olusegun.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
