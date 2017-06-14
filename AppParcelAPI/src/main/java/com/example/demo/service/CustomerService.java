package com.example.demo.service;

import com.example.demo.entity.secondaryDB.Customer;
import com.example.demo.repository.secondaryDB.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by pengwan on 2017/6/14.
 */
@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;
    public Customer getByOpenId(String openId) {
        return this.customerRepository.findByOpenId(openId);
    }

    public Customer save(Customer customer) {
        return this.customerRepository.save(customer);
    }
}
