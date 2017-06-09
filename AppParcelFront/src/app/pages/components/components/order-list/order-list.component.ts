import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  @Input() title:string = ''
  @Input() subTitle:string = '可下拉刷新'
  constructor() { }

  currentView:string = 'list'
  ngOnInit() {
    console.debug('OrderListComponent init')
  }
  showItem(itemName){
    this.currentView = itemName
  }
  showList(){
    this.currentView = 'list'
  }

}
