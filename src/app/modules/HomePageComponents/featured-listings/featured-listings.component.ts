import { Component, HostListener, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { gsap } from 'gsap';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-featured-listings',
  templateUrl: './featured-listings.component.html',
  styleUrls: ['./featured-listings.component.css'],
  animations: [
    trigger('collapseLeft', [
      state('open', style({ width: '*', opacity: '1', visibility: 'visible' })),
      state(
        'closed',
        style({ width: '0px', opacity: '0', visibility: 'hidden' })
      ),
      transition('open <=> closed', animate('300ms ease-in-out')),
    ]),
    trigger('collapseRight', [
      state('open', style({ width: '*', opacity: '1', visibility: 'visible' })),
      state(
        'closed',
        style({ width: '0px', opacity: '0', visibility: 'hidden' })
      ),
      transition('open <=> closed', animate('300ms ease-in-out')),
    ]),
  ],
})
export class FeaturedListingsComponent implements OnInit {
  @Input() isStandalone = true;
  isFeaturedListings = true; // Sample data structure for listings

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

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    // Fetch the listings from API here
    console.log('Featured Listings:', this.featuredListings);
    this.updateGridCols(); // Call the function to set the initial number of columns
    this.sharedService.isRightSideCollapsed$.subscribe((collapsed) => {
      this.isRightSideCollapsed = collapsed;
      this.adjustLayout(collapsed);
    });
    this.sharedService.isLeftSideCollapsed$.subscribe((collapsed) => {
      this.isLeftSideCollapsed = collapsed;
      console.log(this.isLeftSideCollapsed);
      this.adjustLayoutForLeftSide(collapsed);
    });
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
    if (window.innerWidth <= 968) {
      this.gridCols = 1; // Set 1 column for screens 480px or less
    } else if (window.innerWidth < 1700) {
      this.gridCols = 2; // Set 2 columns for screens less than 1000px
    } else if (window.innerWidth < 2500) {
      this.gridCols = 3;
    } else if (window.innerWidth < 5000) {
      this.gridCols = 4;
    } else {
      this.gridCols = 5; // Set 3 columns for screens 1000px or wider
    }
  }

  isRightSideCollapsed = false;
  isLeftSideCollapsed = false;
  toggleRightSide() {
    this.sharedService.toggleRightSideCollapse(); // Make sure the method name matches
    console.log('ListingComponent Right Side:', this.isRightSideCollapsed);
  }

  toggleLeftSide(): void {
    this.sharedService.toggleLeftSideCollapse(); // Make sure the method name matches
    console.log(
      'FeaturedListingsComponent Left Side:',
      this.isLeftSideCollapsed
    );
  }

  private adjustLayout(collapsed: boolean): void {
    this.isRightSideCollapsed = collapsed;
    console.log(this.isRightSideCollapsed);
  }

  private adjustLayoutForLeftSide(collapsed: boolean): void {
    this.isLeftSideCollapsed = collapsed;
  }

  calculateCardWidth(): string {
    // Define your custom breakpoints and corresponding widths
    const breakpoints = [
      // { breakpoint: 300, width: '20vw' },
      // { breakpoint: 800, width: '35vw' },
      // { breakpoint: 1200, width: '45vw' },
      // { breakpoint: 1650, width: '50vw' },
      // { breakpoint: 1750, width: '55vw' },
      // { breakpoint: 2400, width: '60vw' },
      // { breakpoint: 2800, width: '65vw' },
      // { breakpoint: 3200, width: '70vw' },
      // { breakpoint: 3600, width: '75vw' },
      // { breakpoint: 4000, width: '80vw' },
      { breakpoint: 4000, width: '100%' },
    ];

    // Determine the current viewport size
    const viewportWidth = window.innerWidth;

    // Check if both sides are collapsed
    if (this.isLeftSideCollapsed && this.isRightSideCollapsed) {
      return '100vw';
    }

    // Check if the left side is visible
    if (!this.isLeftSideCollapsed) {
      // Iterate through breakpoints and find the matching width
      for (const bp of breakpoints) {
        if (viewportWidth < bp.breakpoint) {
          return bp.width;
        }
      }
      // Default width if none of the conditions match
      return '70vw'; // You can change this default width as needed
    }

    // Default width for other scenarios
    return '70vw';
  }
}
