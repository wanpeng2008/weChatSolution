package com.example.demo.service;


import com.example.demo.entity.WechatMsg;
import com.example.demo.repository.WechatMsgRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by pengwan on 2017/5/15.
 */
@Service
public class WechatMsgService {
    @Autowired
    WechatMsgRepository wechatMsgRepository;
    public WechatMsg save(WechatMsg wechatMsg) {
        return wechatMsgRepository.save(wechatMsg);
    }
}
