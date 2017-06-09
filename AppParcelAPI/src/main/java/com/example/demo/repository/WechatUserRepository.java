package com.example.demo.repository;



import com.example.demo.entity.WechatUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

/**
 * Created by pengwan on 2017/5/16.
 */
public interface WechatUserRepository extends JpaRepository<WechatUser, UUID> {
}
