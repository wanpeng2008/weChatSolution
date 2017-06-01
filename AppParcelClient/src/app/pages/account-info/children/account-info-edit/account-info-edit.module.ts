import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountInfoEditRoutingModule } from './account-info-edit-routing.module';
import { AccountInfoEditComponent } from './account-info-edit.component';

@NgModule({
  imports: [
    CommonModule,
    //AccountInfoEditRoutingModule
  ],
  declarations: [AccountInfoEditComponent],
  exports: [AccountInfoEditComponent]
})
export class AccountInfoEditModule { }
