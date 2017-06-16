package com.example.demo.controller;

import com.example.demo.entity.secondaryDB.Order;
import com.example.demo.entity.vo.OrderVO;
import com.example.demo.service.OrderService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.web.bind.annotation.*;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by pengwan on 2017/6/14.
 */
@RestController
@RequestMapping("${wechat.orderPath}")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @GetMapping(produces = "application/json;charset=utf-8")
    @ResponseBody
    List<OrderVO> getList(OrderVO orderVO,
                          @RequestParam(required = false, defaultValue = "0") Integer  pageNum,
                          @RequestParam (required = false, defaultValue = "10") Integer pageSize){
        Sort sort = new Sort(Sort.Direction.DESC, new String[] { "createDate" });
        Pageable pageable = new PageRequest(pageNum,pageSize,sort);
        Page<Order> orderList;
        Specification<Order> spec = (root, query, cb) ->{
            List<Predicate> predicateList = new ArrayList<>();
            String customerOpenid = orderVO.getCustomerOpenid();
            if(customerOpenid!=null && !customerOpenid.isEmpty()){
                predicateList.add(cb.equal(root.get("customerOpenid").as(String.class),orderVO.getCustomerOpenid()));
            }
            String deliverOpenid = orderVO.getDeliverOpenid();
            if(deliverOpenid!=null && !deliverOpenid.isEmpty()){
                predicateList.add(cb.equal(root.get("deliverOpenid").as(String.class),orderVO.getDeliverOpenid()));
            }
            Integer flag = orderVO.getFlag();
            if(flag!=null && flag>0){
                predicateList.add(cb.equal(root.get("flag").as(Integer.class),orderVO.getFlag()));
            }
            Predicate p = cb.and(predicateList.toArray(new Predicate[predicateList.size()]));
            query.where(p);
            return query.getRestriction();
        };
        orderList= this.orderService.findAll(spec,pageable);
        List<OrderVO> result = new ArrayList<>();
        for(Order order:orderList){
            OrderVO resultOrderVO = new OrderVO();
            BeanUtils.copyProperties(order, resultOrderVO);
            result.add(resultOrderVO);
        }
        return result;
    }

    @GetMapping(value = "/{id}", produces = "application/json;charset=utf-8")
    @ResponseBody
    OrderVO getOne(@PathVariable Long id){
        Order order = this.orderService.getOne(id);
        OrderVO result = new OrderVO();
        BeanUtils.copyProperties(order, result);
        return result;
    }
    @PostMapping(produces = "application/json;charset=utf-8")
    @ResponseBody
    OrderVO save(@RequestBody OrderVO orderVO){
        Long id = orderVO.getId();
        Order order = this.orderService.getOne(id);
        if(order == null){
            order = new Order();
        }
        BeanUtils.copyProperties(orderVO, order);
        order.setModiDate(new Date());
        if(order.getId()==null){
            order.setCreateDate(new Date());
        }
        Order savedOrder = this.orderService.save(order);
        OrderVO result = new OrderVO();
        BeanUtils.copyProperties(savedOrder, result);
        return result;
    }
}
