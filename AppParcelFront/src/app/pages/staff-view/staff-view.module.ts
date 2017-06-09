import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { StaffViewComponent } from './staff-view.component';
import {StaffViewRouting} from "./staff-view.routing";
import {ShareModule} from "../../share/share.module";
import {ComponentsModule} from "../components/components.module";
import {TabModule} from "ngx-weui";



@NgModule({
  imports: [
    CommonModule,
    StaffViewRouting,
    TabModule,
    ShareModule,
    ComponentsModule,

  ],
  declarations: [ StaffViewComponent],
  exports: [StaffViewComponent]
})
export class StaffViewModule { }
