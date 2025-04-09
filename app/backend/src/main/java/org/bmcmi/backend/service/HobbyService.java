package org.bmcmi.backend.service;

import org.bmcmi.backend.domain.Hobby;
import org.bmcmi.backend.dto.HobbyDTO;
import org.bmcmi.backend.mapper.HobbyMapper;
import org.bmcmi.backend.repository.HobbyRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HobbyService {

    @Autowired
    private HobbyRepository hobbyRepository;

    public HobbyDTO save(HobbyDTO hobby) {
        return HobbyMapper.toDTO(hobbyRepository.save(HobbyMapper.toEntity(hobby)));
    }
   
    public List<HobbyDTO> findAll() {
        return HobbyMapper.toDTOList(hobbyRepository.findAll());
    }
}
