import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { ForgotpassService } from 'src/app/core/services/forgotpass.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent {
    
  constructor(private _ForgotpassService:ForgotpassService, private _Router:Router){}
  
  
    step1:boolean = true;
    step2:boolean = false;
    step3:boolean = false;
    Email:string='';
    userMsg:string='';



    forgotpaaForm:FormGroup = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email])
    })

    resetCodeForm:FormGroup = new FormGroup({
      resetCode: new FormControl('')
    })

    newPassForm:FormGroup = new FormGroup({
      newPassword: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)])
    })

    forgotpaa():void{
      let userEmail = this.forgotpaaForm.value;
      this.Email = userEmail.email;
      this._ForgotpassService.Forgotpassword(userEmail).subscribe({
        next:(res)=>{
          this.userMsg = res.message
          this.step1 =false;
          this.step2 = true;
        },
        error:(err)=>{
          this.userMsg = err.error.message
        }
      })
    }

    codeemail():void{
      let resetCode = this.resetCodeForm.value;
      this._ForgotpassService.resetCode(resetCode).subscribe({
        next:(res)=>{
          this.userMsg = res.status
          this.step2 = false;
          this.step3 = true;
        },
        error:(err)=>{
          this.userMsg = err.error.message
        }
      })
    }
    
    newpass():void{
      let newpass = this.newPassForm.value;
      newpass.email = this.Email;
      this._ForgotpassService.newpass(newpass).subscribe({
        next:(res)=>{
          if(res?.token){
            localStorage.setItem('xtoken',res.token);
            this._Router.navigate(['/home'])
          }
        },
        error:(err)=>{
          this.userMsg = err.error.message
        }
      })
    }
}
