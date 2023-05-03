package com.lucas.bookstoreapi.service;

import com.lucas.bookstoreapi.model.User;

public interface AuthenticationService {
    
    User signInAndReturnJWT(User signInRequest);
}
