import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountInfoRoutingModule } from './account-info-routing.module';
import { AccountInfoComponent } from './account-info.component';

@NgModule({
  imports: [
    CommonModule,
    AccountInfoRoutingModule
  ],
  declarations: [AccountInfoComponent]
})
export class AccountInfoModule { }
