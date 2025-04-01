package org.bmcmi.backend.service;

import org.bmcmi.backend.domain.User;
import org.bmcmi.backend.dto.UserDTO;
import org.bmcmi.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;

    public UserDTO register(UserDTO userDTO) {
        // TODO check duplicate
        User user = new User(userDTO.getFirstName(), userDTO.getLastName(), userDTO.getEmail(), userDTO.getPassword());
        user = userRepository.save(user);
        return new UserDTO(user.getFirstName(), user.getLastName(), user.getEmail());
    }
}
