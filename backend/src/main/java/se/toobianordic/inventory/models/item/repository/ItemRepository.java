package se.toobianordic.inventory.models.item.repository;

import org.springframework.data.repository.ListCrudRepository;
import se.toobianordic.inventory.models.item.model.Item;

public interface ItemRepository extends ListCrudRepository<Item, String> {
}
