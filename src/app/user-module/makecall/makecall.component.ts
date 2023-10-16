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
  time: string = '00:00'; // Initialize timer to 00:00
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
    // Initialize other components or data when the component is created
  }

  ngOnDestroy() {
    // Ensure the timer is stopped when the component is destroyed
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
        this.callStarted = true; // Set callStarted to true when the call starts
        this.startTime = new Date();
        this.callStatusMessage = 'Call started ...';
        this.showKeyButtons = true;
        this.showBackspaceButton = true;

        // Display the "Call started" message
        const callStartedStatusElement = document.getElementById('callStartedStatus');
        if (callStartedStatusElement) {
          callStartedStatusElement.innerText = 'Call started';
        }

        const callerNumberControl = this.callerCalculation.get('callerNumber');
        if (callerNumberControl) {
          const callerNumber = callerNumberControl.value;
          console.log('submitted number:', callerNumber);
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
      console.log('call duration:', callDuration);
    }

    // Remove the "Call started" message
    const callStartedStatusElement = document.getElementById('callStartedStatus');
    if (callStartedStatusElement) {
      callStartedStatusElement.innerText = '';
    }

    // Display the "Call ended" message
    const callEndStatusElement = document.getElementById('callEndStatus');
    if (callEndStatusElement) {
      callEndStatusElement.innerText = 'Call ended';
    }

    // Handle ending the call (e.g., hang up)
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
