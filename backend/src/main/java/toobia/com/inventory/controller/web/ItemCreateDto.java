package toobia.com.inventory.controller.web;

import jakarta.validation.constraints.Min;

import java.util.UUID;

public record ItemCreateDto(UUID storageId, String equipmentId, UUID responsibleId, @Min(0) Integer amount) {
}
