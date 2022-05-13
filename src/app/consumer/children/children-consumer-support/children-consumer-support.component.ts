import { Component, OnInit, OnDestroy } from '@angular/core';
import { UpdatingService } from 'src/app/_services/updating/updating.service';


@Component({
  selector: 'app-children-consumer-support',
  templateUrl: './children-consumer-support.component.html',
  styleUrls: ['./children-consumer-support.component.scss']
})
export class ChildrenConsumerSupportComponent implements OnInit, OnDestroy {


  constructor(public updating:UpdatingService) { }

  ngOnInit(): void {
    this.updating.control = true;
    setTimeout(()=>{
      if (this.updating.control) this.updating.changeForgroundBackground('support');
    }, 1000);
  }

  ngOnDestroy(): void {
    this.updating.control = false;
  }
}
