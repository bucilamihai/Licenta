package org.bmcmi.backend.mapper;

import org.bmcmi.backend.domain.User;
import org.bmcmi.backend.dto.UserDTO;

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
}
