package org.bmcmi.backend.dto;

import java.util.List;
import java.util.Objects;

import jakarta.validation.constraints.NotBlank;

public class HobbyDTO {
    @NotBlank(message = "Hobby name cannot be blank")
    private String name;
    private List<HobbyTypeDTO> types;

    public HobbyDTO() {
    }

    public HobbyDTO(String name, List<HobbyTypeDTO> types) {
        this.name = name;
        this.types = types;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<HobbyTypeDTO> getTypes() {
        return types;
    }

    public void setTypes(List<HobbyTypeDTO> types) {
        this.types = types;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        HobbyDTO hobbyDTO = (HobbyDTO) o;
        return Objects.equals(name, hobbyDTO.name) && Objects.equals(types, hobbyDTO.types);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, types);
    }

    @Override
    public String toString() {
        return "HobbyDTO{" +
                "name='" + name + '\'' +
                ", types=" + types +
                '}';
    }
}
