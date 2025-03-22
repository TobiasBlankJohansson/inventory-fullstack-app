package toobia.se.inventory.modules.item.controller.dtos;

import toobia.se.inventory.modules.equipment.controller.dtos.EquipmentDto;
import toobia.se.inventory.modules.item.model.Item;

import java.util.UUID;

public record ItemDto(UUID id,EquipmentDto equipment, int amount, String storage, String responsible ) {

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
