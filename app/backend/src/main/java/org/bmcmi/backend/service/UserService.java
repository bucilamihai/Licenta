package org.bmcmi.backend.service;

import java.util.List;
import java.util.ArrayList;
import org.bmcmi.backend.dto.HobbyDTO;
import org.bmcmi.backend.dto.UserDTO;
import org.bmcmi.backend.exception.ValidationException;
import org.bmcmi.backend.mapper.UserMapper;
import org.bmcmi.backend.domain.Hobby;
import org.bmcmi.backend.domain.User;
import org.bmcmi.backend.repository.HobbyRepository;
import org.bmcmi.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private HobbyRepository hobbyRepository;

    public UserDTO getUserByEmail(String email) {
        return UserMapper.toDTO(userRepository.findByEmail(email));
    }

    public UserDTO saveUserHobbies(UserDTO userDTO) throws ValidationException {
        if (userDTO == null) {
            throw new ValidationException("User cannot be null!");
        }
        if (userDTO.getHobbies() == null || userDTO.getHobbies().isEmpty()) {
            throw new ValidationException("Hobbies list cannot be null or empty!");
        }
        User user = userRepository.findByEmail(userDTO.getEmail());
        if (user == null) {
            throw new ValidationException("There's no user with this email!");
        }
        List<Hobby> allHobbies = hobbyRepository.findAll();
        List<Hobby> userHobbies = new ArrayList<>();
        for (HobbyDTO hobbyDTO : userDTO.getHobbies()) {
            Hobby hobby = allHobbies.stream()
                    .filter(h -> h.getName().equals(hobbyDTO.getName()))
                    .findFirst()
                    .orElseThrow(() -> new ValidationException("Hobby " + hobbyDTO.getName() + " not found!"));
            userHobbies.add(hobby);
        }
        user.setHobbies(userHobbies);
        return UserMapper.toDTO(userRepository.save(user));
    }
}
