/* eslint-disable @typescript-eslint/no-explicit-any */
import { ConsumerShowUserService } from 'src/app/_services/consumerShowUser/consumer-show-user.service';
import { DatabankService } from 'src/app/_services/databank/databank.service';
import { Injectable } from '@angular/core';
import { NewMsgService } from '../newMsg/new-msg.service';
import { ChatCardConstruction } from 'src/app/_interfaces/chat-card-construction';
import { ShowUsersService } from 'src/app/_services/supporterShowUser/show-users.service';
import { ShowSupporterConstruction } from 'src/app/_interfaces/show-supporter-construction';

@Injectable({
  providedIn: 'root'
})
export class UpdatingService {

  public control: boolean;
  public controlSupporter: boolean;
  public controlBack:any;
  public currentInformation:ChatCardConstruction;
  public controlBackSupporter: ShowSupporterConstruction[];

  constructor(private DatabankService:DatabankService, private showChat:ConsumerShowUserService, private newMsg:NewMsgService, private showUsers: ShowUsersService) {
    this.control = true;
    this.controlSupporter = true;
    this.currentInformation = {
      title: '',
      id: '',
      content: []
    };

    this.controlBack = {
      _id: 1,
      user: '',
      textContent: ''
    };
    this.controlBackSupporter = [];
  }

  public controlForground():void {
    if (this.currentInformation.id == 'forum') this.DatabankService.getForumInformation();
    if (this.currentInformation.id == 'support') this.DatabankService.getSupporterInformation();

    setTimeout(() => {
      if (this.showChat.control == false) return console.log('Something went wrong.');

      if (this.currentInformation.id == 'forum') this.currentInformation.content = this.showChat.activeChatForum;
      if (this.currentInformation.id == 'support') this.currentInformation.content = this.showChat.activeChatSupport;

      if(this.control) this.controlForground();
    }, 2000);
  }

   public controlBackground():void { //Controlling the 'background-chat' for new messanges.
    if (this.currentInformation.id == 'forum') this.DatabankService.getSupporterInformation();
    if (this.currentInformation.id == 'support') this.DatabankService.getForumInformation(); // --> Changing the meaning (in the whole Function)!

    setTimeout(()=>{
      console.log('backUp');
      if (this.showChat.control == false) return console.log('Something went wrong.');

      if (this.currentInformation.id == 'forum') {
        if(this.controlBack.counter != this.showChat.activeChatSupport[this.showChat.activeChatSupport.length - 1].counter) this.newMsg.getNewMsg(this.showChat.activeChatSupport[this.showChat.activeChatSupport.length - 1]);
        this.controlBack = this.showChat.activeChatSupport[this.showChat.activeChatSupport.length - 1];
      }
      if (this.currentInformation.id == 'support') {
        if (this.controlBack.counter != this.showChat.activeChatForum[this.showChat.activeChatForum.length - 1].counter) this.newMsg.getNewMsg(this.showChat.activeChatForum[this.showChat.activeChatForum.length - 1]);
        this.controlBack = this.showChat.activeChatForum[this.showChat.activeChatForum.length - 1];
      }

      if(this.control) this.controlBackground();
    },2000);
  }

  public changeForgroundBackground(value:string):void {
    this.newMsg.deleteMsgSupporter();
    if(value == 'forum') {
      this.currentInformation = {
        title: 'Forum',
        id: 'forum',
        content: []
      };
    }
    if (value == 'support') {
      this.currentInformation = {
        title: 'Support',
        id: 'support',
        content: []
      };
    }

    this.newMsg.controlFirstLogin = true;
    this.controlForground();
    this.controlBackground();
  }

  public updatingGetConsumer():void {
    console.log('updatingGet');
    this.DatabankService.getUserInformation();
    setTimeout(()=> {
      for (let i = 0; i < this.showUsers.showUsers.length; i++) {
        if (this.controlBackSupporter[i].msg != this.showUsers.showUsers[i].msg){
          console.warn('yes');
          console.warn(this.showUsers.activeChatUser);
          if (this.showUsers.showUsers[i].msg == '0') {
            console.warn('test');
            this.newMsg.deleteMsgSupporter(this.controlBackSupporter[i].username);
          }
          if (this.showUsers.showUsers[i].username == this.showUsers.activeChatUser.title) return console.warn('true');
          this.newMsg.getNewMsgSupporter(this.showUsers.showUsers[i]);
        }
      }

      this.controlBackSupporter = this.showUsers.showUsers;
      if (this.controlSupporter) this.updatingGetConsumer();
    }, 2000);
  }

  public toggleUpdatingGetConsumer():void {
    this.DatabankService.getUserInformation();
    setTimeout(()=>{
      this.controlBackSupporter = this.showUsers.showUsers;
      this.updatingGetConsumer();
    },1500);
  }
}

