import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private route:Router){
    window.onscroll=()=>{
      if(window.scrollY>0){
        document.querySelector('.header')?.classList.add('active');
      }
      else{
        document.querySelector('.header')?.classList.remove('active');
      }
    }

  }

  home(){
    this.route.navigateByUrl('/');
  }

  loginPage(){
    this.route.navigateByUrl('login');
  }

  internship(){
    this.route.navigateByUrl('/internship');
  }
}
