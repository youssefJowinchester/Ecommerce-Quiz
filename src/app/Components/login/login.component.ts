import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _AuthService:AuthService, private _Router:Router){};

  errmsg:string = '';
  loading:boolean = false;

  loginForm:FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)])
  });


  handleform():void{

    const userData = this.loginForm.value;
    this.loading = true;

    if(this.loginForm.valid == true){
      this._AuthService.login(userData).subscribe({
        next: (Response) => {
          if(Response.message == "success"){

            localStorage.setItem('xtoken', Response.token);

            this._AuthService.deCodeUser();

            this._Router.navigate(['/home'])
            this.loading = false
          }
        },
        error: (err) => {
          this.errmsg = err.error.message; 
          this.loading = false; 
        }
      })
    }
  }
}
