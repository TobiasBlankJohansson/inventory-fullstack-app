package toobia.se.inventory.modules.storage.controller;

import org.springframework.web.bind.annotation.*;
import toobia.se.inventory.modules.storage.controller.dtos.StorageDto;
import toobia.se.inventory.modules.storage.model.Storage;
import toobia.se.inventory.modules.storage.service.StorageService;

import java.util.UUID;

@RestController
@CrossOrigin
@RequestMapping("/api/storages")
public class StorageController {

    private final StorageService storageService;

    public StorageController(StorageService storageService) {
        this.storageService = storageService;
    }

    @GetMapping
    public StorageListDto getStorages() {
        return StorageListDto.fromList(storageService.getStorages());
    }

    @GetMapping("/{id}")
    public StorageDto getStorageById(@PathVariable UUID id) {
        Storage storage = storageService.getStorageById(id);
        return new StorageDto(storage.getName(), storage.getId());
    }

    @PostMapping
    public StorageDto addStorage(@RequestBody String name) {
        Storage storage = storageService.createStorage(name);
        return new StorageDto(storage.getName(), storage.getId());
    }

    @PutMapping
    public StorageDto updateStorage(@RequestBody StorageDto storageDto) {
        Storage storage = storageService.updateStorage(storageDto.id(), storageDto.name());
        return new StorageDto(storage.getName(), storage.getId());
    }

    @DeleteMapping("/{id}")
    public void deleteStorage(@PathVariable UUID id) {
        storageService.deleteStorage(id);
    }

}