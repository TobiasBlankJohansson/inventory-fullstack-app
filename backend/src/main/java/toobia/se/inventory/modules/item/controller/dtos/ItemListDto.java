package toobia.se.inventory.modules.item.controller.dtos;

import toobia.se.inventory.model.Item;

import java.util.List;

public record ItemListDto(List<ItemDto> items) {

    public static ItemListDto from(List<Item> items) {
        return new ItemListDto(items.stream()
                .map(ItemDto::from)
                .toList());
    }
}
