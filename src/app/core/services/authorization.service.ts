import { HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {UserJwtControllerService, LoginVM, JWTToken, AccountResourceService, AdminUserDTO} from '@api';
import {SessionStorageService} from 'ngx-webstorage';
import { ConstantStrings, appJsonHeader } from '../index';
import { exhaustMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private readonly userJwtController : UserJwtControllerService,
    private readonly accountResource : AccountResourceService,
    private readonly sessionStorageService : SessionStorageService) { }

  login(userName : string, password : string){
    const header : Object = {httpHeaderAccept : 'application/json', context: <HttpContext>null};
    const request : LoginVM = {
      username: userName,
      password: password
    };

    return this.userJwtController.authorize(request,"body",false,appJsonHeader)
      .pipe(
        exhaustMap(jwtToken => {
          this.storeToken(jwtToken);
          return this.accountResource.getAccount("body",false,appJsonHeader)
            .pipe(tap( userDto => {
              this.storeAccountName(userDto)
            }));
        })
      );
  }

  private storeToken(token : JWTToken):void{
    this.sessionStorageService.store(ConstantStrings.JwtToken, token.id_token);
  }

  private storeAccountName(userDto : AdminUserDTO):void{
    this.sessionStorageService.store(ConstantStrings.FirstName, userDto.firstName);
  }

  logout(){
    this.sessionStorageService.clear(ConstantStrings.JwtToken);
    this.sessionStorageService.clear(ConstantStrings.FirstName);
  }
}
