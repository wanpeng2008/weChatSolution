import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceInquiryComponent } from './price-inquiry.component';

describe('PriceInquiryComponent', () => {
  let component: PriceInquiryComponent;
  let fixture: ComponentFixture<PriceInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
