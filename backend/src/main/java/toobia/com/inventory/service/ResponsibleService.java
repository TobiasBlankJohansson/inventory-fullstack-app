package toobia.com.inventory.service;

import org.springframework.stereotype.Service;
import toobia.com.inventory.exceptions.InventoryResourceExists;
import toobia.com.inventory.exceptions.InventoryResourceNotFound;
import toobia.com.inventory.model.Responsible;
import toobia.com.inventory.repository.ResponsibleRepository;

import java.util.List;
import java.util.UUID;

@Service
public class ResponsibleService {

    private ResponsibleRepository repository;

    public ResponsibleService(ResponsibleRepository repository) {
        this.repository = repository;
    }

    public Responsible createResponsible(String responsibleName) {
        String checkString = responsibleName.toLowerCase();
        List<Responsible> responsibleList = repository.findAll();
        for (Responsible responsible : responsibleList) {
            if (responsible.getName().toLowerCase().equals(checkString)) {
                throw new InventoryResourceExists(responsibleName + " already exists");
            }
        }
        Responsible responsible = new Responsible(responsibleName);
        repository.save(responsible);
        return responsible;
    }

    public Responsible findResponsible(UUID id) {
        Responsible responsible = repository.findById(id).orElse(null);
        if (responsible == null) {
            throw new InventoryResourceNotFound("Responsible with id:" + id.toString() + " not found");
        }
        return responsible;
    }

    public Responsible updateResponsibleName(UUID id, String name) {
        Responsible responsible = findResponsible(id);
        responsible.setName(name);
        return repository.save(responsible);
    }

    public List<Responsible> getAllResponsibles() {
        return repository.findAll();
    }

    public void saveResponsible(Responsible responsible) {
        repository.save(responsible);
    }

    public void deleteResponsible(UUID id) {
        Responsible responsible = findResponsible(id);
        repository.delete(responsible);
    }

}
