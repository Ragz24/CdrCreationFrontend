import { Component, OnInit } from '@angular/core';
import { RoamingCdr } from '../entity/Roaming';
import { ServiceService } from 'src/app/service.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import { SessionStorageService } from 'src/app/session-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-international-roaming-cdr',
  templateUrl: './international-roaming-cdr.component.html',
  styleUrls: ['./international-roaming-cdr.component.css']
})
export class InternationalRoamingCdrComponent implements OnInit{
  roamingArray: RoamingCdr[] = [];
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
    this.roamingArray=[];
    if (this.quantity > 0) {
      this.eService.displayRoaming(this.quantity).subscribe(
        (data) => {
          this.roamingArray = data as RoamingCdr[];

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



    const worksheet = XLSX.utils.json_to_sheet(this.roamingArray);



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
