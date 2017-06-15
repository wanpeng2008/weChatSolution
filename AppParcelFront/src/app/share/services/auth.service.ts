import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {ConfigService} from "./config.service";
import {environment} from "../../../environments/environment";

@Injectable()
export class AuthService {

  constructor(private http: Http, private configService: ConfigService) {
  }

  storage = window.sessionStorage

  public loggedIn(): boolean {
    return this.storage.getItem('openId') != null
  }

  loginOauth2() {
    if(environment.local){
      this.storage.setItem('openId', 'myOpenId')
      return
    }
    let code = this.storage.getItem('code')
    if (code) {
      this.http.get('/wechat/auth?code=' + code).map(res => res.json()).subscribe(
        data => {
          if (data && data.openId) {
            let openId: string = data.openId
            this.storage.setItem('openId', openId)
          }
        }
      )
    } else {
      this.redirectToGetCode()
    }

  }

  redirectToGetCode() {
    this.storage.setItem('back_url', location.href)
    let authUrl = 'http://wechat.googleview.com.cn/assets/htmls/auth.html'
    let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + this.configService.getAppId() + '&redirect_uri=' + encodeURIComponent(authUrl) + '&response_type=code&scope=snsapi_base&state=STATE%23wechat_redirect&connect_redirect=1#wechat_redirect';
    location.href = url;
  }

  getUserInfo() {
    let openId = this.storage.getItem('openId')
    return this.http.get('/api/user/'+openId).map(res => res.json())
  }
}
