package org.bmcmi.backend.mapper;

import org.bmcmi.backend.domain.HobbyType;
import org.bmcmi.backend.dto.HobbyTypeDTO;
import java.util.ArrayList;
import java.util.List;

public class HobbyTypeMapper {
    public static HobbyTypeDTO toDTO(HobbyType hobbyType) {
        if (hobbyType == null) {
            return null;
        }
        HobbyTypeDTO hobbyTypeDTO = new HobbyTypeDTO();
        hobbyTypeDTO.setName(hobbyType.getName());
        return hobbyTypeDTO;
    }

    public static List<HobbyTypeDTO> toDTOList(List<HobbyType> hobbyTypes) {
        if (hobbyTypes == null || hobbyTypes.isEmpty()) {
            return new ArrayList<>();
        }
        List<HobbyTypeDTO> hobbyTypeDTOs = new ArrayList<>();
        for (HobbyType hobbyType: hobbyTypes) {
            hobbyTypeDTOs.add(toDTO(hobbyType));
        }
        return hobbyTypeDTOs;
    }
}
