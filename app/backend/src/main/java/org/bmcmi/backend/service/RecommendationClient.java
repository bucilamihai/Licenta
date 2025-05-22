package org.bmcmi.backend.service;

import org.bmcmi.backend.dto.RecommendationDTO;
import org.bmcmi.backend.dto.RecommendationRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.web.client.RestTemplate;
import org.springframework.stereotype.Service;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;

import java.util.List;

@Service
public class RecommendationClient {
    @Autowired
    private RestTemplate restTemplate;

    public List<RecommendationDTO> getRecommendedUsers(RecommendationRequestDTO recommendationRequestDTO) {
        String url = "http://localhost:5000/recommend";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<RecommendationRequestDTO> request = new HttpEntity<>(recommendationRequestDTO, headers);
        
        try {
            ResponseEntity<List<RecommendationDTO>> response = restTemplate.exchange(
                url,
                HttpMethod.POST,
                request,
                new ParameterizedTypeReference<List<RecommendationDTO>>() {}
            );

            List<RecommendationDTO> recommendations = response.getBody();
            return recommendations;
        } catch (Exception e) {
            throw new RuntimeException("Failed to fetch recommendations", e);
        }
    }
}
