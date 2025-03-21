package toobia.se.inventory.modules.item.repository;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;
import toobia.se.inventory.model.Item;

import java.util.UUID;

@Repository
public interface ItemRepository extends ListCrudRepository<Item, UUID> {
}
