package toobia.se.inventory.modules.equipment.controller;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import toobia.se.inventory.modules.equipment.controller.dtos.EquipmentDto;
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
        return EquipmentDto.listFrom(equipmentService.readListEquipment());
    }

    @GetMapping("/{id}")
    public EquipmentDto getEquipmentById(@PathVariable String id) {
        return EquipmentDto.from(equipmentService.readEquipment(id));
    }

    @PostMapping
    public EquipmentDto createEquipment(@Valid @RequestBody EquipmentDto equipmentDto) {
        return EquipmentDto.from(equipmentService.createEquipment(equipmentDto.name(), equipmentDto.id()));
    }

    @PutMapping
    public EquipmentDto updateEquipment(@RequestBody EquipmentDto equipmentDto) {
        return EquipmentDto.from(equipmentService.updateEquipment(equipmentDto.id(), equipmentDto.name()));
    }

    @DeleteMapping("/{id}")
    public void deleteEquipment(@PathVariable String id) {
        equipmentService.deleteEquipment(id);
    }

}
