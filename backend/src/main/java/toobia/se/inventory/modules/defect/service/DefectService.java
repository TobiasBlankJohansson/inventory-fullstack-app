package toobia.se.inventory.modules.defect.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import toobia.se.inventory.exceptions.InventoryResourceNotFound;
import toobia.se.inventory.modules.defect.model.Defect;
import toobia.se.inventory.modules.defect.repository.DefectRepository;
import toobia.se.inventory.modules.equipment.model.Equipment;
import toobia.se.inventory.modules.equipment.service.EquipmentService;
import toobia.se.inventory.modules.responsible.model.Responsible;
import toobia.se.inventory.modules.responsible.service.ResponsibleService;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class DefectService {
    private final DefectRepository defectRepository;
    private final ResponsibleService responsibleService;
    private final EquipmentService equipmentService;
    private Equipment equipment;
    private Responsible responsible;

    public List<Defect> getList() {
        return defectRepository.findAll();
    }

    public Defect getById(UUID id) {
        return defectRepository.findById(id).orElseThrow(() -> new InventoryResourceNotFound("Defect not found"));
    }

    public Defect create(String date, String filed, String status, String defect, String equipmentId, String responsibleId) {
        var equipment = equipmentService.readEquipment(equipmentId);
        var responsible = responsibleService.readResponsible(UUID.fromString(responsibleId));
        var defectObj = new Defect(date, filed, status, defect, equipment, responsible);
        return defectRepository.save(defectObj);
    }

}
