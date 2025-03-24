package toobia.se.inventory.modules.storage.controller.dtos;

import jakarta.validation.constraints.Min;

import java.util.UUID;

public record StorageCreateDto(String name) {
}
