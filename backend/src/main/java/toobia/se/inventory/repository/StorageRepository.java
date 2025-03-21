package toobia.se.inventory.repository;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;
import toobia.se.inventory.model.Storage;

import java.util.UUID;

@Repository
public interface StorageRepository extends ListCrudRepository<Storage, UUID> {
}
