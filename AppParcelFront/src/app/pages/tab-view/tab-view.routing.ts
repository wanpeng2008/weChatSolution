
import { Routes, RouterModule } from '@angular/router';
import {TabViewComponent} from "./tab-view.component";
import {ModuleWithProviders} from "@angular/core";
import {AccountInfoComponent} from "./components/account-info/account-info.component";

const routes: Routes = [{
  path: '',
  component: TabViewComponent,
}];

export const TabViewRouting: ModuleWithProviders = RouterModule.forChild(routes)
