package toobia.se.inventory.modules.responsible.controller.dtos;

import toobia.se.inventory.modules.equipment.controller.dtos.EquipmentDto;
import toobia.se.inventory.modules.equipment.model.Equipment;
import toobia.se.inventory.modules.responsible.model.Responsible;

import java.util.List;
import java.util.UUID;

public record ResponsibleDto(UUID id, String name) {

    public static ResponsibleDto from(Responsible responsible) {
        return new ResponsibleDto(responsible.getId(),responsible.getName());
    }
    public static List<ResponsibleDto> listFrom(List<Responsible> responsible) {
        return responsible.stream().map(ResponsibleDto::from).toList();
    }
}
