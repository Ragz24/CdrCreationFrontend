import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService 
{

  private log:boolean=false

  constructor(private router:Router) { }
  

  setItem(key:string,value:any): void {

    sessionStorage.setItem(key,JSON.stringify(value));

  }
  getItem(key:string): any{

    const storedvalue = sessionStorage.getItem(key);

    return storedvalue ? JSON.parse(storedvalue) : null;

  }
  removeItem(key:string): void {

    sessionStorage.removeItem(key);

  }

  loginValidity(username:any,password:any)
  {
    if( (username=='Admin@gmail.com' && password == 'Admin123'))

    {

      this.log=true;

      this.setItem('username','password');

      return 'admin';

    }
    else if((username=='raghaviboomi@gmail.com' && password=='Ragz24$'))
    {
      this.log=true;

      this.setItem('username','password');

      return 'user';
    }

    else
    {

      return false;

    }

  }
  islogined(): boolean

  {

    return !!this.getCurrentUser();

  }

 

  getCurrentUser(): any{

    return this.getItem('username');

  }

 

  logout():any{


    Swal.fire({
      title: 'Are you sure you want to log out?',
      text: 'You will be redirected to the home page.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.removeItem('username'); // Remove from session storage
        Swal.fire({
          title: 'Logged Out',
          text: 'You have been logged out successfully!',
          icon: 'success',
        }).then(() => {
          this.removeItem('username');

          this.router.navigateByUrl('/home'); // Navigate to the home page
        });
      }
    });
 

  }
}
