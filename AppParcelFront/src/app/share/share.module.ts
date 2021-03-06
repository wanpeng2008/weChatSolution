import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './components/page/page.component';
import { ChecklistDirective } from './directives/checklist.directive';
import {ConfigService} from "./services/config.service";
import {AuthGuardService} from "./services/auth-guard.service";
import {AuthService} from "./services/auth.service";
import {OrderService} from "./services/order.service";
import {UserService} from "./services/user.service";

const COMPONENTS =[PageComponent]
const DIRECTIVES =[ChecklistDirective]
const SERVICES = [
  ConfigService,
  AuthService,
  AuthGuardService,
  OrderService,
  UserService,
]
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...COMPONENTS, ...DIRECTIVES],
  exports: [...COMPONENTS, ...DIRECTIVES]
})
export class ShareModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: ShareModule,
      providers: [
        ...SERVICES
      ],
    };
  }
}
