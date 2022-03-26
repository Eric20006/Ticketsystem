import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatabankService } from 'src/app/_services/databank/databank.service';
import { ChatCardConstruction } from 'src/app/_interfaces/chat-card-construction';
import { ConsumerShowUserService } from 'src/app/_services/consumerShowUser/consumer-show-user.service';

@Component({
  selector: 'app-children-consumer-forum',
  templateUrl: './children-consumer-forum.component.html',
  styleUrls: ['./children-consumer-forum.component.scss']
})
export class ChildrenConsumerForumComponent implements OnInit, OnDestroy {

  public currentInformation:ChatCardConstruction;
  private control:boolean;

  constructor(private DatabankService:DatabankService, private showForum: ConsumerShowUserService) {
    this.currentInformation = {
      title: 'Forum',
      id: 'forum',
      content: []
    };
    this.control = true;
   }

  public toggle():void {
    this.DatabankService.getForumInformation();
    setTimeout(() => {
      if (this.showForum.control == false) return console.log('Something went wrong.');
      this.currentInformation.content = this.showForum.activeChat;
      console.log(this.currentInformation);
      if(this.control) this.toggle();
    }, 2000);
  }

  ngOnInit(): void {
    this.toggle();
  }

  ngOnDestroy(): void {
     this.control = false;
  }
}
