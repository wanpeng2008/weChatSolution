import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesComponent} from "./pages.component";

const routes: Routes = [{
  path: 'pages',
  component: PagesComponent,
  children: [{
    path: '', redirectTo: 'wechatApp', pathMatch: 'full'
  },{
    path: '', loadChildren: ''
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
