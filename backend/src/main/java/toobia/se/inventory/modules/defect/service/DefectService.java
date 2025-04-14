package toobia.se.inventory.modules.defect.service;

import org.springframework.stereotype.Service;
import toobia.se.inventory.exceptions.InventoryResourceNotFound;
import toobia.se.inventory.modules.defect.model.Defect;
import toobia.se.inventory.modules.defect.repository.DefectRepository;

import java.util.List;
import java.util.UUID;

@Service
public class DefectService {
    private final DefectRepository defectRepository;

    public DefectService(DefectRepository defectRepository) {
        this.defectRepository = defectRepository;
    }

    public List<Defect> getList() {
        return defectRepository.findAll();
    }

    public Defect getById(UUID id) {
        return defectRepository.findById(id).orElseThrow(() -> new InventoryResourceNotFound("Defect not found"));
    }

}
