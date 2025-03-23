package org.bmcmi.backend.controller;

import org.bmcmi.backend.domain.HobbyType;
import org.bmcmi.backend.service.HobbyTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hobby-types")
public class HobbyTypeController {

    @Autowired
    private HobbyTypeService hobbyTypeService;

    @PostMapping("")
    public HobbyType saveHobbyType(HobbyType hobbyType) {
        return hobbyTypeService.saveHobbyType(hobbyType);
    }
}
