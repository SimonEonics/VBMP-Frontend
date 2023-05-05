import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreApiModule } from './core-api.module';
import {AuthorizationService} from './services/index'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './index';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreApiModule
  ],
  providers: [
    AuthorizationService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
})
export class CoreModule { }
