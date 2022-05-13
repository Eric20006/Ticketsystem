/* eslint-disable @typescript-eslint/no-explicit-any */

// IMPORTANT
//-------------------------------------------------------------------------------------------------------------
//This service is only for Consumer!
//It shows you information about the forum
//It shows you the chat about the supporter with which you are writing now in the 'activeChat'-Variable.
//-------------------------------------------------------------------------------------------------------------

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsumerShowUserService {
  public activeChatForum: any[]; //usefull for Forum and Supporter
  public control: boolean;
  public activeChatSupport: any[];

  constructor() {
    this.activeChatForum = [];
    this.control = false;
    this.activeChatSupport = [];
  }
}
