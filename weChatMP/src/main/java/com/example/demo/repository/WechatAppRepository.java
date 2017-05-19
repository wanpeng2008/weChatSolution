package com.example.demo.repository;



import com.example.demo.entity.WechatApp;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

/**
 * Created by pengwan on 2017/5/15.
 */
public interface WechatAppRepository extends JpaRepository<WechatApp, UUID> {
    WechatApp findByAccessPath(String accessPath);

    WechatApp findById(UUID id);

    Page<WechatApp> findAll(Specification<WechatApp> spec, Pageable pageable);
}
