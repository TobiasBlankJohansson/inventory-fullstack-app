package toobia.se.inventory.modules.responsible.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import toobia.se.inventory.exceptions.InventoryResourceExists;
import toobia.se.inventory.exceptions.InventoryResourceNotFound;
import toobia.se.inventory.modules.responsible.model.Responsible;
import toobia.se.inventory.modules.responsible.repository.ResponsibleRepository;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ResponsibleService {

    private final ResponsibleRepository repository;

    public Responsible createResponsible(String responsibleName) {
        if (repository.existsByNameIgnoreCase(responsibleName)) {
            throw new InventoryResourceExists(responsibleName + " already exists");
        }

        return repository.save(new Responsible(responsibleName));
    }

    public Responsible findResponsible(UUID id) {
        return repository.findById(id)
                .orElseThrow(()-> new InventoryResourceNotFound(
                        "Responsible with id:" + id.toString() + " not found"));
    }

    public Responsible updateResponsibleName(UUID id, String name) {
        Responsible responsible = findResponsible(id);
        responsible.setName(name);
        return repository.save(responsible);
    }

    public List<Responsible> getAllResponsibles() {
        return repository.findAll();
    }

    public void deleteResponsible(UUID id) {
        repository.delete(findResponsible(id));
    }

}
