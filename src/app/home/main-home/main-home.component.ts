import { Component, OnInit } from '@angular/core';
import { ActiveUserInfoService } from 'src/app/_services/activeUserInfo/active-user-info.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit {

  public currentInformation: string;
  constructor(private controlUser:ActiveUserInfoService) {
    this.currentInformation = '';
  }


  ngOnInit(): void {
    console.log('test');
    this.controlUser.resetUser();
  }

}
