package com.example.demo.repository.secondaryDB;

import com.example.demo.entity.secondaryDB.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by pengwan on 2017/6/14.
 */
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    Customer findByOpenId(String openId);
}
