import React from "react";
import {
  IonItem,
  IonLabel,
  IonAvatar,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import "./ProfileBadge.css";

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
    <IonItem slot="end" lines="none" className="profile-item">
      <IonAvatar slot="start" className="profile-avatar">
        <img src="https://www.gravatar.com/avatar?d=mp" alt="Profile" />
      </IonAvatar>
      <IonLabel className="profile-label">{name}</IonLabel>
      <IonSelect placeholder="" interface="popover" onIonChange={handleChange}>
        <IonSelectOption value="logout">Logout</IonSelectOption>
      </IonSelect>
    </IonItem>
  );
};

export default ProfileBadge;
