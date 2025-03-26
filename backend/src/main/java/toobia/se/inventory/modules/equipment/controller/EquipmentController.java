package toobia.se.inventory.modules.equipment.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import toobia.se.inventory.modules.equipment.controller.dtos.EquipmentDto;
import toobia.se.inventory.modules.equipment.controller.dtos.EquipmentUpdateDto;
import toobia.se.inventory.modules.equipment.service.EquipmentService;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/equipments")
@RequiredArgsConstructor
public class EquipmentController {

    private final EquipmentService equipmentService;

    @GetMapping
    public List<EquipmentDto> getAllEquipment() {
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
    public EquipmentDto updateEquipment(@RequestBody EquipmentUpdateDto equipmentUpdateDto) {
        return EquipmentDto.from(equipmentService.updateEquipment(equipmentUpdateDto.oldId(), equipmentUpdateDto.id(), equipmentUpdateDto.name()));
    }

    @DeleteMapping("/{id}")
    public void deleteEquipment(@PathVariable String id) {
        equipmentService.deleteEquipment(id);
    }

}
