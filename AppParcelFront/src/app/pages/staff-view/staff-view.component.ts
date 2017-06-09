import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-staff-view',
  templateUrl: './staff-view.component.html',
  styleUrls: ['./staff-view.component.css']
})
export class StaffViewComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    console.debug('StaffViewComponent init')
  }
  time: number;
  onSelect($event) {
    //console.log($event)
    if($event.heading==='我的账户'){
      //console.log(this.router.url+'/account-info')
      //this.router.navigateByUrl('/pages/staff-view/account-info/view')
      //return false
    }
    this.time = new Date().getTime();
  }

}
