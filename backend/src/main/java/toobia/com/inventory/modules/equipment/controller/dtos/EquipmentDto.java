package toobia.com.inventory.modules.equipment.controller.dtos;

import jakarta.validation.constraints.Size;

public record EquipmentDto(String equipmentName, @Size(min = 6, max = 6) String equipmentId) {
}
