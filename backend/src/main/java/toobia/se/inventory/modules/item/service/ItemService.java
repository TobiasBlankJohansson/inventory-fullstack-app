package toobia.se.inventory.modules.item.service;

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
public class ItemService {

    private final ItemRepository itemRepository;
    private final EquipmentService equipmentService;
    private final ResponsibleService responsibleService;
    private final StorageService storageService;

    public ItemService(ItemRepository itemRepository, EquipmentService equipmentService,
                       ResponsibleService responsibleService, StorageService storageService) {
        this.itemRepository = itemRepository;
        this.equipmentService = equipmentService;
        this.responsibleService = responsibleService;
        this.storageService = storageService;
    }

    public List<Item> findAll() {
        return itemRepository.findAll();
    }


    public Item createItem(ItemCreateDto itemCreateDto) {
        Storage storage = storageService.getStorageById(itemCreateDto.storageId());
        Responsible responsible = responsibleService.findResponsible(itemCreateDto.responsibleId());
        Equipment equipment = equipmentService.getEquipment(itemCreateDto.equipmentId());
        List<Item> items = equipment.getItems();
        for (Item item : items) {
            if (item.getEquipment() == equipment && item.getResponsible() == responsible) {
                if (item.getStorage() == storage) {
                    throw new InventoryResourceExists("Item with these parameters already exists");
                }
            }
        }

        Item item = itemRepository.save(new Item(equipment, responsible, storage, itemCreateDto.amount()));
        equipmentService.saveEquipment(equipment);
        storageService.saveStorage(storage);
        responsibleService.saveResponsible(responsible);
        return item;
    }

    public Item updateItem(ItemUpdateDto itemUpdateDto) {
        Item item = findById(itemUpdateDto.storageId());
        Storage storage = storageService.getStorageById(itemUpdateDto.storageId());
        Responsible responsible = responsibleService.findResponsible(itemUpdateDto.responsibleId());
        Equipment equipment = equipmentService.getEquipment(itemUpdateDto.equipmentId());
        storageService.saveStorage(item.setStorage(storage));
        equipmentService.saveEquipment(item.setEquipment(equipment));
        responsibleService.saveResponsible(item.setResponsible(responsible));
        storageService.saveStorage(storage);
        equipmentService.saveEquipment(equipment);
        responsibleService.saveResponsible(responsible);
        return itemRepository.save(item);
    }


    public Item findById(UUID id) {
        Item item = itemRepository.findById(id).orElse(null);
        if (item == null) {
            throw new InventoryResourceNotFound(id.toString() + " does not exist");
        }
        return item;
    }

    public void deleteItem(UUID id) {
        Item item = findById(id);
        itemRepository.delete(item);
    }


}
