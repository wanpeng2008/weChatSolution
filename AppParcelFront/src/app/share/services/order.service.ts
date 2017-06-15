import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
@Injectable()
export class OrderService {

  constructor(private http:Http) { }

  get(openId):Observable<OrderInfo[]> {
    return this.http.get('/api/order/'+openId).map(res => res.json())
  }
  save(orderInfo){
    return new Observable(observer => {
      this.http.post('/api/order',orderInfo).subscribe(
        res => {
          observer.next()
          observer.complete()
        }
      )
    })

  }
}
