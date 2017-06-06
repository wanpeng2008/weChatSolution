
import { Routes, RouterModule } from '@angular/router';
import {TabViewComponent} from "./tab-view.component";
import {ModuleWithProviders} from "@angular/core";
import {AccountInfoComponent} from "../components/components/account-info/account-info.component";
import {OrderInfoComponent} from "../components/components/order-info/order-info.component";

const routes: Routes = [{
  path: '',
  component: TabViewComponent,
/*  children:[{
    path:'order-info',
    component: OrderInfoComponent
  }]*/
}];

export const TabViewRouting: ModuleWithProviders = RouterModule.forChild(routes)
