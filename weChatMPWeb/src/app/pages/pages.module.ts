import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {HomeModule} from "./home/home.module";
import {WechatAppModule} from "./wechat-app/wechat-app.module";
import { PagesComponent } from './pages.component';
import {ShareModule} from "../share/share.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    HomeModule,
    ShareModule,
    ReactiveFormsModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
