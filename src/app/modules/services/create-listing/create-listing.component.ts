import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms'; // Import AbstractControl from @angular/forms
import { oneOf } from 'src/assets/util/oneOf';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatStepper } from '@angular/material/stepper';
// Constants for validation
const TITLE_MIN_LENGTH = 5;
const TITLE_MAX_LENGTH = 100;
const DESCRIPTION_MIN_LENGTH = 20;
const DESCRIPTION_MAX_LENGTH = 3000;
// Enum Values
const PRICING_MODELS = ['Hourly', 'Fixed', 'Custom'];
const DURATION_UNITS = ['days', 'hours', 'minutes'];
const LOCATION_TYPES = ['Physical', 'Remote'];
const PAYMENT_STATUSES = ['Pending', 'Completed', 'Refunded', 'Failed'];
@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.css'],
})
export class CreateListingComponent implements OnInit {
  toggleIsChecked = false; // initial state
  toggle(event: any) {
    this.toggleIsChecked = event.checked;
    console.log(`Toggle changed to: ${this.toggleIsChecked}`);
    // Do something meaningful here
  }
  listingForm!: FormGroup; // Note the "!" at the end
  readonly categories: string[] = [
    'Pet Care',
    'Home Improvement',
    'Beauty & Spa',
    'Delivery',
  ];
  readonly pricingModels: string[] = PRICING_MODELS;
  readonly durationUnits: string[] = DURATION_UNITS;
  readonly locationTypes: string[] = LOCATION_TYPES;
  readonly paymentStatuses: string[] = PAYMENT_STATUSES;

  // Additional properties
  isLoading = false; // For Spinner
  imagePreviews: string[] = [];
  videoPreviews: string[] = [];

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private sanitizer: DomSanitizer
  ) {
    this.listingForm = this.initForm();
  }

  ngOnInit(): void {
    this.listingForm.addControl('selectedDate', this.initDateControl());
    // this.addCalendarDate();
    // this.addBookingCalendarDate();
  }

  private initForm(): FormGroup {
    return this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(TITLE_MIN_LENGTH),
          Validators.maxLength(TITLE_MAX_LENGTH),
        ],
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(DESCRIPTION_MIN_LENGTH),
          Validators.maxLength(DESCRIPTION_MAX_LENGTH),
        ],
      ],
      category: ['', [Validators.required]],
      pricing: this.fb.group({
        model: ['', [Validators.required, oneOf(PRICING_MODELS)]],
        basePrice: [0, [Validators.required, Validators.min(0)]],
      }),
      duration: this.fb.group({
        value: [1, Validators.required],
        unit: ['', [Validators.required, oneOf(DURATION_UNITS)]],
        hoursPerDay: [null, Validators.min(0)], // Added minimum validation
      }),
      availability: this.fb.group({
        calendar: this.fb.array([this.initCalendarDate()]), // Initialize as an array with one date picker
        bookingCalendar: this.fb.array([]), // Keep it as it is
      }),

      location: this.fb.group({
        type: ['', [Validators.required, oneOf(LOCATION_TYPES)]],
        serviceArea: [''], // Make sure this line exists
      }),
      media: this.fb.array([this.initMediaSection()]), // Initialize with one empty media section
      attachments: this.fb.group({
        documents: this.fb.array([]),
        photos: this.fb.array([]),
      }),
      requirements: this.fb.array([]),
      toolsEquipment: this.fb.array([]),
      qualifications: this.fb.array([]),
      languageSupport: [''],
      currency: [''],
      validation: [false],
      fileUploads: [false],
      stripePayment: [
        'Pending',
        [Validators.required, oneOf(PAYMENT_STATUSES)],
      ],
      cancellationPolicy: this.initCancellationPolicy(),
      userId: ['', Validators.required],
      tags: this.fb.array([], [Validators.maxLength(10)]), // Assuming a limit of 10 tags

      certifications: this.fb.array([]),
      externalReviews: this.fb.array([]),
    });
  }
  // Custom method to check if a form control has errors
  hasError(controlName: string, errorType: string): boolean {
    const control = this.listingForm.get(controlName);
    return control?.hasError(errorType) || false;
  }

  private setInitialValues(): void {
    this.listingForm.setValue({
      title: 'Initial Title',
      description: 'Initial Description',
      category: 'Pet Care',
      pricing: {
        model: 'Hourly',
        basePrice: 0,
      },
      duration: this.fb.group({
        value: [1, Validators.required], // Added this line
        unit: ['', [Validators.required]],
        hoursPerDay: [null], // Added this line
      }),
      availability: this.fb.group({
        calendar: this.fb.array<Date>([]), // Initialize as an empty FormArray of Date objects
        bookingCalendar: this.fb.array<Date>([]), // Initialize as an empty FormArray of Date objects
      }),

      location: {
        type: 'Physical',
        serviceArea: '',
      },
      media: {
        mediaFiles: [
          {
            type: String, // e.g., "image", "video", "document"
            url: String, // Link to the hosted media
          },
        ],
      },
      attachments: {
        documents: [],
        photos: [],
      },
      requirements: this.fb.array<string>([]),
      toolsEquipment: this.fb.array<string>([]),
      qualifications: this.fb.array<string>([]),

      languageSupport: '',
      currency: '',
      validation: false,
      fileUploads: false,
      stripePayment: 'Pending',
      reportListing: false,
      bookmarkListing: false,
    });
  }

  submitListing(): void {
    if (this.listingForm.valid) {
      console.log(this.listingForm.value);
      // TODO: Add your API submission logic here
    } else {
      // TODO: Handle invalid form submission
    }
  }

  // Additional properties and methods for the media section

  initFileField(): FormGroup {
    return this.fb.group({
      file: [null],
    });
  }

  totalFileSize = 0; // Track the total size of uploaded files

  fileValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const file = control.value as File;
      const fileSize = file?.size || 0; // File size in bytes
      const fileType = file?.type; // MIME type

      this.totalFileSize += fileSize;

      if (this.totalFileSize > 25 * 1024 * 1024) {
        return { totalFileSize: true };
      }
      if (
        fileType !== 'image/jpeg' &&
        fileType !== 'image/png' &&
        fileType !== 'video/mp4'
      ) {
        return { fileType: true };
      }
      return null;
    };
  }

  // Initialize media section
  // initMediaSection(): FormGroup {
  //   return this.fb.group({
  //     images: this.fb.array([
  //       this.initFileField().setValidators([this.fileValidator()]),
  //     ]),
  //     videos: this.fb.array([
  //       this.initFileField().setValidators([this.fileValidator()]),
  //     ]),
  //   });
  // }
  initCalendarDate(): FormGroup {
    return this.fb.group({
      date: [null, Validators.required],
    });
  }

  // Add a function to dynamically add a new date picker to the array

  addCalendarDate(): void {
    const calendar = this.listingForm.get('availability.calendar') as FormArray;
    calendar.push(this.initCalendarDate());
  }
  // ... previous TypeScript code

  addEvent(type: string, event: MatDatepickerInputEvent<Date>): void {
    const date: Date | null = event.value; // Extract the selected date
    console.log(`Selected date: ${date}`);
    this.listingForm.get('selectedDate')?.get('selectedDate')?.setValue(date); // Update the form control
  }

  // ... remaining TypeScript code

  initDateControl(): FormGroup {
    return this.fb.group({
      selectedDate: [null, Validators.required],
    });
  }
  goBack(stepper: MatStepper) {
    stepper.previous();
  }

  goForward(stepper: MatStepper) {
    stepper.next();
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const mediaGroup = this.initMediaSection();
        if (file.type.startsWith('image')) {
          mediaGroup.get('type')?.setValue('image');
        } else if (file.type.startsWith('video')) {
          mediaGroup.get('type')?.setValue('video');
        }
        mediaGroup.get('url')?.setValue(e.target.result); // This would be the data URL for preview
        mediaGroup.get('file')?.setValue(file); // Store the actual File object
        (this.listingForm.get('media') as FormArray).push(mediaGroup);
      };
      reader.readAsDataURL(file);
    }
  }

  onDrop(event: CdkDragDrop<any>) {
    const media = this.listingForm.get('media') as FormArray;
    moveItemInArray(media.controls, event.previousIndex, event.currentIndex);
  }

  addMediaField(): void {
    const media = this.listingForm.get('media') as FormArray;
    media.push(this.initMediaSection());
  }

  removeMedia(index: number): void {
    const media = this.listingForm.get('media') as FormArray;
    const file: File = media.at(index).get('file')?.value;
    this.totalFileSize -= file?.size || 0;
    media.removeAt(index);
  }
  initMediaSection(): FormGroup {
    return this.fb.group({
      type: [''], // 'image' or 'video'
      url: [''], // data URL for preview
      file: [null, [this.fileValidator()]], // the actual File object
    });
  }

  initCancellationPolicy(): FormGroup {
    return this.fb.group({
      type: [
        '',
        [
          Validators.required,
          oneOf(['Flexible', 'Moderate', 'Strict', 'Custom']),
        ],
      ],
      refundPercentageBeforeServiceDate: [null, Validators.min(0)],
      refundPercentageOnServiceDate: [null, Validators.min(0)],
      reschedulingAllowed: [true],
      reschedulingFee: [0, Validators.min(0)],
    });
  }
  // Add a new tag control to the tags FormArray
  addTag(): void {
    const tags = this.listingForm.get('tags') as FormArray;
    tags.push(this.fb.control('', Validators.required));
  }

  // Remove a tag control from the tags FormArray by index
  removeTag(index: number): void {
    const tags = this.listingForm.get('tags') as FormArray;
    tags.removeAt(index);
  }
}
