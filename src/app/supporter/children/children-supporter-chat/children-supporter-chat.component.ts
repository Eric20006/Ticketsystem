import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatabankService } from 'src/app/_services/databank/databank.service';
import { ShowUsersService } from 'src/app/_services/supporterShowUser/show-users.service';
import { ChatCardConstruction } from 'src/app/_interfaces/chat-card-construction';
import { Router } from '@angular/router';


@Component({
  selector: 'app-children-supporter-chat',
  templateUrl: './children-supporter-chat.component.html',
  styleUrls: ['./children-supporter-chat.component.scss']
})
export class ChildrenSupporterChatComponent implements OnInit, OnDestroy {

  public currentInformation:ChatCardConstruction;
  private control:boolean;

  constructor(private databank:DatabankService, public showUsers:ShowUsersService, private _router: Router) {
    this.currentInformation = {
      title: '',
      id: '',
      content: []
    };
    this.control = true;
   }

  public toggle():void {
    setTimeout(()=> {
      this.currentInformation = this.showUsers.activeChatUser;
      // if (this.currentInformation.title == '') this._router.navigate(['/supporter']);
      console.log(this.currentInformation);
      this.databank.getOneUserChatInformation(this.showUsers.activeChatUser.title);
      if(this.control) this.toggle();
    },2000);
  }

  ngOnInit(): void {
    this.toggle();
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.showUsers.deleteActiveUser();
    this.control = false;
  }
}
