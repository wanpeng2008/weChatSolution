import {Component, OnInit, EventEmitter, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {OrderService} from "../../../../share/services/order.service";
import {OrgService} from "../../../../share/services/org.service";

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit, OnChanges {

  fromProvinceList:object[] = []
  fromCityList: object[] = []
  fromCountyList: object[] = []

  toProvinceList:object[] = []
  toCityList: object[] = []
  toCountyList: object[] = []

  @Input() accountInfo: AccountInfo
  res: OrderInfo = <OrderInfo>{}
  constructor(private orgService:OrgService, private orderService: OrderService) {
  }

  ngOnInit() {
    this.orgService.getProvinceList().subscribe(
      provinceList => {
        this.fromProvinceList = provinceList
        if(this.res.province){
          this.fromProvinceSelected(this.res.province)
        }
        if(this.res.city){
          this.fromCitySelected(this.res.city)
        }

        this.toProvinceList = provinceList
        if(this.res.customer2Province){
          this.toProvinceSelected(this.res.customer2Province)
        }
        if(this.res.customer2City){
          this.toCitySelected(this.res.customer2City)
        }
      }
    )
  }

  ngOnChanges(changes: SimpleChanges): void {
    let currentValue = changes['accountInfo'].currentValue
    if(currentValue){
      this.res.customerName = currentValue.name
      this.res.customerOpenid = currentValue.openId
      this.res.customerMobile = currentValue.mobile
      this.res.province = currentValue.province
      this.res.city = currentValue.city
      this.res.county = currentValue.county
      this.res.address = currentValue.address
      if(this.res.province){
        this.fromProvinceSelected(this.res.province)
      }
      if(this.res.city){
        this.fromCitySelected(this.res.city)
      }
    }
  }

  fromProvinceSelected(province){
    this.res.province = province
    this.orgService.getCityList(province).subscribe(
      cityList => this.fromCityList = cityList
    )
  }
  fromCitySelected(city){
    this.res.city = city
    this.orgService.getCountyList(city).subscribe(
      county => this.fromCountyList = county
    )
  }
  fromCountySelected($event){
    this.res.county = $event
  }

  toProvinceSelected(province){
    this.res.customer2Province = province
    this.orgService.getCityList(province).subscribe(
      cityList => this.toCityList = cityList
    )
  }
  toCitySelected(city){
    this.res.customer2City = city
    this.orgService.getCountyList(city).subscribe(
      county => this.toCountyList = county
    )
  }
  toCountySelected($event){
    this.res.customer2County = $event
  }


  onSave() {
    this.orderService.save(this.res).subscribe(
      res => {
        alert('下单成功')
      }
    )
  }

}

