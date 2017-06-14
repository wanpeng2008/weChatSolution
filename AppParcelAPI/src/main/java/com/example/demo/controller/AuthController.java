package com.example.demo.controller;

import me.chanjar.weixin.common.exception.WxErrorException;
import me.chanjar.weixin.mp.api.WxMpService;
import me.chanjar.weixin.mp.bean.result.WxMpOAuth2AccessToken;
import me.chanjar.weixin.mp.bean.result.WxMpUser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by pengwan on 2017/6/13.
 */
@RestController
@RequestMapping("${wechat.authPath}")
public class AuthController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private WxMpService wxService;

    /*
    * 根据code获取openId并返回
    * */
    @GetMapping(produces = "text/plain;charset=utf-8")
    public String login(@RequestParam(name = "code") String code) {
        try {
            System.out.println("code = " + code);
            WxMpOAuth2AccessToken wxMpOAuth2AccessToken = this.wxService.oauth2getAccessToken(code);
            System.out.println("openId = " + wxMpOAuth2AccessToken.getOpenId());
            return wxMpOAuth2AccessToken.getOpenId();
            /*
            * only for "scope":"snsapi_userinfo"
            * */
    /*        System.out.println("accessToken = " + wxMpOAuth2AccessToken.getAccessToken());
            WxMpUser wxMpUser = this.wxService.oauth2getUserInfo(wxMpOAuth2AccessToken, "zh_CN");
            System.out.println("openId = " + wxMpUser.getOpenId());
            return wxMpUser.getOpenId();*/
        } catch (WxErrorException e) {
            e.printStackTrace();
            return "";
        }
    }
}
