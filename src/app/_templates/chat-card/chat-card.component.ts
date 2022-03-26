import { ConsumerShowUserService } from 'src/app/_services/consumerShowUser/consumer-show-user.service';
import { ActiveUserInfoService } from 'src/app/_services/activeUserInfo/active-user-info.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DatabankService } from 'src/app/_services/databank/databank.service';
import { ChatCardConstruction } from 'src/app/_interfaces/chat-card-construction';


@Component({
  selector: 'app-chat-card',
  templateUrl: './chat-card.component.html',
  styleUrls: ['./chat-card.component.scss']
})
export class ChatCardComponent implements OnInit {

  @Input() information:ChatCardConstruction;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @ViewChild('sendMsgValue') valueControl:any;

  constructor(private sendDB: DatabankService, public activeUser: ActiveUserInfoService, private show: ConsumerShowUserService) {
      this.information = {
        title: '',
        id: '',
        content: []
      };
   }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public send():void{
    //Value is old; Ignore it; Maybe in a later version it 'despawn';

    const test = this.valueControl.nativeElement.value;
    this.valueControl.nativeElement.value = '';
    if (this.information.id == 'forum') return this.sendDB.getForumInformation(test);
    if (this.information.id == 'support') return this.sendDB.getSupporterInformation(test);
    if (this.information.id == this.information.title + ' supporter') return this.sendDB.userChatRequest(test);   //TODO:

    return console.log('Something went wrong.');
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
  }
}
