import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-weight-inquiry',
  templateUrl: './weight-inquiry.component.html',
  styleUrls: ['./weight-inquiry.component.css']
})
export class WeightInquiryComponent implements OnInit {

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
  onSave(){}
}
