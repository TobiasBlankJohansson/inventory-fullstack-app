package toobia.com.inventory.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "storage")
public class Storage {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String name;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "storage")
    private List<Item> items;

    public Storage() {
    }

    public Storage(String name) {
        this.name = name;
        items = new ArrayList<>();
    }

    public void removeItem(Item item) {
        items.remove(item);
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void addItem(Item item) {
        items.add(item);
    }
}
