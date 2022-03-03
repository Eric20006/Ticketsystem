import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHomeComponent } from './home/main-home/main-home.component';
import { MainConsumerComponent } from './consumer/main-consumer/main-consumer.component';
import { MainSupporterComponent } from './supporter/main-supporter/main-supporter.component';

const routes: Routes = [
    {path: 'home', component: MainHomeComponent},
    {path: 'consumer', component: MainConsumerComponent},
    {path: 'supporter', component: MainSupporterComponent},
    {path: '**', redirectTo: '/home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
