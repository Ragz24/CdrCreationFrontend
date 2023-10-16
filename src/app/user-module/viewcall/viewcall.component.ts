import { Component } from '@angular/core';

@Component({
  selector: 'app-viewcall',
  templateUrl: './viewcall.component.html',
  styleUrls: ['./viewcall.component.css']
})
export class ViewcallComponent {

  callHistory = [
    { calleeNumber: '123-456-7890', duration: '5 minutes' },
    { calleeNumber: '987-654-3210', duration: '10 minutes' },
    // Add more call details here
];

}
