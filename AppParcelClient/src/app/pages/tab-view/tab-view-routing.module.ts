import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TabViewComponent} from "./tab-view.component";

const routes: Routes = [{
  path: '',
  component: TabViewComponent,
  children: [/*{
    path: '', redirectTo: 'account-info', pathMatch: 'full'
   },*/{
    path: 'account-info',
    loadChildren: 'app/pages/account-info/account-info.module#AccountInfoModule'
   }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabViewRoutingModule { }
