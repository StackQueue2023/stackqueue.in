import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  storepassword:any;
  checked:boolean=false;
  constructor(private route:Router,private form:FormBuilder){
  }

  signupform=this.form.group(
    {
      username:['',[Validators.required,Validators.pattern("^(?!.*(.).*\\1{3})[a-zA-Z][a-zA-Z0-9_-]{3,15}$")]],
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$")]],
      phonenum:['',[Validators.required,Validators.pattern("[6-9]{1}[0-9]{9}")]],
      password:['',[Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]],
      confirmpassword:['',Validators.required]
    }
  )

  home(){
    this.route.navigateByUrl('');
  }

  login(){
    this.route.navigateByUrl('/login');
  }

  passwordStore(pass:any){
    this.storepassword=pass;
  }

  checkPassword(value:any){
    console.log(this.storepassword);
    console.log(value);
    if(this.storepassword===value){
      this.checked=false;
    }
    else{
      this.checked=true;
    }
  }
}
