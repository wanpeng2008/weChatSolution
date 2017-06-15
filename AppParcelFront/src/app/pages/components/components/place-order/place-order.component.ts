import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {OrderService} from "../../../../share/services/order.service";
import {OrgService} from "../../../../share/services/org.service";

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  fromProvinceList:object[] = []
  fromCityList: object[] = []
  fromCountyList: object[] = []

  toProvinceList:object[] = []
  toCityList: object[] = []
  toCountyList: object[] = []

  @Input() accountInfo: AccountInfo
  res: OrderInfo
  constructor(private orgService:OrgService, private orderService: OrderService) {
  }

  ngOnInit() {
    this.res.customerName = this.accountInfo.name
    this.res.customerOpenid = this.accountInfo.openId
    this.res.customerMobile = this.accountInfo.mobile
    this.res.province = this.accountInfo.province
    this.res.city = this.accountInfo.city
    this.res.county = this.accountInfo.county
    this.res.address = this.accountInfo.address

    this.orgService.getProvinceList().subscribe(
      provinceList => {
        this.fromProvinceList = provinceList
        if(this.accountInfo.province){
          this.provinceSelected(this.accountInfo.province)
        }
        if(this.accountInfo.city){
          this.citySelected(this.accountInfo.city)
        }

        this.provinceList = provinceList
        if(this.accountInfo.province){
          this.provinceSelected(this.accountInfo.province)
        }
        if(this.accountInfo.city){
          this.citySelected(this.accountInfo.city)
        }
      }
    )
  }


  fromProvinceSelected(province){
    this.accountInfo.province = province
    this.orgService.getCityList(this.accountInfo.province).subscribe(
      cityList => this.cityList = cityList
    )
  }
  fromCitySelected(city){
    this.accountInfo.city = city
    this.orgService.getCountyList(this.accountInfo.city).subscribe(
      county => this.countyList = county
    )
  }
  fromCountySelected($event){
    this.accountInfo.county = $event
  }


  toProvinceSelected(province){
    this.accountInfo.province = province
    this.orgService.getCityList(this.accountInfo.province).subscribe(
      cityList => this.cityList = cityList
    )
  }
  toCitySelected(city){
    this.accountInfo.city = city
    this.orgService.getCountyList(this.accountInfo.city).subscribe(
      county => this.countyList = county
    )
  }
  toCountySelected($event){
    this.accountInfo.county = $event
  }



  onSendCode(): Observable<boolean> {
    return Observable.timer(1000).map((v, i) => { return true; });
  }

  onSave() {

  }

}

