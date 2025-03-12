package se.toobianordic.inventory.models.item.controller;

import se.toobianordic.inventory.models.item.model.Item;

import java.util.List;

public record ItemDto
        (String id,
         String name,
         String quantity,
         String storageArea) {
    public static ItemDto fromItem(Item item) {
        return new ItemDto(item.getId(), item.getName(), item.getQuantity(), item.getStorageArea());
    }

    public static List<ItemDto> fromItemList(List<Item> items) {
        return items.stream().map(ItemDto::fromItem).toList();
    }
}
