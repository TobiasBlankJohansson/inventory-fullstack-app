package toobia.se.inventory.modules.item.controller;

import org.springframework.web.bind.annotation.*;
import toobia.se.inventory.modules.item.model.Item;
import toobia.se.inventory.modules.item.controller.dtos.ItemCreateDto;
import toobia.se.inventory.modules.item.controller.dtos.ItemDto;
import toobia.se.inventory.modules.item.controller.dtos.ItemListDto;
import toobia.se.inventory.modules.item.controller.dtos.ItemUpdateDto;
import toobia.se.inventory.modules.item.service.ItemService;

import java.util.List;
import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping("/api/items")
public class ItemController {

    private final ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @PostMapping
    public ItemDto createItem(@RequestBody ItemCreateDto itemCreateDto) {
        Item item = itemService.createItem(itemCreateDto);
        return ItemDto.from(item);
    }

    @GetMapping
    public ItemListDto getAllItems() {
        List<Item> items = itemService.findAll();
        return ItemListDto.from(items);
    }

    @GetMapping("/{id}")
    public ItemDto getItemById(@PathVariable UUID id) {
        return ItemDto.from(itemService.findById(id));
    }


    @PutMapping
    public ItemDto updateItem(@RequestBody ItemUpdateDto itemUpdateDto) {
        Item item = itemService.updateItem(itemUpdateDto);
        return ItemDto.from(item);
    }

    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable UUID id) {
        itemService.deleteItem(id);
    }

}
