package toobia.se.inventory.modules.storage.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import toobia.se.inventory.modules.storage.controller.dtos.StorageCreateDto;
import toobia.se.inventory.modules.storage.controller.dtos.StorageDto;
import toobia.se.inventory.modules.storage.service.StorageService;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
@RequestMapping("/api/storages")
@RequiredArgsConstructor
public class StorageController {

    private final StorageService storageService;

    @GetMapping
    public List<StorageDto> getStorages() {
        return StorageDto.listFrom(storageService.readListStorage());
    }

    @GetMapping("/{id}")
    public StorageDto getStorageById(@PathVariable UUID id) {
        return StorageDto.from(storageService.readStorage(id));
    }

    @PostMapping
    public StorageDto addStorage(@RequestBody StorageCreateDto dto) {
        return StorageDto.from(storageService.createStorage(dto.name()));
    }

    @PutMapping
    public StorageDto updateStorage(@RequestBody StorageDto storageDto) {
        return StorageDto.from(storageService.updateStorage(storageDto.id(), storageDto.name()));
    }

    @DeleteMapping("/{id}")
    public void deleteStorage(@PathVariable UUID id) {
        storageService.deleteStorage(id);
    }

}