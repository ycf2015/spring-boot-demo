package com.example.demo.controller;

import com.example.demo.entity.ProductId;
import com.example.demo.service.ProductIdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {

    @Autowired
    ProductIdService productIdService;

    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public ProductId findProductIdById (@RequestParam(value = "productId") String productId) {
        return productIdService.findProductIdById(productId);
    }
}
