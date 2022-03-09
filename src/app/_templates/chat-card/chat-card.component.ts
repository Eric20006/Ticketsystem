import { Component, OnInit } from '@angular/core';
import { DatabankService } from 'src/app/_services/databank/databank.service';

@Component({
  selector: 'app-chat-card',
  templateUrl: './chat-card.component.html',
  styleUrls: ['./chat-card.component.scss']
})
export class ChatCardComponent implements OnInit {

  constructor(private sendDB: DatabankService) { }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public send(value:any):void{
    this.sendDB.send(value);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
  }
}
