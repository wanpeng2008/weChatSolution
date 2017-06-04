import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import {TabViewModule} from "./tab-view/tab-view.module";
import {PagesRouting} from "./pages.routing";

@NgModule({
  imports: [
    CommonModule,
    PagesRouting,
    TabViewModule,
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
