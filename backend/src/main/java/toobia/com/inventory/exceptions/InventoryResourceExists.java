package toobia.com.inventory.exceptions;

public class InventoryResourceExists extends RuntimeException {
    public InventoryResourceExists(String message) {
        super(message);
    }

    public InventoryResourceExists() {
        super("Resource already exists");
    }
}
