import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-makecall',
  templateUrl: './makecall.component.html',
  styleUrls: ['./makecall.component.css']
})
export class MakecallComponent implements OnInit, OnDestroy {
  callStatusMessage: string = '';
  showKeyButtons: boolean = false;
  showBackspaceButton: boolean = false;
  callerCalculation: FormGroup;
  callerNumberValue: string = '';
  time: string = '00:00'; 
  callHasStarted: boolean = false;
  intervalPeriod: any;
  startTime: Date | null = null;
  callStarted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.callerCalculation = this.formBuilder.group({
      callerNumber: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.stopCallTimer();
  }

  appendToCallerInput(value: string) {
    const callerNumberControl = this.callerCalculation.get('callerNumber');
    if (callerNumberControl) {
      const currentValue = callerNumberControl.value || '';
      callerNumberControl.setValue(currentValue + value);
      this.callerNumberValue = callerNumberControl.value;
    }
  }

  clearCallerInput() {
    const callerNumberControl = this.callerCalculation.get('callerNumber');
    if (callerNumberControl) {
      callerNumberControl.setValue('');
      this.callerNumberValue = '';
    }
  }

  callNumber() {
    if (!this.callHasStarted) {
      if (this.callerNumberValue.length !== 10) {
        // Invalid phone number, display an error message
        Swal.fire({
          title: 'Invalid Phone Number',
          text: 'Please enter a 10-digit phone number to make a call.',
          icon: 'error',
        });
      } else {
        this.startCallTimer();
        this.callHasStarted = true;
        this.callStarted = true;
        this.startTime = new Date();
        this.callStatusMessage = 'Call started ...';
        this.showKeyButtons = true;
        this.showBackspaceButton = true;
        // Display the "Call started" message
        const callStartedStatusElement = document.getElementById('callStartedStatus');
        if (callStartedStatusElement) {
          callStartedStatusElement.innerText = 'Call started';

          Swal.fire({
            title: 'Call Has Started',
            icon: 'success',
          });
        }
      }
    }
  }
  endCall() {
    this.stopCallTimer();
    this.callHasStarted = false;
  
    if (this.startTime) {
      const endTime = new Date();
      const callDuration = this.calculateCallDuration(this.startTime, endTime);
  
      // Display the call duration below "Call started"
      this.callStatusMessage = `Call started - Duration: ${callDuration}`;

      // Show SweetAlert message with call duration
      const callStartedStatusElement = document.getElementById('callStartedStatus');
      if (callStartedStatusElement) {
        callStartedStatusElement.innerText = 'Call Ended';}
      Swal.fire({
        title: 'Call Ended',
        text: `Call duration: ${callDuration}`,
        icon: 'success',
      }); 

      this.callerNumberValue=''
  
      // Reset the "Call started" message after a delay
      setTimeout(() => {
        this.callStatusMessage = '';
      }, 3000); 
    } else {
      // Display the "Call ended" message
      const callEndStatusElement = document.getElementById('callEndStatus');
      if (callEndStatusElement) {
        callEndStatusElement.innerText = 'Call ended';
      }
    }
  }
  

  private startCallTimer() {
    console.log('call has started!!');
    let seconds = 0;

    this.intervalPeriod = setInterval(() => {
      seconds++;
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      this.time = `${this.formatTime(minutes)}:${this.formatTime(remainingSeconds)}`;
    }, 1000);
  }

  private stopCallTimer() {
    clearInterval(this.intervalPeriod);
    this.time = '00:00';
  }

  private formatTime(time: number) {
    return time < 10 ? `0${time}` : time.toString();
  }

  private calculateCallDuration(startTime: Date, endTime: Date) {
    const durationInSeconds = Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = durationInSeconds % 60;
    return `${this.formatTime(minutes)}:${this.formatTime(seconds)}`;
  }
}
