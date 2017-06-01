import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.css']
})
export class TabViewComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    console.debug('TabViewComponent init')
  }
  time: number;
  onSelect($event) {
    //console.log($event)
    if($event.heading==='我的账户'){
      //console.log(this.router.url+'/account-info')
      //this.router.navigateByUrl('/pages/tab-view/account-info/view')
      //return false
    }
    this.time = new Date().getTime();
  }

}
