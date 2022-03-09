import { Injectable } from '@angular/core';
import { ActiveUserInfoService } from '../activeUserInfo/active-user-info.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class DatabankService {
  /*@Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }*/

  name = '';
  pass = '';
  passRepeat = '';

  constructor(private activeUser:ActiveUserInfoService, private _router:Router) { }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public login(value:any):void {
    if (value.name == '' || value.pass == '') return  console.log('error');
    this.name = value.name;
    this.pass = value.pass;
    this.activeUser.activeUserConfig(value);
    this._router.navigate(['/consumer']);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public signUp(value:any):void {
    if (value.name == '' || value.pass == '' || value.passRepeat == '') return console.log('error');
    if (value.pass != value.passRepeat) return console.log('not allowed');
    this.name = value.name;
    this.pass = value.pass;
    this.passRepeat = value.passRepeat;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public send(value:any):void {
    console.log(value);
  }

}
