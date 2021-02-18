package com.tingyun.servertest.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * <p>
 *
 * @Auther: jyn
 * @Date: 2020/7/24 13:14
 */
@RequestMapping("static")
@Controller
public class PageViewController {


    @RequestMapping("page1")
    public String page1() {
        return "page1";
    }

    @RequestMapping("page2")
    public String page2() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return "page2";
    }

}
