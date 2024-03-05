import { Product } from './../../core/interface/product';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HomeproService } from 'src/app/core/services/homepro.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute, private _HomeproService:HomeproService,
    private _CartService:CartService,
    private _ToastrService:ToastrService,
    private _Renderer2:Renderer2
    
    ){}
  
  productId!:string|null;

  ProductDetails:any = null;



  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(par) => {
        this.productId = par.get('id')
      }
    })

    this._HomeproService.getProductsdetails(this.productId).subscribe({
      next:(res) =>{
        this.ProductDetails = res.data;
      }
    })
  };

  productDetalisOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    autoplay:true,
    autoplayTimeout:4000,
    autoplaySpeed:1000,
    nav: true
  }

  addpro(id:any, element:HTMLButtonElement):void{

    this._Renderer2.setAttribute(element,'disabled','true')

    this._CartService.addToCart(id).subscribe({
      next:(res) =>{
        this._ToastrService.success(res.message)
        this._Renderer2.removeAttribute(element,'disabled');
      },
      error:(err) =>{
        this._Renderer2.removeAttribute(element,'disabled');
      }
    })
  }
}
