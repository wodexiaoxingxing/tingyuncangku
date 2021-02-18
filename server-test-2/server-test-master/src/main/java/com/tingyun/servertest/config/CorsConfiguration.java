package com.tingyun.servertest.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfiguration implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("GET", "POST", "OPTIONS")
                .allowedHeaders("Content-Type", "Access-Control-Allow-Headers", "Authorization", "X-Requested-With", "X-Auth-Key", "accountId","X-Tingyun", "EagleEye-TraceID","X-Tingyun-Id","wjn_apm_header","apm-trace-id","wjn_test")
                .exposedHeaders("X-Tingyun-Data")
                .allowCredentials(false)
                .maxAge(3600);
    }
}
