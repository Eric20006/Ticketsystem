// IMPORTANT
//-------------------------------------------------------------------------------------------------------------
//This service is only for Supporters!
//It shows you information about all consumer, that are important for a supporter, in the 'showUsers'-Variable
//It shows you the chat about the consumer with which you are writing now in the 'activeChatUser'-Variable.
//-------------------------------------------------------------------------------------------------------------

import { Injectable } from '@angular/core';
import { ShowSupporterConstruction } from 'src/app/_interfaces/show-supporter-construction';
import { ChatCardConstruction } from 'src/app/_interfaces/chat-card-construction';


@Injectable({
  providedIn: 'root'
})
export class ShowUsersService {
  public showUsers: ShowSupporterConstruction[];
  public activeChatUser: ChatCardConstruction;

  constructor() {
    this.showUsers = [];
    this.activeChatUser = {
      title: '',
      id: '',
      content: []
    };
  }

  public getShowUsers(value:ShowSupporterConstruction[]):void {
    console.log(value);
    this.showUsers = value;
    console.log(this.showUsers);
  }

  public getActiveChatUser(value:ChatCardConstruction):void {
    this.activeChatUser = value;
  }

  public deleteActiveUser():void{
    this.activeChatUser = {
      title: '',
      id: '',
      content: []
    };
    console.log('test');
  }

}
