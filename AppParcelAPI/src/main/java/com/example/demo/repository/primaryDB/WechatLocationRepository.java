package com.example.demo.repository.primaryDB;



import com.example.demo.entity.primaryDB.WechatLocation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

/**
 * Created by pengwan on 2017/5/16.
 */
public interface WechatLocationRepository extends JpaRepository<WechatLocation, UUID> {
}
