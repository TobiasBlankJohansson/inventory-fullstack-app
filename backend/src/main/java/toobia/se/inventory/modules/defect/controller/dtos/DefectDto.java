package toobia.se.inventory.modules.defect.controller.dtos;

import toobia.se.inventory.modules.defect.model.Defect;

import java.util.List;

public record DefectDto(String id,
                        String date,
                        String filed,
                        String status,
                        String defect,
                        String equipment,
                        String responsible
) {
    public static DefectDto from(Defect defect) {
        return new DefectDto(
                defect.getId(),
                defect.getDate(),
                defect.getFiled(),
                defect.getStatus(),
                defect.getDefect(),
                defect.getEquipment().getEquipmentName(),
                defect.getResponsible().getName());
    }

    public static List<DefectDto> fromList(List<Defect> defects) {
        return defects.stream().map(DefectDto::from).toList();
    }
}
