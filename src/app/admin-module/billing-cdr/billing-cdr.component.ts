import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import { BillingCdr } from '../entity/Billing';
import { SessionStorageService } from 'src/app/session-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing-cdr',
  templateUrl: './billing-cdr.component.html',
  styleUrls: ['./billing-cdr.component.css']
})
export class BillingCdrComponent {
  billingArray: BillingCdr[] = [];
  quantity: any = ''
  constructor(private eService: ServiceService, public session: SessionStorageService, public route: Router) {

  }


  onDataSubmitted() {
    if (this.quantity > 0) {
      this.eService.displayBilling(this.quantity).subscribe(
        (data) => {
          this.billingArray = data as BillingCdr[];

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



    const worksheet = XLSX.utils.json_to_sheet(this.billingArray);



    XLSX.utils.book_append_sheet(workbook, worksheet, 'CDR Data');



    const arrayBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });



    const blob = new Blob([arrayBuffer], { type: 'application/octet-stream' });



    const blobURL = window.URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = blobURL;
    anchor.download = 'cdr_data.xlsx';
    anchor.click();



    window.URL.revokeObjectURL(blobURL);

    const customClasses = {
      container: 'custom-swal-modal',
      popup: 'custom-swal-modal',
      header: 'custom-swal-upper-side',
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