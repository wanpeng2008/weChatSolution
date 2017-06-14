package com.example.demo.repository.secondaryDB;

import com.example.demo.entity.secondaryDB.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by pengwan on 2017/6/14.
 */
public interface OrderRepository extends JpaRepository<Order, Long> {
    Page<Order> findAll(Specification<Order> spec, Pageable pageable);
}
