import { TestBed, inject } from '@angular/core/testing';

import { WechatAppService } from './wechat-app.service';

describe('WechatAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WechatAppService]
    });
  });

  it('should ...', inject([WechatAppService], (service: WechatAppService) => {
    expect(service).toBeTruthy();
  }));
});
