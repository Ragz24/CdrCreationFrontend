import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { UserhomeComponent } from './userhome/userhome.component';
import { MakecallComponent } from './makecall/makecall.component';
import { ViewcallComponent } from './viewcall/viewcall.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserhomeComponent,
    MakecallComponent,
    ViewcallComponent,
    UpdateDetailsComponent
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule,FormsModule
  ]
})
export class UserModuleModule { }
