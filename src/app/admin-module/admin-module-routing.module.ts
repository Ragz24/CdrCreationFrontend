import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewuserdetailsComponent } from './viewuserdetails/viewuserdetails.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { SearchuserdetailsComponent } from './searchuserdetails/searchuserdetails.component';
import { VoiceCDRComponent } from './voice-cdr/voice-cdr.component';
import { SmsCdrComponent } from './sms-cdr/sms-cdr.component';
import { DataCdrComponent } from './data-cdr/data-cdr.component';
import { MmsCdrComponent } from './mms-cdr/mms-cdr.component';
import { InternationalRoamingCdrComponent } from './international-roaming-cdr/international-roaming-cdr.component';
import { LocationCdrComponent } from './location-cdr/location-cdr.component';
import { VideoCdrComponent } from './video-cdr/video-cdr.component';
import { BillingCdrComponent } from './billing-cdr/billing-cdr.component';
import { EventCdrComponent } from './event-cdr/event-cdr.component';
import { VoipCdrComponent} from './voip-cdr/voip-cdr.component';

const routes: Routes = 
[
     
{path:'view-user',component:ViewuserdetailsComponent},

{path:'search-user',component:SearchuserdetailsComponent},
  
{path:'admin-home',component:AdminhomeComponent},

{path:'voice-cdr',component:VoiceCDRComponent},

{path:'sms-cdr',component:SmsCdrComponent},

{path:'data-cdr',component:DataCdrComponent},

{path:'mms-cdr',component:MmsCdrComponent},

{path:'roaming-cdr',component:InternationalRoamingCdrComponent},

{path:'voip-cdr',component:VoipCdrComponent}, 

{path:'location-cdr',component:LocationCdrComponent},

{path:'video-cdr',component:VideoCdrComponent},

{path:'billing-cdr',component:BillingCdrComponent},

{path:'event-cdr',component:EventCdrComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
