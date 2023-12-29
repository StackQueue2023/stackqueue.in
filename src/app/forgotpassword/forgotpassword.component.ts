import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  standalone: true,
  imports: [],
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent {
  constructor(private route:Router){}

  home(){
    this.route.navigateByUrl('');
  }

  login(){
    this.route.navigateByUrl('/login');
  }

}
