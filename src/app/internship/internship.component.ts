import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-internship',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,RouterLink,RouterLinkActive,RouterModule],
  templateUrl: './internship.component.html',
  styleUrl: './internship.component.css'
})
export class InternshipComponent implements AfterViewInit{
  arrow:any;
  roundValue:any;
  icon:any="fa-solid fa-caret-right";
  noicon:any="";

  constructor(){

  }
  @ViewChild('pencil') pencil!:ElementRef;

  ngAfterViewInit() {

    window.addEventListener('scroll',()=>{
      if(window.scrollY>50 && window.scrollY<100){
        this.pencil.nativeElement.style.marginTop=window.scrollY*1.45+"px";
        this.pencil.nativeElement.style.marginLeft=window.scrollY*-0.9+"px";

      }
     else if(window.scrollY>100 && window.scrollY<=280){
        this.roundValue=Math.round(window.scrollY);
        this.pencil.nativeElement.style.marginTop = window.scrollY*1.45+"px";
        this.pencil.nativeElement.style.marginLeft = window.scrollY*-0.9+"px";
        this.pencil.nativeElement.src="../../assets/arrow.png";
        this.pencil.nativeElement.style.zIndex=1;
        this.pencil.nativeElement.style.width="71px";
        this.pencil.nativeElement.style.height="207px";
        }
        else if(window.scrollY>=0 && window.scrollY<=50){
          this.pencil.nativeElement.src="../../assets/pencil.png";
          this.pencil.nativeElement.style.width="236.04px";
          this.pencil.nativeElement.style.height="170px";
          this.pencil.nativeElement.style.marginTop=window.scrollY*1.45+"px";
          this.pencil.nativeElement.style.marginLeft=window.scrollY*-0.9+"px";
          this.pencil.nativeElement.style.zIndex=0;
        }
        // else if(window.scrollY=0){
        //   this.pencil.nativeElement.src="../../assets/pencil.png";
        //   this.pencil.nativeElement.style.width="236.04px";
        //   this.pencil.nativeElement.style.height="170px";
        //   this.pencil.nativeElement.style.marginTop=-window.scrollY+"px";
        //   this.pencil.nativeElement.style.marginLeft=window.scrollY+"px";
        // }
    })
  }


}
