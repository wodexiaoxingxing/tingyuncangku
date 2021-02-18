package com.tingyun.servertest.controller;

import com.tingyun.servertest.bean.JSONResult;
import com.tingyun.servertest.bean.QueryParam;
import com.tingyun.servertest.service.ShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("shop")
public class ShopController {

    @Autowired
    private ShopService shopService;

    @RequestMapping("list")
    public Object shopList(@RequestBody QueryParam param) {
//        if(1==1){
//            throw new RuntimeException("test");
//        }
        return JSONResult.success(shopService.getShopList(param));
    }
}
