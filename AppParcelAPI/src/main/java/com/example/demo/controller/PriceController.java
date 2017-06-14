package com.example.demo.controller;

import com.example.demo.entity.secondaryDB.Price;
import com.example.demo.entity.vo.PriceVO;
import com.example.demo.repository.secondaryDB.PriceRepository;
import com.example.demo.service.PriceService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

/**
 * Created by pengwan on 2017/6/14.
 */
@RestController
@RequestMapping("${wechat.inqueryPath.price}")
public class PriceController {
    @Autowired
    private PriceService priceService;

    @GetMapping(value = "/{orgCode}", produces = "application/json;charset=utf-8")
    @ResponseBody
    PriceVO get(@PathVariable String orgCode){
        Price price = this.priceService.getByOrgcCode(orgCode);
        PriceVO result = new PriceVO();
        BeanUtils.copyProperties(price, result);
        return result;
    }
}
