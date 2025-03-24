package toobia.se.inventory.modules.item.model;

import jakarta.persistence.*;
import lombok.Getter;
import toobia.se.inventory.modules.storage.model.Storage;
import toobia.se.inventory.modules.equipment.model.Equipment;
import toobia.se.inventory.modules.responsible.model.Responsible;

import java.util.UUID;

@Entity
@Table(name = "item")
@Getter
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private int amount;

    public Item() {}

    public Item(Equipment equipment, Responsible responsible, Storage storage, int amount) {
        this.equipment = equipment;
        this.responsible = responsible;
        this.storage = storage;
        this.amount = amount;
    }

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "equipment")
    private Equipment equipment;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "responsible")
    private Responsible responsible;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "storage")
    private Storage storage;

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public Responsible setResponsible(Responsible responsible) {
        this.responsible = responsible;
        return this.responsible;
    }

    public Storage setStorage(Storage storage) {
        this.storage = storage;
        return this.storage;
    }

    public Equipment setEquipment(Equipment equipment) {
        this.equipment = equipment;
        return this.equipment;
    }

}
