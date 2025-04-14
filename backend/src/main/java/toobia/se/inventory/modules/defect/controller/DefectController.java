package toobia.se.inventory.modules.defect.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import toobia.se.inventory.modules.defect.controller.dtos.CreateDefectDto;
import toobia.se.inventory.modules.defect.controller.dtos.DefectDto;
import toobia.se.inventory.modules.defect.service.DefectService;

import java.util.List;

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

    @PostMapping
    public ResponseEntity<DefectDto> createDefect(@RequestBody CreateDefectDto dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(DefectDto.from(defectService.create(dto)));
    }
}
