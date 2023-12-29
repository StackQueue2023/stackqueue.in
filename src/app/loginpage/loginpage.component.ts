import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {

  constructor(private route:Router,private form:FormBuilder){}

  loginform=this.form.group({
    email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$")]],
    password:['',[Validators.required,Validators.minLength(8)]]
  })

  home(){
    this.route.navigateByUrl('');
  }

  register(){
    this.route.navigateByUrl('/signup');
  }

  forgot(){
    this.route.navigateByUrl('/forgotpassword');
  }
}
