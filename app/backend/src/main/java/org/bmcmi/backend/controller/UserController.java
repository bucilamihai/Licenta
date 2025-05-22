package org.bmcmi.backend.controller;

import java.util.Map;
import org.bmcmi.backend.exception.ValidationException;
import org.bmcmi.backend.dto.UserDTO;
import org.bmcmi.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/users")
@CrossOrigin(value = "http://localhost:8100", allowCredentials = "true")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/hobbies")
    public ResponseEntity<?> saveHobbies(
        @Valid @RequestBody UserDTO userDTO 
    ) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(userService.saveUserHobbies(userDTO));
        }
        catch (ValidationException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                Map.of("error", e.getMessage())
            );
        }
        catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                Map.of("error", "An unexpected error occurred: " + e.getMessage())
            );
        }
    }

    @PostMapping("/similar")
    public ResponseEntity<?> getSimilarUsers(
        @Valid @RequestBody UserDTO userDTO 
    ) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(userService.getSimilarUsers(userDTO));
        }
        catch (ValidationException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                Map.of("error", e.getMessage())
            );
        }
        catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                Map.of("error", "An unexpected error occurred: " + e.getMessage())
            );
        }
    }   
}
