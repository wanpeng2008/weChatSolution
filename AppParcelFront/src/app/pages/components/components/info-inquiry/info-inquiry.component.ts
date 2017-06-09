import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-info-inquiry',
  templateUrl: './info-inquiry.component.html',
  styleUrls: ['./info-inquiry.component.css']
})
export class InfoInquiryComponent implements OnInit {

  @Input() title:string = ''
  @Input() subTitle:string = '可下拉刷新'
  @Input() InquiryList:string[] = []
  constructor() { }

  currentView:string = 'list'
  ngOnInit() {
    console.debug('InfoInquiryComponent init')
  }
  showItem(itemName){
    this.currentView = itemName
  }
  showList(){
    this.currentView = 'list'
  }

}
