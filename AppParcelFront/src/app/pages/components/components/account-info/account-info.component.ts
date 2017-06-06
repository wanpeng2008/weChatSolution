import {Component, OnInit, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccountInfoComponent implements OnInit {

  isEditStatus:boolean
  constructor() { }

  ngOnInit() {
    console.debug('AccountInfoComponent init')
    this.isEditStatus = false
  }


}
