import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- Import both FormsModule and ReactiveFormsModule
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips'; // <-- Import thisimport { AppComponent } from './app.component';
import { LoginComponent } from './modules/user/login/login.component';
import { RegisterComponent } from './modules/user/register/register.component';
import { HeroSectionComponent } from './modules/HomePageComponents/hero-section/hero-section.component';
import { HowItWorksComponent } from './modules/HomePageComponents/how-it-works/how-it-works.component';
import { FeaturedListingsComponent } from './modules/HomePageComponents/featured-listings/featured-listings.component';
import { CTAsComponent } from './modules/HomePageComponents/ctas/ctas.component';
import { DashboardComponent } from './modules/HomePageComponents/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon'; // <-- Import MatIconModule
import { MatPaginatorModule } from '@angular/material/paginator'; // <-- Import MatPaginatorModule
import { MatGridListModule } from '@angular/material/grid-list'; // <-- Import MatGridListModule
import { MatFormFieldModule } from '@angular/material/form-field'; // <-- Import MatFormFieldModule
import { MatSelectModule } from '@angular/material/select'; // <-- Import MatSelectModule
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <-- Import MatButtonModule
import { ListingComponent } from './modules/service/listing/listing.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core'; // Import MatOptionModule
import { MapComponent } from './modules/map/map.component';
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, // <-- Add ReactiveFormsModule here
    MatCardModule, // <-- Add MatCardModule here
    MatChipsModule,
    BrowserAnimationsModule,
    MatIconModule, // <-- Add MatIconModule here
    MatPaginatorModule, // <-- Add MatPaginatorModule here
    MatGridListModule, // <-- Add MatGridListModule here
    MatFormFieldModule, // <-- Add MatFormFieldModule here
    MatSelectModule, // <-- Add MatSelectModule here
    MatButtonModule, // <-- Add MatButtonModule here,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule, // Add MatOptionModule here
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
