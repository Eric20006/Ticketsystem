import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHomeComponent } from './home/main-home/main-home.component';
import { MainConsumerComponent } from './consumer/main-consumer/main-consumer.component';
import { MainSupporterComponent } from './supporter/main-supporter/main-supporter.component';
import { ChildrenConsumerForumComponent } from './consumer/children/children-consumer-forum/children-consumer-forum.component';
import { ChildrenConsumerSupportComponent } from './consumer/children/children-consumer-support/children-consumer-support.component';


const routes: Routes = [
    {path: 'home', component: MainHomeComponent},
    {path: 'consumer', component: MainConsumerComponent, children:[
      {path: '', component: MainConsumerComponent},
      {path: 'forum', component: ChildrenConsumerForumComponent},
      {path: 'support', component: ChildrenConsumerSupportComponent},
    ]},
    {path: 'supporter', component: MainSupporterComponent},
    {path: '**', redirectTo: '/home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
