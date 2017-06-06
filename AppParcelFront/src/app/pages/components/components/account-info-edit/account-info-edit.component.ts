import {Component, OnInit, ViewEncapsulation, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-account-info-edit',
  templateUrl: './account-info-edit.component.html',
  styleUrls: ['./account-info-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccountInfoEditComponent implements OnInit {

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
