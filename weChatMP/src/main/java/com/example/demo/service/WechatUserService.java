package com.example.demo.service;


import com.example.demo.entity.WechatUser;
import com.example.demo.repository.WechatUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by pengwan on 2017/5/16.
 */
@Service
public class WechatUserService {
    @Autowired
    private WechatUserRepository wechatUserRepository;
    public WechatUser save(WechatUser wechatUser){
        return wechatUserRepository.save(wechatUser);
    }
}
