package org.bmcmi.backend.dto;

import jakarta.validation.constraints.NotNull;

import java.util.List;

public class UserSimilarityDTO {
    @NotNull
    private Long userId;
    @NotNull
    private List<HobbyDTO> hobbies;

    public UserSimilarityDTO() {
    }

    public UserSimilarityDTO(Long userId, List<HobbyDTO> hobbies) {
        this.userId = userId;
        this.hobbies = hobbies;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public List<HobbyDTO> getHobbies() {
        return hobbies;
    }

    public void setHobbies(List<HobbyDTO> hobbies) {
        this.hobbies = hobbies;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UserSimilarityDTO)) return false;

        UserSimilarityDTO that = (UserSimilarityDTO) o;

        if (!userId.equals(that.userId)) return false;
        return hobbies.equals(that.hobbies);
    }

    @Override
    public int hashCode() {
        int result = userId.hashCode();
        result = 31 * result + hobbies.hashCode();
        return result;
    }

    @Override
    public String toString() {
        return "UserSimilarityDTO{" +
                "userId=" + userId +
                ", hobbies=" + hobbies +
                '}';
    }
}
