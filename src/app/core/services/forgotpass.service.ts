import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotpassService {

  constructor(private _HttpClient:HttpClient) { }

  baseUrl:string = `https://route-ecommerce.onrender.com/api/v1/auth/`; 

  Forgotpassword(userEmail:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl + `forgotPasswords`,userEmail)
  }

  resetCode(resetForm:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl + `verifyResetCode`,resetForm)
  }

  newpass(newPassForm:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl + `resetPassword`,newPassForm )
  }

}
