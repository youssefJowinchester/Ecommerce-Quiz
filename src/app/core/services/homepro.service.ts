import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeproService {

  constructor(private _HttpClient:HttpClient) { }

  baseUrl:string = `https://route-ecommerce.onrender.com/api/v1/`; 

  getproduct():Observable<any>{
    return this._HttpClient.get(this.baseUrl + 'products')
  }
  getProductsdetails(id:string|null):Observable<any>{
    return this._HttpClient.get(this.baseUrl + `products/${id}`)
  }


  getcategories():Observable<any>{
    return this._HttpClient.get(this.baseUrl + 'categories')
  }
  getcategoriesdetalis(id:string|null):Observable<any>{
    return this._HttpClient.get(this.baseUrl + `categories/${id}`)
  }

  brand():Observable<any>{
    return this._HttpClient.get(this.baseUrl + 'brands')
  }
  brandDetalis(id:string|null):Observable<any>{
    return this._HttpClient.get(this.baseUrl + `brands/${id}`)
  }

}
