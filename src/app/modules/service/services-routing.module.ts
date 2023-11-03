import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import the components for Services category
import { BrowseListingsComponent } from '../services/browse-listings/browse-listings.component';
import { CreateListingComponent } from '../services/create-listing/create-listing.component';
import { MyListingsComponent } from '../services/my-listings/my-listings.component';
import { CategoriesComponent } from '../services/categories/categories.component';
import { BookingsComponent } from '../services/bookings/bookings.component';
import { FavoritesComponent } from '../services/favorites/favorites.component';
import { ReviewsComponent } from '../services/reviews/reviews.component';

const servicesRoutes: Routes = [
  {
    path: 'services',
    children: [
      { path: 'browse-listings', component: BrowseListingsComponent },
      { path: 'create-listing', component: CreateListingComponent },
      { path: 'my-listings', component: MyListingsComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'bookings', component: BookingsComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'reviews', component: ReviewsComponent },
      // Add more subcategory routes here
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(servicesRoutes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
