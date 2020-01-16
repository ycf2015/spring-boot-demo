package com.example.demo.dao;

import com.example.demo.entity.ProductId;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface ProductIdDao {

    ProductId findProductIdById(@Param("productId") String productId);
}
