import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainFrameComponent } from './components/main-frame/main-frame.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import {WechatAppService} from "./services/wechat-app.service";

const COMPONENTS = [
  TopBarComponent,
  MainFrameComponent,
  SideBarComponent,
  ContentComponent,
  FooterComponent
]
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...COMPONENTS,

  ],
  providers: [
    WechatAppService
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ShareModule { }
