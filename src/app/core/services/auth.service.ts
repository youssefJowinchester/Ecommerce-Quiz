import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  userInfo:any;

  baseURL:string = `https://route-ecommerce.onrender.com/api/v1/auth/`;

  register(userData:object):Observable<any>{
    return this._HttpClient.post(this.baseURL + `signup`,userData)
  };
  login(userData:object):Observable<any>{
    return this._HttpClient.post(this.baseURL + `signin`,userData)
  };

  deCodeUser():void{
    
    const unRead = localStorage.getItem('xtoken');

    if(unRead != null){

      const read = jwtDecode(unRead);

      this.userInfo = read;

    }

  }
}
