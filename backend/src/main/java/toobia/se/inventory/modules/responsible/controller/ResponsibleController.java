package toobia.se.inventory.modules.responsible.controller;

import org.springframework.web.bind.annotation.*;
import toobia.se.inventory.modules.responsible.controller.dtos.ResponsibleDto;
import toobia.se.inventory.modules.responsible.controller.dtos.ResponsibleListResponseDto;
import toobia.se.inventory.model.Responsible;
import toobia.se.inventory.service.ResponsibleService;

import java.util.UUID;

@RestController
@RequestMapping("/api/responsibles")
@CrossOrigin
public class ResponsibleController {

    private ResponsibleService responsibleService;

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

    @PostMapping("/{name}")
    public ResponsibleDto createResponsible(@PathVariable String name) {
        Responsible responsible = responsibleService.createResponsible(name);
        return new ResponsibleDto(responsible.getId(), responsible.getName());
    }


    @PutMapping()
    public ResponsibleDto updateResponsible(@RequestBody ResponsibleDto responsibleDto) {
        Responsible responsible = responsibleService.updateResponsibleName(
                responsibleDto.id(), responsibleDto.name());
        return new ResponsibleDto(responsible.getId(), responsible.getName());
    }

    @DeleteMapping("/{responsibleId}")
    public void deleteResponsible(@PathVariable UUID responsibleId) {
        responsibleService.deleteResponsible(responsibleId);
    }

}
