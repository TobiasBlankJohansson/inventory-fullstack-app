package se.toobianordic.inventory.models.item.service;

import org.springframework.stereotype.Service;
import se.toobianordic.inventory.models.item.model.Item;
import se.toobianordic.inventory.models.item.repository.ItemRepository;

import java.util.List;
import java.util.NoSuchElementException;

@Service
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

    public Item update(String id, String name, String quantity, String storageArea) {
        Item existingItem = itemRepository.findById(id).orElseThrow();
        existingItem.setName(name);
        existingItem.setQuantity(quantity);
        existingItem.setStorageArea(storageArea);
        return itemRepository.save(existingItem);
    }

    public void delete(String id) {
        itemRepository.deleteById(id);
    }
}
