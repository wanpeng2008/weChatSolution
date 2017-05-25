import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainFrameComponent } from './components/main-frame/main-frame.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import {WechatAppService} from "./services/wechat-app.service";
import { StatusButtonComponent } from './components/cell-render/status-button/status-button.component';
import {TabsModule} from "ng2-bootstrap";

const COMPONENTS = [
  TopBarComponent,
  MainFrameComponent,
  SideBarComponent,
  ContentComponent,
  FooterComponent,
  StatusButtonComponent,
]
@NgModule({
  imports: [
    CommonModule,
    TabsModule.forRoot(),
  ],
  declarations: [
    ...COMPONENTS,
    StatusButtonComponent,

  ],
  providers: [
    WechatAppService
  ],
  exports: [
    ...COMPONENTS
  ],
  entryComponents: [
    StatusButtonComponent
  ]
})
export class ShareModule { }
