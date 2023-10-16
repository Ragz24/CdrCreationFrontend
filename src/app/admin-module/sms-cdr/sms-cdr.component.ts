import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx'; // Import the entire XLSX library
import { Sms } from '../entity/Sms';

@Component({
  selector: 'app-sms-cdr',
  templateUrl: './sms-cdr.component.html',
  styleUrls: ['./sms-cdr.component.css']
})
export class SmsCdrComponent 
{

  smsArray:Sms[]=[];
  quantity:any=''
  constructor(private eService:ServiceService)
  { 
   
  }
  
  
  onDataSubmitted()
  { 
    if(this.quantity>0)
    {
      this.eService.displaySms(this.quantity).subscribe(
        (data) => 
        {
          this.smsArray = data as Sms[];
  
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
    else
    {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Request',
        text: 'Please Enter a Quantity Greater Than 0.',
      });
    }
    
  } 

  downloadCdr()
  {
    const workbook = XLSX.utils.book_new();

 

    const worksheet = XLSX.utils.json_to_sheet(this.smsArray);

 

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
