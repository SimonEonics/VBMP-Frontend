import { HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  UserJwtControllerService,
  LoginVM,
  JWTToken,
  AccountResourceService,
  AdminUserDTO,
} from '@api';
import { SessionStorageService } from 'ngx-webstorage';
import { ConstantStrings, appJsonHeader } from '../index';
import { catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly userJwtController: UserJwtControllerService,
    private readonly accountResource: AccountResourceService,
    private readonly sessionStorageService: SessionStorageService
  ) {}

  login(userName: string, password: string) {
    const request: LoginVM = {
      username: userName,
      password: password,
    };

    return this.userJwtController
      .authorize(request, 'body', false, appJsonHeader)
      .pipe(
        exhaustMap((jwtToken) => {
          this.storeToken(jwtToken);
          return this.accountResource
            .getAccount('body', false, appJsonHeader)
            .pipe(
              exhaustMap((userInfo) => {
                this.storeUserInfo(userInfo);
                return of(true);
              })
            );
        }),
        catchError((_) => of(false))
      );
  }

  logout() {
    this.sessionStorageService.clear(ConstantStrings.JwtToken);
    this.sessionStorageService.clear(ConstantStrings.UserInfo);
  }

  getUserInfo(): AdminUserDTO {
    const userInfo = this.sessionStorageService.retrieve(
      ConstantStrings.UserInfo
    );
    return userInfo ? (JSON.parse(userInfo) as AdminUserDTO) : null;
  }

  isAuthenticated(): boolean {
    return this.getUserInfo() != null;
  }

  private storeToken(token: JWTToken): void {
    this.sessionStorageService.store(ConstantStrings.JwtToken, token.id_token);
  }

  private storeUserInfo(userDto: AdminUserDTO): void {
    this.sessionStorageService.store(
      ConstantStrings.UserInfo,
      JSON.stringify(userDto)
    );
  }
}
