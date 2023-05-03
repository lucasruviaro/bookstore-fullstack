package com.lucas.bookstoreapi.repository.projection;

import java.time.LocalDateTime;

public interface PurchaseItem {
    
    String getTitle();
    Double getPrice();
    LocalDateTime getPurchaseTime();

}