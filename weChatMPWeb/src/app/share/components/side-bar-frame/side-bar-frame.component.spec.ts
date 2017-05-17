import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarFrameComponent } from './side-bar-frame.component';

describe('SideBarFrameComponent', () => {
  let component: SideBarFrameComponent;
  let fixture: ComponentFixture<SideBarFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
