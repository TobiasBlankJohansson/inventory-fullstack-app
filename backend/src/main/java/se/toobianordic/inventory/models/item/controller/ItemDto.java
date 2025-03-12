package se.toobianordic.inventory.models.item.controller;

import se.toobianordic.inventory.models.item.model.Item;

public record ItemDto
        (String id,
         String name,
         String quantity,
         String storageArea) {
    public static ItemDto fromItem(Item item) {
        return new ItemDto(item.getId(), item.getName(), item.getQuantity(), item.getStorageArea());
    }
}
