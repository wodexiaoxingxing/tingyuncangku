package com.tingyun.servertest.bean;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Shop {
    private int id;
    private String name;
    private double lon;
    private double lat;
}
