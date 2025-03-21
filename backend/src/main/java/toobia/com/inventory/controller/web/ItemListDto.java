package toobia.com.inventory.controller.web;

import toobia.com.inventory.model.Item;

import java.util.List;

public record ItemListDto(List<ItemDto> items) {

    public static ItemListDto from(List<Item> items) {
        return new ItemListDto(items.stream()
                .map(ItemDto::from)
                .toList());
    }
}
