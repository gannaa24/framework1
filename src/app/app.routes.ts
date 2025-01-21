import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path:'',component:HomeComponent,title:'Home'},
    {path:'home',component:HomeComponent,title:'Home'},
    {path:'contact',component:ContactComponent,title:'Contact'},
    {path:'portfolio',component:PortfolioComponent,title:'Portfolio'},
    {path:'about',component:AboutComponent,title:'About'},
    {path:'**',component:HomeComponent,title:'Home'}
];
