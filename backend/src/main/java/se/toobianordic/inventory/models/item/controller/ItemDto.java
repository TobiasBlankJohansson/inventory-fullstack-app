package se.toobianordic.inventory.models.item.controller;

public record ItemDto
        (String id,
         String name,
         String quantity,
         String storageArea) {
}
