import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
declare var AOS: any;

@Component({
  selector: 'app-indexpage',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './indexpage.component.html',
  styleUrl: './indexpage.component.css'
})
export class IndexpageComponent implements OnInit{
  instituteservice:any[]=['Programming Course trainings','Internship trainings','Web Development projects','Career Development trainings'];
  services:any='Programming Course trainings';
  count:any=0;
  storecount:any;
  culturecount:any=0;
  storeculture:any;
  culture:any[]=['Originate','Organizing'];
  culturedisplay='Orginate';
  events:boolean=false;

  constructor(){
    setInterval(()=>{
      this.storeculture=this.culturecount++;
      if(this.storeculture>=this.culture.length){
        this.storeculture=0;
        this.culturecount=0;
      }
      this.culturedisplay=this.culture[this.storeculture];
    },2000)

    setInterval(()=>{
      this.storecount=this.count++;
      if(this.storecount>=this.instituteservice.length){
        this.storecount=0;
        this.count=0;
      }
      console.log(this.storecount);
      this.services=this.instituteservice[this.storecount];
    },2000)
  }

  ngOnInit(){
    AOS.init({
    });
  }
}
