import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHomeComponent } from './home/main-home/main-home.component';
import { MainSupporterComponent } from './supporter/main-supporter/main-supporter.component';
import { MainConsumerComponent } from './consumer/main-consumer/main-consumer.component';
import { HomeCardComponent } from './home/_template/home-card/home-card.component';
import { HeaderComponent } from './_templates/header/header.component';
import { InformationStatusComponent } from './home/_template/information-status/information-status.component';
import { DatabankService } from './_services/databank/databank.service';
import { ChatCardComponent } from './_templates/chat-card/chat-card.component';
import { ChildrenConsumerForumComponent } from './consumer/children/children-consumer-forum/children-consumer-forum.component';
import { ChildrenConsumerSupportComponent } from './consumer/children/children-consumer-support/children-consumer-support.component';
import { ConsumerCardComponent } from './consumer/_templates/consumer-card/consumer-card.component';
import { GetConsumerComponent } from './supporter/children/get-consumer/get-consumer.component';
import { ChildrenSupporterChatComponent } from './supporter/children/children-supporter-chat/children-supporter-chat.component';



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
    ChildrenConsumerSupportComponent,
    ConsumerCardComponent,
    GetConsumerComponent,
    ChildrenSupporterChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    DatabankService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
