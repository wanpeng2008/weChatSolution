import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountInfoRoutingModule } from './account-info-routing.module';
import { AccountInfoComponent } from './account-info.component';
import { FormModule } from 'ngx-weui/form';
import {ShareModule} from "../../share/share.module";
import { FormsModule as AngularFormsModule } from '@angular/forms';
import {AccountInfoEditModule} from "./children/account-info-edit/account-info-edit.module";
import {AccountInfoViewModule} from "./children/account-info-view/account-info-view.module";

@NgModule({
  imports: [
    CommonModule,
    AccountInfoRoutingModule,
    AngularFormsModule,
    FormModule,
    ShareModule,
    AccountInfoViewModule,
    AccountInfoEditModule,
  ],
  declarations: [AccountInfoComponent],
  //exports: [AccountInfoComponent]
})
export class AccountInfoModule { }
