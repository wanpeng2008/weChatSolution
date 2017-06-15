import {Component, OnInit, Output, EventEmitter, ViewEncapsulation, Input} from '@angular/core';
import {Router} from "@angular/router";
import {OrgService} from "../../../../share/services/org.service";

@Component({
  selector: 'app-account-info-view',
  templateUrl: './account-info-view.component.html',
  styleUrls: ['./account-info-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccountInfoViewComponent implements OnInit {

  @Input() accountInfo
  @Output() editEvent = new EventEmitter<any>()
  provinceList:object[] = []
  cityList: object[] = []
  countyList: object[] = []
  constructor(private orgService:OrgService) { }

  ngOnInit() {
    console.debug('AccountInfoViewComponent init')
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
  onEdit(){
    this.editEvent.emit()
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
