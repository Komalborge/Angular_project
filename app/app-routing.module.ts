import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from 'src/app/aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfindComponent } from './pagenotfind/pagenotfind.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'aboutus',component:AboutusComponent 
  },
  {
    path:'',redirectTo:'product',pathMatch:'full'
  },
  {
    path:'product',component:ProductComponent
  },
  {
    path:'contactus',component:ContactusComponent
  },
  { path:'**', component: PagenotfindComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
