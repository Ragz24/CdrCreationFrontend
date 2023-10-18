import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { User, planCategory } from '../call-module/registration-creation';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent 
{ 

  user:User;  

  userForm:FormGroup;
  
  inputFirstName:FormControl;

  inputLastName:FormControl;

  inputPhoneNumber:FormControl;

  inputAddress:FormControl;

  inputEmail:FormControl;

  inputPassword:FormControl;

  inputPlanCategory:FormControl;


  hasError:boolean=false;  
 
  planCategory:string[];

  temp:any; 

  flag:any;
 

  constructor(private eService:ServiceService,private router:Router)
  {
    this.user=new User('','','','','','','');  

    this.planCategory=planCategory;


    this.inputFirstName= new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$'),Validators.minLength(3)]);

    this.inputLastName = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$'),Validators.minLength(3)]);
    
    this.inputPhoneNumber= new FormControl('', [Validators.required, Validators.pattern('^[1-9][0-9]+$'),Validators.maxLength(10),Validators.minLength(10)]);

    this.inputAddress= new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9-,\n ]+$'),Validators.minLength(3)]);

    this.inputPlanCategory = new FormControl('default', [Validators.required]);

    this.inputEmail= new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]);

    this.inputPassword = new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&-+=()])(?!.*\s).*$/),
      Validators.minLength(8),
      Validators.maxLength(20)
    ]);
    
    

    this.userForm = new FormGroup({
      inputFirstName: this.inputFirstName,
      inputLastName: this.inputLastName,
      inputPhoneNumber: this.inputPhoneNumber,
      inputAddress: this.inputAddress,
      inputEmail: this.inputEmail,
      inputPassword: this.inputPassword
    });
    
  } 
   
  validate(data:string)
  {
    if(data === 'default') 
      this.hasError=true
      else
      this.hasError=false
  }
   
  onDataSubmitted() 
  {
    // Check if the form is valid before proceeding
    if (this.userForm.valid) {

      // Access the form values and store them in the user object
      this.user.firstName = this.inputFirstName.value;
      this.user.lastName = this.inputLastName.value;
      this.user.phoneNumber = this.inputPhoneNumber.value;
      this.user.address = this.inputAddress.value;
      this.user.email = this.inputEmail.value;
      this.user.password = this.inputPassword.value;
      this.user.planCategory = this.inputPlanCategory.value;
      

      //Check if there is an existing user
      this.eService.reteriveExistingUser(this.user.phoneNumber).subscribe((user) => {
        this.temp = user;
        console.log('Response from reteriveExistingUser:', user);

        const customClasses = {
                  container: 'custom-swal-modal',
                  popup: 'custom-swal-modal',
                  header: 'custom-swal-upper-side',
                };
        let swal_title, swal_text;
        let swal_icon: 'error' | 'success' | 'warning' | 'info' | 'question' = 'error';
        if (this.temp) {
          console.log('the length of the temp will be ' + this.temp.length);
          swal_title = 'Not Successful';
          swal_text = 'Phone Number Already Present!';
          swal_icon = 'error';
          Swal.fire({
            title: swal_title,
            text: swal_text,
            icon: swal_icon,
            customClass: customClasses,
            confirmButtonText: 'OK'
          });
        } 
        else 
        {
          // Call the createUser method here for registering the new customer.
          this.flag = this.eService.createUser(this.user).subscribe();
              swal_title = 'Success';
              swal_text = 'Credentials Registered Successfully! Login to Unlock Your Services!';
              swal_icon = 'success';
              Swal.fire({
                title: swal_title,
                text: swal_text,
                icon: swal_icon,
                customClass: customClasses,
                confirmButtonText: 'OK'
              }).then(() => {
                // Redirect to the home page s
                this.router.navigate(['/home']);
                this.userForm.reset();
              });
          } 
          }, (error) => 
          {
            console.error('Error from createUser:', error);
          }); 
         }
        } 
      }

