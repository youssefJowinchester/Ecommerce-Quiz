"use strict";(self.webpackChunkEcommerc=self.webpackChunkEcommerc||[]).push([[170],{5170:(g,c,s)=>{s.r(c),s.d(c,{CategoryDetalisComponent:()=>a});var n=s(6814),t=s(4769),l=s(1120),i=s(2316);function _(r,u){if(1&r&&(t.TgZ(0,"section",1)(1,"div",2)(2,"div",3),t._UZ(3,"img",4),t.qZA(),t.TgZ(4,"div",3)(5,"h2",5),t._uU(6),t.qZA()()()()),2&r){const e=t.oxw();t.xp6(3),t.Q6J("src",e.CategoryDetalis.image,t.LSH)("alt",e.CategoryDetalis.name),t.xp6(3),t.Oqu(e.CategoryDetalis.name)}}let a=(()=>{class r{constructor(e,o){this._ActivatedRoute=e,this._HomeproService=o,this.CategoryId="",this.CategoryDetalis={}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:e=>{this.CategoryId=e.get("id")}}),this._HomeproService.getcategoriesdetalis(this.CategoryId).subscribe({next:e=>{this.CategoryDetalis=e.data}})}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(l.gz),t.Y36(i.z))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-category-detalis"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","w-75 mx-auto rounded shadow text-main-light p-3",4,"ngIf"],[1,"w-75","mx-auto","rounded","shadow","text-main-light","p-3"],[1,"row","g-4","align-items-center"],[1,"col-md-6"],[1,"w-100",3,"src","alt"],[1,"text-main"]],template:function(o,d){1&o&&t.YNc(0,_,7,3,"section",0),2&o&&t.Q6J("ngIf",d.CategoryDetalis._id)},dependencies:[n.ez,n.O5]})}return r})()},2316:(g,c,s)=>{s.d(c,{z:()=>l});var n=s(4769),t=s(9862);let l=(()=>{class i{constructor(a){this._HttpClient=a,this.baseUrl="https://route-ecommerce.onrender.com/api/v1/"}getproduct(){return this._HttpClient.get(this.baseUrl+"products")}getProductsdetails(a){return this._HttpClient.get(this.baseUrl+`products/${a}`)}getcategories(){return this._HttpClient.get(this.baseUrl+"categories")}getcategoriesdetalis(a){return this._HttpClient.get(this.baseUrl+`categories/${a}`)}brand(){return this._HttpClient.get(this.baseUrl+"brands")}brandDetalis(a){return this._HttpClient.get(this.baseUrl+`brands/${a}`)}static#t=this.\u0275fac=function(r){return new(r||i)(n.LFG(t.eN))};static#e=this.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()}}]);