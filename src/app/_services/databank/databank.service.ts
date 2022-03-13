/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { ActiveUserInfoService } from '../activeUserInfo/active-user-info.service';
import { Router } from '@angular/router';
import { ShowUsersService } from '../supporterShowUser/show-users.service';
import { ShowSupporterConstruction } from 'src/app/_interfaces/show-supporter-construction';

@Injectable({
  providedIn: 'root'
})

export class DatabankService {
  /*@Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }*/


  constructor(private activeUser:ActiveUserInfoService, private _router:Router, private showUserService: ShowUsersService) { }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public login(value:any):void {
    if (value.name == '' || value.pass == '') return  console.log('error');
    this.activeUser.activeUserConfig(value);
    this._router.navigate(['/consumer']);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public signUp(value:any):void {
    if (value.name == '' || value.pass == '' || value.passRepeat == '') return console.log('error');
    if (value.pass != value.passRepeat) return console.log('not allowed');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public send(value:any):void {
    console.log(value);
  }

  //----------------------------------------------------------------------
  // Supporter
  public getUserInformation():void {
    const test:ShowSupporterConstruction[] = [{name: 'd', number: '1', lastMsg: 'd'}, {name: 'A', number: '1', lastMsg: 'w'}];     //aus dem GET
    this.showUserService.getShowUsers(test);
  }

//  public getOneUserChatInformation(value:Show)


  //TODO: Funktioniert nicht

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public getInformation(value:any):string {
    const essen = 'deine Mutter';
    return essen;
  }
}
