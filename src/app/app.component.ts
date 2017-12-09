import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app',
   template: '<div>loading jorepeich...{{text}}</div>'
})
export class AppComponent {
   text: string;

   constructor() {
      this.text = 'pepe';
   }
}
