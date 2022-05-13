import { Injectable } from '@angular/core';
import { ActiveUserInfo } from 'src/app/_interfaces/active-user-info';

@Injectable({
  providedIn: 'root'
})
export class ActiveUserInfoService {
  public activeUser:ActiveUserInfo | undefined;
  constructor() {
    this.activeUser = {name: '', password: '', status: ''};
   }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public activeUserConfig(value:any):void {
    this.activeUser= {
      name: value.name,
      password: value.pass,
      status: 'consumer'
    };
    console.log(this.activeUser);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public activeUserConfigAdmin(value:any):void{
    this.activeUser= {
      name: value.name,
      password: value.pass,
      status: 'supporter'
    };
    console.log(this.activeUser);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public resetUser():void {
    this.activeUser = {name: '', password: '', status: ''};
    console.log(this.activeUser);
  }
}
