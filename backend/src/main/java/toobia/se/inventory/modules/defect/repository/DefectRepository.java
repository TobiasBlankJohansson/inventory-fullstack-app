package toobia.se.inventory.modules.defect.repository;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;
import toobia.se.inventory.modules.defect.model.Defect;

import java.util.UUID;

@Repository
public interface DefectRepository extends ListCrudRepository<Defect, UUID> {
}
