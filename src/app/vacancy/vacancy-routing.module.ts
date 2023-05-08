import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacancyComponent } from './index';

const routes: Routes = [
  {
    path: '',
    component: VacancyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VacancyRoutingModule {}
