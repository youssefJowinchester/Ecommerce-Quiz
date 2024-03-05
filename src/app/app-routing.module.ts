import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';

const routes: Routes = [
  
  //layout blank
  {path:'',canActivate:[authGuard] ,loadComponent:()=>import('./layouts/blank-layout/blank-layout.component').then((m)=>m.BlankLayoutComponent),
  children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',loadComponent:()=>import('./Components/home/home.component').then((m)=>m.HomeComponent),title:"Home"},
    {path:'cart',loadComponent:()=>import('./Components/cart/cart.component').then((m)=>m.CartComponent),title:'cart'},
    {path:'wishlist',loadComponent:()=>import('./Components/wishlist/wishlist.component').then((m)=>m.WishlistComponent),title:'wishlist'},
    {path:'products',loadComponent:()=>import('./Components/products/products.component').then((m)=>m.ProductsComponent),title:'products'},
    {path:'productdetails/:id',loadComponent:()=>import('./Components/details/details.component').then((m)=>m.DetailsComponent),title:'productdetails'},
    {path:'categories',loadComponent:()=>import('./Components/categories/categories.component').then((m)=>m.CategoriesComponent),title:'categories'},
    {path:'brands',loadComponent:()=>import('./Components/brands/brands.component').then((m)=>m.BrandsComponent),title:'brands'},
    {path:'payment/:id',loadComponent:()=>import('./Components/payment/payment.component').then((m)=>m.PaymentComponent),title:'payment'},
    {path:'allorders',loadComponent:()=>import('./Components/allorders/allorders.component').then((m)=>m.AllordersComponent),title:'allorders'},
    {path:'CategoryDetalis/:id',loadComponent:()=>import('./Components/category-detalis/category-detalis.component').then((m)=>m.CategoryDetalisComponent),title:'CategoryDetalis'},
    {path:'brandDetalis/:id',loadComponent:()=>import('./Components/brand-detalis/brand-detalis.component').then((m)=>m.BrandDetalisComponent),title:'brandDetalis'}
  ]

  },
  
  //layout auth
  {path:'',loadComponent:()=>import('./layouts/auth-layout/auth-layout.component').then((m)=>m.AuthLayoutComponent),
  children:[
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',loadComponent:()=>import('./Components/login/login.component').then((m)=>m.LoginComponent),title:'login'},
    {path:'register',loadComponent:()=>import('./Components/register/register.component').then((m)=>m.RegisterComponent),title:'register'},
    {path:'forgotpassword',loadComponent:()=>import('./Components/forgotpassword/forgotpassword.component').then((m)=>m.ForgotpasswordComponent),title:'forgotpassword'}
  ]

  },
  
  //notfound
  {path:'**',loadComponent:()=>import('./Components/notfound/notfound.component').then((m)=>m.NotfoundComponent)

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }