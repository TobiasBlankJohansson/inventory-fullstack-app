package toobia.com.inventory.controller.web;

import java.util.UUID;

public record ItemUpdateDto(UUID storageId, String equipmentId, UUID responsibleId, Integer amount, UUID itemId) {
}
