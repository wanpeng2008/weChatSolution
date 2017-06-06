import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccountInfoComponent} from "./components/account-info/account-info.component";
import {OrderListComponent} from "./components/order-list/order-list.component";
import {OrderInfoComponent} from "./components/order-info/order-info.component";
import {PlaceOrderComponent} from "./components/place-order/place-order.component";
import {AccountInfoViewComponent} from "./components/account-info-view/account-info-view.component";
import {AccountInfoEditComponent} from "./components/account-info-edit/account-info-edit.component";
import {ShareModule} from "../../share/share.module";
import {FormModule} from "ngx-weui";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {InfoInquiryComponent} from "./components/info-inquiry/info-inquiry.component";
const COMPONENTS = [
  AccountInfoComponent,
  AccountInfoEditComponent,
  AccountInfoViewComponent,
  PlaceOrderComponent,
  OrderListComponent,
  OrderInfoComponent,
  InfoInquiryComponent,
]
@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    FormModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [...COMPONENTS, ],
  exports: [...COMPONENTS]
})
export class ComponentsModule { }
