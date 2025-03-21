package toobia.se.inventory.modules.storage.controller.dtos;

import toobia.se.inventory.model.Storage;

import java.util.List;

public record StorageListDto(List<StorageDto> storages) {

    public static StorageListDto fromList(List<Storage> storages) {
        return new StorageListDto(storages.stream()
                .map(t -> new StorageDto(t.getName(), t.getId()))
                .toList());
    }
}
