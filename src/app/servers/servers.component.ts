import { Component } from '@angular/core';

@Component({
  // as element
  selector: 'app-servers',
  //as attribute
  //selector : `[app-servers]`,
  // as class
 // selector : '.app-servers' ,
 // template example
  // template: `<app-server>

  // </app-server>
  // <h1>I M using template under servers component.ts</h1>
  // <app-server></app-server>`,

  // tempalatURL
  templateUrl : './servers.component.html',
  styles: [`.online {color : white}`]
})
export class ServersComponent {
  serverCreated = false;
allowserver : boolean = false;
serverCreationStaus : string = 'No Server is created';
serverName = 'testServer';
Servers = ['TestServer1','TestServer2'];

constructor() {
  setTimeout(()=>{this.allowserver = true;},2000)
}
onServerCreation() : string
{
  this.serverCreated = true;
  this.Servers.push(this.serverName);
  return this.serverCreationStaus ='Server is created and Name of server is '+ this.serverName;
}
onUpdateServerName(event: any)
{
  console.log(event);
  this.serverName = (<HTMLInputElement>event.target).value;

}
}
