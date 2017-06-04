import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountInfoViewRoutingModule } from './account-info-view-routing.module';
import { AccountInfoViewComponent } from './account-info-view.component';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import {FormModule} from "ngx-weui";
import {ShareModule} from "../../../../share/share.module";
@NgModule({
  imports: [
    CommonModule,
    AccountInfoViewRoutingModule,
    AngularFormsModule,
    FormModule,
    ShareModule,
  ],
  declarations: [AccountInfoViewComponent],
  exports: [AccountInfoViewComponent]
})
export class AccountInfoViewModule { }
