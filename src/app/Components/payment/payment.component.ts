import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule,FormControlOptions,Validators } from '@angular/forms';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  
  constructor(private _ActivatedRoute:ActivatedRoute, private _CartService:CartService){}

  cartId:string|null ='';

  orderForm:FormGroup = new FormGroup({
    details: new FormControl('',[Validators.required,Validators.minLength(3)]),
    phone: new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city: new FormControl('',[Validators.required]),
  })
  
  handelForm():void{
    this._CartService.checkOut(this.cartId, this.orderForm.value).subscribe({
      next:(res)=>{
        if(res.status == "success"){
          window.open(res.session.url,'_self')
        }
      }
    })
  }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.cartId = params.get('id')
      }
    })
  }


}
