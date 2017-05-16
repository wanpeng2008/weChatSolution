package com.example.demo.repository;



import com.example.demo.entity.WechatLocation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

/**
 * Created by pengwan on 2017/5/16.
 */
public interface WechatLocationRepository extends JpaRepository<WechatLocation, UUID> {
}
