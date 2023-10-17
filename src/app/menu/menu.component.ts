import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { SessionStorageService } from '../session-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent 
{
 
  constructor(public session: SessionStorageService) {}

  

}
