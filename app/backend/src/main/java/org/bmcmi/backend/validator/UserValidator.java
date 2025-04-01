package org.bmcmi.backend.validator;

import org.bmcmi.backend.dto.UserDTO;
import org.bmcmi.backend.exception.ValidationException;
import org.springframework.stereotype.Component;

@Component
public class UserValidator {
    public void validate(UserDTO userDTO) throws ValidationException{
        if (userDTO.getFirstName().equals("")) {
            throw new ValidationException("First name is empty!");
        }
        if (userDTO.getLastName().equals("")) {
            throw new ValidationException("Last name is empty!");
        }
        if (userDTO.getEmail().equals("")) {
            throw new ValidationException("Email is empty!");
        }
        if (!userDTO.getEmail().contains("@")) {
            throw new ValidationException("Email is invalid!");
        }
        if (userDTO.getPassword().equals("")) {
            throw new ValidationException("Password is empty!");
        }
    }
}