package org.bmcmi.backend.controller;


import org.bmcmi.backend.dto.LoginDTO;
import org.bmcmi.backend.dto.RegisterDTO;
import org.bmcmi.backend.exception.DuplicateResourceException;
import org.bmcmi.backend.exception.ValidationException;
import org.bmcmi.backend.service.AuthService;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/auth")
@CrossOrigin(value = "http://localhost:8100", allowCredentials = "true")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterDTO registerDTO) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(authService.register(registerDTO));
        }
        catch (DuplicateResourceException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(
                Map.of("error", e.getMessage())
            );
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

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginDTO loginDTO) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(authService.login(loginDTO));
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
