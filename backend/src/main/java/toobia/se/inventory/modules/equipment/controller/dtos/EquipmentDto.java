package toobia.se.inventory.modules.equipment.controller.dtos;

import jakarta.validation.constraints.Pattern;
import toobia.se.inventory.modules.equipment.model.Equipment;

import java.util.List;

public record EquipmentDto(
        @Pattern(regexp = "\\d{4}", message = "Id need to be numbers and 4 characters long")
        String id,
        String name) {
    public static EquipmentDto from(Equipment equipment) {
        return new EquipmentDto(equipment.getEquipmentId(), equipment.getEquipmentName());
    }

    public static List<EquipmentDto> listFrom(List<Equipment> equipments) {
        return equipments.stream().map(EquipmentDto::from).toList();
    }
}
