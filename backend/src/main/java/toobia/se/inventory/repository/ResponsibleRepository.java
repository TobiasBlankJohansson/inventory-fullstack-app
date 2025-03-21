package toobia.se.inventory.repository;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;
import toobia.se.inventory.model.Responsible;

import java.util.UUID;

@Repository
public interface ResponsibleRepository extends ListCrudRepository<Responsible, UUID> {
}
