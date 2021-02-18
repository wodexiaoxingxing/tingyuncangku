package com.tingyun.servertest.controller;

import com.tingyun.servertest.bean.JSONResult;
import com.tingyun.servertest.bean.QueryParam;
import com.tingyun.servertest.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("product")
public class ProductController {
    @Autowired
    private ProductService productService;

    @RequestMapping("list")
    public Object shopList(@RequestBody QueryParam param) {
        return JSONResult.success(productService.getProductList(param));
    }

    @RequestMapping("getTicket")
    public Object getTicket(@RequestBody QueryParam param) {
        double random = Math.random();
        int code;
        if (random > 0.5) {
            code = 500;
        }else {
            code = 200;
        }
        String message = code == 200 ? "领劵成功" : "领劵失败";
        return JSONResult.custom(code, message, null);
    }

    @RequestMapping("addCart")
    public Object addCart(@RequestBody QueryParam param) {
        double random = Math.random();
        boolean isFail = false;
        if (random > 0.5) {
            isFail = true;
        }
        HttpStatus status = isFail ? HttpStatus.INTERNAL_SERVER_ERROR : HttpStatus.OK;
        String message = isFail ? "加入购物车失败" : "加入购物车成功";
        int code = isFail ? 500 : 200;
        return new JSONResult(code, message, null, status);
    }

    @RequestMapping("detail")
    public Object detail(@RequestBody QueryParam param) {
        return JSONResult.success(productService.getProductDetail(param));
    }

}
