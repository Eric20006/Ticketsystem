import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public navigatorList: any[];

  constructor(private route: ActivatedRoute) {
    this.navigatorList = [{name: 'Einloggen', path:'/home'}, {name: 'Kundenservice', path: '/consumer/support'}, {name:'Forum', path:'/consumer/forum'}];
   }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
  }

}
