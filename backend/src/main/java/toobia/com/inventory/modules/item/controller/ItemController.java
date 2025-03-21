package toobia.com.inventory.modules.item.controller;

import org.springframework.web.bind.annotation.*;
import toobia.com.inventory.controller.web.*;
import toobia.com.inventory.model.Item;
import toobia.com.inventory.service.ItemService;

import java.util.List;
import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping("/api/items")
public class ItemController {

    private ItemService itemService;

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

    @GetMapping("/{itemId}")
    public ItemDto getItemById(@PathVariable UUID itemId) {
        return ItemDto.from(itemService.findById(itemId));
    }


    @PutMapping
    public ItemDto updateItem(@RequestBody ItemUpdateDto itemUpdateDto) {
        Item item = itemService.updateItem(itemUpdateDto);
        return ItemDto.from(item);
    }

    @DeleteMapping("/{itemId}")
    public void deleteItem(@PathVariable UUID itemId) {
        itemService.deleteItem(itemId);
    }

}
