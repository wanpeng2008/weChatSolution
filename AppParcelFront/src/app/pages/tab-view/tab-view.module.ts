import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TabViewComponent } from './tab-view.component';
import { TabModule } from 'ngx-weui/tab';
import {TabViewRouting} from "./tab-view.routing";
import {ShareModule} from "../../share/share.module";
import {ComponentsModule} from "../components/components.module";



@NgModule({
  imports: [
    CommonModule,
    TabViewRouting,
    TabModule,
    ShareModule,
    ComponentsModule,

  ],
  declarations: [ TabViewComponent],
  exports: [TabViewComponent]
})
export class TabViewModule { }
