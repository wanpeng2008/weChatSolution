package com.example.demo.controller;

import com.example.demo.entity.WechatApp;
import com.example.demo.model.WechatAppVO;
import com.example.demo.service.WechatAppService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

/**
 * Created by pengwan on 2017/5/18.
 */
@RestController
@RequestMapping("/wechatApp")
public class WechatAppController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private WechatAppService wechatAppService;

    @GetMapping(value = "/{id}", produces = "application/json;charset=UTF-8")
    @ResponseBody
    public WechatApp getById(@PathVariable(value="id" ,required =true ) UUID id){
        return wechatAppService.getById(id);
    }
    @GetMapping(produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Page<WechatApp> pageList(WechatAppVO wechatAppVO, @RequestParam(name="page",required = false, defaultValue = "0") Integer  page, @RequestParam (name="size",required = false, defaultValue = "20") Integer  size){
        Sort sort = new Sort(Sort.Direction.DESC, "createTime");
        Pageable pageable = new PageRequest(page, size, sort);
        return wechatAppService.findByWechatAppVO(wechatAppVO,pageable);
    }
}




