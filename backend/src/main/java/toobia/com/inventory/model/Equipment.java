package toobia.com.inventory.model;


import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "equipment")
public class Equipment {

    @Id
    private String equipmentId;
    private String equipmentName;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "equipment")
    private List<Item> items;

    public Equipment(String equipmentName, String equipmentId) {
        this.equipmentId = equipmentId;
        this.equipmentName = equipmentName;
        items = new ArrayList<>();
    }

    public Equipment() {
        equipmentId = UUID.randomUUID().toString();
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

    public String getEquipmentId() {
        return equipmentId;
    }

    public void setEquipmentId(String equipmentId) {
        this.equipmentId = equipmentId;
    }

    public String getEquipmentName() {
        return equipmentName;
    }

    public void setEquipmentName(String equipmentName) {
        this.equipmentName = equipmentName;
    }

    public void addItem(Item item) {
        items.add(item);
    }

    public void removeItem(Item item) {
        items.remove(item);
    }
}
