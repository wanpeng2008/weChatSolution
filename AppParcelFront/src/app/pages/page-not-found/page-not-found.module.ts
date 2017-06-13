import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundRouting } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    PageNotFoundRouting
  ],
  declarations: [PageNotFoundComponent]
})
export class PageNotFoundModule { }
