import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  storage = sessionStorage
  constructor(private router:Router) { }
  ngOnInit() {
    console.debug('CustomerViewComponent init')
    if(this.isLogin()){

    }else{
      var fromurl=location.href;
      var url='https://open.weixin.qq.com/connect/oauth2/authorize?appid=填你自已的appid哟&redirect_uri='+encodeURIComponent(fromurl)+'&response_type=code&scope=snsapi_base&state=STATE%23wechat_redirect&connect_redirect=1#wechat_redirect';
      this.login()
      console.log(url)
      location.href=url;
    }
  }
  time: number;
  onSelect($event) {
    //console.log($event)
    if($event.heading==='我的账户'){
      //console.log(this.router.url+'/account-info')
      //this.router.navigateByUrl('/pages/customer-view/account-info/view')
      //return false
    }
    this.time = new Date().getTime();
  }
  isLogin(){
    return (this.storage.getItem('token')!=null)
  }
  login(){
    this.storage.setItem('token','abc')
  }

}
