// IMPORTANT
//-------------------------------------------------------------------------------------------------------------
//This service is only for Supporters!
//It shows you information about all consumer, that are important for a supporter, in the 'showUsers'-Variable
//It shows you the chat about the consumer with which you are writing now in the 'activeChatUser'-Variable.
//-------------------------------------------------------------------------------------------------------------

import { Injectable } from '@angular/core';
import { ShowSupporterConstruction } from 'src/app/_interfaces/show-supporter-construction';

@Injectable({
  providedIn: 'root'
})
export class ShowUsersService {
  public showUsers: ShowSupporterConstruction[];
  public activeChatUser: string;

  constructor() {
    this.showUsers = [];
    this.activeChatUser = '';
  }

  public getShowUsers(value:ShowSupporterConstruction[]):void {
    this.showUsers = value;
  }

  public getActiveChatUser(value:string):void {
    this.activeChatUser = value;
    console.log(this.activeChatUser);
  }

  public deleteActiveUser():void{
    this.activeChatUser = '';
    console.log('test');
  }

}
