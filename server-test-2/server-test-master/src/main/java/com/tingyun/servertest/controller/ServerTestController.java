package com.tingyun.servertest.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class ServerTestController {

    @RequestMapping("server-test")
    public Object getServerTestResult() {
        Map<String, Object> map = new HashMap<>();
        map.put("success", "true");
        return map;
    }
}
