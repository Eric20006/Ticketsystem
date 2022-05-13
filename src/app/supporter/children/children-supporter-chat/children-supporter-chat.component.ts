import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatabankService } from 'src/app/_services/databank/databank.service';
import { ShowUsersService } from 'src/app/_services/supporterShowUser/show-users.service';
import { ChatCardConstruction } from 'src/app/_interfaces/chat-card-construction';

import { UpdatingService } from 'src/app/_services/updating/updating.service';

@Component({
  selector: 'app-children-supporter-chat',
  templateUrl: './children-supporter-chat.component.html',
  styleUrls: ['./children-supporter-chat.component.scss']
})
export class ChildrenSupporterChatComponent implements OnInit, OnDestroy {

  public currentInformation:ChatCardConstruction;

  constructor(private databank:DatabankService, public showUsers:ShowUsersService ,public updating:UpdatingService) {
    this.currentInformation = {
      title: '',
      id: '',
      content: []
    };
   }

  public toggle():void {
    setTimeout(()=> {
      this.currentInformation = this.showUsers.activeChatUser;
      this.databank.getOneUserChatInformation(this.showUsers.activeChatUser.title);
      if(this.updating.control) this.toggle();
    },2000);
  }

  ngOnInit(): void {
    this.updating.control = true;
    setTimeout(()=>{
      if (this.updating.control) this.toggle();
    }, 1000);
  }

  ngOnDestroy(): void {
    this.showUsers.deleteActiveUser();
    this.updating.control = false;
  }
}
