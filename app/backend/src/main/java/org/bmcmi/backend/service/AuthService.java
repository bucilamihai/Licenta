package org.bmcmi.backend.service;

import org.bmcmi.backend.domain.User;
import org.bmcmi.backend.dto.UserDTO;
import org.bmcmi.backend.dto.UserWithTokenDTO;
import org.bmcmi.backend.dto.LoginDTO;
import org.bmcmi.backend.exception.DuplicateResourceException;
import org.bmcmi.backend.exception.ValidationException;
import org.bmcmi.backend.repository.UserRepository;
import org.bmcmi.backend.security.Jwt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private Jwt jwt;

    public UserDTO register(UserDTO userDTO) throws ValidationException, DuplicateResourceException {
        User existingUser = userRepository.findByEmail(userDTO.getEmail());
        if (existingUser != null) {
            throw new DuplicateResourceException("Email already exists!");
        }
        User user = new User(userDTO.getFirstName(), userDTO.getLastName(), userDTO.getEmail(), userDTO.getPassword());
        user = userRepository.save(user);
        return new UserDTO(user.getFirstName(), user.getLastName(), user.getEmail());
    }

    public UserWithTokenDTO login(LoginDTO loginDTO) throws ValidationException {
        User user = userRepository.findByEmail(loginDTO.getEmail());
        if (user == null) {
            throw new ValidationException("There's no user with this email!");
        }
        if(!user.getPassword().equals(loginDTO.getPassword())) {
            throw new ValidationException("Invalid password!");
        }
        String token = jwt.generateToken(user.getEmail());
        return new UserWithTokenDTO(user.getFirstName(), user.getLastName(), user.getEmail(), token);
    }
}
