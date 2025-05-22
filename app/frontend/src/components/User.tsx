import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonText,
} from "@ionic/react";
import { Hobby } from "../types/hobbyTypes";

interface UserProps {
  firstName: string;
  lastName: string;
  email: string;
  hobbies: string[];
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
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{firstName + " " + lastName}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonText>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Hobbies:</strong> {hobbies.join(", ")}
          </p>
          <p>
            <strong>Similarity:</strong> {similarityScore}
          </p>
        </IonText>
      </IonCardContent>
    </IonCard>
  );
};

export default User;
