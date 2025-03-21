package toobia.com.inventory.controller.web;

import toobia.com.inventory.model.Equipment;

import java.util.List;

public record EquipmentListResponseDto(List<EquipmentDto> equipments) {

    public static EquipmentListResponseDto toEquipmentListResponseDto(List<Equipment> equipments) {
        return new EquipmentListResponseDto(equipments.stream()
                .map(t -> new EquipmentDto(t.getEquipmentName(), t.getEquipmentId()))
                .toList());
    }
}
