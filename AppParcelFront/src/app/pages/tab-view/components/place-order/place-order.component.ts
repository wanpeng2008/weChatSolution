import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  @Output() updateSuccessEvent = new EventEmitter<any>()
  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  res: any = {
    agree: true
  };


  onSendCode(): Observable<boolean> {
    return Observable.timer(1000).map((v, i) => { return true; });
  }

  onSave() {
    //alert('请求数据：' + JSON.stringify(this.res));
    this.updateSuccessEvent.emit()
  }
}
