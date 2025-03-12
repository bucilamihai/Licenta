package org.bmcmi.backend.domain;

import java.util.Objects;

public class HobbyType {
    private Long id;
    private String name;

    public HobbyType(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
        HobbyType hobbyType = (HobbyType) o;
        return Objects.equals(id, hobbyType.id) && Objects.equals(name, hobbyType.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }

    @Override
    public String toString() {
        return "HobbyType{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
