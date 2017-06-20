import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2HighchartsModule } from 'ng2-highcharts';
import { ReportViewComponent } from './report-view.component';
import {ReportViewRouting} from "./report-view.routing";

@NgModule({
  imports: [
    CommonModule,
    ReportViewRouting,
    Ng2HighchartsModule,
  ],
  declarations: [ReportViewComponent]
})
export class ReportViewModule { }
