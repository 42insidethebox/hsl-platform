import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { BookingComponent } from './booking/booking.component';



@NgModule({
  declarations: [
    ListingComponent,
    BookingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { }
