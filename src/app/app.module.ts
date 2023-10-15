import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps';

// Updated Angular Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core'; // Note: MatOptionModule might be under core
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider'; // Import MatDividerModule
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatChipsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatPaginatorModule,
    MatGridListModule,
    MatDividerModule,
    MatSelectModule,
    MatButtonModule,
    MatMenuModule,
    MatRadioModule,
    MatCheckboxModule,
    MatOptionModule,
    MatToolbarModule,
    GoogleMapsModule,
    MatToolbarModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreModule.forRoot({ app: appReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
