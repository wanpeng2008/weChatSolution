import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent implements OnInit {

  @Output() backEvent = new EventEmitter<any>()
  constructor() { }

  title=`
    订单信息
  `
  ngOnInit() {
  }

  back(){
    this.backEvent.emit()
  }

}
