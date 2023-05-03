package com.lucas.bookstoreapi.service.impl;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lucas.bookstoreapi.model.PurchaseHistory;
import com.lucas.bookstoreapi.repository.PurchaseHistoryRepository;
import com.lucas.bookstoreapi.repository.projection.PurchaseItem;
import com.lucas.bookstoreapi.service.PurchaseHistoryService;

@Service
public class PurchaseHistoryServiceImpl implements PurchaseHistoryService{
    
    @Autowired
    private PurchaseHistoryRepository purchaseHistoryRepository;

    @Override
    public PurchaseHistory savePurchaseHistory(PurchaseHistory purchaseHistory)
    {
        purchaseHistory.setPurchaseTime(LocalDateTime.now());

        return purchaseHistoryRepository.save(purchaseHistory);
    }

    @Override
    public List<PurchaseItem> findPurchasedItemsOfUser(Long userId)
    {
        return purchaseHistoryRepository.findAllPurchasesOfUser(userId);
    }

}
