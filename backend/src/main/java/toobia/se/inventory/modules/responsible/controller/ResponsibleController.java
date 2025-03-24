package toobia.se.inventory.modules.responsible.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import toobia.se.inventory.modules.responsible.controller.dtos.ResponsibleCreateDto;
import toobia.se.inventory.modules.responsible.controller.dtos.ResponsibleDto;
import toobia.se.inventory.modules.responsible.service.ResponsibleService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/responsible")
@CrossOrigin
@RequiredArgsConstructor
public class ResponsibleController {

    private final ResponsibleService responsibleService;

    @GetMapping
    public List<ResponsibleDto> getResponsibleList() {
        return ResponsibleDto.listFrom(responsibleService.readListResponsible());
    }

    @GetMapping("/{id}")
    public ResponsibleDto getResponsibleById(@PathVariable UUID id) {
        return ResponsibleDto.from(responsibleService.readResponsible(id));
    }

    @PostMapping()
    public ResponsibleDto createResponsible(@RequestBody ResponsibleCreateDto dto) {
        return ResponsibleDto.from(responsibleService.createResponsible(dto.name()));
    }

    @PutMapping()
    public ResponsibleDto updateResponsible(@RequestBody ResponsibleDto responsibleDto) {
        return ResponsibleDto.from(responsibleService.updateResponsibleName(
                responsibleDto.id(), responsibleDto.name()));
    }

    @DeleteMapping("/{id}")
    public void deleteResponsible(@PathVariable UUID id) {
        responsibleService.deleteResponsible(id);
    }
}
