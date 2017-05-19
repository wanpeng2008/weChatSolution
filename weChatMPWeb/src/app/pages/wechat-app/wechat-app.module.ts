import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WechatAppRoutingModule } from './wechat-app-routing.module';
import { WechatAppComponent } from './wechat-app.component';
import {Ng2SmartTableModule} from "ng2-smart-table";

@NgModule({
  imports: [
    CommonModule,
    WechatAppRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [WechatAppComponent]
})
export class WechatAppModule { }
