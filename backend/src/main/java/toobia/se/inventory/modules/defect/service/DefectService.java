package toobia.se.inventory.modules.defect.service;

import toobia.se.inventory.modules.defect.model.Defect;
import toobia.se.inventory.modules.defect.repository.DefectRepository;

import java.util.List;

public class DefectService {
    private final DefectRepository defectRepository;

    public DefectService(DefectRepository defectRepository) {
        this.defectRepository = defectRepository;
    }

    public List<Defect> getList() {
        return defectRepository.findAll();
    }

}
