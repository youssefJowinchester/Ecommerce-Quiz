"use strict";(self.webpackChunkEcommerc=self.webpackChunkEcommerc||[]).push([[901],{4901:(I,g,l)=>{l.r(g),l.d(g,{LoginComponent:()=>x});var _=l(6814),r=l(95),p=l(1120),e=l(4769),u=l(9410);function d(n,a){1&n&&(e.TgZ(0,"p"),e._uU(1," email is required "),e.qZA())}function c(n,a){1&n&&(e.TgZ(0,"p"),e._uU(1," Email invalid formate "),e.qZA())}function f(n,a){if(1&n&&(e.TgZ(0,"div",14),e.YNc(1,d,2,0,"p",12),e.YNc(2,c,2,0,"p",12),e.qZA()),2&n){const i=e.oxw();let t,o;e.xp6(1),e.Q6J("ngIf",null==(t=i.loginForm.get("email"))?null:t.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(o=i.loginForm.get("email"))?null:o.getError("email"))}}function Z(n,a){1&n&&(e.TgZ(0,"p"),e._uU(1," password is required "),e.qZA())}function h(n,a){1&n&&(e.TgZ(0,"p"),e._uU(1," must be at least 6 chars "),e.qZA())}function v(n,a){if(1&n&&(e.TgZ(0,"div",14),e.YNc(1,Z,2,0,"p",12),e.YNc(2,h,2,0,"p",12),e.qZA()),2&n){const i=e.oxw();let t,o;e.xp6(1),e.Q6J("ngIf",null==(t=i.loginForm.get("password"))?null:t.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(o=i.loginForm.get("password"))?null:o.getError("pattern"))}}function T(n,a){1&n&&(e.TgZ(0,"span"),e._UZ(1,"i",15),e.qZA())}function A(n,a){if(1&n&&(e.TgZ(0,"p",16),e._uU(1),e.qZA()),2&n){const i=e.oxw();e.xp6(1),e.hij(" ",i.errmsg," ")}}let x=(()=>{class n{constructor(i,t){this._AuthService=i,this._Router=t,this.errmsg="",this.loading=!1,this.loginForm=new r.cw({email:new r.NI("",[r.kI.required,r.kI.email]),password:new r.NI("",[r.kI.required,r.kI.pattern(/^[a-zA-Z0-9_@]{6,}$/)])})}handleform(){const i=this.loginForm.value;this.loading=!0,1==this.loginForm.valid&&this._AuthService.login(i).subscribe({next:t=>{"success"==t.message&&(localStorage.setItem("xtoken",t.token),this._AuthService.deCodeUser(),this._Router.navigate(["/home"]),this.loading=!1)},error:t=>{this.errmsg=t.error.message,this.loading=!1}})}static#e=this.\u0275fac=function(t){return new(t||n)(e.Y36(u.e),e.Y36(p.F0))};static#n=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],standalone:!0,features:[e.jDz],decls:23,vars:6,consts:[[1,"py-5"],[1,"my-3"],[3,"formGroup","ngSubmit"],[1,"form-item"],["for","email"],["formControlName","email","id","email","type","email",1,"form-control"],["class","alert alert-danger",4,"ngIf"],["for","password"],["formControlName","password","id","password","type","password",1,"form-control"],[1,"d-flex","justify-content-between","mt-4","align-content-center"],["role","button","routerLink","/forgotpassword",1,"changetext"],[1,"main-btn","text-center",3,"disabled"],[4,"ngIf"],["class","alert alert-danger p-1 w-50 mx-auto mb-0",4,"ngIf"],[1,"alert","alert-danger"],[1,"fas","fa-xs","fa-spin","fa-spinner","ms-3"],[1,"alert","alert-danger","p-1","w-50","mx-auto","mb-0"]],template:function(t,o){if(1&t&&(e.TgZ(0,"section",0)(1,"h1",1),e._uU(2,"login now"),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return o.handleform()}),e.TgZ(4,"div",3)(5,"label",4),e._uU(6,"email"),e.qZA(),e._UZ(7,"input",5),e.YNc(8,f,3,2,"div",6),e.qZA(),e.TgZ(9,"div",3)(10,"label",7),e._uU(11,"password"),e.qZA(),e._UZ(12,"input",8),e.YNc(13,v,3,2,"div",6),e.qZA(),e.TgZ(14,"div",9)(15,"div")(16,"button",10),e._uU(17," forget your password ? "),e.qZA()(),e.TgZ(18,"div")(19,"button",11),e._uU(20," login now "),e.YNc(21,T,2,0,"span",12),e.qZA()()()(),e.YNc(22,A,2,1,"p",13),e.qZA()),2&t){let s,m;e.xp6(3),e.Q6J("formGroup",o.loginForm),e.xp6(5),e.Q6J("ngIf",(null==(s=o.loginForm.get("email"))?null:s.errors)&&(null==(s=o.loginForm.get("email"))?null:s.touched)),e.xp6(5),e.Q6J("ngIf",(null==(m=o.loginForm.get("password"))?null:m.errors)&&(null==(m=o.loginForm.get("password"))?null:m.touched)),e.xp6(6),e.Q6J("disabled",o.loginForm.invalid),e.xp6(2),e.Q6J("ngIf",o.loading),e.xp6(1),e.Q6J("ngIf",o.errmsg)}},dependencies:[_.ez,_.O5,r.UX,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,p.rH]})}return n})()}}]);