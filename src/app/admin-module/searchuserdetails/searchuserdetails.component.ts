import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { UserCallDetails } from '../user-details-module/UserEntity';
@Component({
  selector: 'app-searchuserdetails',
  templateUrl: './searchuserdetails.component.html',
  styleUrls: ['./searchuserdetails.component.css']
})
export class SearchuserdetailsComponent {
  searchTerm: string = '';
  userCallDetails:any;
  phoneNumbers: any = ['1', '348738473', '89034359595', '3476756474']; 
  constructor()
  {
    this.searchTerm= '';

  }

  downloadCdr() {
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
    window.URL.revokeObjectURL(blobURL);
  }

  getRandomThreeDigitNumber(): string {
    const min = 100;
    const max = 999;
    return String(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  onSearchInputChange(searchTerm: string) {
    // Clear the existing details
    this.userCallDetails = [];


    console.log('Search Term:', searchTerm); // Add this line for debugging

    const phoneNumberIndex = this.phoneNumbers.indexOf(searchTerm);
    
    console.log('phonenumebr inex',phoneNumberIndex); 

    if (phoneNumberIndex !== -1) 
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
      }
        console.log(this.userCallDetails.length);
  
  } 
    else 
    {
    
    }
  }
}
