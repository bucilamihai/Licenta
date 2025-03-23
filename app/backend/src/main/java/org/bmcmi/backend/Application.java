package org.bmcmi.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.ResourceLoader;


import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.file.Paths;

@SpringBootApplication
public class Application {

	public static void main(String[] args) throws IOException, URISyntaxException {
		SpringApplication.run(Application.class, args);

		URL resource = ResourceLoader.class.getClassLoader().getResource("hobbies.json");
		if (resource != null) {
			String jsonFilePath = Paths.get(resource.toURI()).toString();
			PopulateHobbyDatabaseFromDataset.run(jsonFilePath);
		}
		else {
			System.out.println("Resource not found!");
		}
	}
}
