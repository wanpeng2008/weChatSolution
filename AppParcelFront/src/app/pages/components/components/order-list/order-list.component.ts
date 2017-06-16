import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {OrderService} from "../../../../share/services/order.service";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, OnChanges {

  @Input() title:string = ''
  @Input() subTitle:string = '可下拉刷新'
  @Input() accountInfo
  constructor(private orderService: OrderService) { }

  currentView:string = 'list'
  orderList: OrderInfo[] = []
  openId:string = ""
  ngOnInit() {
    console.debug('OrderListComponent init')
    this.showList()
  }
  ngOnChanges(changes: SimpleChanges): void {
    let currentValue = changes['accountInfo'].currentValue
    if (currentValue && currentValue.openId && currentValue.openId!==this.openId) {
      this.openId = currentValue.openId
      this.showList()
    }
  }
  showItem(itemName){
    this.currentView = itemName
  }
  showList(){
    this.currentView = 'list'
    if(this.openId) {
      this.orderService.get(this.openId).subscribe(
        res => this.orderList = res
      )
    }
  }

}
