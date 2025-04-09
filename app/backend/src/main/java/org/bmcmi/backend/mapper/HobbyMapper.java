package org.bmcmi.backend.mapper;

import org.bmcmi.backend.domain.Hobby;
import org.bmcmi.backend.dto.HobbyDTO;
import java.util.ArrayList;
import java.util.List;

public class HobbyMapper {
    public static HobbyDTO toDTO(Hobby hobby) {
        if (hobby == null) {
            return null;
        }
        HobbyDTO hobbyDTO = new HobbyDTO();
        hobbyDTO.setName(hobby.getName());
        hobbyDTO.setTypes(HobbyTypeMapper.toDTOList(hobby.getTypes()));
        return hobbyDTO;
    }

    public static List<HobbyDTO> toDTOList(List<Hobby> hobbies) {
        if (hobbies == null || hobbies.isEmpty()) {
            return new ArrayList<>();
        }
        List<HobbyDTO> hobbyDTOs = new ArrayList<>();
        for (Hobby hobby: hobbies) {
            hobbyDTOs.add(toDTO(hobby));
        }
        return hobbyDTOs;
    }

    public static Hobby toEntity(HobbyDTO hobbyDTO) {
        if (hobbyDTO == null) {
            return null;
        }
        Hobby hobby = new Hobby();
        hobby.setName(hobbyDTO.getName());
        hobby.setTypes(HobbyTypeMapper.toEntityList(hobbyDTO.getTypes()));
        return hobby;
    }
}
