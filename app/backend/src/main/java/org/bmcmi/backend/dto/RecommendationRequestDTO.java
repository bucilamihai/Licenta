package org.bmcmi.backend.dto;

import jakarta.validation.constraints.NotNull;

import java.util.List;

public class RecommendationRequestDTO {
    @NotNull
    private UserSimilarityDTO targetUser;
    @NotNull
    private List<UserSimilarityDTO> otherUsers;

    public RecommendationRequestDTO() {
    }

    public RecommendationRequestDTO(UserSimilarityDTO targetUser, List<UserSimilarityDTO> otherUsers) {
        this.targetUser = targetUser;
        this.otherUsers = otherUsers;
    }

    public UserSimilarityDTO getTargetUser() {
        return targetUser;
    }

    public void setTargetUser(UserSimilarityDTO targetUser) {
        this.targetUser = targetUser;
    }

    public List<UserSimilarityDTO> getOtherUsers() {
        return otherUsers;
    }

    public void setOtherUsers(List<UserSimilarityDTO> otherUsers) {
        this.otherUsers = otherUsers;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof RecommendationRequestDTO)) return false;

        RecommendationRequestDTO that = (RecommendationRequestDTO) o;

        if (!targetUser.equals(that.targetUser)) return false;
        return otherUsers.equals(that.otherUsers);
    }

    @Override
    public int hashCode() {
        int result = targetUser.hashCode();
        result = 31 * result + otherUsers.hashCode();
        return result;
    }

    @Override
    public String toString() {
        return "RecommendationRequestDTO{" +
                "targetUser=" + targetUser +
                ", otherUsers=" + otherUsers +
                '}';
    }
}
