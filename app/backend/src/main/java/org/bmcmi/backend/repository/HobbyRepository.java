package org.bmcmi.backend.repository;
import java.util.List;
import org.bmcmi.backend.domain.Hobby;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HobbyRepository extends JpaRepository<Hobby, Long> {

    @EntityGraph(attributePaths = "types")
    List<Hobby> findAll();
}
