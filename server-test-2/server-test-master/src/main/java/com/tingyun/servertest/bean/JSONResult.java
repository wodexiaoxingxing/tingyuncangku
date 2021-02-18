package com.tingyun.servertest.bean;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class JSONResult<T> extends ResponseEntity<Message> {

    public JSONResult(HttpStatus status) {
        super(status);
    }

    public JSONResult(int code, String msg, T data) {
        super(Message.custom(code, msg, data), HttpStatus.OK);
    }

    public JSONResult(int code, String msg, T data, HttpStatus status) {
        super(Message.custom(code, msg, data), status);
    }

    public static <T> JSONResult<T> success(T data) {
        return new JSONResult(200, "成功", data);
    }

    public static <T> JSONResult<T> fail(T data) {
        return new JSONResult(500, "失败", data);
    }

    public static <T> JSONResult<T> custom(int code, String msg, T data) {
        return new JSONResult(code, msg, data);
    }
}


