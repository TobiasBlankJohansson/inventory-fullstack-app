package toobia.se.inventory.modules.equipment.controller;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import toobia.se.inventory.modules.equipment.controller.dtos.EquipmentDto;
import toobia.se.inventory.modules.equipment.model.Equipment;
import toobia.se.inventory.modules.equipment.service.EquipmentService;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/equipments")
public class EquipmentController {

    private final EquipmentService equipmentService;

    public EquipmentController(EquipmentService equipmentService) {
        this.equipmentService = equipmentService;
    }

    @GetMapping
    public List<EquipmentDto>  getAllEquipment() {
        return EquipmentDto.listFrom(equipmentService.getAllEquipment());
    }

    @GetMapping("/{id}")
    public EquipmentDto getEquipmentById(@PathVariable String id) {
        Equipment equipment = equipmentService.getEquipment(id);
        return new EquipmentDto(equipment.getEquipmentName(), equipment.getEquipmentId());
    }

    @PostMapping
    public EquipmentDto createEquipment(@Valid @RequestBody EquipmentDto equipmentDto) {
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
