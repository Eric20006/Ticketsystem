import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveUserInfoService } from 'src/app/_services/activeUserInfo/active-user-info.service';

@Component({
  selector: 'app-main-supporter',
  templateUrl: './main-supporter.component.html',
  styleUrls: ['./main-supporter.component.scss']
})
export class MainSupporterComponent implements OnInit {


  constructor(private _router: Router, private controlUser:ActiveUserInfoService) { }

  ngOnInit(): void {
    if (this.controlUser.activeUser?.name == '') this._router.navigate(['/error402']);
    if (this.controlUser.activeUser?.status != 'supporter') this._router.navigate(['/error400']);
  }
}
