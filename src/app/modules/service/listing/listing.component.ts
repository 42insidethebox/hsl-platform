import {
  Component,
  Renderer2,
  ElementRef,
  ViewChild,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Subscription } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  animations: [
    trigger('collapseRight', [
      state(
        'open',
        style({ height: '*', opacity: '1', visibility: 'visible' })
      ),
      state(
        'closed',
        style({ height: '0px', opacity: '0', visibility: 'hidden' })
      ),
      transition('open <=> closed', animate('300ms ease-in-out')),
    ]),
    // New animation trigger for left side
    trigger('collapseLeft', [
      state('open', style({ width: '*', opacity: '1', visibility: 'visible' })),
      state(
        'closed',
        style({ width: '0px', opacity: '0', visibility: 'hidden' })
      ),
      transition('open <=> closed', animate('300ms ease-in-out')),
    ]),
  ],
})
export class ListingComponent implements OnInit, OnDestroy {
  isRightSideCollapsed = false;
  isLeftSideCollapsed = false;
  private collapseSubscription: Subscription = new Subscription();
  // Sample data structure for listings (You can replace this with your actual data)
  featuredListings = [
    {
      id: 1,
      title: 'Sample Listing 1',
      description: 'This is a description',
      price: 100,
      location: 'New York',
      category: 'Electronics',
      image:
        'https://assets.wired.com/photos/w_1164/wp-content/uploads/2019/01/Culture_GeeksGuide_Bezos.jpg', // <-- Correct path
      seller: {
        name: 'John Doe',
        avatar:
          'https://assets.wired.com/photos/w_1164/wp-content/uploads/2019/01/Culture_GeeksGuide_Bezos.jpg', // <-- Correct path
      },
    },
  ];

  // Variables for advanced filters
  selectedIndustries: string[] = [];
  selectedSkills: string[] = [];
  selectedExperienceLevel: string | null = null;
  selectedLocation: string[] = [];
  selectedJobType: string | null = null;
  selectedSalaryRange: string | null = null;
  selectedRemoteOption: string | null = null;
  selectedLanguage: string[] = [];
  selectedCertifications: string[] = [];
  selectedEducationLevel: string | null = null;
  selectedAvailability: string | null = null;
  selectedGender: string | null = null;

  constructor(
    private sharedService: SharedService,
    private renderer: Renderer2
  ) {}

  @ViewChild('mainContainer', { static: false }) mainContainer!: ElementRef;
  ngAfterViewInit() {
    this.renderer.setStyle(
      this.mainContainer.nativeElement,
      'gridTemplateColumns',
      'yourValueHere'
    );
  }

  ngOnInit(): void {
    console.log('Listings:', this.featuredListings);

    this.collapseSubscription.add(
      this.sharedService.isRightSideCollapsed$.subscribe((state: boolean) => {
        this.isRightSideCollapsed = state;
      })
    );

    // Subscribe to isLeftSideCollapsed$ here
    this.collapseSubscription.add(
      this.sharedService.isLeftSideCollapsed$.subscribe((state: boolean) => {
        this.isLeftSideCollapsed = state;
      })
    );
  }

  // Function to handle changes in selected industries
  onIndustryChange(event: any): void {
    this.selectedIndustries = event.value;
    // Implement your filtering logic based on selected industries here
  }

  // Function to handle changes in selected skills
  onSkillChange(event: any): void {
    this.selectedSkills = event.value;
    // Implement your filtering logic based on selected skills here
  }

  // Placeholder function for map functionalities
  initializeMap(): void {
    // Implement your map logic here
  }

  toggleRightSide() {
    this.isRightSideCollapsed = !this.isRightSideCollapsed;
  }
  toggleLeftSide() {
    this.isLeftSideCollapsed = !this.isLeftSideCollapsed;
  }

  // Additional functionalities can go here...
  getMainContainerClass(): string {
    if (this.isLeftSideCollapsed && this.isRightSideCollapsed) {
      console.log('middle-full');
      return 'middle-full-width';
    } else if (this.isLeftSideCollapsed && !this.isRightSideCollapsed) {
      console.log('middle-right');

      return 'middle-right-visible';
    } else if (!this.isLeftSideCollapsed && this.isRightSideCollapsed) {
      console.log(this.isLeftSideCollapsed, this.isRightSideCollapsed);

      return 'middle-left-visible';
    } else {
      console.log(this.isLeftSideCollapsed, this.isRightSideCollapsed);

      return 'middle-both-visible';
    }
  }

  // Implement similar functions for other advanced filters as needed
  ngOnDestroy(): void {
    this.collapseSubscription.unsubscribe(); // Prevent memory leaks
  }
}
