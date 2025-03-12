package se.toobianordic.inventory.models.item.repository;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;
import se.toobianordic.inventory.models.item.model.Item;

@Repository
public interface ItemRepository extends ListCrudRepository<Item, String> {
}
