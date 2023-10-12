import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent implements OnInit {
  showOnlyFavorites: boolean = false; // Define showOnlyFavorites property
  sortOption: string = 'relevance'; // Define sortOption property
  // Sample data structure for listings (You can replace this with your actual data)
  listings = [
    // Your listing objects here...
  ];

  // Variables for advanced filters
  selectedIndustries: string[] = [];
  selectedSkills: string[] = [];

  constructor() {}

  ngOnInit(): void {
    // Fetch the listings from API here
    console.log('Listings:', this.listings);
  }

  // Function to handle changes in selected industries
  onIndustryChange(event: any): void {
    this.selectedIndustries = event.value;
    // Implement your filtering logic based on selected industries here
  }

  // Function to handle changes in selected skills
  onSkillChange(event: any): void {
    this.selectedSkills = event.value;
    // Implement your filtering logic based on selected skills here
  }

  // Placeholder function for map functionalities
  initializeMap(): void {
    // Implement your map logic here
  }

  // Additional functionalities can go here...
}
