import { CartService } from './../../core/services/cart.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from 'src/app/core/services/wishlist.service';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule,RouterLink,CuttextPipe],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit{
  
  constructor(private _WishlistService:WishlistService,
     private _ToastrService:ToastrService,
     private _CartService:CartService,
     private _Renderer2:Renderer2
    ){}

    wishListDetails:any = null;


  ngOnInit(): void {
    this._WishlistService.getWishList().subscribe({
      next:(res)=>{
        this.wishListDetails = res.data;
      }
    })
  }

  removeItem(id:string|undefined):void{
    this._WishlistService.removeWishList(id).subscribe({
      next:(res)=>{
        this.wishListDetails = res.data;
        
        this._WishlistService.getWishList().subscribe({
          next:(res)=>{
            this.wishListDetails = res.data;
          }
        })
      }
    })
  }
  

  // add product to cart
  addpro(id:any, element:HTMLButtonElement):void{
    this._Renderer2.setAttribute(element,'disabled','true')
    this._CartService.addToCart(id).subscribe({
      next:(res) =>{
        this._ToastrService.success(res.message);
        this._Renderer2.removeAttribute(element,'disabled');
        this._CartService.cartNumber.next(res.numOfCartItems)

      },
      error:(err) =>{
        this._Renderer2.removeAttribute(element,'disabled');
      }
    })
  }
}
