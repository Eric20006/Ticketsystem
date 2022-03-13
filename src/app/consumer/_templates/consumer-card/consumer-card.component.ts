import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumer-card',
  templateUrl: './consumer-card.component.html',
  styleUrls: ['./consumer-card.component.scss']
})
export class ConsumerCardComponent implements OnInit {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public items: any[];

  constructor() {
    this.items = [{name: 'Forum', path: '/consumer/forum'},{name: 'Support', path:'/consumer/support'}, {name: 'Zum Login', path: '/home'}];
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
  }

}
