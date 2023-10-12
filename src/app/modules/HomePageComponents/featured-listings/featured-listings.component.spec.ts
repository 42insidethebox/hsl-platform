import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedListingsComponent } from './featured-listings.component';

describe('FeaturedListingsComponent', () => {
  let component: FeaturedListingsComponent;
  let fixture: ComponentFixture<FeaturedListingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedListingsComponent],
    });
    fixture = TestBed.createComponent(FeaturedListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
