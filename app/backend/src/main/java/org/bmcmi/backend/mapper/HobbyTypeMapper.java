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

    public static HobbyType toEntity(HobbyTypeDTO hobbyTypeDTO) {
        if (hobbyTypeDTO == null) {
            return null;
        }
        HobbyType hobbyType = new HobbyType();
        hobbyType.setName(hobbyTypeDTO.getName());
        return hobbyType;
    }

    public static List<HobbyType> toEntityList(List<HobbyTypeDTO> hobbyTypeDTOs) {
        if (hobbyTypeDTOs == null || hobbyTypeDTOs.isEmpty()) {
            return new ArrayList<>();
        }
        List<HobbyType> hobbyTypes = new ArrayList<>();
        for (HobbyTypeDTO hobbyTypeDTO: hobbyTypeDTOs) {
            hobbyTypes.add(toEntity(hobbyTypeDTO));
        }
        return hobbyTypes;
    }
}
