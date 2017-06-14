package com.example.demo.repository.primaryDB;



import com.example.demo.entity.primaryDB.WechatApp;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

/**
 * Created by pengwan on 2017/5/15.
 */
public interface WechatAppRepository extends JpaRepository<WechatApp, UUID> {
    WechatApp findByAccessPath(String accessPath);
}
