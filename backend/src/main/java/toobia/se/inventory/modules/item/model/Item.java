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
        equipment.addItem(this);
        responsible.addItem(this);
        storage.addItem(this);
    }

    @ManyToOne
    @JoinColumn(name = "equipment")
    private Equipment equipment;

    @ManyToOne
    @JoinColumn(name = "responsible")
    private Responsible responsible;

    @ManyToOne
    @JoinColumn(name = "storage")
    private Storage storage;

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public Responsible setResponsible(Responsible responsible) {
        Responsible old = this.responsible;
        this.responsible = responsible;
        old.removeItem(this);
        return old;
    }

    public Storage setStorage(Storage storage) {
        Storage old = this.storage;
        this.storage = storage;
        old.removeItem(this);
        return old;
    }

    public Equipment setEquipment(Equipment equipment) {
        Equipment old = this.equipment;
        this.equipment = equipment;
        old.removeItem(this);
        return old;
    }

}
