import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHomeComponent } from './home/main-home/main-home.component';
import { MainConsumerComponent } from './consumer/main-consumer/main-consumer.component';
import { MainSupporterComponent } from './supporter/main-supporter/main-supporter.component';
import { ChildrenConsumerForumComponent } from './consumer/children/children-consumer-forum/children-consumer-forum.component';
import { ChildrenConsumerSupportComponent } from './consumer/children/children-consumer-support/children-consumer-support.component';
import { ConsumerCardComponent } from './consumer/_templates/consumer-card/consumer-card.component';
import { GetConsumerComponent } from './supporter/children/get-consumer/get-consumer.component';
import { ChildrenSupporterChatComponent } from './supporter/children/children-supporter-chat/children-supporter-chat.component';
import { Main404Component } from './404/main404/main404.component';


const routes: Routes = [
    {path: 'home', component: MainHomeComponent},
    {path: 'consumer', component: MainConsumerComponent, children:[
      {path: '', component: ConsumerCardComponent},
      {path: 'forum', component: ChildrenConsumerForumComponent},
      {path: 'support', component: ChildrenConsumerSupportComponent},
    ]},
    {path: 'supporter', component: MainSupporterComponent, children: [
      {path: '', component: GetConsumerComponent},
      {path: 'chat', component: ChildrenSupporterChatComponent}
    ]},
    {path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: '**', component: Main404Component}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
