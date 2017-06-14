package com.example.demo.service;

import com.example.demo.entity.secondaryDB.Order;
import com.example.demo.repository.secondaryDB.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by pengwan on 2017/6/14.
 */
@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public Order save(Order order) {
        return this.orderRepository.save(order);
    }

    public Order getOne(Long id) {
        return this.orderRepository.getOne(id);
    }

    public Page<Order> findAll(Specification<Order> spec, Pageable pageable) {
        return this.orderRepository.findAll(spec, pageable);
    }
}
