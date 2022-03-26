import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveUserInfoService } from 'src/app/_services/activeUserInfo/active-user-info.service';

@Component({
  selector: 'app-main-consumer',
  templateUrl: './main-consumer.component.html',
  styleUrls: ['./main-consumer.component.scss']
})
export class MainConsumerComponent implements OnInit {

  constructor(private _router: Router, private controlUser:ActiveUserInfoService) { }

  ngOnInit(): void {
    console.log('ngOnInit');
    if (this.controlUser.activeUser == undefined) this._router.navigate(['/home']);
    if (this.controlUser.activeUser?.status == 'supporter') this._router.navigate(['/supporter']);
  }

}
