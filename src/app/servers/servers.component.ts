import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowAddServer: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName: string = 'excuse me ';
  username: string = '';
  serverAdded: boolean = false;
  servers = ['server Test 2', 'server Test 2'];
  constructor() {
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverAdded = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'ServerCreated!!';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onReset() {
    this.username = '';
  }
}
