import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CustomerViewComponent } from './customer-view.component';
import {CustomerViewRouting} from "./customer-view.routing";
import {ShareModule} from "../../share/share.module";
import {ComponentsModule} from "../components/components.module";
import {TabModule} from "ngx-weui";



@NgModule({
  imports: [
    CommonModule,
    CustomerViewRouting,
    TabModule,
    ShareModule,
    ComponentsModule,

  ],
  declarations: [ CustomerViewComponent],
  exports: [CustomerViewComponent]
})
export class CustomerViewModule { }
