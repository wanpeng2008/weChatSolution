import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccountInfoComponent implements OnInit {


  ngOnInit() {
    console.debug('AccountInfoComponent init')
  }
  res: any = {
    cho2: true,
    worldpost: '1',
    contact: '1',
    country: '1',
    agree: true
  };

  radio: any[] = [
    { id: 1, name: 'asdf1' },
    { id: 2, name: 'asdf2' }
  ];
  checkbox: any[] = [ 'A', 'B' ];

  constructor() {
    this.res.radio = this.radio[0];
    this.res.checkbox = [ this.checkbox[0] ];
  }

  onAddCheckbox() {
    this.checkbox.push(String.fromCharCode(65 + this.checkbox.length))
  }

  onSendCode(): Observable<boolean> {
    return Observable.timer(1000).map((v, i) => { return true; });
  }

  onSave() {
    alert('请求数据：' + JSON.stringify(this.res));
  }

}
