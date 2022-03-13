import { Component, OnInit } from '@angular/core';
import { DatabankService } from 'src/app/_services/databank/databank.service';
import { ChatCardConstruction } from 'src/app/_interfaces/chat-card-construction';

@Component({
  selector: 'app-children-consumer-forum',
  templateUrl: './children-consumer-forum.component.html',
  styleUrls: ['./children-consumer-forum.component.scss']
})
export class ChildrenConsumerForumComponent implements OnInit {

  public currentInformation:ChatCardConstruction;

  constructor(private DatabankService:DatabankService) {
    this.currentInformation = {
      title: 'Forum',
      id: 'forum',
      content: [{name: 'test', text: 'hallo'},{name: 'Tim', text:'Func!'}]
    };
   }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
  }

}
