import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ViewuserdetailsComponent } from './admin-module/viewuserdetails/viewuserdetails.component';

const routes: Routes = [
{path:'home',component:HomeComponent},

{path:'login',component:LoginComponent},

{path:'register',component:RegisterComponent},

{path:'view-user',component:ViewuserdetailsComponent},

 {path:'',component:HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
