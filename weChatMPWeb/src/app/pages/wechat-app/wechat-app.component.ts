import { Component, OnInit } from '@angular/core';
import {WechatAppService} from "../../share/services/wechat-app.service";
import {WechatAppModel} from "../../share/models/wechat-app-model";
import {LocalDataSource} from "ng2-smart-table";

@Component({
  selector: 'app-wechat-app',
  templateUrl: './wechat-app.component.html',
  styleUrls: ['./wechat-app.component.css']
})
export class WechatAppComponent implements OnInit {

  private wechatApps:WechatAppModel[];
  private selectedWechatApp:WechatAppModel;
  private settings;
  private source;

  constructor(private wechatAppService:WechatAppService) {
    this.source = new LocalDataSource();
  }

  ngOnInit() {
    console.debug('WechatAppComponent init')
    this.settings = {
      columns: {
        appId: {
          title: 'appId'
        },
        secret: {
          title: 'secret'
        },
        token: {
          title: 'token'
        },
        aseKey: {
          title: 'aseKey'
        },
        accessPath: {
          title: 'accessPath'
        },
        enableFlag: {
          title: 'enableFlag'
        },
        name: {
          title: 'name'
        },
        comments: {
          title: 'comments'
        },
        createTime: {
          title: 'createTime'
        }
      }
    };
    this.onSearch()
  }
  onSearch(){
    this.wechatAppService.getWechatApp().subscribe(
      res => {
        this.wechatApps = res.content;
        console.debug(this.wechatApps)
        this.source.load(this.wechatApps);
      },
      error => {

      }
    )
  }

}
