import { Injectable } from '@angular/core';
import { User } from './call-module/registration-creation';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService 
{
  
  baseUrl:string='http://localhost:8190'; 

  validation:boolean;

  reteriveExistingUser(phoneNumber:string)
  {
    console.log('printing value');
    return this.httpClient.get(this.baseUrl+'/existingUser/'+phoneNumber);  

  } 


  createUser(user: User) 
  {
    console.log('in service createMethod');

    return this.httpClient.post<string>(`${this.baseUrl}/register`,user)

  }

  displayVoice(quantity:Number)
  {
    return this.httpClient.get(this.baseUrl+'/voice/'+quantity);  

  }

  displaySms(quantity: number) 
  {
    return this.httpClient.get(this.baseUrl+'/sms/'+quantity);  

  }  

  displayMms(quantity: number) 
  {
    return this.httpClient.get(this.baseUrl+'/mms/'+quantity);  

  } 


  displayData(quantity: number) 
  {
    return this.httpClient.get(this.baseUrl+'/data/'+quantity);  

  } 

  displayRoaming(quantity: number) 
  {
    return this.httpClient.get(this.baseUrl+'/roaming/'+quantity);  

  }
   
  displayVoIP(quantity: number) 
  {
    return this.httpClient.get(this.baseUrl+'/voip/'+quantity);  

  } 

  displayLocation(quantity: number) 
  {
    return this.httpClient.get(this.baseUrl+'/location/'+quantity);  

  } 

  displayVideo(quantity: number) 
  {
    return this.httpClient.get(this.baseUrl+'/video/'+quantity);  

  }

  displayBilling(quantity: number) 
  {
    return this.httpClient.get(this.baseUrl+'/billing/'+quantity);  

  }

  displayEvent(quantity: number) 
  {
    return this.httpClient.get(this.baseUrl+'/event/'+quantity);  

  }
  
   constructor(private httpClient:HttpClient) 
  { 
    this.validation = sessionStorage.getItem('validation') === 'true';
  }


  
  
}
