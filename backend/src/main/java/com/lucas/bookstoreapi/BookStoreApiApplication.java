package com.lucas.bookstoreapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
@PropertySource("classpath:application-${spring.profiles.active:default}.properties")
public class BookStoreApiApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(BookStoreApiApplication.class, args);
	}


}