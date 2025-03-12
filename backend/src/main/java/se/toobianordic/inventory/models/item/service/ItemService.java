package se.toobianordic.inventory.models.item.service;

import se.toobianordic.inventory.models.item.model.Item;
import se.toobianordic.inventory.models.item.repository.ItemRepository;

import java.util.List;
import java.util.NoSuchElementException;

public class ItemService {
    private ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository) {
    }

    public List<Item> getItemList() {
        return itemRepository.findAll();
    }

    public Item getItemById(String id) {
        return itemRepository.findById(id).orElseThrow(NoSuchElementException::new);
    }


}
