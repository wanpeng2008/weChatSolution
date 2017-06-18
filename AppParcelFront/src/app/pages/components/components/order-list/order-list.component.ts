import {Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output} from '@angular/core';
import {OrderService} from "../../../../share/services/order.service";
import {OrgService} from "../../../../share/services/org.service";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, OnChanges {

  @Input() title:string = ''
  @Input() subTitle:string = '可下拉刷新'
  @Input() accountInfo
  @Input() orderList
  @Output() refreshOrderList = new EventEmitter()
  constructor(private orderService: OrderService, private orgService: OrgService) { }

  currentView:string = 'list'
  //openId:string = ""
  currentOrder: object = {}
  ngOnInit() {
    console.debug('OrderListComponent init')
    this.showList()

  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['accountInfo']) {
      let currentValue = changes['accountInfo'].currentValue
      let previousValue = changes['accountInfo'].previousValue
      if (currentValue && currentValue.openId
        && (!previousValue || currentValue.openId !== previousValue.openId)) {
        //this.openId = currentValue.openId
        this.showList()
      }
    }
  }
  showItem(item){
    this.currentView = 'item'
    this.currentOrder = item
  }
  showList(){
    this.currentView = 'list'
    this.refreshOrderList.emit()
  }

}
