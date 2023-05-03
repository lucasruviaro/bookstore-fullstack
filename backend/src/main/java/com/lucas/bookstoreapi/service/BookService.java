package com.lucas.bookstoreapi.service;

import java.util.List;

import com.lucas.bookstoreapi.model.Book;

public interface BookService {
    
    Book saveBook(Book book);

    void deleteBook(Long id);

    List<Book> findAllBooks();

}