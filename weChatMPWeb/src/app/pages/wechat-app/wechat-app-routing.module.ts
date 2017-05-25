import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WechatAppComponent} from "./wechat-app.component";

const routes: Routes = [{
  path: '',
  component: WechatAppComponent,
  children: [
    { path: '', redirectTo: 'wechatAppAccess', pathMatch: 'full' },
    { path: 'wechatAppAccess', loadChildren: 'app/pages/wechat-app/wechat-app-access/wechat-app-access.module#WechatAppAccessModule' },
    { path: 'wechatAppMenu', loadChildren: 'app/pages/wechat-app/wechat-app-menu/wechat-app-menu.module#WechatAppMenuModule' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WechatAppRoutingModule { }
