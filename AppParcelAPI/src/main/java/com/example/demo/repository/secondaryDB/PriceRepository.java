package com.example.demo.repository.secondaryDB;

import com.example.demo.entity.secondaryDB.Price;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by pengwan on 2017/6/14.
 */
public interface PriceRepository extends JpaRepository<Price, Long> {
    Price findByProvince(String province);
}
