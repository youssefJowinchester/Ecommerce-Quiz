import { Brand } from './../../core/interface/brand';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HomeproService } from 'src/app/core/services/homepro.service';

@Component({
  selector: 'app-brand-detalis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-detalis.component.html',
  styleUrls: ['./brand-detalis.component.scss']
})
export class BrandDetalisComponent implements OnInit {
  
  constructor(private _ActivatedRoute:ActivatedRoute,private _HomeproService:HomeproService){}

  brandId:string|null='';
  
  brandDetalis:Brand = {} as Brand;
  
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(res)=>{
        this.brandId= res.get('id')
      }
    })

    this._HomeproService.brandDetalis(this.brandId).subscribe({
      next:(res)=>{
        this.brandDetalis = res.data
      }
    })

  }

}
