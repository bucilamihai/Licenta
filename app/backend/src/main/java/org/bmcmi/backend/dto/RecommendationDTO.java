package org.bmcmi.backend.dto;

import jakarta.validation.constraints.NotNull;


public class RecommendationDTO {
    @NotNull
    private Long userId;
    @NotNull
    private Double score;

    public RecommendationDTO() {
    }

    public RecommendationDTO(Long userId, Double score) {
        this.userId = userId;
        this.score = score;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof RecommendationDTO)) return false;

        RecommendationDTO that = (RecommendationDTO) o;

        if (!userId.equals(that.userId)) return false;
        return score.equals(that.score);
    }

    @Override
    public int hashCode() {
        int result = userId.hashCode();
        result = 31 * result + score.hashCode();
        return result;
    }
    
    @Override
    public String toString() {
        return "RecommendationDTO{" +
                "userId=" + userId +
                ", score=" + score +
                '}';
    }
}
