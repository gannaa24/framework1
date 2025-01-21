import { Component, HostListener } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
imgs:string[]=[
  "/assets/poert1.png",
  "/assets/port2.png",
  "/assets/port3.png",
  "/assets/poert1.png",
  "/assets/port2.png",
  "/assets/port3.png",

]
condition:boolean=false
detail(){
   this.condition=!this.condition
}
currentImg:string=''
source(img:string){
  this.currentImg=img;
  
}
close(){
  this.condition=false
}
avoid(click:MouseEvent){
  click.stopPropagation()
}
}

