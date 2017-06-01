import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountInfoComponent} from "./account-info.component";
import {AccountInfoViewComponent} from "./children/account-info-view/account-info-view.component";
import {AccountInfoEditComponent} from "./children/account-info-edit/account-info-edit.component";

const routes: Routes = [{
  path: '',
  component: AccountInfoComponent,
  children: [/*{
    path: '', redirectTo: 'view', pathMatch: 'full'
  },*//*{
    path: 'view', loadChildren: 'app/pages/account-info/children/account-info-view/account-info-view.module#AccountInfoViewModule'
  },{
    path: 'edit', loadChildren: 'app/pages/account-info/children/account-info-edit/account-info-edit.module#AccountInfoEditModule'
  },*/{
    path: 'view', component: AccountInfoViewComponent
  },{
    path: 'edit', component: AccountInfoEditComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountInfoRoutingModule { }
