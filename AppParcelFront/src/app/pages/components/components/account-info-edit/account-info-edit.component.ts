import {
  Component, OnInit, ViewEncapsulation, EventEmitter, Output, OnChanges, SimpleChanges,
  Input
} from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {OrgService} from "../../../../share/services/org.service";

@Component({
  selector: 'app-account-info-edit',
  templateUrl: './account-info-edit.component.html',
  styleUrls: ['./account-info-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccountInfoEditComponent implements OnInit {


  provinceList:object[] = []
  cityList: object[] = []
  countyList: object[] = []
  agree:boolean = true
  @Input() accountInfo
  @Output() saveEvent = new EventEmitter<any>()
  constructor(private orgService: OrgService) {
  }

  ngOnInit() {
    this.orgService.getProvinceList().subscribe(
      provinceList => {
        this.provinceList = provinceList
        if(this.accountInfo.province){
          this.provinceSelected(this.accountInfo.province)
        }
        if(this.accountInfo.city){
          this.citySelected(this.accountInfo.city)
        }
      }
    )
  }


  onSendCode(): Observable<boolean> {
    return Observable.timer(1000).map((v, i) => { return true; });
  }

  onSave() {
    //alert('请求数据：' + JSON.stringify(this.res));
    this.saveEvent.emit(this.accountInfo)
  }
  provinceSelected(province){
    this.accountInfo.province = province
    this.orgService.getCityList(this.accountInfo.province).subscribe(
      cityList => this.cityList = cityList
    )
  }
  citySelected(city){
    this.accountInfo.city = city
    this.orgService.getCountyList(this.accountInfo.city).subscribe(
      county => this.countyList = county
    )
  }
  countySelected($event){
    this.accountInfo.county = $event
  }
}
