package toobia.se.inventory.modules.equipment.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import toobia.se.inventory.modules.item.model.Item;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "equipment")
@NoArgsConstructor
@Getter
@Setter
public class Equipment {

    @Id
    private String equipmentId;
    private String equipmentName;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "equipment", orphanRemoval = true)
    private List<Item> items = new ArrayList<>();

    public Equipment(String equipmentId, String equipmentName) {
        this.equipmentId = equipmentId;
        this.equipmentName = equipmentName;
    }

    public void addItem(Item item) {
        items.add(item);
        item.setEquipment(this);
    }

    public void removeItem(Item item) {
        items.remove(item);
        item.setEquipment(null);
    }
}
