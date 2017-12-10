import { Component, OnInit } from '@angular/core';
import './app.component';

@Component({
   selector: 'app',
   template: '<div class="redColor">loading jorepeich...{{text}}</div>',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   text: string;

   constructor() {
      this.text = 'pepe';
   }
}
