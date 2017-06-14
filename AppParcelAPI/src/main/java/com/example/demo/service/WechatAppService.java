package com.example.demo.service;


import com.example.demo.entity.primaryDB.WechatApp;
import com.example.demo.repository.primaryDB.WechatAppRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by pengwan on 2017/5/15.
 */
@Service
public class WechatAppService {
    @Autowired
    private WechatAppRepository wechatAppRepository;
    public WechatApp getByAccessPath(String accessPath) {
        return wechatAppRepository.findByAccessPath(accessPath);
    }
}
