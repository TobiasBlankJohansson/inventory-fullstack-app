package se.toobianordic.inventory.models.item.service;

import se.toobianordic.inventory.models.item.model.Item;
import se.toobianordic.inventory.models.item.repository.ItemRepository;

import java.util.List;
import java.util.NoSuchElementException;

public class ItemService {
    private ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository) {
    }

    public Item create(String id, String name, String quantity, String storageArea) {
        return itemRepository.save(new Item(id, name, quantity, storageArea));
    }

    public List<Item> readList() {
        return itemRepository.findAll();
    }

    public Item readById(String id) {
        return itemRepository.findById(id).orElseThrow(NoSuchElementException::new);
    }


}
