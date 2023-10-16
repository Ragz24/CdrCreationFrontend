import { Component, OnInit } from '@angular/core';
import { UserCallDetails, UserDetail } from '../user-details-module/UserEntity';
import { trigger, transition, style, animate } from '@angular/animations';
import * as XLSX from 'xlsx'; // Import the entire XLSX library
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewuserdetails',
  templateUrl: './viewuserdetails.component.html',
  styleUrls: ['./viewuserdetails.component.css'],
})
export class ViewuserdetailsComponent  
{

  userCallDetails:UserCallDetails[]=[]; 

  userDetail:UserDetail[]=[];
   
  
  constructor()
  {

    for (let i = 0; i < 10; i++) 
    {
       this.userCallDetails.push({

        callerSIM: `Caller${i}`,

        calleeSIM: `Callee${i}`,

        outgoingBTS: this.getRandomThreeDigitNumber(),

        incomingBTS: this.getRandomThreeDigitNumber(),


        callDuration: Math.floor(Math.random() * 600) , // Random duration between 60 and 660 seconds

        planCategory:'A',

        timeStamp: new Date(),

        callRate:100000+i

      }); 

      this.userDetail.push({
        firstName:'101'+i,
        phoneNumber:89034357676
      })

    }

  }


  getRandomThreeDigitNumber(): string {

    const min = 100;

    const max = 999;

    return String(Math.floor(Math.random() * (max - min + 1)) + min);

  }

 
  downloadCdr() 
  {
    const workbook = XLSX.utils.book_new();

 

    const worksheet = XLSX.utils.json_to_sheet(this.userCallDetails);

 

    XLSX.utils.book_append_sheet(workbook, worksheet, 'CDR Data');

 

    const arrayBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

 

    const blob = new Blob([arrayBuffer], { type: 'application/octet-stream' });

 

    const blobURL = window.URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = blobURL;
    anchor.download = 'cdr_data.xlsx';
    anchor.click();

 

    // Release the object URL
    window.URL.revokeObjectURL(blobURL);
    
    const customClasses = {
      container: 'custom-swal-modal',
      popup: 'custom-swal-modal',
      header: 'custom-swal-upper-side',
      // Add other classes as needed
    }; 

    Swal.fire({
      icon: 'success',
      title: 'Download Successful',
      text: 'Your file has been downloaded successfully!',        
      customClass:customClasses

    }); 
    
  }
}

 

 
 


