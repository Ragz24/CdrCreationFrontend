import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx'; // Import the entire XLSX library
import { SmsCdr } from '../entity/Sms';
import { SessionStorageService } from 'src/app/session-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sms-cdr',
  templateUrl: './sms-cdr.component.html',
  styleUrls: ['./sms-cdr.component.css']
})
export class SmsCdrComponent implements OnInit {

  smsArray: SmsCdr[] = [];
  quantity: any = ''
  dtoptions: DataTables.Settings = {}; 

  constructor(private eService: ServiceService, public session: SessionStorageService, private route: Router) {

  }
  ngOnInit(): void {
    this.dtoptions = {
      pagingType: 'full_numbers',
      searching: true,
      lengthChange: false,
      language: {
        searchPlaceholder: 'Search Here'
      }
    };
  }

  onDataSubmitted() { 
    this.smsArray=[];
    if (this.quantity > 0) {
      this.eService.displaySms(this.quantity).subscribe(
        (data) => {
          this.smsArray = data as SmsCdr[];

        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Request',
        text: 'Please Enter a Quantity Greater Than 0.',
      });
    }

  }

  downloadCdr() {
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
      customClass: customClasses

    });

  }

  navigateHome() {
    console.log("hello")

    this.route.navigate(["/home"]);

  }

}
