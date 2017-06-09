import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {ShareModule} from "../../share/share.module";
import {TabModule} from "ngx-weui";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    TabModule,
    ShareModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
