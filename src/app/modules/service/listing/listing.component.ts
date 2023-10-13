import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent implements OnInit {
  // Sample data structure for listings (You can replace this with your actual data)
  featuredListings = [
    {
      id: 1,
      title: 'Sample Listing 1',
      description: 'This is a description',
      price: 100,
      location: 'New York',
      category: 'Electronics',
      image:
        'https://assets.wired.com/photos/w_1164/wp-content/uploads/2019/01/Culture_GeeksGuide_Bezos.jpg', // <-- Correct path
      seller: {
        name: 'John Doe',
        avatar:
          'https://assets.wired.com/photos/w_1164/wp-content/uploads/2019/01/Culture_GeeksGuide_Bezos.jpg', // <-- Correct path
      },
    },
  ];
  // Variables for advanced filters
  selectedIndustries: string[] = [];
  selectedSkills: string[] = [];

  constructor() {}

  ngOnInit(): void {
    // Fetch the listings from API here
    console.log('Listings:', this.featuredListings);
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
