import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTabGroup } from '@angular/material/tabs';
import { MatSnackBar } from '@angular/material/snack-bar';
import {} from '@angular/core';
interface Job {
  id: number;
  clientName: string;
  serviceRequest: string;
  time: string;
  distance: string;
  suggestedTimeSlot?: string; // Optional, since not all jobs might have this
  clientId?: string; // Adding clientId to Job type
  clientEmail?: string; // Added clientEmail
  clientPhone?: string; // Added clientPhone
  location?: string; // Added clientPhone
}

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent implements OnInit {
  @ViewChild('tabGroup', { static: false }) tabGroup!: MatTabGroup;

  mapView: boolean = true;
  data: any; // This will hold your fetched data
  cancellationTooltip!: string;
  activeJobs: Job[] = [
    {
      id: 1,
      clientName: 'Client A',
      serviceRequest: 'Service Request A',
      time: '10:00 AM',
      distance: '5 miles',
      suggestedTimeSlot: '12:00 PM - 1:00 PM',
      clientId: 'clientA123',
      location: 'Avenue de la Gare',
      clientEmail: 'lorem@gmail.com',
      clientPhone: '077 *** ** 31',
    },
    {
      id: 2,
      clientName: 'Client B',
      serviceRequest: 'Service Request B',
      time: '1:30 PM',
      distance: '8 miles',
      clientId: 'clientB456',
    },
    {
      id: 3,
      clientName: 'Client C',
      serviceRequest: 'Service Request C',
      time: '3:45 PM',
      distance: '3 miles',
      clientId: 'clientC789',
    },
  ];

  suggestedJobs: Job[] = [];
  estimatedEarnings: number = 0;
  goalProgress: number = 50;
  goalAmount: number = 0;
  goalTimeFrame: string = '';
  weatherCondition: string = '';
  temperature: number = 0;
  availability: boolean = true; // Default as true (available)
  timeLeftForNextJob: string = '15 minutes'; // Default value for demonstration
  selectedJob: Job | null = null; // Track selected job for displaying details
  mediaType: string = ''; // You can set a default value or leave it as an empty string
  showSetGoalForm: boolean = false;
  jobStatus: number = 0; // You can set an initial value
  constructor(public dialog: MatDialog, private snackBar: MatSnackBar) {
    this.loadActiveJobs();
    this.loadSuggestedJobs();
  }

  ngOnInit() {
    // Check if there are active jobs and select the first one
    if (this.activeJobs.length > 0) {
      this.selectJob(this.activeJobs[0]);
    }

    // Check if tabGroup is defined before setting selectedIndex
    if (this.tabGroup) {
      this.tabGroup.selectedIndex = 1; // Change to the desired tab index
    }
    // Fetch your data here, for now, let's mock it
    this.data = {
      cancellationFee: '$50',
      gracePeriod: '24 hours',
      otherInfo: 'No refunds after service has started.',
      extraDetail: 'Contact support for disputes.',
      moreInfo: 'Check email for detailed policy.',
    };

    // Construct the tooltip based on your data
    this.cancellationTooltip = `Cancellation Fee: ${this.data.cancellationFee} | 
                              Grace Period: ${this.data.gracePeriod} |  
                              Other Info: ${this.data.otherInfo} | 
                              Extra Detail: ${this.data.extraDetail} | 
                              More Info: ${this.data.moreInfo}`;
  }

  closeModal(): void {
    this.dialog.closeAll();
  }

  toggleView(): void {
    const contentWrapper = document.querySelector('.content-wrapper');
    if (contentWrapper) {
      contentWrapper.classList.toggle('map-active');
    }
  }

  loadActiveJobs(): void {
    // Fetch the active jobs from your backend or service
    // this.activeJobs = fetchedData;
  }

  loadSuggestedJobs(): void {
    // Fetch the suggested job slots based on algorithm
    // this.suggestedJobs = fetchedData;
  }

  navigateToJob(jobId: number): void {
    // Logic to navigate to a specific job or show its details on the map
    // Set the selectedJob to the job with the given ID
    this.selectedJob = this.activeJobs.find((job) => job.id === jobId) || null;
  }

  navigateToNextJob(): void {
    // Logic to navigate to the next upcoming job
  }

  contactClient(jobId: string): void {
    // Logic to initiate contact with the client
  }

  rescheduleJob(jobId: number): void {
    // Logic to reschedule a specific job
  }

  cancelJob(jobId: number): void {
    // Logic to cancel a specific job
  }

  swapJob(jobId: string): void {
    // Logic to initiate a job swap
  }

  toggleAvailability(): void {
    this.availability = !this.availability;
    // Toggle the availability status of the provider
  }

  viewRoute(jobId: string): void {
    // Logic to view the optimized route for a job
  }

  openCalendar(): void {
    // Logic to open and sync with the user's calendar
  }

  suggestBreak(): void {
    // Logic to suggest a break based on the itinerary
  }

  emergency(): void {
    // Logic for the emergency function
  }

  shareLocation(): void {
    // Logic to share the user's live location
  }

  viewMedia(mediaType: string): void {
    // Logic to view media (images, docs, videos)
  }

  showPaymentDetails(): void {
    // Logic to show payment details breakdown
  }

  startJobTimer(job: Job): void {
    // Logic to start a timer for a job billed by the hour
  }

  initiateChatWithSupport(): void {
    // Logic to initiate a chat with live support for any urgent issues
  }

  reportIncident(): void {
    // Logic to report incidents or problematic interactions
  }

  openTemplates(): void {
    // Logic to open and manage job templates
  }
  viewJobDetails(job: Job): void {
    this.selectedJob = job;
  }
  toggleActiveJobs(): void {
    // Toggle the visibility of active jobs here
  }

  showCancellationPolicies() {
    // Implement the logic to show the cancellation policies.
    // E.g., open a modal or toggle a hidden section
  }

  // Function to select a job and display its details
  selectJob(job: Job): void {
    this.selectedJob = job;
  }
  showUrgentAlert(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000, // Display for 5 seconds
      panelClass: ['urgent-alert'], // Add custom CSS class for styling
    });
  }
  triggerUrgentAlert(): void {
    this.showUrgentAlert('This is an urgent alert!');
  }
  toggleSetGoalForm(): void {
    this.showSetGoalForm = !this.showSetGoalForm;
  }
  setGoal(): void {
    // Add your goal setting logic here
    // Once the goal is set, you can hide the form
    this.showSetGoalForm = false;
  }
}
