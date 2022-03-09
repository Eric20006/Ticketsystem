import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveUserInfoService } from 'src/app/_services/activeUserInfo/active-user-info.service';

@Component({
  selector: 'app-main-consumer',
  templateUrl: './main-consumer.component.html',
  styleUrls: ['./main-consumer.component.scss']
})
export class MainConsumerComponent implements OnInit {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public items: any[];

  constructor(private _router: Router, private controlUser:ActiveUserInfoService) {
    this.items = [{name: 'Forum', path: '/consumer/forum'},{name: 'Support', path:'/consumer/support'}, {name: 'Zum Login', path: '/home'}];
  }

  ngOnInit(): void {
    console.log('test');
    if (this.controlUser.activeUser == undefined) this._router.navigate(['/home']);
  }

}
