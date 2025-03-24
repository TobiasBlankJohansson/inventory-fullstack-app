package toobia.se.inventory.modules.responsible.repository;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;
import toobia.se.inventory.modules.responsible.model.Responsible;

import java.util.UUID;

@Repository
public interface ResponsibleRepository extends ListCrudRepository<Responsible, UUID> {
    boolean existsByNameIgnoreCase(String responsibleName);
}
