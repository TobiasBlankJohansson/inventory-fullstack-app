package toobia.com.inventory.repository;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;
import toobia.com.inventory.model.Item;

import java.util.UUID;

@Repository
public interface ItemRepository extends ListCrudRepository<Item, UUID> {
}
