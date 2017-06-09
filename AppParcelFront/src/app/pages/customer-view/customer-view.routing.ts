
import { Routes, RouterModule } from '@angular/router';
import {CustomerViewComponent} from "./customer-view.component";
import {ModuleWithProviders} from "@angular/core";
import {AccountInfoComponent} from "../components/components/account-info/account-info.component";
import {OrderInfoComponent} from "../components/components/order-info/order-info.component";

const routes: Routes = [{
  path: '',
  component: CustomerViewComponent,
/*  children:[{
    path:'order-info',
    component: OrderInfoComponent
  }]*/
}];

export const CustomerViewRouting: ModuleWithProviders = RouterModule.forChild(routes)
