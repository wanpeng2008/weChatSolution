import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WechatAppAccessRoutingModule } from './wechat-app-access-routing.module';
import {WechatAppAccessComponent} from "./wechat-app-access.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ModalModule} from "ng2-bootstrap";
import {Ng2SmartTableModule} from "ng2-smart-table";

@NgModule({
  imports: [
    CommonModule,
    WechatAppAccessRoutingModule,
    Ng2SmartTableModule,
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [
    WechatAppAccessComponent,
  ],
})
export class WechatAppAccessModule { }
