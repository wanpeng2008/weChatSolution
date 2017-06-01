import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountInfoEditComponent} from "./account-info-edit.component";

const routes: Routes = [{
  path: '',
  component: AccountInfoEditComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountInfoEditRoutingModule { }
