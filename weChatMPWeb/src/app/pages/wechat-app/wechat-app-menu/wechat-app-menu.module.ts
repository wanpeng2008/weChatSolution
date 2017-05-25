import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WechatAppMenuRoutingModule } from './wechat-app-menu-routing.module';
import {WechatAppMenuComponent} from "./wechat-app-menu.component";

@NgModule({
  imports: [
    CommonModule,
    WechatAppMenuRoutingModule
  ],
  declarations: [
    WechatAppMenuComponent
  ]
})
export class WechatAppMenuModule { }
