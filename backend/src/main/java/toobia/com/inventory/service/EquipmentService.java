package toobia.com.inventory.service;

import org.springframework.stereotype.Service;
import toobia.com.inventory.exceptions.InventoryResourceExists;
import toobia.com.inventory.exceptions.InventoryResourceNotFound;
import toobia.com.inventory.model.Equipment;
import toobia.com.inventory.repository.EquipmentRepository;

import java.util.List;

@Service
public class EquipmentService {

    private EquipmentRepository equipmentRepository;

    public EquipmentService(EquipmentRepository equipmentRepository) {
        this.equipmentRepository = equipmentRepository;
    }

    public Equipment addEquipment(String equipmentName, String equipmentId) {
        List<Equipment> equipments = equipmentRepository.findAll();
        String testText = equipmentName.toLowerCase();
        for (Equipment equipment : equipments) {
            String eqText = equipment.getEquipmentName().toLowerCase();
            if (eqText.equals(testText)) {
                throw new InventoryResourceExists("Equipment with equipmentName:" + equipmentName + " already exists");
            }
            if (equipment.getEquipmentId().equals(equipmentId)) {
                throw new InventoryResourceExists("Equipment with equipmentId:" + equipmentId + " already exists");
            }
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
        List<Equipment> ls = equipmentRepository.findAll();
        Equipment equipment = null;
        for (Equipment t : ls) {
            if (equipmentId.equals(t.getEquipmentId())) {
                equipment = t;
            }
        }
        if (equipment == null) {
            throw new InventoryResourceNotFound(equipmentId + " not found");
        }
        return equipment;
    }

    public void saveEquipment(Equipment equipment) {
        equipmentRepository.save(equipment);
    }

    public Equipment updateEquipment(String id, String name) {
        Equipment equipment = getEquipment(id);
        equipment.setEquipmentName(name);
        return equipmentRepository.save(equipment);
    }

}
