package com.tingyun.servertest.bean;

import lombok.Data;
import org.springframework.http.HttpStatus;

@Data
public class Message<T> {
    int code;
    //向前端返回的内容
    String message;

    T data;

    public Message() {
    }

    public Message(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public Message(int code, String message, T data) {
        this.data = data;
        this.code = code;
        this.message = message;
    }

    public static <T> Message<T> custom(int code, String message, T data) {
        return new Message(code, message, data);
    }

    public static <T> Message<T> custom(int code, String message) {
        return new Message(code, message);
    }

    public static HttpStatus num2HttpStatus(int code) {
        HttpStatus status = HttpStatus.NOT_FOUND;
        for (HttpStatus httpStatus : HttpStatus.values()) {
            boolean b = code == httpStatus.value();
            if (b) {
                return httpStatus;
            }
        }
        return status;
    }
}
