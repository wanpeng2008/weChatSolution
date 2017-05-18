import { Component, OnInit } from '@angular/core';
import {WechatAppService} from "../../share/services/wechat-app.service";
import {WechatAppModel} from "../../share/models/wechat-app-model";

@Component({
  selector: 'app-wechat-app',
  templateUrl: './wechat-app.component.html',
  styleUrls: ['./wechat-app.component.css']
})
export class WechatAppComponent implements OnInit {

  private wechatApps:WechatAppModel[];
  private selectedWechatApp:WechatAppModel;

  constructor(private wechatAppService:WechatAppService) { }

  ngOnInit() {
    console.log('WechatAppComponent init')
    this.onSearch()
  }
  onSearch(){
    this.wechatAppService.getWechatApp().subscribe(
      wechatApps => {
        this.wechatApps = wechatApps;
        console.debug(this.wechatApps)
      },
      error => {

      }
    )
  }

}
