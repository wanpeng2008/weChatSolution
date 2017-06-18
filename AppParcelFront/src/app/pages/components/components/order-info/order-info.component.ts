import {Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges} from '@angular/core';
import {OrgService} from "../../../../share/services/org.service";
import {OrderService} from "../../../../share/services/order.service";

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent implements OnInit, OnChanges {

  constructor(private orderService: OrderService, private orgService: OrgService) { }

  openId:string = ""
  fromProvinceList: object[] = []
  fromCityList: object[] = []
  fromCountyList: object[] = []
  toProvinceList: object[] = []
  toCityList: object[] = []
  toCountyList: object[] = []

  title=`
    订单信息
  `
  ngOnInit() {
    this.orgService.getProvinceList().subscribe(
      provinceList => {
        this.fromProvinceList = provinceList
        this.toProvinceList = provinceList
      }
    )
  }
  @Input() orderInfo = {}
  @Output() backEvent = new EventEmitter<any>()
  back(){
    this.backEvent.emit()
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['orderInfo']){
      let currentValue = changes['orderInfo'].currentValue
      if (currentValue){
        if(currentValue.province) {
          this.orgService.getCityList(currentValue.province).subscribe(
            cityList => this.fromCityList = cityList
          )
        }
        if(currentValue.city){
          this.orgService.getCountyList(currentValue.city).subscribe(
            countyList => this.fromCountyList = countyList
          )
        }
        if(currentValue.customer2Province) {
          this.orgService.getCityList(currentValue.customer2Province).subscribe(
            cityList => this.toCityList = cityList
          )
        }
        if(currentValue.customer2City){
          this.orgService.getCountyList(currentValue.customer2City).subscribe(
            countyList => this.toCountyList = countyList
          )
        }
      }
    }
  }

  canAccept(){
    return this.orderInfo['flag'] == OrderService.OrderStatus_Waiting
  }
  canFinish(){
    return this.orderInfo['flag'] == OrderService.OrderStatus_Accepted
  }
}
