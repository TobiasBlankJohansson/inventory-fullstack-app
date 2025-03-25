package toobia.se.inventory.exceptions;

import jakarta.validation.ConstraintViolationException;
import jakarta.validation.ValidationException;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.Map;
import java.util.stream.Collectors;

@ControllerAdvice
public class InventoryExceptionHandler{

    @ExceptionHandler({InventoryResourceNotFound.class})
    protected ResponseEntity<String> handleMissing(RuntimeException ex) {
        return ResponseEntity.status(HttpStatus.valueOf(404)).body(ex.getMessage());
    }

    @ExceptionHandler({InventoryResourceExists.class})
    protected ResponseEntity<String> handleAlreadyExists(RuntimeException ex) {
        return ResponseEntity.status(HttpStatus.valueOf(409)).body(ex.getMessage());
    }

    @ExceptionHandler({MethodArgumentNotValidException.class})
    public ResponseEntity<Object> handleBadInput(MethodArgumentNotValidException ex) {
        Map<String, String> errors = ex.getBindingResult()
                .getFieldErrors()
                .stream()
                .collect(Collectors.toMap(
                        FieldError::getField,
                        DefaultMessageSourceResolvable::getDefaultMessage,
                        (existing, replacement) -> existing
                ));
        return ResponseEntity.status(HttpStatus.valueOf(400))
                .body(errors);
    }

}
