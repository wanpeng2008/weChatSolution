import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TabViewComponent } from './tab-view.component';
import {AccountInfoModule} from "../account-info/account-info.module";
import { TabModule } from 'ngx-weui/tab';
import {TabViewRouting} from "./tab-view.routing";
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { AccountInfoEditComponent } from './components/account-info-edit/account-info-edit.component';
import { AccountInfoViewComponent } from './components/account-info-view/account-info-view.component';


@NgModule({
  imports: [
    CommonModule,
    TabViewRouting,
    TabModule,
  ],
  declarations: [TabViewComponent, AccountInfoComponent, AccountInfoEditComponent, AccountInfoViewComponent],
  exports: [TabViewComponent]
})
export class TabViewModule { }
