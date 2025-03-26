package toobia.se.inventory.modules.equipment.controller.dtos;

import jakarta.validation.constraints.Pattern;

public record EquipmentUpdateDto(
        @Pattern(regexp = "\\d{6}", message = "Id need to be numbers and 6 characters long")
        String oldId,
        @Pattern(regexp = "\\d{6}", message = "Id need to be numbers and 6 characters long")
        String id,
        String name
) {
}
