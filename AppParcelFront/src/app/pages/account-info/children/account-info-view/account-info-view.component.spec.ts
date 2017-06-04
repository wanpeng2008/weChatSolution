import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInfoViewComponent } from './account-info-view.component';

describe('AccountInfoViewComponent', () => {
  let component: AccountInfoViewComponent;
  let fixture: ComponentFixture<AccountInfoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountInfoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
