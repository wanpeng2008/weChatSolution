import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class OrderService {
  static OrderStatus_Waiting = '1'
  static OrderStatus_Accepted = '2'
  static OrderStatus_Finished = '3'


  constructor(private http:Http) { }

  get(searchParam):Observable<OrderInfo[]> {
    if(searchParam) {
      let urlSearchParams: URLSearchParams = new URLSearchParams();
      for(let key in searchParam){
        urlSearchParams.append(key, searchParam[key])
      }
      return this.http.get('/api/order?' + urlSearchParams.toString()).map(res => res.json())
    }else{
      return new Observable(observer => {observer.next(null);observer.complete()})
    }
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
