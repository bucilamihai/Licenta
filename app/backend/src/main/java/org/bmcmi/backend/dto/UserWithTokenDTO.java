package org.bmcmi.backend.dto;

public class UserWithTokenDTO extends UserDTO {
    private String token;

    public UserWithTokenDTO(String firstName, String lastName, String email, String token) {
        super(firstName, lastName, email);
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
    
}
