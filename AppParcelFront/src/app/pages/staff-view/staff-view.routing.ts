
import { Routes, RouterModule } from '@angular/router';
import {StaffViewComponent} from "./staff-view.component";
import {ModuleWithProviders} from "@angular/core";
import {AccountInfoComponent} from "../components/components/account-info/account-info.component";
import {OrderInfoComponent} from "../components/components/order-info/order-info.component";

const routes: Routes = [{
  path: '',
  component: StaffViewComponent,
/*  children:[{
    path:'order-info',
    component: OrderInfoComponent
  }]*/
}];

export const StaffViewRouting: ModuleWithProviders = RouterModule.forChild(routes)
