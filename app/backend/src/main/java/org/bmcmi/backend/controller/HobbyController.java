package org.bmcmi.backend.controller;

import org.bmcmi.backend.domain.Hobby;
import org.bmcmi.backend.service.HobbyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hobbies")
public class HobbyController {

    @Autowired
    private HobbyService hobbyService;

    @PostMapping("")
    public Hobby saveHobby(Hobby hobby) {
        return hobbyService.saveHobby(hobby);
    }
}
