package com.example.demo.service;


import com.example.demo.entity.primaryDB.WechatLocation;
import com.example.demo.repository.primaryDB.WechatLocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by pengwan on 2017/5/16.
 */
@Service
public class WechatLocationService {
    @Autowired
    private WechatLocationRepository wechatLocationRepository;
    public WechatLocation save(WechatLocation wechatLocation) {
        return wechatLocationRepository.save(wechatLocation);
    }
}
