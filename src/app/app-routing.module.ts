import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Home1Component } from './home1/home1.component';
import { ViewuserdetailsComponent } from './admin-module/viewuserdetails/viewuserdetails.component';

const routes: Routes = [
{path:'home',component:Home1Component},

{path:'login',component:LoginComponent},

{path:'register',component:RegisterComponent},

{path:'view-user',component:ViewuserdetailsComponent},

 {path:'',component:Home1Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
