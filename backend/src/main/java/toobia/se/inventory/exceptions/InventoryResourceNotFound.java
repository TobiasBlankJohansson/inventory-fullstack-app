package toobia.se.inventory.exceptions;

public class InventoryResourceNotFound extends RuntimeException {
    public InventoryResourceNotFound(String message) {
        super(message);
    }

    public InventoryResourceNotFound() {
        super("Resource not found");
    }
}
