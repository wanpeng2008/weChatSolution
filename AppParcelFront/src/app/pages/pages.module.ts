import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import {PagesRouting} from "./pages.routing";
import {ComponentsModule} from "./components/components.module";
import {ShareModule} from "../share/share.module";

@NgModule({
  imports: [
    CommonModule,
    PagesRouting,
    ComponentsModule,
    ShareModule,
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
