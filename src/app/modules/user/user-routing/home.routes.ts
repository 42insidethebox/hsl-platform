// home.routes
// Step 1: Import dependencies
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ListingComponent } from '../../service/listing/listing.component';
import { DashboardComponent } from '../../HomePageComponents/dashboard/dashboard.component';
import { CTAsComponent } from '../../HomePageComponents/ctas/ctas.component';
import { HowItWorksComponent } from '../../HomePageComponents/how-it-works/how-it-works.component';
import { FeaturedListingsComponent } from '../../HomePageComponents/featured-listings/featured-listings.component';
import { HeroSectionComponent } from '../../HomePageComponents/hero-section/hero-section.component';
import { BookingComponent } from '../../service/booking/booking.component';

// Additional imports if needed

// Step 2: Define routes
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'listings', component: ListingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'featured-listings', component: FeaturedListingsComponent },
  { path: 'hero-section', component: HeroSectionComponent },
  { path: 'booking', component: BookingComponent },
];

// Step 3: Angular Module
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
