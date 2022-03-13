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

  constructor(private sendDB: DatabankService, public activeUser: ActiveUserInfoService) {
      this.information = {
        title: '',
        id: '',
        content: []
      };
   }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public send(value:any):void{
    this.sendDB.send(value);
    this.valueControl.nativeElement.value = '';
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
  }
}
