import { Category } from './../../core/interface/category';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HomeproService } from 'src/app/core/services/homepro.service';

@Component({
  selector: 'app-category-detalis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-detalis.component.html',
  styleUrls: ['./category-detalis.component.scss']
})
export class CategoryDetalisComponent implements OnInit{
  
  constructor(private _ActivatedRoute:ActivatedRoute,private _HomeproService:HomeproService){}
  
  CategoryId:string|null='';
  
  CategoryDetalis:Category = {} as Category;
  
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(res)=>{
        this.CategoryId= res.get('id')
      }
    })

    this._HomeproService.getcategoriesdetalis(this.CategoryId).subscribe({
      next:(res)=>{
        this.CategoryDetalis = res.data
      }
    })

  }

}
