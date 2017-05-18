import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WechatAppRoutingModule } from './wechat-app-routing.module';
import { WechatAppComponent } from './wechat-app.component';

@NgModule({
  imports: [
    CommonModule,
    WechatAppRoutingModule
  ],
  declarations: [WechatAppComponent]
})
export class WechatAppModule { }
