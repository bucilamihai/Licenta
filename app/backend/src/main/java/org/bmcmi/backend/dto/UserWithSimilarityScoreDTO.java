package org.bmcmi.backend.dto;

import java.util.List;
import jakarta.validation.constraints.NotNull;

public class UserWithSimilarityScoreDTO extends UserDTO {
    @NotNull
    private Double similarityScore;

    public UserWithSimilarityScoreDTO() {
    }

    public UserWithSimilarityScoreDTO(String firstName, String lastName, String email, List<HobbyDTO> hobbies, Double similarityScore) {
        super(firstName, lastName, email, hobbies);
        this.similarityScore = similarityScore;
    }

    public Double getSimilarityScore() {
        return similarityScore;
    }

    public void setSimilarityScore(Double similarityScore) {
        this.similarityScore = similarityScore;
    }

    @Override
    public String toString() {
        return "UserWithSimilarityScoreDTO{" +
            super.toString() +
            ", similarityScore=" + similarityScore +
            '}';
    }
    
}
