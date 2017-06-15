import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ConfigService} from "../../share/services/config.service";
import {Http, RequestMethod, RequestOptions, Headers} from "@angular/http";
import {unescape} from "querystring";
import {AuthService} from "../../share/services/auth.service";
import {UserService} from "../../share/services/user.service";

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  accountInfo: object = {}
  constructor(private authService: AuthService, private userService: UserService) { }
  ngOnInit() {
    console.debug('CustomerViewComponent init')
    if(this.authService.loggedIn()){
      this.userService.get().subscribe(
        data => {
          this.accountInfo = (data && data.id) ? data : {}
        }
      )
    }else{
      this.authService.loginOauth2()

    }
  }

  onSelect($event) {
    //console.log($event)
  }



}
