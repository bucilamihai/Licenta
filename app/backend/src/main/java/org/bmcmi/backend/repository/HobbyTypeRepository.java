package org.bmcmi.backend.repository;

import org.bmcmi.backend.domain.HobbyType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HobbyTypeRepository extends JpaRepository<HobbyType, Long> {

    HobbyType findByName(String name);
}
