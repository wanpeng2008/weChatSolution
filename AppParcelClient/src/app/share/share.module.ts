import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './components/page/page.component';
import { ChecklistDirective } from './directives/checklist.directive';

const COMPONENTS =[PageComponent]
const DIRECTIVES =[ChecklistDirective]
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...COMPONENTS, ...DIRECTIVES],
  exports: [...COMPONENTS, ...DIRECTIVES]
})
export class ShareModule { }
