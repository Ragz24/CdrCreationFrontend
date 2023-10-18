import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { DataCdr } from '../entity/Data';
import { ServiceService } from 'src/app/service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { SessionStorageService } from 'src/app/session-storage.service';


@Component({
  selector: 'app-data-cdr',
  templateUrl: './data-cdr.component.html',
  styleUrls: ['./data-cdr.component.css']
})
export class DataCdrComponent {
  dataArray: DataCdr[] = [];
  quantity: any = ''
  constructor(private eService: ServiceService, public route: Router, public session: SessionStorageService) {

  }


  onDataSubmitted() {
    if (this.quantity > 0) {
      this.eService.displayData(this.quantity).subscribe(
        (data) => {
          this.dataArray = data as DataCdr[];

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



    const worksheet = XLSX.utils.json_to_sheet(this.dataArray);



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
