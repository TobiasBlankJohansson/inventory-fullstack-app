package toobia.com.inventory.modules.storage.controller;

import org.springframework.web.bind.annotation.*;
import toobia.com.inventory.controller.web.StorageDto;
import toobia.com.inventory.controller.web.StorageListDto;
import toobia.com.inventory.model.Storage;
import toobia.com.inventory.service.StorageService;

import java.util.UUID;

@RestController
@CrossOrigin
@RequestMapping("/api/storages")
public class StorageController {

    private StorageService storageService;

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

    @PostMapping("/{name}")
    public StorageDto addStorage(@PathVariable String name) {
        Storage storage = storageService.createStorage(name);
        return new StorageDto(storage.getName(), storage.getId());
    }

    @PutMapping
    public StorageDto updateStorage(@RequestBody StorageDto storageDto) {
        Storage storage = storageService.updateStorage(storageDto.id(), storageDto.name());
        return new StorageDto(storage.getName(), storage.getId());
    }

    @DeleteMapping("/{storageId}")
    public void deleteStorage(@PathVariable UUID storageId) {
        storageService.deleteStorage(storageId);
    }

}