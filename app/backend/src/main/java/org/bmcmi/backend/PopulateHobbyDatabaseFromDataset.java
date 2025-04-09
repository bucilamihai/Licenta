package org.bmcmi.backend;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.bmcmi.backend.mapper.HobbyMapper;
import org.bmcmi.backend.mapper.HobbyTypeMapper;
import org.bmcmi.backend.repository.HobbyRepository;
import org.bmcmi.backend.repository.HobbyTypeRepository;
import org.bmcmi.backend.domain.Hobby;
import org.bmcmi.backend.domain.HobbyType;
import org.bmcmi.backend.service.HobbyService;
import org.bmcmi.backend.service.HobbyTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;
import java.util.*;

@Component
public class PopulateHobbyDatabaseFromDataset {

    @Autowired
    private HobbyTypeRepository hobbyTypeRepository;
    @Autowired
    private HobbyRepository hobbyRepository;

    public void run(String jsonFilePath) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(new File(jsonFilePath));

        for(JsonNode hobby: jsonNode) {
            String name = hobby.get("name").asText();
            List<HobbyType> hobbyTypes = new ArrayList<>();
            for(JsonNode type: hobby.get("types")) {
                String hobbyTypeName = type.asText();
                var hobbyType = hobbyTypeRepository.findByName(hobbyTypeName);
                if(hobbyType == null) {
                    hobbyTypes.add(hobbyTypeRepository.save(new HobbyType(hobbyTypeName)));
                }
                else {
                    hobbyTypes.add(hobbyType);
                }
            }
            Hobby addedHobby = hobbyRepository.save(new Hobby(name, hobbyTypes));
            System.out.println(addedHobby);
        }
    }
}
