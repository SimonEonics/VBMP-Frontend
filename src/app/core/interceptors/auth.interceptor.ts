import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { SessionStorageService } from 'ngx-webstorage';
import { ConstantStrings } from '..';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private readonly sessionStorageService : SessionStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const jwtToken = this.sessionStorageService.retrieve(ConstantStrings.JwtToken);
    const req = !jwtToken ?
      request.clone() :
      request.clone({
        setHeaders: {'Authorization': `Bearer ${jwtToken}`}
        }
      );
    return next.handle(req);
  }
}
