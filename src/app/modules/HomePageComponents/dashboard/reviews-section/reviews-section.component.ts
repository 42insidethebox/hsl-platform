import { Component } from '@angular/core';
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
  selector: 'app-reviews-section',
  templateUrl: './reviews-section.component.html',
  styleUrls: ['./reviews-section.component.css'],
})
export class ReviewsSectionComponent {
  selectedFilter!: string;
  selectedSort: any;
  reviews: Review[] = [];
  totalReviews: any;
  reviewsPerPage: number = 10; // Default value

  ngOnInit(): void {
    this.populateDummyReviews();
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
  markHelpful(review: Review): void {
    // Logic for marking a review as helpful
  }

  markNotHelpful(review: Review): void {
    // Logic for marking a review as not helpful
  }
  reportReview(review: Review) {
    // Handle report logic here (maybe send to the backend or mark the review in some way)
  }
}
