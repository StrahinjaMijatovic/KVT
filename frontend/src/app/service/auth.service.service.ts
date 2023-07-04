import { Injectable } from '@angular/core';
import {HttpHeaders, HttpStatusCode} from '@angular/common/http';

import { ConfigServiceService} from './config-service.service';
import { catchError, map } from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from "../api-service.service";
import {UserService} from "src/app/service/user-service";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({providedIn: 'root'})
export class AuthServiceService {
  get access_token(): any {
    return this._access_token;
  }

  set access_token(value: any) {
    this._access_token = value;
  }

  constructor(
    public jwtHelper: JwtHelperService,
    private apiService: ApiService,
    private userService: UserService,
    private config: ConfigServiceService,
    private router: Router,
    private route: ActivatedRoute,

  ) {

  }
  // public isAuthenticated(): boolean {
  //   const token = localStorage.getItem('jwt');
  //   // Check whether the token is expired and return
  //   // true or false
  //   if(this.jwtHelper.isTokenExpired(token))
  //   {
  //     localStorage.clear();
  //     return false;
  //   }
  //   return true;
  // }

  changePassword(user:any) {
    const loginHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    // const body = `username=${user.username}&password=${user.password}`;
    const body = {
      'newPassword': user.NewPassword,
      'oldPassword1': user.oldPassword1,
      'oldPassword2': user.oldPassword2
    };
    return this.apiService.post(this.config._passchange_url, JSON.stringify(body), loginHeaders)
      .subscribe((res) => {
        if(res.body == "NOT_ACCEPTABLE")
        {
          alert("wrong Password")
        }else {
          console.log('Change success');
          let returnUrl : String;
          returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigate([returnUrl + "/"]);
        }
      });
  }
  private _access_token = null;
  
  tokenIsPresent() {
    return this._access_token != undefined && this._access_token != null;
  }

  getToken() {
    return this._access_token;
  }

}
