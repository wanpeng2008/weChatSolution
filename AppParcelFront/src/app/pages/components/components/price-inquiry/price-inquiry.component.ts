import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-price-inquiry',
  templateUrl: './price-inquiry.component.html',
  styleUrls: ['./price-inquiry.component.css']
})
export class PriceInquiryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  res: any = {
    agree: true
  };
  @Output() backEvent = new EventEmitter<any>()
  back(){
    this.backEvent.emit()
  }
}
