import React from "react";
import {
  IonItem,
  IonLabel,
  IonAvatar,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";

interface ProfileBadgeProps {
  name: string;
  onLogout: () => void;
}

const ProfileBadge: React.FC<ProfileBadgeProps> = ({ name, onLogout }) => {
  const handleChange = (e: CustomEvent) => {
    if (e.detail.value === "logout") {
      onLogout();
    }
  };

  return (
    <IonItem slot="end" lines="none">
      <IonAvatar slot="start">
        <img src="https://www.gravatar.com/avatar?d=mp" alt="Profile" />
      </IonAvatar>
      <IonLabel>{name}</IonLabel>
      <IonSelect placeholder="" interface="popover" onIonChange={handleChange}>
        <IonSelectOption value="logout">Logout</IonSelectOption>
      </IonSelect>
    </IonItem>
  );
};

export default ProfileBadge;
