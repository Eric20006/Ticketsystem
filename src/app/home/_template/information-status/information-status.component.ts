/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-information-status',
  templateUrl: './information-status.component.html',
  styleUrls: ['./information-status.component.scss']
})

export class InformationStatusComponent implements OnInit {

  @Input() info: string;

  constructor( ) {
    this.info = '';
  }

  public timer():void {
    this.info = '';
    window.location.reload();
  }

  ngOnInit(): void {

  }

}
