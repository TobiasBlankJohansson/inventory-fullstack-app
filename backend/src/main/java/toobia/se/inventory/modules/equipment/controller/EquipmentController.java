package toobia.se.inventory.modules.equipment.controller;

import org.springframework.web.bind.annotation.*;
import toobia.se.inventory.modules.equipment.controller.dtos.EquipmentDto;
import toobia.se.inventory.modules.equipment.controller.dtos.EquipmentListResponseDto;
import toobia.se.inventory.exceptions.InventoryBadInput;
import toobia.se.inventory.modules.equipment.model.Equipment;
import toobia.se.inventory.modules.equipment.service.EquipmentService;

@RestController
@CrossOrigin
@RequestMapping("/api/equipments")
public class EquipmentController {

    private EquipmentService equipmentService;

    public EquipmentController(EquipmentService equipmentService) {
        this.equipmentService = equipmentService;
    }

    @GetMapping
    public EquipmentListResponseDto getAllEquipment() {
        return EquipmentListResponseDto.toEquipmentListResponseDto
                (equipmentService.getAllEquipment());
    }

    @GetMapping("/{id}")
    public EquipmentDto getEquipmentById(@PathVariable String id) {
        Equipment equipment = equipmentService.getEquipment(id);
        return new EquipmentDto(equipment.getEquipmentName(), equipment.getEquipmentId());
    }

    @PostMapping
    public EquipmentDto createEquipment(@RequestBody EquipmentDto equipmentDto) {
        if (equipmentDto.id().length() != 6) {
            throw new InventoryBadInput("Equipment id must be 6 characters");
        }
        for (int i = 0; i < equipmentDto.id().length(); i++) {
            if (equipmentDto.id().charAt(i) < 48 || equipmentDto.id().charAt(i) > 57) {
                throw new InventoryBadInput("Equipment ID may only contain numbers");
            }
        }
        equipmentService.addEquipment(equipmentDto.name(), equipmentDto.id());
        return equipmentDto;
    }

    @PutMapping
    public EquipmentDto updateEquipment(@RequestBody EquipmentDto equipmentDto) {
        Equipment equipment = equipmentService.updateEquipment(equipmentDto.id(), equipmentDto.name());
        return new EquipmentDto(equipment.getEquipmentName(), equipment.getEquipmentId());
    }

    @DeleteMapping("/{id}")
    public void deleteEquipment(@PathVariable String id) {
        equipmentService.deleteEquipment(id);
    }

}
