package com.tingyun.servertest.service;

import com.tingyun.servertest.bean.QueryParam;
import com.tingyun.servertest.bean.Shop;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class ShopService {

    public Object getShopList(QueryParam queryParam) {

        int delay = queryParam.getDelay();
        if (delay > 0) {
            log.info("Shop List, delay: [{}]", delay);
            try {
                Thread.sleep(delay);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        List<Shop> shopList = new ArrayList<>();
        shopList.add(new Shop(1, "朝阳区", 116.43, 39.92));
        shopList.add(new Shop(2, "宣武区", 116.35, 39.87));
        shopList.add(new Shop(3, "东城区", 116.42, 39.93));
        shopList.add(new Shop(4, "丰台区", 116.28, 39.85));
        shopList.add(new Shop(5, "房山区", 116.13, 39.75));
        shopList.add(new Shop(6, "海淀区", 116.30, 39.95));
        return shopList;
    }
}
