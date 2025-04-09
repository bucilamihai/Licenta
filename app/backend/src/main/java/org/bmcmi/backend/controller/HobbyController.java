package org.bmcmi.backend.controller;

import org.bmcmi.backend.dto.HobbyDTO;
import org.bmcmi.backend.service.HobbyService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hobbies")
@CrossOrigin(value = "http://localhost:8100", allowCredentials = "true")
public class HobbyController {

    @Autowired
    private HobbyService hobbyService;

    @PostMapping("")
    public ResponseEntity<HobbyDTO> saveHobby(@RequestBody HobbyDTO hobby) {
        return ResponseEntity.status(HttpStatus.CREATED).body(hobbyService.save(hobby));
    }

    @GetMapping("")
    public ResponseEntity<List<HobbyDTO>> getAllHobbies() {
        return ResponseEntity.status(HttpStatus.OK).body(hobbyService.findAll());
    }
}
