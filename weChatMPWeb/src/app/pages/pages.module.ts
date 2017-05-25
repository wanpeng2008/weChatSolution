import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {ShareModule} from "../share/share.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ShareModule,
    ReactiveFormsModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
