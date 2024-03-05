import { Brand } from './../../core/interface/brand';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeproService } from 'src/app/core/services/homepro.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  constructor(private _HomeproService:HomeproService){}
 
  brandData:Brand[] = [];


  ngOnInit(): void {
    this._HomeproService.brand().subscribe({
      next:(res)=>{
        this.brandData = res.data;
      }
    })
  }


  
}
