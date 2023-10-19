import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { VoiceCdr } from '../entity/Voice';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import { SessionStorageService } from 'src/app/session-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voice-cdr',
  templateUrl: './voice-cdr.component.html',
  styleUrls: ['./voice-cdr.component.css'],
})
export class VoiceCDRComponent implements OnInit {
  voiceArray: VoiceCdr[] = [];
  quantity: any = '';

  dtoptions: DataTables.Settings = {};


  constructor(
    private eService: ServiceService,
    public session: SessionStorageService,
    private route: Router
  ) { }

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
    this.voiceArray=[];
    if (this.quantity > 0) {
      this.eService.displayVoice(this.quantity).subscribe(
        (data) => {
          this.voiceArray = data as VoiceCdr[];
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Request',
        text: 'Please Enter a Quantity Greater Than 0.',
      });
    }
  }


  downloadCdr() {
    const workbook = XLSX.utils.book_new();

    const worksheet = XLSX.utils.json_to_sheet(this.voiceArray);

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
      customClass: customClasses,
    });
  }

  navigateHome() {
    this.route.navigate(['/home']);
  }
}
