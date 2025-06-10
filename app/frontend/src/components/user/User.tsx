import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonText,
} from "@ionic/react";
import { Hobby } from "../../types/hobbyTypes";

interface UserProps {
  firstName: string;
  lastName: string;
  email: string;
  hobbies: Hobby[];
  similarityScore: number;
}

const User: React.FC<UserProps> = ({
  firstName,
  lastName,
  email,
  hobbies,
  similarityScore,
}) => {
  return (
    <IonCard className="user-card">
      <IonCardHeader>
        <IonCardTitle>{firstName + " " + lastName}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="user-card-content">
        <IonText>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Hobbies:</strong>
          </p>
          <div className="hobbies-list">
            {hobbies.map((hobby, index) => (
              <div key={index} className="hobby-with-types">
                <IonText className="checkbox-text">{hobby.name}</IonText>
                {hobby.types?.length > 0 && (
                  <div className="types-container">
                    {hobby.types.map((type, i) => (
                      <IonText key={i} className="type-tag">
                        {type.name}
                      </IonText>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <p>
            <strong>Similarity:</strong>{" "}
            {(similarityScore * 100) % 1 === 0
              ? (similarityScore * 100).toFixed(0)
              : (similarityScore * 100).toFixed(2)}
            %
          </p>
        </IonText>
      </IonCardContent>
    </IonCard>
  );
};

export default User;
