import { Injectable } from '@angular/core';
import {WechatAppModel} from "../models/wechat-app-model";
import {Http} from "@angular/http";
import {Observable, Observer} from "rxjs";
import {SITE_HOST_URL} from "../config/env.conf";

@Injectable()
export class WechatAppService {

  public wechatAppInfo:WechatAppModel;
  private getWechatAppInfoUrl = (api: string, id: string) => `${api}wechatApp/?id=${id}`;

  constructor(private http: Http) { }

  getWechatApp(id?: string){
    return new Observable((observer: Observer<any>) => {
      this.http.get(this.getWechatAppInfoUrl(SITE_HOST_URL, id)).map(res=>new WechatAppModel(res.json())).subscribe(data => {
        this.wechatAppInfo = data;
        observer.next(data);
        observer.complete();
      }, err => {
        this.wechatAppInfo = null;
        observer.error(err);
      });
    })
  }


}
