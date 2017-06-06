import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoInquiryComponent } from './info-inquiry.component';

describe('InfoInquiryComponent', () => {
  let component: InfoInquiryComponent;
  let fixture: ComponentFixture<InfoInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
