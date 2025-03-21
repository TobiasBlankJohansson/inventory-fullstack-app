package toobia.com.inventory.controller.web;

import jakarta.validation.constraints.Size;

public record EquipmentDto(String equipmentName, @Size(min = 6, max = 6) String equipmentId) {
}
