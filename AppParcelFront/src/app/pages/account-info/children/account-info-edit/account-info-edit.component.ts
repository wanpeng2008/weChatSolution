import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-info-edit',
  templateUrl: './account-info-edit.component.html',
  styleUrls: ['./account-info-edit.component.css']
})
export class AccountInfoEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.debug('AccountInfoEditComponent init')
  }

}
