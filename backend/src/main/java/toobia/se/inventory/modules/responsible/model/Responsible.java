package toobia.se.inventory.modules.responsible.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import toobia.se.inventory.modules.item.model.Item;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "responsible")
@Getter
@Setter
@NoArgsConstructor
public class Responsible {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String name;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "responsible")
    private List<Item> items = new ArrayList<>();

    public Responsible(String name) {
        this.name = name;
    }
}