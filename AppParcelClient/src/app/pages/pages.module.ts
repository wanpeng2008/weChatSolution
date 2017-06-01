import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {TabViewModule} from "./tab-view/tab-view.module";

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    TabViewModule,
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
