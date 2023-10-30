import { Component } from '@angular/core';

export interface WorkerActivity {
  date: Date;
  workerID: string;
  serviceType: string;
  bookings: number;
  rating: number;
  reviews: number;
  intensity: number;
}

interface SeriesHeatmapOptions {
  xAxis: {
    categories: string[];
  };
  yAxis: {
    categories: string[];
  };
  series: {
    name: string;
    borderWidth: number;
    data: number[][];
    dataLabels: {
      enabled: boolean;
      color: string;
    };
  }[];
}
interface SeriesOptions {
  xAxis: {
    categories?: string[];
  };
  yAxis: {
    categories?: string[];
  };
}
interface Review {
  userAvatarUrl: string;
  userName: string;
  postedDate: Date;
  content: string;
  likes?: number; // Optional: for storing likes count
  rating: number;
  images: string[];
  helpfulCount: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  // Define a color scheme with both domain and range
  customColorScheme = 'vivid'; // using a predefined color scheme
  // Initialize toggle models to false
  showMetrics: boolean = true;
  showPerformance: boolean = true;
  showTransactionsOverTime: boolean = true;
  showAvgTrxValue: boolean = true;
  showDisputes: boolean = true;
  zoomType = 'xy'; // 'x', 'y', or 'xy' based on your requirement.
  selectedFilter!: string;
  // combinedChartData: any[] = [];
  dataError: boolean = false; // You can initialize it to false and update its value based on your logic.
  darkModeEnabled: boolean = false;
  reviews: Review[] = [];
  currentPage: number = 1;
  totalPages: number = 10; // This should ideally come from your backend or based on the total number of reviews.
  // Add the missing properties
  rating: number = 0; // You can set a default value or fetch the actual rating
  totalRatings: number = 0; // Default value, you can fetch the actual number of ratings later
  ratingsData: any[] = [
    // your initial data here
  ];
  selectedSort: any;
  totalReviews: any;
  reviewsPerPage: number = 10; // Default value

  // Initialize our chart with data
  hustleServices = [
    'Tutoring',
    'Pet Sitting',
    'Delivery',
    'Handyman',
    'Photography',
  ];

  // @ViewChild('chartRef', { static: false }) chartRef: any;

  ngOnInit(): void {
    this.populateDummyReviews();
  }

  // This method can be used to prepare data for the charts dynamically

  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
    // Fetch new set of reviews for the current page here
  }
  likeReview(review: Review) {
    // Increase the like count or send to backend
    review.likes = (review.likes || 0) + 1;
  }

  reportReview(review: Review) {
    // Handle report logic here (maybe send to the backend or mark the review in some way)
  }
  openReviewDialog() {
    // Open a dialog or navigate to a form where users can write and submit their review.
  }
  fetchReviews() {
    // Call the backend service and update the `reviews` property.
  }
  populateDummyReviews() {
    // Create and push dummy review objects into the `reviews` array
    const dummyReviews: Review[] = [
      {
        userAvatarUrl: '../../../../assets/images/avatars/1.png',
        userName: 'User 1',
        postedDate: new Date('2023-10-25'),
        content: 'This is a great product!',
        likes: 10,
        rating: 4.5, // added rating property
        images: [], // added images property (empty array for now)
        helpfulCount: 5, // added helpfulCount property
      },
      {
        userAvatarUrl: '../../../../assets/images/avatars/1.png',
        userName: 'User 2',
        postedDate: new Date('2023-10-24'),
        content: 'I love this product!',
        likes: 7,
        rating: 4.7, // added rating property
        images: [], // added images property (empty array for now)
        helpfulCount: 3, // added helpfulCount property
      },
      // Add more dummy reviews as needed
    ];

    // Push the dummy reviews into the `reviews` array
    this.reviews = dummyReviews;
  }

  dislikeReview(review: Review): void {
    // Logic for disliking a review
  }

  markHelpful(review: Review): void {
    // Logic for marking a review as helpful
  }

  markNotHelpful(review: Review): void {
    // Logic for marking a review as not helpful
  }
}
