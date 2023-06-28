import { Component } from '@angular/core';

@Component({
  // as element
  selector: 'app-servers',
  //as attribute
  //selector : `[app-servers]`,
  // as class
 // selector : '.app-servers' ,
  template: `<app-server>

  </app-server>
  <h1>I M using template under servers component.ts</h1>
  <app-server></app-server>`,
  styles: [`h1{color: red}`]
})
export class ServersComponent {

}
