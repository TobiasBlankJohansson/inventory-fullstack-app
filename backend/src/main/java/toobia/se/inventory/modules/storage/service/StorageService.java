package toobia.se.inventory.modules.storage.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import toobia.se.inventory.exceptions.InventoryResourceExists;
import toobia.se.inventory.exceptions.InventoryResourceNotFound;
import toobia.se.inventory.modules.storage.model.Storage;
import toobia.se.inventory.modules.storage.repository.StorageRepository;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class StorageService {

    private final StorageRepository storageRepository;

    public List<Storage> getStorages() {
        return storageRepository.findAll();
    }

    public Storage getStorageById(UUID id) {
        return storageRepository.findById(id)
                .orElseThrow(() -> new
                        InventoryResourceNotFound("Storage with id:" + id + " not found"));
    }

    public Storage updateStorage(UUID id, String name) {
        Storage storage = getStorageById(id);
        storage.setName(name);
        return storageRepository.save(storage);
    }

    public Storage createStorage(String name) {
        if (storageRepository.existsByNameIgnoreCase(name)) {
            throw new InventoryResourceExists(name + " already exists");
        }
        return storageRepository.save(new Storage(name));
    }

    public void deleteStorage(UUID id) {
        storageRepository.deleteById(id);
    }
}