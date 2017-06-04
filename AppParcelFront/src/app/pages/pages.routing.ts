import {NgModule, ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesComponent} from "./pages.component";

const routes: Routes = [{
  path: 'pages',
  component: PagesComponent,
  children: [{
    path: '', redirectTo: 'tab-view', pathMatch: 'full'
  },{
    path: 'tab-view', loadChildren: 'app/pages/tab-view/tab-view.module#TabViewModule'
  }]
}];

export const PagesRouting: ModuleWithProviders = RouterModule.forChild(routes)
