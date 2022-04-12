import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'orderManager';

  orderDetailsAdded(data: any){
console.log("Order details "+data);

  }
}
