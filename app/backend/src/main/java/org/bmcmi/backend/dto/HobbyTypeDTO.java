package org.bmcmi.backend.dto;

import java.util.Objects;

import jakarta.validation.constraints.NotBlank;

public class HobbyTypeDTO {
    @NotBlank(message = "Hobby type name cannot be blank")
    private String name;

    public HobbyTypeDTO() {
    }

    public HobbyTypeDTO(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        HobbyTypeDTO hobbyTypeDTO = (HobbyTypeDTO) o;
        return Objects.equals(name, hobbyTypeDTO.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name);
    }

    @Override
    public String toString() {
        return "HobbyTypeDTO{" +
                "name='" + name + '\'' +
                '}';
    }
}
