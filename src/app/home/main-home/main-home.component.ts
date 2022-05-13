import { UpdatingService } from 'src/app/_services/updating/updating.service';
import { Component, OnInit } from '@angular/core';
import { ActiveUserInfoService } from 'src/app/_services/activeUserInfo/active-user-info.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit {

  public currentInformation: string;
  constructor(private controlUser:ActiveUserInfoService, private updating:UpdatingService) {
    this.currentInformation = '';
  }


  ngOnInit(): void {
    this.updating.controlSupporter = false;
    console.log('test');
    this.controlUser.resetUser();

  }

}
