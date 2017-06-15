package com.example.demo.service;

import com.example.demo.entity.secondaryDB.Price;
import com.example.demo.entity.vo.PriceVO;
import com.example.demo.repository.secondaryDB.PriceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by pengwan on 2017/6/14.
 */
@Service
public class PriceService {
    @Autowired
    private PriceRepository priceRepository;
    public Price getByOrgcCode(String orgCode) {
        String province = orgCode;
        return this.priceRepository.findByProvince(province);
    }
}
