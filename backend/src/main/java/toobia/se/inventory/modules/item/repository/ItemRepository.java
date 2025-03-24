package toobia.se.inventory.modules.item.repository;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;
import toobia.se.inventory.modules.equipment.model.Equipment;
import toobia.se.inventory.modules.item.model.Item;
import toobia.se.inventory.modules.responsible.model.Responsible;
import toobia.se.inventory.modules.storage.model.Storage;

import java.util.UUID;

@Repository
public interface ItemRepository extends ListCrudRepository<Item, UUID> {
    boolean existsByEquipmentAndResponsibleAndStorage(Equipment equipment, Responsible responsible, Storage storage);
}
