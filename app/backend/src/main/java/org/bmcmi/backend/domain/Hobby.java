package org.bmcmi.backend.domain;

import jakarta.persistence.*;

import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "hobbies")
public class Hobby {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String name;
    @ManyToMany
    private List<HobbyType> types;

    public Hobby() {}

    public Hobby(String name, List<HobbyType> types) {
        this.name = name;
        this.types = types;
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

    public List<HobbyType> getTypes() {
        return types;
    }

    public void setTypes(List<HobbyType> types) {
        this.types = types;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Hobby hobby = (Hobby) o;
        return Objects.equals(id, hobby.id) && Objects.equals(name, hobby.name) && Objects.equals(types, hobby.types);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, types);
    }

    @Override
    public String toString() {
        return "Hobby{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", types=" + types +
                '}';
    }
}
