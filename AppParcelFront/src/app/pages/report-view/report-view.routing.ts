import {ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReportViewComponent} from "./report-view.component";

const routes: Routes = [{
  path: '',
  component: ReportViewComponent
}];


export const ReportViewRouting: ModuleWithProviders = RouterModule.forChild(routes)
