package com.tingyun.servertest.service;

import com.tingyun.servertest.bean.Product;
import com.tingyun.servertest.bean.QueryParam;
import com.tingyun.servertest.bean.Shop;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private List<Product> productList;
    @PostConstruct
    public void init() {
        List<Product> productList = new ArrayList<>();
        productList.add(new Product(1, "苹果", "4.jpg", "1元"));
        productList.add(new Product(2, "香蕉", "2.jpg", "1元"));
        productList.add(new Product(3, "草莓", "1.jpg", "1元"));
        productList.add(new Product(4, "汉堡", "3.jpg", "1元"));
        productList.add(new Product(5, "橘子", "5.jpg", "1元"));
        this.productList = productList;
    }
    public Object getProductList(QueryParam queryParam) {
        return this.productList;
    }

    public Object getProductDetail(QueryParam param) {
        int productId = param.getProductId();
        Optional<Product> first = productList.stream().filter(product -> product.getId() == productId).findFirst();
        return first.orElse(null);
    }
}
