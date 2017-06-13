import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ConfigService} from "../../share/services/config.service";
import {Http, RequestMethod, RequestOptions, Headers} from "@angular/http";
import {unescape} from "querystring";
import {AuthService} from "../../share/services/auth.service";

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  enableDebug = false

  constructor(private route: ActivatedRoute, private configService: ConfigService, private http: Http, private authService: AuthService) { }
  ngOnInit() {
    console.debug('CustomerViewComponent init')

    if(this.authService.loggedIn()){

    }else{
      this.authService.loginOauth2()

    }
  }
  onSelect($event) {
    //console.log($event)
  }



}
