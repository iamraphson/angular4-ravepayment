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
