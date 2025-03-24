package toobia.se.inventory.modules.storage.controller.dtos;

import toobia.se.inventory.modules.responsible.controller.dtos.ResponsibleDto;
import toobia.se.inventory.modules.responsible.model.Responsible;
import toobia.se.inventory.modules.storage.model.Storage;

import java.util.List;
import java.util.UUID;

public record StorageDto(UUID id,String name) {
    public static StorageDto from(Storage storage) {
        return new StorageDto(storage.getId(),storage.getName());
    }
    public static List<StorageDto> listFrom(List<Storage> storage) {
        return storage.stream().map(StorageDto::from).toList();
    }
}
