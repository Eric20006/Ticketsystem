import { DatabankService } from './../../../_services/databank/databank.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent implements OnInit {
  public buttons: string[];
  public inputs: string[];
  public status: boolean | undefined;
  @Output() currentInformation = new EventEmitter<string>();

  constructor(private Databank:DatabankService ) {
    this.buttons = ['Einloggen', 'Registrieren'];
    this.inputs = ['Benutzername', 'Passwort', 'Passwort wiederholen'];
    this.status = undefined;
  }

  public toggle (count: number): void {
    if (count == 0) this.status = true;
    if (count == 1) this.status = false;
    if (count == 2) this.status = undefined;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public login (value:any):void {
    this.Databank.login(value);
    this.currentInformation.emit(this.Databank.errorHandler);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public signUp (value:any):void {this.Databank.signUp(value);}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {  }
}
