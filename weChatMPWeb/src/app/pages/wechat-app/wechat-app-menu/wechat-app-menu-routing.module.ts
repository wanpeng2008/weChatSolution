import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WechatAppMenuComponent} from "./wechat-app-menu.component";

const routes: Routes = [{
  path: '', component: WechatAppMenuComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WechatAppMenuRoutingModule { }
