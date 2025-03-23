package org.bmcmi.backend;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.bmcmi.backend.domain.Hobby;
import org.bmcmi.backend.domain.HobbyType;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class PopulateHobbyDatabaseFromDataset {

    public static void run(String jsonFilePath) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(new File(jsonFilePath));

        Set<String> hobbyTypeNames = new HashSet<>();
        List<Hobby> hobbies = new ArrayList<>();
        for(JsonNode hobby: jsonNode) {
            System.out.println(hobby);
            List<HobbyType> hobbyTypesForCurrentHobby = new ArrayList<>();
            String name = hobby.get("name").toString();
            for(JsonNode type: hobby.get("types")) {
                System.out.println(type.toString());
                HobbyType hobbyType = new HobbyType(type.toString());
                hobbyTypeNames.add(type.toString());
                hobbyTypesForCurrentHobby.add(hobbyType);
            }
            hobbies.add(new Hobby(name, hobbyTypesForCurrentHobby));
        }
        List<HobbyType> hobbyTypes = new ArrayList<>();
        hobbyTypeNames.forEach(hobbyType ->
                hobbyTypes.add(new HobbyType(hobbyType))
        );

        System.out.println(hobbies.size());
        System.out.println(hobbyTypes.size());

        hobbyTypes.forEach(hobbyType ->

        );
    }
}
