package toobia.se.inventory.repository;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;
import toobia.se.inventory.model.Equipment;

@Repository
public interface EquipmentRepository extends ListCrudRepository<Equipment, String> {
}
