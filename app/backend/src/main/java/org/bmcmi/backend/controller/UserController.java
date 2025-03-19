package org.bmcmi.backend.controller;

import org.bmcmi.backend.domain.User;
import org.bmcmi.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("")
    public User saveUser(User user) {
        return userService.saveUser(user);
    }
}
