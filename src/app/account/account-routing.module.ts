import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AccountOverviewComponent,
  LoginComponent,
  SignupComponent,
} from './index';
import { loggedInGuard } from '@core/index';

const routes: Routes = [
  {
    path: '',
    component: AccountOverviewComponent,
    canActivate: [loggedInGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
