package toobia.se.inventory.modules.equipment.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import toobia.se.inventory.exceptions.InventoryResourceExists;
import toobia.se.inventory.exceptions.InventoryResourceNotFound;
import toobia.se.inventory.modules.equipment.model.Equipment;
import toobia.se.inventory.modules.equipment.repository.EquipmentRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EquipmentService {

    private final EquipmentRepository equipmentRepository;

    public Equipment createEquipment(String equipmentName, String equipmentId) {
        if (equipmentRepository.existsByEquipmentNameIgnoreCase(equipmentName.toLowerCase())) {
            throw new InventoryResourceExists("Equipment with name: " + equipmentName + " already exists");
        }
        if (equipmentRepository.existsByEquipmentId(equipmentId)) {
            throw new InventoryResourceExists("Equipment with ID: " + equipmentId + " already exists");
        }

        return equipmentRepository.save(new Equipment(equipmentId, equipmentName));
    }

    public List<Equipment> readListEquipment() {
        return equipmentRepository.findAll();
    }

    public Equipment readEquipment(String equipmentId) {
        return equipmentRepository.findById(equipmentId)
                .orElseThrow(() -> new InventoryResourceNotFound(equipmentId + " not found"));
    }

    public Equipment updateEquipment(String id, String name) {
        Equipment equipment = readEquipment(id);
        equipment.setEquipmentName(name);
        return equipmentRepository.save(equipment);
    }

    public void deleteEquipment(String equipmentId) {
        Equipment equipment = readEquipment(equipmentId);
        equipmentRepository.delete(equipment);
    }
}
