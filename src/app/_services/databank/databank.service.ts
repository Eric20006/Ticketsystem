/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChatCardConstruction } from 'src/app/_interfaces/chat-card-construction';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ShowUsersService } from '../supporterShowUser/show-users.service';
import { ActiveUserInfoService } from '../activeUserInfo/active-user-info.service';
import { ConsumerShowUserService } from '../consumerShowUser/consumer-show-user.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DatabankService {
  public errorHandler:string;
  public _url: string;
  public body:object;

  constructor(private activeUser:ActiveUserInfoService, private _router:Router, private showUserService: ShowUsersService, private showConsumer: ConsumerShowUserService, private client:HttpClient) {
    this.errorHandler = '';
    this._url = 'https://localhost:8080';
    this.body = {};
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public login(value:any):void {
    if (value.name == '' || value.pass == '') {
      this.errorHandler = 'Name oder Passwort fehlen';
      return;
    }
    this.body = {
      username: value.name,
      password: value.pass
    };
    const _fetch:any = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(this.body),
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    };
    const url = this._url + '/users/login/' + value.name;
    fetch(url, _fetch)
      .then(data =>{return data.json();})
      .then(post => {
        console.error(post);
        if(!post) {
          this.errorHandler = 'Passwort oder Nutzernamen nicht korrekt';
          return console.warn('WrongPassword');
        }
        if (post.role == 'support') {
          this._router.navigate(['/supporter']);
          this.activeUser.activeUserConfigAdmin(value);
        } else {
          this.activeUser.activeUserConfig(value);
          this._router.navigate(['/consumer']);
        }});
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public signUp(value:any):void {
    if (value.name == '' || value.pass == '' || value.passRepeat == '') {
      this.errorHandler = 'Eines der Eingabefelder wurde nicht ausgefüllt';
      return ;
    } else if (value.pass != value.passRepeat) {
      this.errorHandler = 'Passwort nicht korrekt';
      return;
    }
    const url = this._url + '/users';
    this.body = {
      username: value.name,
      password: value.pass
    };
    const _fetch:any = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(this.body),
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    };
    fetch(url, _fetch)
      .then(data =>{return data.json();})
      .then(post =>{
        if (post != true) return this.errorHandler = 'Benutzername vergeben.';
        return this.login(value);
      });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public send(value:any):void {
    console.log(value);
  }

  //----------------------------------------------------------------------
  //Consumer
  public getForumInformation(value?:string):void{
    console.log('Forum');
    const url = this._url + '/users/login/' + this.activeUser.activeUser + '/forum';
    if (value) {
      this.body = {
        textContent: value,
        username: this.activeUser.activeUser?.name
      };
    } else this.body = {
      username: this.activeUser.activeUser?.name,
      onload: true
    };
    console.log(this.body);
    const _fetch:any = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(this.body),
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    };
    fetch(url, _fetch)
      .then(data => {return data.json();})
      .then(post => {this.showConsumer.control = true; this.showConsumer.activeChatForum = post; });
  }

  public getSupporterInformation(value?:string):void{
    console.log('Support');
    const url = this._url + '/users/login/' + this.activeUser.activeUser + '/support';
    if (value) {
      this.body = {
        textContent: value,
        username: this.activeUser.activeUser?.name
      };
    } else this.body = {
      username: this.activeUser.activeUser?.name,
      onload: true
    };
    console.log(this.body);
    const _fetch:any = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(this.body),
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    };
    fetch(url, _fetch)
      .then(data => {return data.json();})
      .then(post => {this.showConsumer.activeChatSupport = post; this.showConsumer.control = true;});
  }

  //----------------------------------------------------------------------
  // Supporter
  public getUserInformation():void {
    const url = this._url + '/users/login/support/preview';
    fetch(url)
      .then(data => {return data.json();})
      .then(post => {
        console.log(post);
        this.showUserService.getShowUsers(post);
      });
  }

 public getOneUserChatInformation(value:string):void {
   const url = this._url + '/users/login/support/' + value;
   this.body = {
     username: value,
     read: true
   };
   const _fetch:any = {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(this.body),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  };
   fetch(url, _fetch)
      .then(data => {return data.json();})
      .then(post => {
        const content: ChatCardConstruction = {
          title: value,
          id: value + ' supporter',
          content: post
        };
        console.log(content);
        this.showUserService.getActiveChatUser(content);
      });
  }

  public userChatRequest(value:string):void{
    const url = this._url + '/users/login/' + this.showUserService.activeChatUser.title + '/support';
    this.body = {
      textContent: value,
      username: this.activeUser.activeUser?.name,
      adress: this.showUserService.activeChatUser.title
    };
    console.log(this.body);
    const _fetch:any = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(this.body),
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    };
    fetch(url, _fetch)
    .then(data => {return data.json();})
    .then(post => {
      console.log(post);
      this.showUserService.activeChatUser.content = post;
    });
  }
}
