package com.example.demo.service;


import com.example.demo.entity.WechatApp;
import com.example.demo.model.WechatAppVO;
import com.example.demo.repository.WechatAppRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

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

    public WechatApp getById(UUID id) {
        return wechatAppRepository.findById(id);
    }

    public Page<WechatApp> findAll(Specification<WechatApp> spec, Pageable pageable){
        return wechatAppRepository.findAll(spec,pageable);
    }
    public Page<WechatApp> findByWechatAppVO(WechatAppVO wechatAppVO, Pageable pageable) {
        Specification<WechatApp> spec = (root, query, cb) -> {
            List<Predicate> list = new ArrayList<>();
            if(wechatAppVO.getId()!=null){
                list.add(cb.equal(root.get("uuid").as(UUID.class), wechatAppVO.getId()));
            }
            Predicate[] p = new Predicate[list.size()];
            return cb.and(list.toArray(p));
        };
        return this.findAll(spec, pageable);
    }
}
