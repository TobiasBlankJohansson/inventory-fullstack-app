package toobia.com.inventory.controller;

import org.springframework.web.bind.annotation.*;
import toobia.com.inventory.controller.web.EquipmentDto;
import toobia.com.inventory.controller.web.EquipmentListResponseDto;
import toobia.com.inventory.exceptions.InventoryBadInput;
import toobia.com.inventory.model.Equipment;
import toobia.com.inventory.service.EquipmentService;

import java.util.UUID;

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
        if (equipmentDto.equipmentId().length() != 6) {
            throw new InventoryBadInput("Equipment id must be 6 characters");
        }
        for (int i = 0; i < equipmentDto.equipmentId().length(); i++) {
            if (equipmentDto.equipmentId().charAt(i) < 48 || equipmentDto.equipmentId().charAt(i) > 57) {
                throw new InventoryBadInput("Equipment ID may only contain numbers");
            }
        }
        equipmentService.addEquipment(equipmentDto.equipmentName(), equipmentDto.equipmentId());
        return equipmentDto;
    }

    @PutMapping
    public EquipmentDto updateEquipment(@RequestBody EquipmentDto equipmentDto) {
        Equipment equipment = equipmentService.updateEquipment(equipmentDto.equipmentId(), equipmentDto.equipmentName());
        return new EquipmentDto(equipment.getEquipmentName(), equipment.getEquipmentId());
    }

    @DeleteMapping("/{id}")
    public void deleteEquipment(@PathVariable String id) {
        equipmentService.deleteEquipment(id);
    }

}
