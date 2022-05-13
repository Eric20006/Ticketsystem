import { Component, OnInit, OnDestroy } from '@angular/core';
import { UpdatingService } from 'src/app/_services/updating/updating.service';

@Component({
  selector: 'app-children-consumer-forum',
  templateUrl: './children-consumer-forum.component.html',
  styleUrls: ['./children-consumer-forum.component.scss']
})
export class ChildrenConsumerForumComponent implements OnInit, OnDestroy {

  constructor(public updating: UpdatingService) { }

  ngOnInit(): void {
    this.updating.control = true;
    setTimeout(()=>{
      if(this.updating.control) this.updating.changeForgroundBackground('forum');
    }, 1000);
  }

  ngOnDestroy(): void {
    this.updating.control = false;
  }
}

