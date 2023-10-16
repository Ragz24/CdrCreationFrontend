import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Mms } from '../entity/Mms';
import { ServiceService } from 'src/app/service.service';
import * as XLSX from 'xlsx'; // Import the entire XLSX library
import { __makeTemplateObject } from 'tslib';

@Component({
  selector: 'app-mms-cdr',
  templateUrl: './mms-cdr.component.html',
  styleUrls: ['./mms-cdr.component.css']
})
export class MmsCdrComponent 
{


  mmsArray:Mms[]=[];
  quantity:any=''
  constructor(private eService:ServiceService)
  { 
   
  } 
  onDataSubmitted()
  { 
    if(this.quantity>0)
    {
      this.eService.displayMms(this.quantity).subscribe(
        (data) => 
        {
          this.mmsArray = data as Mms[];
  
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

 

    const worksheet = XLSX.utils.json_to_sheet(this.mmsArray);

 

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