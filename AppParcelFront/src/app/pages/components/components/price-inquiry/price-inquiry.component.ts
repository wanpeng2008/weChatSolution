import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrgService} from "../../../../share/services/org.service";

@Component({
  selector: 'app-price-inquiry',
  templateUrl: './price-inquiry.component.html',
  styleUrls: ['./price-inquiry.component.css']
})
export class PriceInquiryComponent implements OnInit {

  provinceList: object[] = []
  constructor(private orgService:OrgService) { }

  ngOnInit() {
    this.orgService.getProvinceList().subscribe(
      provinceList => {
        this.provinceList = provinceList
      }
    )
  }
  res: any = {
    agree: true
  };
  @Output() backEvent = new EventEmitter<any>()
  back(){
    this.backEvent.emit()
  }
}
