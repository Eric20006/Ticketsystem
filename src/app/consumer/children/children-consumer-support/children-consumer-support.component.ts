import { Component, OnInit } from '@angular/core';
import { DatabankService } from 'src/app/_services/databank/databank.service';
import { ChatCardConstruction } from 'src/app/_interfaces/chat-card-construction';

@Component({
  selector: 'app-children-consumer-support',
  templateUrl: './children-consumer-support.component.html',
  styleUrls: ['./children-consumer-support.component.scss']
})
export class ChildrenConsumerSupportComponent implements OnInit {

  public currentInformation:ChatCardConstruction;

  constructor(private DatabankService:DatabankService) {
    this.currentInformation = {
      title: 'Support',
      id: 'support',
      content: []
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
  }

}
