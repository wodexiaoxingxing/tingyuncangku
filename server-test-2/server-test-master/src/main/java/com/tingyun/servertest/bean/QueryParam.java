package com.tingyun.servertest.bean;

import lombok.Data;

@Data
public class QueryParam {
    private int delay;
    // 经度
    private double lon;
    // 纬度
    private double lat;

    private int shopId;
    private int productId;

}
