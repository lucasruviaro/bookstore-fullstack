package com.lucas.bookstoreapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lucas.bookstoreapi.model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
    
}
