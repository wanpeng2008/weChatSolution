package com.example.demo.runner;

import com.example.demo.controller.WechatErrorController;
import me.chanjar.weixin.common.bean.menu.WxMenu;
import me.chanjar.weixin.common.bean.menu.WxMenuButton;
import me.chanjar.weixin.common.exception.WxErrorException;
import me.chanjar.weixin.mp.api.WxMpMenuService;
import me.chanjar.weixin.mp.api.WxMpService;
import me.chanjar.weixin.mp.bean.menu.WxMpMenu;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by pengwan on 2017/6/9.
 */
@Component
@Order(value=1)
public class InitWxMenu implements CommandLineRunner {
    private static final Logger logger = LoggerFactory
            .getLogger(WechatErrorController.class);
    @Value("${wechat.menu.reset}")
    private boolean resetMenu;
    @Autowired
    private WxMpService wxService;
    @Override
    public void run(String... strings) throws Exception {
        logger.info("<<<<<<<<<<<<<<<< Running Task: InitWxMenu <<<<<<<<<<<<<<<");
        if(this.resetMenu){
            try{
                this.setMenu();
            }catch (Exception e){
                e.printStackTrace();
            }
        }
        logger.info("<<<<<<<<<<<<<<<< End Task: InitWxMenu <<<<<<<<<<<<<<<");

    }
    public void setMenu() throws WxErrorException {
        WxMpMenuService menuService = this.wxService.getMenuService();
        // delete current menu
        menuService.menuDelete();
        // configure button list
        WxMenuButton wxMenuButton = new WxMenuButton();
        wxMenuButton.setType("view");
        wxMenuButton.setName("点击进入");
        wxMenuButton.setUrl("http://wechat.googleview.com.cn");
        List<WxMenuButton> buttons = new ArrayList<>();
        buttons.add(wxMenuButton);
        // configure and set menu
        WxMenu wxMenu = new WxMenu();
        wxMenu.setButtons(buttons);
        menuService.menuCreate(wxMenu);
    }
}
