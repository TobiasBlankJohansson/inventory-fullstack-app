package toobia.se.inventory.modules.equipment.repository;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;
import toobia.se.inventory.modules.equipment.model.Equipment;

@Repository
public interface EquipmentRepository extends ListCrudRepository<Equipment, String> {
}
