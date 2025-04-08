package org.bmcmi.backend.controller;

import org.bmcmi.backend.domain.Hobby;
import org.bmcmi.backend.dto.HobbyDTO;
import org.bmcmi.backend.service.HobbyService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hobbies")
public class HobbyController {

    @Autowired
    private HobbyService hobbyService;

    @PostMapping("")
    public HobbyDTO saveHobby(Hobby hobby) {
        return hobbyService.save(hobby);
    }

    @GetMapping("")
    public List<HobbyDTO> getAllHobbies() {
        return hobbyService.findAll();
    }
}
