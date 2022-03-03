import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHomeComponent } from './home/main-home/main-home.component';
import { MainSupporterComponent } from './supporter/main-supporter/main-supporter.component';
import { MainConsumerComponent } from './consumer/main-consumer/main-consumer.component';
import { HomeCardComponent } from './home/_template/home-card/home-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MainHomeComponent,
    MainSupporterComponent,
    MainConsumerComponent,
    HomeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
