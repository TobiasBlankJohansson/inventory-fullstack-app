package toobia.com.inventory.service;

import org.springframework.stereotype.Service;
import toobia.com.inventory.controller.web.StorageDto;
import toobia.com.inventory.exceptions.InventoryResourceExists;
import toobia.com.inventory.exceptions.InventoryResourceNotFound;
import toobia.com.inventory.model.Storage;
import toobia.com.inventory.repository.StorageRepository;

import java.util.List;
import java.util.UUID;

@Service
public class StorageService {

    private final StorageRepository storageRepository;
    private StorageRepository repository;

    public StorageService(StorageRepository repository, StorageRepository storageRepository) {
        this.repository = repository;
        this.storageRepository = storageRepository;
    }

    public List<Storage> getStorages() {
        return repository.findAll();
    }

    public Storage getStorageById(UUID id) {
        Storage storage = repository.findById(id).orElse(null);
        if (storage == null) {
            throw new InventoryResourceNotFound("Storage with id:" + id.toString() + " not found");
        }
        return storage;
    }

    public Storage updateStorage(UUID id, String name) {
        Storage storage = repository.findById(id).orElse(null);
        storage.setName(name);
        return storageRepository.save(storage);
    }

    public Storage createStorage(String name) {
        String checkString = name.toLowerCase();
        List<Storage> storageList = storageRepository.findAll();
        for (Storage storage : storageList) {
            if (storage.getName().toLowerCase().equals(checkString)) {
                throw new InventoryResourceExists(name + " already exists");
            }
        }
        return repository.save(new Storage(name));
    }

    public void saveStorage(Storage storage) {
        storageRepository.save(storage);
    }

    public void deleteStorage(UUID id) {
        storageRepository.deleteById(id);
    }


}
