package toobia.com.inventory.controller.web;

import toobia.com.inventory.model.Item;

import java.util.UUID;

public record ItemDto(EquipmentDto equipment, String responsible, String storage, int amount, UUID id) {

    public static ItemDto from(Item item) {
        return new ItemDto(
                new EquipmentDto(item.getEquipment().getEquipmentName(),item.getEquipment().getEquipmentId()),
                item.getResponsible().getName(),
                item.getStorage().getName(),
                item.getAmount(),
                item.getId()
        );
    }
}
