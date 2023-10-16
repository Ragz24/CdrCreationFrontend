import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent 
{
 
  constructor(public object:ServiceService,private router:Router)
  {

  } 

  onLogout() {
    this.object.setValidationState(true); // Set validation to false upon logout
    this.router.navigate(['/login']); // Navigate to the login page (or home page, depending on your preference)
  }
}
