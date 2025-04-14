package toobia.se.inventory.modules.defect.controller.dtos;

public record CreateDefectDto(
        String date,
        String filed,
        String status,
        String defect,
        String equipment,
        String responsible
) {
}
