import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabViewRoutingModule } from './tab-view-routing.module';
import { TabViewComponent } from './tab-view.component';
import {AccountInfoModule} from "../account-info/account-info.module";
import { TabModule } from 'ngx-weui/tab';

@NgModule({
  imports: [
    CommonModule,
    TabViewRoutingModule,
    TabModule,
    AccountInfoModule,
  ],
  declarations: [TabViewComponent],
  exports: [TabViewComponent]
})
export class TabViewModule { }
