package toobia.se.inventory.modules.responsible.controller;

import org.springframework.web.bind.annotation.*;
import toobia.se.inventory.modules.responsible.controller.dtos.ResponsibleDto;
import toobia.se.inventory.modules.responsible.controller.dtos.ResponsibleListResponseDto;
import toobia.se.inventory.modules.responsible.model.Responsible;
import toobia.se.inventory.modules.responsible.service.ResponsibleService;

import java.util.UUID;

@RestController
@RequestMapping("/api/responsible")
@CrossOrigin
public class ResponsibleController {

    private final ResponsibleService responsibleService;

    public ResponsibleController(ResponsibleService responsibleService) {
        this.responsibleService = responsibleService;
    }

    @GetMapping
    public ResponsibleListResponseDto getResponsibleList() {
        return ResponsibleListResponseDto.
                fromList(responsibleService.getAllResponsibles());
    }

    @GetMapping("/{id}")
    public ResponsibleDto getResponsibleById(@PathVariable UUID id) {
        Responsible responsible = responsibleService.findResponsible(id);
        return new ResponsibleDto(responsible.getId(), responsible.getName());
    }

    @PostMapping()
    public ResponsibleDto createResponsible(@RequestBody String name) {
        Responsible responsible = responsibleService.createResponsible(name);
        return new ResponsibleDto(responsible.getId(), responsible.getName());
    }

    @PutMapping()
    public ResponsibleDto updateResponsible(@RequestBody ResponsibleDto responsibleDto) {
        Responsible responsible = responsibleService.updateResponsibleName(
                responsibleDto.id(), responsibleDto.name());
        return new ResponsibleDto(responsible.getId(), responsible.getName());
    }

    @DeleteMapping("/{id}")
    public void deleteResponsible(@PathVariable UUID id) {
        responsibleService.deleteResponsible(id);
    }
}
