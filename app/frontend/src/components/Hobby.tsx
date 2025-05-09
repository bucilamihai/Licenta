import { IonText, IonItem, IonCheckbox, IonContent } from "@ionic/react";
import React from "react";
import { Hobby, HobbyTypes } from "../types/hobbyTypes";

interface HobbyComponentProps {
  name: string;
  types: HobbyTypes[];
  checked: boolean;
  onChange: (name: string, checked: boolean) => void;
}

const HobbyComponent: React.FC<HobbyComponentProps> = ({
  name,
  types,
  checked,
  onChange,
}) => {
  const handleChange = (name: string, checked: boolean) => {
    onChange(name, checked);
  };

  return (
    <>
      <IonItem>
        <IonCheckbox
          slot="start"
          checked={checked}
          onIonChange={(e) => handleChange(name, e.detail.checked)}
        />
        <IonText>{name}</IonText>
      </IonItem>
      {types.map((type, index) => (
        <IonText key={index}>{type.name + " "}</IonText>
      ))}
    </>
  );
};

export default HobbyComponent;
