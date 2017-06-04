import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

const routes: Routes = [{
  path: '', redirectTo: 'pages', pathMatch: 'full'
},{
  path: '**', redirectTo: 'pages/tab-view'
}];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true })
