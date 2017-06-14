package com.example.demo.controller;

import com.example.demo.entity.secondaryDB.Customer;
import com.example.demo.entity.vo.CustomerVO;
import com.example.demo.service.CustomerService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by pengwan on 2017/6/14.
 */
@RestController
@RequestMapping("${wechat.userPath}")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @GetMapping(value = "/{openId}", produces = "application/json;charset=utf-8")
    @ResponseBody
    CustomerVO get(@PathVariable String openId){
        Customer customer = this.customerService.getByOpenId(openId);
        CustomerVO result = new CustomerVO();
        BeanUtils.copyProperties(customer, result);
        return result;
    }
    @PostMapping(produces = "application/json;charset=utf-8")
    @ResponseBody
    CustomerVO saveInsert(@RequestBody CustomerVO customerVO){
        Customer customer = new Customer();
        BeanUtils.copyProperties(customerVO, customer);
        return this.save(customer);
    }
    @PostMapping(value = "/{openId}", produces = "application/json;charset=utf-8")
    @ResponseBody
    CustomerVO saveUpdate(@PathVariable String openId, @RequestBody CustomerVO customerVO){
        Customer customer = this.customerService.getByOpenId(openId);
        BeanUtils.copyProperties(customerVO, customer);
        return this.save(customer);
    }
    private CustomerVO save(Customer customer){
        Customer savedCustomer = this.customerService.save(customer);
        CustomerVO result = new CustomerVO();
        BeanUtils.copyProperties(savedCustomer, result);
        return result;
    }
}
