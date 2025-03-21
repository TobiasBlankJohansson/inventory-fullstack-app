package toobia.com.inventory.repository;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;
import toobia.com.inventory.model.Storage;

import java.util.UUID;

@Repository
public interface StorageRepository extends ListCrudRepository<Storage, UUID> {
}
