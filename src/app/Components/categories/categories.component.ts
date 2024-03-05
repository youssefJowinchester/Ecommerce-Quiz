import { Category } from './../../core/interface/category';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeproService } from 'src/app/core/services/homepro.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  
  constructor(private _HomeproService:HomeproService){}

  Categorydata:Category[] = [];
  
  ngOnInit(): void {
    this._HomeproService.getcategories().subscribe({
      next:(res)=>{
        this.Categorydata = res.data;
      }
    })
  }

}
