import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserModuleModule } from './user-module/user-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { PlanCategoryPipe } from './call-module/plan-category.pipe';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component'; 
import { AdminModuleModule } from './admin-module/admin-module.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    PlanCategoryPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,UserModuleModule,FormsModule,ReactiveFormsModule,HttpClientModule,AdminModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
