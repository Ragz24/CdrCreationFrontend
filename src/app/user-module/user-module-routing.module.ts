import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserhomeComponent } from './userhome/userhome.component';
import { MakecallComponent } from './makecall/makecall.component';
import { ViewcallComponent } from './viewcall/viewcall.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';

const routes: Routes = [
  {path:'user-home',component:UserhomeComponent},
  {path:'make-call',component:MakecallComponent},
  {path:'view-call',component:ViewcallComponent},
  {path:'update-details',component:UpdateDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule 
{
}
