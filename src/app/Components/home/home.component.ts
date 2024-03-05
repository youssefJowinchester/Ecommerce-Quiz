import { Brand } from './../../core/interface/brand';
import { CuttextPipe } from './../../core/pipe/cuttext.pipe';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeproService } from 'src/app/core/services/homepro.service';
import { Product } from 'src/app/core/interface/product';
import { Category } from 'src/app/core/interface/category';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/core/services/wishlist.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CuttextPipe, CarouselModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  constructor(private _HomeproService:HomeproService, private _CartService:CartService,
    private _ToastrService:ToastrService,
    private _Renderer2:Renderer2,
    private _WishlistService:WishlistService
    
    
    ){}

  products:Product[] = [];

  categories:Category[] = [];

  brand:Brand [] = []

  wishListData:string[] = [];


  // product
  ngOnInit(): void {
    this._HomeproService.getproduct().subscribe({
      next:(res) =>{
        this.products = res.data;
      }
    });


    this._HomeproService.getcategories().subscribe({
      next:(res) =>{
        this.categories = res.data;
      } 
    })


    this._WishlistService.getWishList().subscribe({
      next:(res)=>{
        const wishData = res.data.map((item:any)=>item._id);
        this.wishListData = wishData;
      }
    })
  };


  categoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:1000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };

  sliaddOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    autoplayTimeout:3000,
    autoplaySpeed:1000,
    items:1,
    nav: true
  }

  // cart
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

  // add product to wish list
  addFav(proId:string|undefined):void{
    this._WishlistService.addWishList(proId).subscribe({
      next:(res)=>{
        this._ToastrService.success(res.message)
        this.wishListData = res.data;
      }
    })
  }

  // remove product from wish list
  removfav(proId:string|undefined):void{
    this._WishlistService.removeWishList(proId).subscribe({
      next:(res)=>{
        this._ToastrService.success(res.message);
        this.wishListData = res.data;
      }
    })
  }

}
 