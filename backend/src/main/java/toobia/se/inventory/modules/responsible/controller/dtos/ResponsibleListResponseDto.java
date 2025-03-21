package toobia.se.inventory.modules.responsible.controller.dtos;

import toobia.se.inventory.modules.responsible.model.Responsible;

import java.util.List;

public record ResponsibleListResponseDto(List<ResponsibleDto> responsiblePeople) {

    public static ResponsibleListResponseDto fromList(List<Responsible> input) {
        return new ResponsibleListResponseDto(input.stream()
                .map(t -> new ResponsibleDto(t.getId(), t.getName()))
                .toList());
    }
}
