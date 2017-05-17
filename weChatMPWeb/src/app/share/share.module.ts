import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideBarFrameComponent } from './components/side-bar-frame/side-bar-frame.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

const COMPONENTS = [
  TopBarComponent,
  SideBarFrameComponent,
  SideBarComponent
]
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ShareModule { }
