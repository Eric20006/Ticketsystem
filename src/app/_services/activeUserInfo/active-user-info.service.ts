import { Injectable } from '@angular/core';
import { ActiveUserInfo } from 'src/app/_interfaces/active-user-info';

@Injectable({
  providedIn: 'root'
})
export class ActiveUserInfoService {
  public activeUser:ActiveUserInfo | undefined;
  constructor() {
    this.activeUser = {name: 'test', password: 'test', status: 'supporter'};
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
  public resetUser():void {
    this.activeUser = {name: 'test', password: 'test', status: 'supporter'};
    console.log(this.activeUser);
  }
}
