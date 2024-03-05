import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  baseUrl:string = `https://route-ecommerce.onrender.com/api/v1/`; 

  allTokens:any = {
    token:localStorage.getItem('xtoken')
  }

  constructor(private _HttpClient:HttpClient) { }

  addWishList(proId:string|undefined):Observable<any>{
    return this._HttpClient.post( this.baseUrl + `wishlist`,{
      productId: proId
    },
    {
      headers:this.allTokens
    } )
  }
  
  getWishList():Observable<any>{
    return this._HttpClient.get( this.baseUrl + `wishlist`,
    {
      headers:this.allTokens
    } )
  }
  
  removeWishList(proId:string|undefined):Observable<any>{
    return this._HttpClient.delete( this.baseUrl + `wishlist/${proId}`,
    {
      headers:this.allTokens
    } )
  }

}
