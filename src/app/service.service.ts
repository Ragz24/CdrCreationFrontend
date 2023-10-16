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

  setValidationState(validation: boolean)
  {
    this.validation = validation;
    // Store the validation state in sessionStorage
    sessionStorage.setItem('validation', validation.toString());
  }

  login(username: string, password: string)    //:Observable<any>
  {
    const body = { username, password }; 

    if(username=='Admin@gmail.com' && password=='Admin123')
    
    { 
      this.setValidationState(false); // Set validation to true
      return 'admin';
    } 

    if(username=='raghaviboomi@gmail.com' && password=='Hello')
    {
      this.setValidationState(false); // Set validation to true
      return 'user';
    }

    else
    {
      this.setValidationState(true); // Set validation to false
      return false;
    } 
    //return this.httpClient.post(`${this.baseUrl}/login`, body);
  }
  


  logout(): void {
    this.setValidationState(true); // Set validation to false upon logout
  }

  isLoggedIn(): boolean {
    return this.validation; // Check the validation status
  }
  
  
}
