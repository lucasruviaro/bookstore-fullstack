package com.lucas.bookstoreapi.service;

import java.util.List;

import com.lucas.bookstoreapi.model.PurchaseHistory;
import com.lucas.bookstoreapi.repository.projection.PurchaseItem;

public interface PurchaseHistoryService {
    
    PurchaseHistory savePurchaseHistory(PurchaseHistory purchaseHistory);

    List<PurchaseItem> findPurchasedItemsOfUser(Long userId);

}