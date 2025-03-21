package toobia.com.inventory.modules.item.controller.dtos;

import toobia.com.inventory.modules.equipment.controller.dtos.EquipmentDto;
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
