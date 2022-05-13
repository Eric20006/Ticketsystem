/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActiveUserInfoService } from 'src/app/_services/activeUserInfo/active-user-info.service';
import { Injectable } from '@angular/core';
import { MsgContent } from 'src/app/_interfaces/msg-content';
import { Howl } from 'howler';

@Injectable({
  providedIn: 'root'
})

export class NewMsgService {

  public content: MsgContent[];
  private counter: number;
  public controlFirstLogin: boolean; //when logging in for the first time, that no message is displayed
  private soundFiles = './assets/pop.mp3';

  constructor(private activeUser:ActiveUserInfoService) {
    this.content = [];
    this.counter = -1; //the function starts with counter++ and so: you have counter = 0
    this.controlFirstLogin = true;
  }

  public newMsg(value:MsgContent): void {
    this.counter++;
    this.content.splice(this.counter, 0, value);
    this.play();
    // setTimeout(() => { this.content[this.counter].toggle = true; }, 150);
  }

  public deleteMsg(value:MsgContent): void {

    for (let i = 0; i < this.content.length; i++) {
      if(this.content[i] != value) {
        console.error('yes');
         this.content[i].toggle = false;
         setTimeout(() => {this.content.splice(i, 1);}, 1500);
         return;
      }
    }
  }

  public getNewMsg(value:any): void | boolean{
    if(this.controlFirstLogin) return this.controlFirstLogin = false;
    if (value.user == this.activeUser.activeUser?.name) return console.log('wrong');

    const test: MsgContent = {
      name: value.user,
      content: value.textContent,
      toggle: true
    };
    console.log(test);
    this.newMsg(test);
  }

  public getNewMsgSupporter(value:any): void | boolean{
    console.error(value);
    const test: MsgContent = {
      name: value.username,
      content: 'Du hast in diesem Chat eine neue Nachricht.',
      toggle: true
    };
    console.warn(test);
    this.newMsg(test);
  }

  public deleteMsgSupporter(value?:string):void {
    if (!value) this.content = [];
    for (let i = 0; i < this.content.length; i++) {
      if(this.content[i].name == value) {
        this.content.splice(i, 1);
        return;
      }
    }
    console.error(this.content);
  }





  private play() {
    this.playSound(this.soundFiles);
  }

  private playSound(soundFile: string | undefined) {
    if (soundFile !== undefined) {
      const sound = new Howl({
        src: [soundFile]
      });
      sound.play();
    }
  }
}
