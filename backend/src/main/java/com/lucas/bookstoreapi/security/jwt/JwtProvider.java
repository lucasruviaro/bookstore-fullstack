package com.lucas.bookstoreapi.security.jwt;

import org.springframework.security.core.Authentication;

import com.lucas.bookstoreapi.security.UserPrincipal;

import jakarta.servlet.http.HttpServletRequest;

public interface JwtProvider{

    String generateToken(UserPrincipal auth);

    Authentication getAuthentication(HttpServletRequest request);

    boolean validateToken(HttpServletRequest request);
    
}
