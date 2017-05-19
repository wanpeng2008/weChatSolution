import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WechatAppComponent} from "./wechat-app.component";

const routes: Routes = [{
  path: '', component: WechatAppComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WechatAppRoutingModule { }
