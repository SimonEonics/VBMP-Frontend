import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreApiModule } from './core-api.module';
import { AuthorizationService } from './services/index';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './index';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule, CoreApiModule, RouterModule],
  providers: [
    AuthorizationService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  exports: [NavBarComponent],
})
export class CoreModule {}
