package toobia.se.inventory.modules.equipment.controller.dtos;

import jakarta.validation.constraints.Size;

public record EquipmentDto(String name, @Size(min = 6, max = 6) String id) {
}
