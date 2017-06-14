package com.example.demo.repository.secondaryDB;

import com.example.demo.entity.secondaryDB.WechatOrg;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by pengwan on 2017/6/14.
 */
public interface WechatOrgRepository extends JpaRepository<WechatOrg, Long> {
}
