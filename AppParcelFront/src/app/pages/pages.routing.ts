import {NgModule, ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesComponent} from "./pages.component";
import {OrderInfoComponent} from "./components/components/order-info/order-info.component";

const routes: Routes = [{
  path: 'home', loadChildren: 'app/pages/home/home.module#HomeModule'
},{
  path: 'pages',
  component: PagesComponent,
  children: [{
    path: '', redirectTo: 'customer-view', pathMatch: 'full'
  },{
    path: 'customer-view', loadChildren: 'app/pages/customer-view/customer-view.module#CustomerViewModule'
  },{
    path: 'staff-view', loadChildren: 'app/pages/staff-view/staff-view.module#StaffViewModule'
  },{
    path: 'page-not-found', loadChildren: 'app/pages/page-not-found/page-not-found.module#PageNotFoundModule'
  },/*{
    path: 'tab-view', loadChildren: 'app/pages/tab-view/tab-view.module#TabViewModule'
  },*/]
}];

export const PagesRouting: ModuleWithProviders = RouterModule.forChild(routes)
