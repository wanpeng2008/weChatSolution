import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountInfoViewComponent} from "./account-info-view.component";

const routes: Routes = [{
  path: '',
  component: AccountInfoViewComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountInfoViewRoutingModule { }
