import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps';
import { ServiceModule } from './modules/service/service.module';
import { SharedMaterialModule } from './shared/services/shared-materials.module';
// Angular Material Imports
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/user/login/login.component';
import { RegisterComponent } from './modules/user/register/register.component';
import { HeroSectionComponent } from './modules/HomePageComponents/hero-section/hero-section.component';
import { HowItWorksComponent } from './modules/HomePageComponents/how-it-works/how-it-works.component';
import { FeaturedListingsComponent } from './modules/HomePageComponents/featured-listings/featured-listings.component';
import { CTAsComponent } from './modules/HomePageComponents/ctas/ctas.component';
import { DashboardComponent } from './modules/HomePageComponents/dashboard/dashboard.component';
import { ListingComponent } from './modules/service/listing/listing.component';
import { MapComponent } from './modules/map/map.component';
import { HeaderComponent } from './modules/HomePageComponents/header/header.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './store/app.reducer';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './modules/user/user-routing/home.routes';
import { TransactionComponent } from './modules/transaction/transaction.component';
import { TransactionRoutingModule } from './modules/transaction/transaction-routing.module';
import { BrowseListingsComponent } from './modules/services/browse-listings/browse-listings.component';
import { CreateListingComponent } from './modules/services/create-listing/create-listing.component';
import { MyListingsComponent } from './modules/services/my-listings/my-listings.component';
import { CategoriesComponent } from './modules/services/categories/categories.component';
import { BookingsComponent } from './modules/services/bookings/bookings.component';
import { FavoritesComponent } from './modules/services/favorites/favorites.component';
import { ReviewsComponent } from './modules/services/reviews/reviews.component';
import { ServicesRoutingModule } from './modules/service/services-routing.module';
import { UserProfileRoutingModule } from './modules/user/profile/user-profile-routing.module';
import { AdminPanelRoutingModule } from './modules/admin/admin-routing.module';
import { MatStepperModule } from '@angular/material/stepper';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeroSectionComponent,
    HowItWorksComponent,
    FeaturedListingsComponent,
    CTAsComponent,
    DashboardComponent,
    ListingComponent,
    MapComponent,
    HeaderComponent,
    TransactionComponent,
    BrowseListingsComponent,
    MyListingsComponent,
    CategoriesComponent,
    BookingsComponent,
    FavoritesComponent,
    ReviewsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    MatStepperModule,
    ServiceModule,
    StoreModule.forRoot({ app: appReducer }),
    EffectsModule.forRoot([]),
    AppRoutingModule, // Import the AppRoutingModule
    RouterModule.forRoot([
      // Define your routes here
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirect to dashboard by default
      { path: 'dashboard', component: DashboardComponent },
      { path: 'listings', component: ListingComponent },

      // Add more routes as needed
    ]),
    TransactionRoutingModule,
    ServicesRoutingModule,
    UserProfileRoutingModule,
    AdminPanelRoutingModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
