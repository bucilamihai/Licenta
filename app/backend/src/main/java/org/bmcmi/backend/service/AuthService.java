package org.bmcmi.backend.service;

import org.bmcmi.backend.domain.User;
import org.bmcmi.backend.dto.UserDTO;
import org.bmcmi.backend.validator.UserValidator;
import org.bmcmi.backend.exception.DuplicateResourceException;
import org.bmcmi.backend.exception.ValidationException;
import org.bmcmi.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserValidator userValidator;

    public UserDTO register(UserDTO userDTO) throws ValidationException, DuplicateResourceException {
        userValidator.validate(userDTO);
        User existingUser = userRepository.findByEmail(userDTO.getEmail());
        if (existingUser != null) {
            throw new DuplicateResourceException("Email already exists!");
        }
        User user = new User(userDTO.getFirstName(), userDTO.getLastName(), userDTO.getEmail(), userDTO.getPassword());
        user = userRepository.save(user);
        return new UserDTO(user.getFirstName(), user.getLastName(), user.getEmail());
    }
}
