package toobia.se.inventory.modules.defect.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import toobia.se.inventory.exceptions.InventoryResourceNotFound;
import toobia.se.inventory.modules.defect.controller.dtos.CreateDefectDto;
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

    public Defect create(CreateDefectDto dto) {
        var equipment = equipmentService.readEquipment(dto.equipment());
        var responsible = responsibleService.readResponsible(UUID.fromString(dto.responsible()));
        var defectObj = new Defect(dto.date(), dto.filed(), dto.status(), dto.defect(), equipment, responsible);
        return defectRepository.save(defectObj);
    }

    public Defect updateStatus(UUID id, String status) {
        var defect = getById(id);
        defect.setStatus(status);
        return defectRepository.save(defect);
    }

}
