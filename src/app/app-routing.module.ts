import { NgModule } from '@angular/core';
import { RouterModule, Routes, withDebugTracing } from '@angular/router';
import { loggedInGuard } from './core';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },

  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((x) => x.AboutModule),
  },
  {
    //Lazy loading of account module.
    //Since user can retain tokens for several days,
    //it's not assumed that the user will log in frequently hence the login page is in the account module
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then((x) => x.AccountModule),
  },
  {
    path: 'vacancies',
    canActivate: [loggedInGuard],
    loadChildren: () =>
      import('./vacancy/vacancy.module').then((x) => x.VacancyModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
