import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WechatAppRoutingModule } from './wechat-app-routing.module';
import { WechatAppComponent } from './wechat-app.component';
import {Ng2SmartTableModule} from "ng2-smart-table";
import {ModalModule} from "ng2-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    WechatAppRoutingModule,
    Ng2SmartTableModule,
    ModalModule.forRoot(),
    //FormsModule,
    ReactiveFormsModule
  ],
  declarations: [WechatAppComponent]
})
export class WechatAppModule { }
