import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTAsComponent } from './ctas.component';

describe('CTAsComponent', () => {
  let component: CTAsComponent;
  let fixture: ComponentFixture<CTAsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CTAsComponent]
    });
    fixture = TestBed.createComponent(CTAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
