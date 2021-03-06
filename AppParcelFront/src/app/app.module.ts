import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {WeUiModule} from "ngx-weui";
import {PagesModule} from "./pages/pages.module";
import {AppRouting} from "./app.routing";
import {ShareModule} from "./share/share.module";
import {OrgService} from "./share/services/org.service";
import {UserService} from "./share/services/user.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    PagesModule,
    WeUiModule.forRoot(),
    ShareModule.forRoot()
  ],
  providers: [OrgService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
