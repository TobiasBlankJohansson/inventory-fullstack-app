package toobia.se.inventory.exceptions;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class InventoryExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler({InventoryResourceNotFound.class})
    protected ResponseEntity handleMissing(RuntimeException ex, WebRequest request) {
        return handleExceptionInternal(ex, ex.getMessage(),
                new HttpHeaders(), HttpStatus.valueOf(404), request);
    }

    @ExceptionHandler({InventoryResourceExists.class})
    protected ResponseEntity handleAlreadyExists(RuntimeException ex, WebRequest request) {
        return handleExceptionInternal(ex, ex.getMessage(),
                new HttpHeaders(), HttpStatus.valueOf(409), request);
    }

    @ExceptionHandler({InventoryBadInput.class})
    protected ResponseEntity handleBadInput(RuntimeException ex, WebRequest request) {
        return handleExceptionInternal(ex, ex.getMessage(),
                new HttpHeaders(), HttpStatus.valueOf(400), request);
    }

}
