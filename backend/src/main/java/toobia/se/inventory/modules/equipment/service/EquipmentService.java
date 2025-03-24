package toobia.se.inventory.modules.equipment.service;

import org.springframework.stereotype.Service;
import toobia.se.inventory.exceptions.InventoryResourceExists;
import toobia.se.inventory.exceptions.InventoryResourceNotFound;
import toobia.se.inventory.modules.equipment.model.Equipment;
import toobia.se.inventory.modules.equipment.repository.EquipmentRepository;

import java.util.List;

@Service
public class EquipmentService {

    private final EquipmentRepository equipmentRepository;

    public EquipmentService(EquipmentRepository equipmentRepository) {
        this.equipmentRepository = equipmentRepository;
    }

    public Equipment addEquipment(String equipmentName, String equipmentId) {
        if (equipmentRepository.existsByEquipmentNameIgnoreCase(equipmentName.toLowerCase())) {
            throw new InventoryResourceExists("Equipment with name: " + equipmentName + " already exists");
        }
        if (equipmentRepository.existsByEquipmentId(equipmentId)) {
            throw new InventoryResourceExists("Equipment with ID: " + equipmentId + " already exists");
        }

        return equipmentRepository.save(new Equipment(equipmentName, equipmentId));
    }

    public List<Equipment> getAllEquipment() {
        return equipmentRepository.findAll();
    }

    public void deleteEquipment(String equipmentId) {
        Equipment equipment = getEquipment(equipmentId);
        equipmentRepository.delete(equipment);
    }

    public Equipment getEquipment(String equipmentId) {
        return equipmentRepository.findById(equipmentId)
                .orElseThrow(()-> new InventoryResourceNotFound(equipmentId + " not found"));
    }

    public Equipment updateEquipment(String id, String name) {
        Equipment equipment = getEquipment(id);
        equipment.setEquipmentName(name);
        return equipmentRepository.save(equipment);
    }

}
