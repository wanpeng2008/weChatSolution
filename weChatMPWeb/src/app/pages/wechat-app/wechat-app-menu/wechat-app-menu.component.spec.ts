import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WechatAppMenuComponent } from './wechat-app-menu.component';

describe('WechatAppMenuComponent', () => {
  let component: WechatAppMenuComponent;
  let fixture: ComponentFixture<WechatAppMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WechatAppMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WechatAppMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
