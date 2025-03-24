package toobia.se.inventory.modules.equipment.controller.dtos;

import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record EquipmentDto(
        String name,
        @Size(min = 6, max = 6, message = "Id need to be 6 characters long")
        @Pattern(regexp = "\\d{6}", message = "Id need to be numbers")
         String id) {
}
