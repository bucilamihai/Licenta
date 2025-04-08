package org.bmcmi.backend.dto;

import java.util.List;
import java.util.Objects;

public class UserWithTokenDTO extends UserDTO {
    private String token;

    public UserWithTokenDTO(String firstName, String lastName, String email, List<HobbyDTO> hobbies, String token) {
        super(firstName, lastName, email, hobbies);
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        UserWithTokenDTO that = (UserWithTokenDTO) o;
        return Objects.equals(token, that.token);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), token);
    }

    @Override
    public String toString() {
        return "UserWithTokenDTO{" +
                "token='" + token + '\'' +
                '}';
    }
}
