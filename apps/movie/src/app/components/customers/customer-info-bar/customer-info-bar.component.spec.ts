import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInfoBarComponent } from './customer-info-bar.component';

describe('CustomerInfoBarComponent', () => {
  let component: CustomerInfoBarComponent;
  let fixture: ComponentFixture<CustomerInfoBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerInfoBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInfoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
