package org.bmcmi.backend.service;

import org.bmcmi.backend.domain.Hobby;
import org.bmcmi.backend.repository.HobbyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HobbyService {

    @Autowired
    private HobbyRepository hobbyRepository;

    public Hobby saveHobby(Hobby hobby) {
        return hobbyRepository.save(hobby);
    }
}
