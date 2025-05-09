package org.bmcmi.backend.mapper;

import org.bmcmi.backend.domain.User;
import org.bmcmi.backend.dto.UserDTO;

import java.util.List;
import java.util.ArrayList;

public class UserMapper {
    public static UserDTO toDTO(User user) {
        if (user == null) {
            return null;
        }
        UserDTO userDTO = new UserDTO();
        userDTO.setFirstName(user.getFirstName());
        userDTO.setLastName(user.getLastName());
        userDTO.setEmail(user.getEmail());
        userDTO.setHobbies(HobbyMapper.toDTOList(user.getHobbies()));
        return userDTO;
    }

    public static List<UserDTO> toDTOList(List<User> users) {
        if (users == null || users.isEmpty()) {
            return new ArrayList<>();
        }
        List<UserDTO> userDTOs = new ArrayList<>();
        for (User user : users) {
            userDTOs.add(toDTO(user));
        }
        return userDTOs;
    }
}
