package toobia.se.inventory.modules.defect.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import toobia.se.inventory.modules.equipment.model.Equipment;
import toobia.se.inventory.modules.responsible.model.Responsible;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Defect {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String date;
    private String filed;
    private String status;
    private String defect;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "equipment")
    private Equipment equipment;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "responsible")
    private Responsible responsible;

    public Defect(String date, String filed, String status, String defect, Equipment equipment, Responsible responsible) {
        this.date = date;
        this.filed = filed;
        this.status = status;
        this.defect = defect;
        this.equipment = equipment;
        this.responsible = responsible;
    }
}
