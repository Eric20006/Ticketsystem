import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatabankService } from 'src/app/_services/databank/databank.service';
import { ShowUsersService } from 'src/app/_services/supporterShowUser/show-users.service';
// import { ShowSupporterConstruction } from 'src/app/_interfaces/show-supporter-construction';

@Component({
  selector: 'app-children-supporter-chat',
  templateUrl: './children-supporter-chat.component.html',
  styleUrls: ['./children-supporter-chat.component.scss']
})
export class ChildrenSupporterChatComponent implements OnInit, OnDestroy {

  constructor(private databank:DatabankService, public showUsers:ShowUsersService) { }

  ngOnInit(): void {
   // this.databank
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.showUsers.deleteActiveUser();
  }
}
