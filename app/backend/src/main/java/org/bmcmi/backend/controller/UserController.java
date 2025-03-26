package org.bmcmi.backend.controller;

import org.bmcmi.backend.domain.User;
import org.bmcmi.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("")
    public User save(User user) {
        return userService.save(user);
    }

    @GetMapping("")
    public ResponseEntity<User> findByEmail(String email) {
        User foundUser = userService.findByEmail(email);
        return ResponseEntity.ok(foundUser);
    }
}
