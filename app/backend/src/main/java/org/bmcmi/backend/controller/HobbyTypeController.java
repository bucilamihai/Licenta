package org.bmcmi.backend.controller;

import org.bmcmi.backend.dto.HobbyTypeDTO;
import org.bmcmi.backend.service.HobbyTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/hobby-types")
@CrossOrigin(value = "http://localhost:8100", allowCredentials = "true")
public class HobbyTypeController {

    @Autowired
    private HobbyTypeService hobbyTypeService;

    @PostMapping("")
    public ResponseEntity<HobbyTypeDTO> saveHobbyType(@Valid @RequestBody HobbyTypeDTO hobbyType) {
        return ResponseEntity.status(HttpStatus.CREATED).body(hobbyTypeService.save(hobbyType));
    }
}
