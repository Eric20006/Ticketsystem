import { UpdatingService } from 'src/app/_services/updating/updating.service';
import { Component, OnInit } from '@angular/core';
import { DatabankService } from 'src/app/_services/databank/databank.service';
import { ShowUsersService } from 'src/app/_services/supporterShowUser/show-users.service';
import { Router } from '@angular/router';
import { ShowSupporterConstruction } from 'src/app/_interfaces/show-supporter-construction';

@Component({
  selector: 'app-get-consumer',
  templateUrl: './get-consumer.component.html',
  styleUrls: ['./get-consumer.component.scss']
})
export class GetConsumerComponent implements OnInit {

  constructor(private _router: Router, private databank:DatabankService, public showUsers:ShowUsersService, private updating:UpdatingService) { }

  public clickConsumer(value:ShowSupporterConstruction):void{
    this._router.navigate(['/supporter/chat']);
    this.databank.getOneUserChatInformation(value.username);
  }

  ngOnInit(): void {
    this.updating.controlSupporter = true;
    setTimeout(()=>{
      if(this.updating.controlSupporter) this.updating.toggleUpdatingGetConsumer();
    }, 1500);
  }

}

