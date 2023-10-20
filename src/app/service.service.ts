import { Injectable } from '@angular/core';
import { User } from './call-module/registration-creation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

//Service Class
export class ServiceService 
{
  
  baseUrl:string='http://localhost:8190'; 

  validation:boolean;

  //To check if there is an existing user in the database
  reteriveExistingUser(phoneNumber:string)
  {
    console.log('printing value');
    return this.httpClient.get(this.baseUrl+'/existingUser/'+phoneNumber);  

  } 

  //To Register a new user creditenals in the database
  createUser(user: User) 
  {
    console.log('in service createMethod');

    return this.httpClient.post<string>(`${this.baseUrl}/register`,user)

  }
  
  //Display Voice Cdr Service Method 
  displayVoice(quantity:Number)
  {
    return this.httpClient.get(this.baseUrl+'/voice/'+quantity);  

  }

  //Display Sms Cdr Service Method
  displaySms(quantity: number) 
  {
    return this.httpClient.get(this.baseUrl+'/sms/'+quantity);  

  }  
  
  //Display Mms Cdr Service Method
  displayMms(quantity: number) 
  {
    return this.httpClient.get(this.baseUrl+'/mms/'+quantity);  

  } 

  //Display Data Cdr Service Method
  displayData(quantity: number) 
  {
    return this.httpClient.get(this.baseUrl+'/data/'+quantity);  

  } 
  
  //Display International Roaming Cdr Service Method
  displayRoaming(quantity: number) 
  {
    return this.httpClient.get(this.baseUrl+'/roaming/'+quantity);  

  }
   
  //Display VoIP Cdr Service Method
  displayVoIP(quantity: number) 
  {
    return this.httpClient.get(this.baseUrl+'/voip/'+quantity);  

  } 
  
  //Display Location Cdr Service Method
  displayLocation(quantity: number) 
  {
    return this.httpClient.get(this.baseUrl+'/location/'+quantity);  

  } 
  
  //Display Video Cdr Service Method
  displayVideo(quantity: number) 
  {
    return this.httpClient.get(this.baseUrl+'/video/'+quantity);  

  }
  
  //Display Billing Cdr Service Method
  displayBilling(quantity: number) 
  {
    return this.httpClient.get(this.baseUrl+'/billing/'+quantity);  

  }
  
  //Display Event Cdr Service Method
  displayEvent(quantity: number) 
  {
    return this.httpClient.get(this.baseUrl+'/event/'+quantity);  

  }
  
   constructor(private httpClient:HttpClient) 
  { 
    this.validation = sessionStorage.getItem('validation') === 'true';
  }


  
  
}
