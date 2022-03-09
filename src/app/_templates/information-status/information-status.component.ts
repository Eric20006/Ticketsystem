/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-information-status',
  templateUrl: './information-status.component.html',
  styleUrls: ['./information-status.component.scss']
})

export class InformationStatusComponent implements OnInit {

  info: string;

  constructor( ) {
    this.info = '';
   }

  ngOnInit(): void {
  }

}
