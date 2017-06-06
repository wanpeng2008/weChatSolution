import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor() { }

  showOrderInfoFlag:boolean = false
  ngOnInit() {
    console.debug('OrderListComponent init')
  }
  showOrderInfo(){
    this.showOrderInfoFlag = true
  }
  showOrderList(){
    this.showOrderInfoFlag = false
  }

}
