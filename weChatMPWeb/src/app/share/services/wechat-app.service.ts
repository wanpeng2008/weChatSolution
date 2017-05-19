import { Injectable } from '@angular/core';
import {WechatAppModel} from "../models/wechat-app-model";
import {Http} from "@angular/http";
import {Observable, Observer} from "rxjs";
import {SITE_HOST_URL} from "../config/env.conf";

@Injectable()
export class WechatAppService {
  private getWechatAppInfoUrl = (api: string, id: string) => `${api}wechatApp/?id=${id}`;
  private getWechatAppListUrl = (api: string) => `${api}wechatApp`;

  constructor(private http: Http) { }

  getWechatApp(id?: string){
    if(!!id) {
      return new Observable((observer: Observer<any>) => {
        this.http.get(this.getWechatAppInfoUrl(SITE_HOST_URL, id)).map(res => new WechatAppModel(res.json())).subscribe(data => {
          observer.next(data);
          observer.complete();
        }, err => {
          observer.error(err);
        });
      })
    }else{
      return new Observable((observer: Observer<any>) => {
        this.http.get(this.getWechatAppListUrl(SITE_HOST_URL)).map(res => res.json()).subscribe(res => {
          observer.next(res);
          observer.complete();
        }, err => {
          observer.error(err);
        });
      })
    }
  }


}
