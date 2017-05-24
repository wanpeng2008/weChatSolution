import { Injectable } from '@angular/core';
import {WechatAppModel} from "../models/wechat-app-model";
import {Http} from "@angular/http";
import {Observable, Observer} from "rxjs";
import {SITE_HOST_URL} from "../config/env.conf";

@Injectable()
export class WechatAppService {
  private getWechatAppInfoUrl = (api: string, id: string) => `${api}wechatApp/${id}`;
  private getWechatAppListUrl = (api: string) => `${api}wechatApp`;
  private saveOrUpdateWechatAppUrl = (api: string) => `${api}wechatApp`;
  private deleteWechatAppUrl = (api: string, id: string) => `${api}wechatApp/${id}`;

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


  saveOrUpdateWechatApp(wechatAppInfo: any) {
    return new Observable((observer: Observer<any>) => {
      if(wechatAppInfo.id){
        this.http.put(this.saveOrUpdateWechatAppUrl(SITE_HOST_URL),wechatAppInfo).map(res => res.json()).subscribe(
          res => {
            observer.next(res)
            observer.complete()
          }, err => {
            observer.error(err)
          }
        )
      }else {
        this.http.post(this.saveOrUpdateWechatAppUrl(SITE_HOST_URL),wechatAppInfo).map(res => res.json()).subscribe(
          res => {
            observer.next(res)
            observer.complete()
          }, err => {
            observer.error(err)
          }
        )
      }

    })

  }

  deleteWechatApp(wechatAppInfo: any) {
    if(wechatAppInfo.id){
      return new Observable((observer: Observer<any>) => {
        this.http.delete(this.deleteWechatAppUrl(SITE_HOST_URL, wechatAppInfo.id)).subscribe(
          res => {
            observer.next(res)
            observer.complete()
          }, err => {
            observer.error(err)
          }
        )
      })
    }
  }


}
