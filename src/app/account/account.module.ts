import { NgModule } from '@angular/core';
import { AccountRoutingModule } from './account-routing.module';
import {
  AccountOverviewComponent,
  LoginComponent,
  SignupComponent,
} from './index';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, AccountOverviewComponent, SignupComponent],
  imports: [AccountRoutingModule, SharedModule],
})
export class AccountModule {}
