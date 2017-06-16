import {Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, EventEmitter, Output} from '@angular/core';
import {OrderService} from "../../../../share/services/order.service";
import {OrgService} from "../../../../share/services/org.service";
import {equal} from "assert";

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit, /*OnChanges, */DoCheck {

  fromProvinceList:object[] = []
  fromCityList: object[] = []
  fromCountyList: object[] = []

  toProvinceList:object[] = []
  toCityList: object[] = []
  toCountyList: object[] = []

  @Input() accountInfo: AccountInfo
  @Output() createOrderSuccess = new EventEmitter()
  res: OrderInfo = <OrderInfo>{}

  disableChangeDetect = {
    'province': false,
    'city': false,
    'county':false
  }
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

/*  ngOnChanges(changes: SimpleChanges): void {
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
  }*/

  ngDoCheck() {
    if(this.res != null && this.accountInfo != null ) {
      let changeDetected: boolean = false;
      if (this.res.customerName !== this.accountInfo.name) {
        this.res.customerName = this.accountInfo.name
        if (!changeDetected) changeDetected = true
      }
      if (this.res.customerOpenid !== this.accountInfo.openId) {
        this.res.customerOpenid = this.accountInfo.openId
        if (!changeDetected) changeDetected = true
      }
      if (this.res.customerMobile !== this.accountInfo.mobile) {
        this.res.customerMobile = this.accountInfo.mobile
        if (!changeDetected) changeDetected = true
      }
      if (this.res.province !== this.accountInfo.province ) {
        if(!this.disableChangeDetect['province']){
          this.res.province = this.accountInfo.province
          this.fromProvinceSelected(this.res.province)
          if (!changeDetected) changeDetected = true
        }
      }
      if (this.res.city !== this.accountInfo.city) {
        if(!this.disableChangeDetect['city']){
          this.res.city = this.accountInfo.city
          this.fromCitySelected(this.res.city)
          if (!changeDetected) changeDetected = true
        }
      }
      if (this.res.county !== this.accountInfo.county) {
        if(!this.disableChangeDetect['county']){
          this.res.county = this.accountInfo.county
          if (!changeDetected) changeDetected = true
        }
      }
      if (this.res.address !== this.accountInfo.address) {
        this.res.address = this.accountInfo.address
        if (!changeDetected) changeDetected = true
      }
    }
  }

  fromProvinceSelected(province, manualFlag=false){
    console.debug(province)
    if(manualFlag){
      this.disableChangeDetect['province'] = true
    }
    this.res.province = province
    this.orgService.getCityList(province).subscribe(
      cityList => this.fromCityList = cityList
    )
  }
  fromCitySelected(city, manualFlag=false){
    if(manualFlag){
      this.disableChangeDetect['city'] = true
    }
    this.res.city = city
    this.orgService.getCountyList(city).subscribe(
      countyList => this.fromCountyList = countyList
    )
  }
  fromCountySelected($event, manualFlag=false){
    if(manualFlag){
      this.disableChangeDetect['county'] = true
    }
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
      countyList => this.toCountyList = countyList
    )
  }
  toCountySelected($event){
    this.res.customer2County = $event
  }


  onSave() {
    this.orderService.save(this.res).subscribe(
      res => {
        alert('下单成功')
        this.createOrderSuccess.emit()
      }
    )
  }

}

