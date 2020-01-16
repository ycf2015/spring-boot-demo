package com.example.demo.service.impl;

import com.example.demo.dao.ProductIdDao;
import com.example.demo.entity.ProductId;
import com.example.demo.service.ProductIdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ProductIdServiceImpl implements ProductIdService {

    @Autowired
    private ProductIdDao productIdDao;

    @Override
    public ProductId findProductIdById(String productId) {
        return productIdDao.findProductIdById(productId);
    }
}
