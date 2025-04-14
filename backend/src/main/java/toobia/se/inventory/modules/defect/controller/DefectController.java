package toobia.se.inventory.modules.defect.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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
}
