"use strict";(self.webpackChunkEcommerc=self.webpackChunkEcommerc||[]).push([[535],{1535:(C,u,r)=>{r.r(u),r.d(u,{ProductsComponent:()=>T});var c=r(6814),h=r(1120),p=r(8129),t=r(4769);let l=(()=>{class n{transform(e,s){return e.filter(a=>a.title.toLowerCase().includes(s.toLowerCase()))}static#t=this.\u0275fac=function(s){return new(s||n)};static#e=this.\u0275pipe=t.Yjl({name:"search",type:n,pure:!0,standalone:!0})}return n})();var i=r(95),o=r(2316),d=r(6286),_=r(2425);const v=function(n){return["/productdetails",n]};function f(n,U){if(1&n){const e=t.EpF();t.TgZ(0,"div",4)(1,"div",5)(2,"header",6),t._UZ(3,"img",7),t.TgZ(4,"h3",8),t._uU(5),t.ALo(6,"cuttext"),t.qZA(),t.TgZ(7,"h4",9),t._uU(8),t.qZA(),t.TgZ(9,"div",10)(10,"span",11),t._uU(11),t.ALo(12,"currency"),t.qZA(),t.TgZ(13,"span",12),t._UZ(14,"i",13),t._uU(15),t.qZA()()(),t.TgZ(16,"footer")(17,"button",14,15),t.NdJ("click",function(){const m=t.CHM(e).$implicit,g=t.MAs(18),b=t.oxw();return t.KtG(b.addpro(m._id,g))}),t._uU(19," + Add to cart "),t.qZA()()()()}if(2&n){const e=U.$implicit;t.xp6(2),t.Q6J("routerLink",t.VKq(14,v,e._id)),t.xp6(1),t.Q6J("src",e.imageCover,t.LSH)("title",e.title)("alt",e.title),t.xp6(2),t.Oqu(t.xi3(6,8,e.title,3)),t.xp6(3),t.Oqu(e.category.name),t.xp6(3),t.Oqu(t.xi3(12,11,e.price,"EGP")),t.xp6(4),t.hij(" ",e.ratingsAverage," ")}}let T=(()=>{class n{constructor(e,s,a,m){this._HomeproService=e,this._Renderer2=s,this._CartService=a,this._ToastrService=m,this.products=[],this.term=""}ngOnInit(){this._HomeproService.getproduct().subscribe({next:e=>{this.products=e.data}})}addpro(e,s){this._Renderer2.setAttribute(s,"disabled","true"),this._CartService.addToCart(e).subscribe({next:a=>{this._ToastrService.success(a.message),this._Renderer2.removeAttribute(s,"disabled"),this._CartService.cartNumber.next(a.numOfCartItems)},error:a=>{this._Renderer2.removeAttribute(s,"disabled")}})}static#t=this.\u0275fac=function(s){return new(s||n)(t.Y36(o.z),t.Y36(t.Qsj),t.Y36(d.N),t.Y36(_._W))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-products"]],standalone:!0,features:[t.jDz],decls:5,vars:5,consts:[[1,"container","py-5"],["placeholder","Search....","type","text",1,"form-control","w-50","mx-auto","form-control-sm","my-4",3,"ngModel","ngModelChange"],[1,"row","g-4"],["class","col-ms-6 col-md-4 col-lg-3",4,"ngFor","ngForOf"],[1,"col-ms-6","col-md-4","col-lg-3"],[1,"product","h-100"],["role","button",3,"routerLink"],[1,"w-100",3,"src","title","alt"],[1,"h6"],[1,"h6","text-main"],[1,"d-flex","align-items-center","justify-content-between"],[1,"small","text-muted"],[1,"small"],[1,"fas","fa-star","rating"],[1,"main-btn",3,"click"],["addbtn",""]],template:function(s,a){1&s&&(t.TgZ(0,"section",0)(1,"input",1),t.NdJ("ngModelChange",function(g){return a.term=g}),t.qZA(),t.TgZ(2,"div",2),t.YNc(3,f,20,16,"div",3),t.ALo(4,"search"),t.qZA()()),2&s&&(t.xp6(1),t.Q6J("ngModel",a.term),t.xp6(2),t.Q6J("ngForOf",t.xi3(4,2,a.products,a.term)))},dependencies:[c.ez,c.sg,c.H9,h.rH,p.r,l,i.u5,i.Fj,i.JJ,i.On]})}return n})()},6286:(C,u,r)=>{r.d(u,{N:()=>t});var c=r(5619),h=r(4769),p=r(9862);let t=(()=>{class l{constructor(o){this._HttpClient=o,this.baseUrl="https://route-ecommerce.onrender.com/api/v1/",this.cartNumber=new c.X(0),this.allTokens={token:localStorage.getItem("xtoken")}}addToCart(o){return this._HttpClient.post(this.baseUrl+"cart",{productId:o},{headers:this.allTokens})}getCartUser(){return this._HttpClient.get(this.baseUrl+"cart",{headers:this.allTokens})}removeCartItem(o){return this._HttpClient.delete(this.baseUrl+`cart/${o}`,{headers:this.allTokens})}updateCartCount(o,d){return this._HttpClient.put(this.baseUrl+`cart/${o}`,{count:d},{headers:this.allTokens})}clearCartItem(){return this._HttpClient.delete(this.baseUrl+"cart",{headers:this.allTokens})}checkOut(o,d){return this._HttpClient.post(this.baseUrl+`orders/checkout-session/${o}?url=http://localhost:4200`,{shippingAddress:d},{headers:this.allTokens})}static#t=this.\u0275fac=function(d){return new(d||l)(h.LFG(p.eN))};static#e=this.\u0275prov=h.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()},2316:(C,u,r)=>{r.d(u,{z:()=>p});var c=r(4769),h=r(9862);let p=(()=>{class t{constructor(i){this._HttpClient=i,this.baseUrl="https://route-ecommerce.onrender.com/api/v1/"}getproduct(){return this._HttpClient.get(this.baseUrl+"products")}getProductsdetails(i){return this._HttpClient.get(this.baseUrl+`products/${i}`)}getcategories(){return this._HttpClient.get(this.baseUrl+"categories")}getcategoriesdetalis(i){return this._HttpClient.get(this.baseUrl+`categories/${i}`)}brand(){return this._HttpClient.get(this.baseUrl+"brands")}brandDetalis(i){return this._HttpClient.get(this.baseUrl+`brands/${i}`)}static#t=this.\u0275fac=function(o){return new(o||t)(c.LFG(h.eN))};static#e=this.\u0275prov=c.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})()}}]);