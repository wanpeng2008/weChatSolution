import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TabViewComponent } from './tab-view.component';
import { TabModule } from 'ngx-weui/tab';
import {TabViewRouting} from "./tab-view.routing";
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { AccountInfoEditComponent } from './components/account-info-edit/account-info-edit.component';
import { AccountInfoViewComponent } from './components/account-info-view/account-info-view.component';
import {ShareModule} from "../../share/share.module";
import {FormsModule} from "@angular/forms";
import {ButtonModule, FormModule} from "ngx-weui";
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderInfoComponent } from './components/order-info/order-info.component';


@NgModule({
  imports: [
    CommonModule,
    TabViewRouting,
    TabModule,
    ButtonModule,
    FormModule,
    ShareModule,
    FormsModule,
  ],
  declarations: [TabViewComponent, AccountInfoComponent, AccountInfoEditComponent, AccountInfoViewComponent, PlaceOrderComponent, OrderListComponent, OrderInfoComponent],
  exports: [TabViewComponent]
})
export class TabViewModule { }
