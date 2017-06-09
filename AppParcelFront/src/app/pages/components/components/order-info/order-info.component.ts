import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent implements OnInit {

  mailInfo:any = {
    content: '鼠标',
    status: '已反馈',
    mailId: '111',
    createTime: '1111',
    assignTime:'111',
    takenTime: '111',
    finishTime: '111',
    sender: {
      name: '张三',
      contact: '12233322221',
      province: '',
      city: '',
      county:'',
      address: '复兴路111'
    },
    receiver: {
      name: '李四',
      contact: '12233322221',
      province: '',
      city: '',
      county:'',
      address: '复兴路222'
    },
  }


  constructor() { }

  title=`
    订单信息
  `
  ngOnInit() {
  }
  @Output() backEvent = new EventEmitter<any>()
  back(){
    this.backEvent.emit()
  }

}
