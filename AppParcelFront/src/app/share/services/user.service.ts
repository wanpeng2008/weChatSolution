import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {

  storage = sessionStorage
  constructor(private http:Http) { }
  get() {
    let openId = this.storage.getItem('openId')
    return this.http.get('/api/user/'+openId).map(res => res.json())
  }
  save(userInfo){
    return new Observable(observer => {
      userInfo.openId = this.storage.getItem('openId')
      this.http.post('/api/user',userInfo).subscribe(
        res => {
          observer.next()
          observer.complete()
        }
      )
    })

  }

}
