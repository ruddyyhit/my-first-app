import {Component, OnInit} from '@angular/core';
@Component( {
selector: 'app-servers',
templateUrl: './servers.component.html',
styles: [`
 .online {
    color:white
}`]
})
export class ServersComponent implements OnInit {

    serverStatus: string = 'offline';
    isActiveServer = false;
    servers = ['testS1, testS2'];
    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';

        setTimeout(() => {
            this.isActiveServer = true;
        }, 2000);
    }
    getServerStatus(){
        return this.serverStatus;
    }
    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red' ;
    }

    ngOnInit(): void {
    }

}