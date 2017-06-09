import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightInquiryComponent } from './weight-inquiry.component';

describe('WeightInquiryComponent', () => {
  let component: WeightInquiryComponent;
  let fixture: ComponentFixture<WeightInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
