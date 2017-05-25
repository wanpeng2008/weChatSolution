import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WechatAppAccessComponent } from './wechat-app-access.component';

describe('WechatAppAccessComponent', () => {
  let component: WechatAppAccessComponent;
  let fixture: ComponentFixture<WechatAppAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WechatAppAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WechatAppAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
