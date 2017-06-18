import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../share/services/auth.service";
import {UserService} from "../../share/services/user.service";
import {OrderService} from "../../share/services/order.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-staff-view',
  templateUrl: './staff-view.component.html',
  styleUrls: ['./staff-view.component.css']
})
export class StaffViewComponent implements OnInit {
  accountInfo: object = {}
  waitingOrderList: object[] = []
  processingOrderList: object[] = []
  finishedOrderList: object[] = []
  tabActive = {
    'waiting-orders': false,
    'accepted-orders': false,
    'finished-orders': false,
    'info-inquiry': false,
    'account-info': true
  }

  constructor(private authService: AuthService,
              private userService: UserService,
              private orderService: OrderService) { }
  ngOnInit() {
    console.debug('StaffViewComponent init')
    if(this.authService.loggedIn()){
      this.loadAccountInfo()
    }else{
      this.authService.loginOauth2()

    }
  }
  private loadAccountInfo(){
    this.userService.get().subscribe(
      data => {
        this.accountInfo = (data && data.id) ? data : {}
        this.loadWaitingOrderList()
        this.loadProcessingOrderList()
        this.loadFinishedOrderList()
      }
    )
  }
  private loadWaitingOrderList(){
    this.loadOrderList(OrderService.OrderStatus_Waiting).subscribe(
      data => {
        this.waitingOrderList = data
      }
    )
  }
  private loadProcessingOrderList(){
    this.loadOrderList(OrderService.OrderStatus_Accepted).subscribe(
      data => {
        this.processingOrderList = data
      }
    )
  }
  private loadFinishedOrderList(){
    this.loadOrderList(OrderService.OrderStatus_Finished).subscribe(
      data => {
        this.finishedOrderList = data
      }
    )
  }
  private loadOrderList(orderStatus):Observable<object[]>{
    return new Observable( observer => {
      if(this.accountInfo) {
        let openId = this.accountInfo['openId']
        if (openId != null) {
          this.orderService.get({'deliverOpenId':openId, 'flag': orderStatus}).subscribe(
            data => {
              observer.next(data)
              observer.complete()
            }
          )
        }
      }else{
        observer.next([])
        observer.complete()
      }
    })
  }


  acceptOrderSuccess($event){
    this.setTabActive('accepted-orders')
    this.loadProcessingOrderList()
    this.loadWaitingOrderList()
  }
  processOrderSuccess($event){
    this.setTabActive('finished-orders')
    this.loadFinishedOrderList()
    this.loadProcessingOrderList()
  }

  setTabActive(tabName){
    for(let key in this.tabActive){
      this.tabActive[key] = (key === tabName)
    }
  }




}
