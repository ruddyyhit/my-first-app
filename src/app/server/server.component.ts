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
    serverName = 'TestServer';
    userName = '' ;
    isActive = false;
    activeServer: string = 'Server is Active';
    serverCreated = false;
    servers = ['testServer1', 'testServer2'];
   
 getServerStatus() {
     return this.serverStatus;
 }
  constructor() {
    setTimeout(() => {
       this.allowNewServer = true;
   }, 2000);
    setTimeout(() => {
    this.isActive = true;
}, 2000);

  }
    ngOnInit(): void {
    }
onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreatedStatus = ' Server was Created!';
}
onUpdateServerName(event: any){
 // console.log(event);
 this.serverName = (<HTMLInputElement> event.target).value;
}
isActiveBtn() {
    this.activeServer = '';
}

}
