package toobia.se.inventory.modules.item.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import toobia.se.inventory.modules.equipment.service.EquipmentService;
import toobia.se.inventory.modules.item.controller.dtos.ItemCreateDto;
import toobia.se.inventory.modules.item.controller.dtos.ItemUpdateDto;
import toobia.se.inventory.exceptions.InventoryResourceExists;
import toobia.se.inventory.exceptions.InventoryResourceNotFound;
import toobia.se.inventory.modules.equipment.model.Equipment;
import toobia.se.inventory.modules.item.model.Item;
import toobia.se.inventory.modules.responsible.model.Responsible;
import toobia.se.inventory.modules.storage.model.Storage;
import toobia.se.inventory.modules.item.repository.ItemRepository;
import toobia.se.inventory.modules.responsible.service.ResponsibleService;
import toobia.se.inventory.modules.storage.service.StorageService;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ItemService {

    private final ItemRepository itemRepository;
    private final EquipmentService equipmentService;
    private final ResponsibleService responsibleService;
    private final StorageService storageService;

    public List<Item> findAll() {
        return itemRepository.findAll();
    }

    public Item createItem(ItemCreateDto itemCreateDto) {
        Storage storage = storageService.readStorage(itemCreateDto.storageId());
        Responsible responsible = responsibleService.readResponsible(itemCreateDto.responsibleId());
        Equipment equipment = equipmentService.readEquipment(itemCreateDto.equipmentId());

        if (itemRepository.existsByEquipmentAndResponsibleAndStorage(equipment, responsible, storage)) {
            throw new InventoryResourceExists("Item with these parameters already exists");
        }
        Item item = new Item(equipment, responsible, storage, itemCreateDto.amount());
        return itemRepository.save(item);
    }

    public Item updateItem(ItemUpdateDto itemUpdateDto) {
        Storage storage = storageService.readStorage(itemUpdateDto.storageId());
        Responsible responsible = responsibleService.readResponsible(itemUpdateDto.responsibleId());
        Equipment equipment = equipmentService.readEquipment(itemUpdateDto.equipmentId());

        if (itemRepository.existsByEquipmentAndResponsibleAndStorage(equipment, responsible, storage)) {
            throw new InventoryResourceExists("Item with these parameters already exists");
        }

        Item item = findById(itemUpdateDto.storageId());
        item.setAmount(itemUpdateDto.amount());
        item.setEquipment(equipment);
        item.setResponsible(responsible);
        item.setStorage(storage);
        return itemRepository.save(item);
    }

    public Item findById(UUID id) {
        return itemRepository.findById(id)
                .orElseThrow(() -> new InventoryResourceNotFound(id.toString() + " does not exist"));
    }

    public void deleteItem(UUID id) {
        Item item = findById(id);
        itemRepository.delete(item);
    }
}
