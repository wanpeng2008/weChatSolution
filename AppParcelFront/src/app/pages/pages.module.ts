import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import {TabViewModule} from "./tab-view/tab-view.module";
import {PagesRouting} from "./pages.routing";
import {ComponentsModule} from "./components/components.module";
import {ShareModule} from "../share/share.module";

@NgModule({
  imports: [
    CommonModule,
    PagesRouting,
    TabViewModule,
    ComponentsModule,
    ShareModule,
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
