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

        swal_title = 'Success';
        swal_text = 'Congratulations, your login as an admin has been successful!';
      }
      else if(temp=='user')
      {
        swal_title = 'Success';
        swal_text = 'Congratulations, your login as a user has been successful!';
      } 

      else
      {
        swal_title = 'Login Unsuccessful';
        swal_text = 'Invalid credentials, please try again'; // Display error message
        swal_icon = 'error'; // Set the error icon 
      } 
         Swal.fire({
          icon: swal_icon,
          title: swal_title,
          text: swal_text,
          confirmButtonText: 'Continue',
          customClass: customClasses,
        }).then((result) => {
          if (result.isConfirmed) {
            if (temp === 'admin') {
              this.router.navigate(['/admin-home']);
            } else if (temp === 'user') {
              this.router.navigate(['/user-home']);
            }
          }
        });
   }
} 

















      // const role = this.eService.login(this.loginForm.value.username, this.loginForm.value.password);
    
      // let swal_title, swal_text;
      // let swal_icon: 'error' | 'success' | 'warning' | 'info' | 'question' = 'success';
    
      // const customClasses = {
      //     container: 'custom-swal-modal',
      //     popup: 'custom-swal-modal',
      //     header: 'custom-swal-upper-side',
      //     // Add other classes as needed
      //   };
    
      // if (role === 'admin') {
      //     swal_title = 'Success';
      //     swal_text = 'Congratulations, your login as an admin has been successful!';
      //     // Handle admin-specific actions here
      //   } else if (role === 'user') {
      //     swal_title = 'Success';
      //     swal_text = 'Congratulations, your login as a user has been successful!';
      //     // Handle user-specific actions here
      //   } else {
      //     swal_title = 'Login Unsuccessful';
      //     swal_text = 'Invalid credentials, please try again'; // Display error message
      //     swal_icon = 'error'; // Set the error icon
      //   }
    
      //   Swal.fire({
      //     icon: swal_icon,
      //     title: swal_title,
      //     text: swal_text,
      //     confirmButtonText: 'Continue',
      //     customClass: customClasses,
      //   }).then((result) => {
      //     if (result.isConfirmed) {
      //       if (role === 'admin') {
      //         this.router.navigate(['/admin-home']);
      //       } else if (role === 'user') {
      //         this.router.navigate(['/user-home']);
      //       }
      //     }
      //   });
      
    }
    
      
       
      // this.eService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
      //   (result) => {
      //     console.log('Logged in successfully', result);
      //     this.loginError = false;
      //     this.router.navigate(['/user-home']);
      //   },
      //   (error) => {
      //     // Handle login error
      //     console.error('Login failed', error);
      //     this.loginError = true;
      //   }
      // );
    

