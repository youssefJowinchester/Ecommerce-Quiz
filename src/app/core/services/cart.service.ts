import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }

  baseUrl:string = `https://route-ecommerce.onrender.com/api/v1/`;

  cartNumber:BehaviorSubject<number> = new BehaviorSubject(0);

  allTokens:any = {
    token:localStorage.getItem('xtoken')
  }

  addToCart(proId:string):Observable<any>{
    return this._HttpClient.post(this.baseUrl + `cart`, {
      productId:proId
    },
    {
      headers:this.allTokens
    })
  }

  getCartUser():Observable<any>{
    return this._HttpClient.get(this.baseUrl + `cart`,
    {
      headers:this.allTokens
    }
    )
  }

  removeCartItem(proId:string):Observable<any>{
    return this._HttpClient.delete(this.baseUrl + `cart/${proId}`,
    {
      headers:this.allTokens
    }
    )
  }

  updateCartCount(proId:string,countNumber:number):Observable<any>{
    return this._HttpClient.put(this.baseUrl + `cart/${proId}`,
    {
      count: countNumber
    },
    {
      headers:this.allTokens
    }
    )
  }

  clearCartItem():Observable<any>{
    return this._HttpClient.delete(this.baseUrl + `cart`,
    {
      headers:this.allTokens
    }
    )
  }

  checkOut(cartId:string|null, orderInfo:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl + `orders/checkout-session/${cartId}?url=http://localhost:4200`,
    {
      shippingAddress:orderInfo
    },
    {
      headers:this.allTokens
    } 
    )
  }

}
