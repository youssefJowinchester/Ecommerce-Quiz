"use strict";(self.webpackChunkEcommerc=self.webpackChunkEcommerc||[]).push([[468],{6286:(v,s,a)=>{a.d(s,{N:()=>p});var c=a(5619),o=a(4769),t=a(9862);let p=(()=>{class i{constructor(e){this._HttpClient=e,this.baseUrl="https://route-ecommerce.onrender.com/api/v1/",this.cartNumber=new c.X(0),this.allTokens={token:localStorage.getItem("xtoken")}}addToCart(e){return this._HttpClient.post(this.baseUrl+"cart",{productId:e},{headers:this.allTokens})}getCartUser(){return this._HttpClient.get(this.baseUrl+"cart",{headers:this.allTokens})}removeCartItem(e){return this._HttpClient.delete(this.baseUrl+`cart/${e}`,{headers:this.allTokens})}updateCartCount(e,l){return this._HttpClient.put(this.baseUrl+`cart/${e}`,{count:l},{headers:this.allTokens})}clearCartItem(){return this._HttpClient.delete(this.baseUrl+"cart",{headers:this.allTokens})}checkOut(e,l){return this._HttpClient.post(this.baseUrl+`orders/checkout-session/${e}?url=http://localhost:4200`,{shippingAddress:l},{headers:this.allTokens})}static#t=this.\u0275fac=function(l){return new(l||i)(o.LFG(t.eN))};static#e=this.\u0275prov=o.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},468:(v,s,a)=>{a.r(s),a.d(s,{BlankLayoutComponent:()=>d});var c=a(6814),o=a(1120),t=a(4769),p=a(6286);let i=(()=>{class e{constructor(r,n){this._Router=r,this._CartService=n,this.cartNum=0}ngOnInit(){this._CartService.cartNumber.subscribe({next:r=>{this.cartNum=r}}),this._CartService.getCartUser().subscribe({next:r=>{this.cartNum=r.numOfCartItems}})}logout(){localStorage.removeItem("xtoken"),this._Router.navigate(["/login"])}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(o.F0),t.Y36(p.N))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-nav-blank"]],standalone:!0,features:[t.jDz],decls:37,vars:1,consts:[[1,"navbar","navbar-expand-md","navbar-light","bg-light","fixed-top"],[1,"container"],["routerLink","",1,"navbar-brand"],[1,"fa-solid","fa-cart-shopping","fa-xl",2,"color","#099207"],[1,"text-black","ps-1"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapsibleNavId","aria-controls","collapsibleNavId","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","d-lg-none"],[1,"navbar-toggler-icon"],["id","collapsibleNavId",1,"collapse","navbar-collapse"],[1,"navbar-nav","m-auto","mt-2","mt-lg-0","ps-5"],[1,"nav-item"],["routerLinkActive","active-link","routerLink","/home",1,"nav-link"],["routerLinkActive","active-link","routerLink","/cart",1,"nav-link"],["routerLinkActive","active-link","routerLink","/wishlist",1,"nav-link"],["routerLinkActive","active-link","routerLink","/products",1,"nav-link"],["routerLinkActive","active-link","routerLink","/categories",1,"nav-link"],["routerLinkActive","active-link","routerLink","/brands",1,"nav-link"],[1,"navbar-nav","ms-auto","mt-2","mt-lg-0"],[1,"nav-item","pt-2"],["routerLink","/cart",1,"position-relative","nav-link"],[1,"fa-solid","fa-cart-shopping","fa-2xl","hav",2,"color","#3f3737"],[1,"badge","bg-success","position-absolute","top-0","end-0"],[1,"btn","btn-close-white",3,"click"]],template:function(n,u){1&n&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"a",2)(3,"i",3)(4,"span",4),t._uU(5,"fresh cart"),t.qZA()()(),t.TgZ(6,"button",5),t._UZ(7,"span",6),t.qZA(),t.TgZ(8,"div",7)(9,"ul",8)(10,"li",9)(11,"a",10),t._uU(12,"Home"),t.qZA()(),t.TgZ(13,"li",9)(14,"a",11),t._uU(15,"cart"),t.qZA()(),t.TgZ(16,"li",9)(17,"a",12),t._uU(18,"Wish list"),t.qZA()(),t.TgZ(19,"li",9)(20,"a",13),t._uU(21,"products"),t.qZA()(),t.TgZ(22,"li",9)(23,"a",14),t._uU(24,"categories"),t.qZA()(),t.TgZ(25,"li",9)(26,"a",15),t._uU(27,"brands"),t.qZA()()(),t.TgZ(28,"ul",16)(29,"li",17)(30,"a",18),t._UZ(31,"i",19),t.TgZ(32,"span",20),t._uU(33),t.qZA()()(),t.TgZ(34,"li")(35,"button",21),t.NdJ("click",function(){return u.logout()}),t._uU(36," log out "),t.qZA()()()()()()),2&n&&(t.xp6(33),t.Oqu(u.cartNum))},dependencies:[c.ez,o.rH,o.Od],styles:[".hav[_ngcontent-%COMP%]:hover:before{color:#000}.btn[_ngcontent-%COMP%]{color:#3e3c3c}.btn[_ngcontent-%COMP%]:hover{color:#000}"]})}return e})(),d=(()=>{class e{goUp(){window.scrollTo(0,0)}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-blank-layout"]],standalone:!0,features:[t.jDz],decls:5,vars:0,consts:[[1,"container-fluid"],[1,"upbtn",3,"click"],[1,"fa-solid","fa-angle-up"]],template:function(n,u){1&n&&(t._UZ(0,"app-nav-blank"),t.TgZ(1,"div",0),t._UZ(2,"router-outlet"),t.qZA(),t.TgZ(3,"button",1),t.NdJ("click",function(){return u.goUp()}),t._UZ(4,"i",2),t.qZA())},dependencies:[c.ez,i,o.lC],styles:[".container-fluid[_ngcontent-%COMP%]{padding-top:80px}"]})}return e})()}}]);