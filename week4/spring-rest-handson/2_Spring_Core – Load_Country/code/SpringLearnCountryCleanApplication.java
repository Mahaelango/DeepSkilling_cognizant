package com.cognizant.spring_learn_country_clean;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {
    "com.cognizant.spring_learn_country_clean",
    "com.cognizant.jwt"
})
public class SpringLearnCountryCleanApplication {
    public static void main(String[] args) {
        SpringApplication.run(SpringLearnCountryCleanApplication.class, args);
    }
}
