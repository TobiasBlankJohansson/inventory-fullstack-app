package toobia.se.inventory.modules.item.controller.dtos;

import toobia.se.inventory.modules.equipment.controller.dtos.EquipmentDto;
import toobia.se.inventory.modules.item.model.Item;

import java.util.List;
import java.util.UUID;

public record ItemDto(UUID id, EquipmentDto equipment, int quantity, String storageArea, String responsible) {

    public static ItemDto from(Item item) {
        return new ItemDto(
                item.getId(),
                EquipmentDto.from(item.getEquipment()),
                item.getAmount(),
                item.getStorage().getName(),
                item.getResponsible().getName()
        );
    }

    public static List<ItemDto> listFrom(List<Item> item) {
        return item.stream().map(ItemDto::from).toList();
    }
}
