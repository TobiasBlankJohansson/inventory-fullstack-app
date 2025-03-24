package toobia.se.inventory.modules.equipment.controller.dtos;

import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import toobia.se.inventory.modules.equipment.model.Equipment;

import java.util.List;

public record EquipmentDto(
        String name,
        @Size(min = 6, max = 6, message = "Id need to be 6 characters long")
        @Pattern(regexp = "\\d{6}", message = "Id need to be numbers")
         String id) {
    public static EquipmentDto from(Equipment equipment) {
        return new EquipmentDto(equipment.getEquipmentName(), equipment.getEquipmentId());
    }
    public static List<EquipmentDto> listFrom(List<Equipment> equipments) {
        return equipments.stream().map(EquipmentDto::from).toList();
    }
}
