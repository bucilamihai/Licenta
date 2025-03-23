package org.bmcmi.backend.service;

import org.bmcmi.backend.domain.HobbyType;
import org.bmcmi.backend.repository.HobbyTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HobbyTypeService {

    @Autowired
    private HobbyTypeRepository hobbyTypeRepository;

    public HobbyType saveHobbyType(HobbyType hobbyType) {
        return hobbyTypeRepository.save(hobbyType);
    }
}
