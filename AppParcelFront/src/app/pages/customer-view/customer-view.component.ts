import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ConfigService} from "../../share/services/config.service";
import {Http, RequestMethod, RequestOptions, Headers} from "@angular/http";
import {unescape} from "querystring";
import {AuthService} from "../../share/services/auth.service";
import {UserService} from "../../share/services/user.service";
import {OrderService} from "../../share/services/order.service";

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  accountInfo: object = {}
  orderList: object[] = []
  tabActive = {
    'place-order': false,
    'my-orders': false,
    'info-inquiry': false,
    'account-info': true
  }

  constructor(private authService: AuthService,
              private userService: UserService,
              private orderService: OrderService) { }
  ngOnInit() {
    console.debug('CustomerViewComponent init')
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
        this.loadOrderList()
      }
    )
  }
  private loadOrderList(){
    if(this.accountInfo) {
      let openId = this.accountInfo['openId']
      if (openId != null) {
        this.orderService.get({'customerOpenid':openId}).subscribe(
          data => {
            this.orderList = data
          }
        )
      }
    }
  }

/*  refreshAccountInfo($event) {
    console.log($event)
    this.accountInfo = $event
  }*/
  refreshOrderList(){
    this.loadOrderList()
  }
  createOrderSuccess($event){
    this.setTabActive('my-orders')
    this.loadOrderList()
  }
  setTabActive(tabName){
    for(let key in this.tabActive){
      this.tabActive[key] = (key === tabName)
    }
  }



}
