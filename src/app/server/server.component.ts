import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-server',
templateUrl: './server.Component.html',
styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
   
    allowNewServer = false;
    serverId: number = 10;
    serverStatus: string = 'offline';
    serverCreatedStatus: string =  'No server is Active Now';

 getServerStatus(){
     return this.serverStatus;
 }
  constructor() {
   setTimeout(() => {
       this.allowNewServer = true;
   }, 2000);
  }
    ngOnInit(): void {
    }
onCreateServer() {
    this.serverCreatedStatus = ' Server was Created!';
}
}
