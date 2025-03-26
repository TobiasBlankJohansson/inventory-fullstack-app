package toobia.se.inventory.modules.item.controller.dtos;

import java.util.UUID;

public record ItemUpdateDto(UUID storageId, String equipmentId, UUID responsibleId, Integer amount, UUID id) {
}
