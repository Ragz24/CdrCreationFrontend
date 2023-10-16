import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ViewuserdetailsComponent } from './viewuserdetails/viewuserdetails.component';
import { SearchuserdetailsComponent } from './searchuserdetails/searchuserdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VoiceCDRComponent } from './voice-cdr/voice-cdr.component';
import { SmsCdrComponent } from './sms-cdr/sms-cdr.component';
import { DataCdrComponent } from './data-cdr/data-cdr.component';
import { MmsCdrComponent } from './mms-cdr/mms-cdr.component';
import { InternationalRoamingCdrComponent } from './international-roaming-cdr/international-roaming-cdr.component';
import { LocationCdrComponent } from './location-cdr/location-cdr.component';
import { BillingCdrComponent } from './billing-cdr/billing-cdr.component';
import { EventCdrComponent } from './event-cdr/event-cdr.component';
import { VideoCdrComponent } from './video-cdr/video-cdr.component';
import { VoipCdrComponent } from './voip-cdr/voip-cdr.component';


@NgModule({
  declarations: [
    AdminhomeComponent,
    ViewuserdetailsComponent,
    SearchuserdetailsComponent,
    VoiceCDRComponent,
    SmsCdrComponent,
    DataCdrComponent,
    MmsCdrComponent,
    InternationalRoamingCdrComponent,
    LocationCdrComponent,
    BillingCdrComponent,
    EventCdrComponent,
    VideoCdrComponent,
    VoipCdrComponent,
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ]
})
export class AdminModuleModule { }
