import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

serverId :number = 101;
serverStatus : string = 'offline';
constructor(){
  this.serverStatus = Math.random() > 0.5 ? 'online': 'offline';
}

getServerStatus () :string {

  return this.serverStatus;
}
getColor ()
{
  return this.serverStatus === 'online' ? 'green' : 'red';
}
}
