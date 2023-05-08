import { NgModule } from '@angular/core';
import { RouterModule, Routes, withDebugTracing } from '@angular/router';

const routes: Routes = [
  {
    //Lazy loading of account module.
    //Since user can retain tokens for several days,
    //it's not assumed that the user will log in frequently hence the login page is in the account module
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then((x) => x.AccountModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
