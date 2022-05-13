import { UpdatingService } from 'src/app/_services/updating/updating.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import content from '../content.json';

@Component({
  selector: 'app-main404',
  templateUrl: './main404.component.html',
  styleUrls: ['./main404.component.scss']
})
export class Main404Component implements OnInit {

  public content:SafeHtml;

  constructor( private sanitizer:DomSanitizer, private _router:Router, private _location:Location, private updating:UpdatingService) {
    this.content = sanitizer.bypassSecurityTrustHtml(content[404]);
  }

  ngOnInit(): SafeHtml | void {
    this.updating.controlSupporter = false;
    if (location.pathname == '/error400') return this.content = this.sanitizer.bypassSecurityTrustHtml(content[400]);
    if (location.pathname == '/error402') return this.content = this.sanitizer.bypassSecurityTrustHtml(content[402]);
  }

}
