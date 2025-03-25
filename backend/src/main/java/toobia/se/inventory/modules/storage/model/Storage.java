package toobia.se.inventory.modules.storage.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import toobia.se.inventory.modules.item.model.Item;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "storage")
@Getter
@Setter
@NoArgsConstructor
public class Storage {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String name;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "storage")
    private List<Item> items = new ArrayList<>();

    public Storage(String name) {
        this.name = name;
    }
}
