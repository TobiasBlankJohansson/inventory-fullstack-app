package toobia.se.inventory.modules.defect.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import toobia.se.inventory.modules.defect.controller.dtos.CreateDefectDto;
import toobia.se.inventory.modules.defect.controller.dtos.DefectDto;
import toobia.se.inventory.modules.defect.service.DefectService;

import java.util.List;
import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping("/api/defects")
@RequiredArgsConstructor
public class DefectController {

    private final DefectService defectService;

    @GetMapping
    public ResponseEntity<List<DefectDto>> getAllDefects() {
        return ResponseEntity.ok(DefectDto.fromList(defectService.getList()));
    }

    @GetMapping("{id}")
    public ResponseEntity<DefectDto> getDefect(@PathVariable String id) {
        return ResponseEntity.ok(DefectDto.from(defectService.getById(UUID.fromString(id))));
    }

    @PostMapping
    public ResponseEntity<DefectDto> createDefect(@RequestBody CreateDefectDto dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(DefectDto.from(defectService.create(dto)));
    }

    @PutMapping("status")
    public ResponseEntity<DefectDto> updateStatus(@RequestBody DefectDto dto) {
        return ResponseEntity.ok(DefectDto.from(defectService.updateStatus(dto.id(), dto.status())));
    }
}
