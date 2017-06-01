import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-info-view',
  templateUrl: './account-info-view.component.html',
  styleUrls: ['./account-info-view.component.css']
})
export class AccountInfoViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.debug('AccountInfoViewComponent init')
  }

  onEdit(){
    this.router.navigateByUrl('/pages/tab-view/account-info/account-info-edit')
    return false
  }

}
