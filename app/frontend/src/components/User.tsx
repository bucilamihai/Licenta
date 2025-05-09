import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonText,
} from "@ionic/react";

interface UserProps {
  firstName: string;
  lastName: string;
  email: string;
}

const User: React.FC<UserProps> = ({ firstName, lastName, email }) => {
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
        </IonText>
      </IonCardContent>
    </IonCard>
  );
};

export default User;
