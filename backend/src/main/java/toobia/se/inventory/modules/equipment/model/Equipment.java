package toobia.se.inventory.modules.equipment.model;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import toobia.se.inventory.modules.defect.model.defect;
import toobia.se.inventory.modules.item.model.Item;

import java.util.ArrayList;
import java.util.List;

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

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "equipment", orphanRemoval = true)
    private List<defect> defects = new ArrayList<>();

    public Equipment(String equipmentId, String equipmentName) {
        this.equipmentId = equipmentId;
        this.equipmentName = equipmentName;
    }
}
