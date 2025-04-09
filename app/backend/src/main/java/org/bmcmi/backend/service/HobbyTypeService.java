package org.bmcmi.backend.service;

import org.bmcmi.backend.dto.HobbyTypeDTO;
import org.bmcmi.backend.mapper.HobbyTypeMapper;
import org.bmcmi.backend.repository.HobbyTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HobbyTypeService {

    @Autowired
    private HobbyTypeRepository hobbyTypeRepository;

    public HobbyTypeDTO save(HobbyTypeDTO hobbyType) {
        return HobbyTypeMapper.toDTO(hobbyTypeRepository.save(HobbyTypeMapper.toEntity(hobbyType)));
    }

    public HobbyTypeDTO findByName(String name) {
        return HobbyTypeMapper.toDTO(hobbyTypeRepository.findByName(name));
    }
}
