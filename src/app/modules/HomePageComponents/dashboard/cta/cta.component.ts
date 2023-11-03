import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importing the Router service
@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.css'],
})
export class CtaComponent {
  // Earnings for the day (You might fetch this data from an API in a real scenario)
  currentEarnings: number = 50; // Current earnings
  targetEarnings: number = 100; // Target earnings for the day
  earningsPercentage: number =
    (this.currentEarnings / this.targetEarnings) * 100;

  // Total tasks or services scheduled for the day (Again, this might be fetched from an API)
  tasksScheduled: number = 5;

  // Worker's current status
  currentStatus: 'active' | 'onBreak' | 'offline' = 'active';

  // Availability toggle switch
  availability: boolean = true;

  constructor(private router: Router) {}
  // Function to handle the primary action (Go HSL)
  goHSL(): void {
    console.log('Navigating to Bookings...');
    this.router.navigate(['/services/bookings']); // Navigating to the 'bookings' route under 'services'
  }

  // Function to handle scheduling a workday
  scheduleWorkday(): void {
    console.log('Opening workday scheduler...');
    // Implement your logic here, e.g., open a modal or navigate to the scheduling page
  }

  // Function to handle toggling the availability
  toggleAvailability(): void {
    console.log(`Setting availability to: ${this.availability}`);
    // Implement your logic here, e.g., send this status to your backend or update the UI accordingly
  }
}
