package com.example.demo.repository.primaryDB;



import com.example.demo.entity.primaryDB.WechatUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

/**
 * Created by pengwan on 2017/5/16.
 */
public interface WechatUserRepository extends JpaRepository<WechatUser, UUID> {
}
