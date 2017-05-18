import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WechatAppComponent } from './wechat-app.component';

describe('WechatAppComponent', () => {
  let component: WechatAppComponent;
  let fixture: ComponentFixture<WechatAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WechatAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WechatAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
