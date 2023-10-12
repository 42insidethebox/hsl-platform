import { Component, HostListener, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-featured-listings',
  templateUrl: './featured-listings.component.html',
  styleUrls: ['./featured-listings.component.css'],
})
export class FeaturedListingsComponent implements OnInit {
  // Sample data structure for listings
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
    // Add more sample listings
  ];

  // For Pagination
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // For Sorting
  sortOptions = ['latest', 'popular', 'high-to-low', 'low-to-high'];
  selectedSort = 'latest';

  constructor() {}

  ngOnInit(): void {
    // Fetch the listings from API here
    console.log('Featured Listings:', this.featuredListings);
    this.updateGridCols(); // Call the function to set the initial number of columns
  }

  // Function to handle sorting
  onSortChange(event: any): void {
    this.selectedSort = event.value;
    // Implement your sorting logic here
  }

  // Function to handle pagination
  onPageChange(event: any): void {
    // Implement your pagination logic here
  }

  // Function to handle user interactions like 'Add to Cart', 'Buy Now', etc.
  onAction(action: string, listingId: number): void {
    // Implement your action logic here
  }

  // Variable to store the number of columns
  gridCols = 3;

  // Function to update the number of columns based on viewport width
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.updateGridCols();
  }

  updateGridCols(): void {
    if (window.innerWidth <= 680) {
      this.gridCols = 1; // Set 1 column for screens 480px or less
    } else if (window.innerWidth < 1000) {
      this.gridCols = 2; // Set 2 columns for screens less than 1000px
    } else {
      this.gridCols = 3; // Set 3 columns for screens 1000px or wider
    }
  }
}
