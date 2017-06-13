import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

const routes: Routes = [{
  path: '', redirectTo: 'home', pathMatch: 'full'
},{
  path: '**', redirectTo: 'page-not-found'
}];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true })
