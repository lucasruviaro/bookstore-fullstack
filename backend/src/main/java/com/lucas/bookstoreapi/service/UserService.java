package com.lucas.bookstoreapi.service;

import java.util.Optional;

import com.lucas.bookstoreapi.model.User;

public interface UserService {
    
    User saveUser(User user);
    
    Optional<User> findByUsername(String username); 
    
    void makeAdmin(String username);
    
}