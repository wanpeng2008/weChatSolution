import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WechatAppRoutingModule } from './wechat-app-routing.module';
import {WechatAppComponent} from './wechat-app.component';
import {Ng2SmartTableModule} from "ng2-smart-table";
import {ModalModule, ButtonsModule, TabsModule} from "ng2-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CellRenderComponent} from "./cell-render/cell-render.component";
import {BasicExampleButtonViewComponent, ButtonViewComponent} from "./basic-example-button-view.component";

@NgModule({
  imports: [
    CommonModule,
    WechatAppRoutingModule,
    Ng2SmartTableModule,
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    TabsModule.forRoot(),
    //FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    WechatAppComponent,
    CellRenderComponent,
    BasicExampleButtonViewComponent,
    ButtonViewComponent
  ],
  entryComponents: [
    CellRenderComponent,
    ButtonViewComponent
  ],
})
export class WechatAppModule { }
