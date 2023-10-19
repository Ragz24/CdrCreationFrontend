import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import Swal from 'sweetalert2';
import { SessionStorageService } from '../session-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
 {
  
  loginForm: FormGroup;
  
  loginError: boolean = false; 

  constructor(private router: Router, private eService: ServiceService,private session:SessionStorageService) 
  {
    this.loginForm = new FormGroup
    ({
      username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
      password: new FormControl('', Validators.required),
      role: new FormControl('user', Validators.required)
    });
  }

  onLoginSubmit() 
  {
    if (this.loginForm.valid) 
    {  
      let swal_title, swal_text;
      let swal_icon: 'error' | 'success' | 'warning' | 'info' | 'question' = 'success';
      
      const customClasses = {
        container: 'custom-swal-modal',
        popup: 'custom-swal-modal',
        header: 'custom-swal-upper-side',
        // Add other classes as needed
      }; 
       const temp=this.session.loginValidity(this.loginForm.value.username,this.loginForm.value.password)

       if(temp=='admin')
       {
        this.router.navigate(['/admin-home']);
        swal_title = 'Welcome to Admin Home Page';
        swal_icon='success';
       }
      else if(temp=='user')
      {
        this.router.navigate(['/user-home']);
        swal_title = 'Welcome User';
        swal_icon='success';

      } 
      else
      {
        swal_title = 'Login Unsuccessful';
        swal_text = 'Invalid credentials, please try again'; 
        swal_icon = 'error'; 
      }
        Swal.fire({
          icon: swal_icon,
          title: swal_title,
          text: swal_text,
          confirmButtonText: 'Continue',
          customClass: customClasses,
        });
       
        
   }
} 
 
}
















     