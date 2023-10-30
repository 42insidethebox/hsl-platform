import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingComponent } from './booking/booking.component';
import { CreateListingComponent } from '../services/create-listing/create-listing.component';
// Angular Material Modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { SharedMaterialModule } from 'src/app/shared/services/shared-materials.module';
import { MatStepperModule } from '@angular/material/stepper';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatChipsModule } from '@angular/material/chips';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HighchartsChartModule } from 'highcharts-angular';
@NgModule({
  declarations: [BookingComponent, CreateListingComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // Angular Material Modules
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    SharedMaterialModule,
    MatStepperModule,
    MatChipsModule,
    DragDropModule,
    NgxChartsModule,
    HighchartsChartModule,
  ],
  exports: [
    MatStepperModule,
    MatChipsModule,
    NgxChartsModule,
    HighchartsChartModule,
  ],
})
export class ServiceModule {}
