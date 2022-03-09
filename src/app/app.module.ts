import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHomeComponent } from './home/main-home/main-home.component';
import { MainSupporterComponent } from './supporter/main-supporter/main-supporter.component';
import { MainConsumerComponent } from './consumer/main-consumer/main-consumer.component';
import { HomeCardComponent } from './home/_template/home-card/home-card.component';
import { HeaderComponent } from './_templates/header/header.component';
import { InformationStatusComponent } from './_templates/information-status/information-status.component';
import { DatabankService } from './_services/databank/databank.service';
import { ChatCardComponent } from './_templates/chat-card/chat-card.component';
import { ChildrenConsumerForumComponent } from './consumer/children/children-consumer-forum/children-consumer-forum.component';
import { ChildrenConsumerSupportComponent } from './consumer/children/children-consumer-support/children-consumer-support.component';



@NgModule({
  declarations: [
    AppComponent,
    MainHomeComponent,
    MainSupporterComponent,
    MainConsumerComponent,
    HomeCardComponent,
    HeaderComponent,
    InformationStatusComponent,
    ChatCardComponent,
    ChildrenConsumerForumComponent,
    ChildrenConsumerSupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DatabankService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
