package se.toobianordic.inventory.models.item.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import se.toobianordic.inventory.models.item.service.ItemService;

import java.util.List;

@CrossOrigin
@Controller
@RequestMapping("api/v1/inventory")
public class ItemController {
    private final ItemService itemService;

    public ItemController( ItemService itemService) {
        this.itemService = itemService;
    }

    @PutMapping
    public ResponseEntity<ItemDto> update(@RequestBody ItemDto dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(
                ItemDto.fromItem(itemService.update(
                        dto.id(),
                        dto.name(),
                        dto.quantity(),
                        dto.quantity())));
    }

    @GetMapping
    public ResponseEntity<List<ItemDto>> readList() {
        return ResponseEntity.status(HttpStatus.OK).body(
                ItemDto.fromItemList(itemService.readList())
        );
    }

    @GetMapping("{id}")
    public ResponseEntity<ItemDto> read(@PathVariable String id) {
        return ResponseEntity.status(HttpStatus.OK).body(
                ItemDto.fromItem(itemService.readById(id))
        );
    }

    @PostMapping
    public ResponseEntity<ItemDto> create(@RequestBody ItemDto dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(ItemDto.fromItem(itemService.create(
                dto.id(), dto.name(), dto.quantity(), dto.storageArea()
        )));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Boolean> delete(@PathVariable String id) {
        itemService.delete(id);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }
}
