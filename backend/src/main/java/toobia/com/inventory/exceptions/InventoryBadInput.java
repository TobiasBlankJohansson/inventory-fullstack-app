package toobia.com.inventory.exceptions;

public class InventoryBadInput extends RuntimeException {
    public InventoryBadInput(String message) {
        super(message);
    }
}
